import numpy as np


class linUCB():

    def gen_AB(self,N, VECTOR_COUNT):
        A = []
        B = []
        for i in range(N):
            vector = np.array([[0] for i in range(VECTOR_COUNT)])
            matrix = np.identity(VECTOR_COUNT)
            B.append(vector)
            A.append(matrix)
        return A, B


    def alg(self, N, T, rewards, contexts, alpha, VECTOR_COUNT):
        # initialize A, B to identity matrix and zero vector
        A, B = self.gen_AB(N, VECTOR_COUNT)

        # for evaluation
        distribution = [0] * N
        regret = 0
        regretSteps = []

        for t in range(T):
            P = []

            # go through each arm and calculate P
            for i in range(N):
                theta_i = np.dot(np.linalg.inv(A[i]), B[i])
                stdev = np.sqrt(np.dot(np.transpose(contexts[t]), np.dot(np.linalg.inv(A[i]), contexts[t])))
                p_i = (np.dot(np.transpose(theta_i), contexts[t]) + alpha * stdev)[0]
                P.append(p_i)

            correctReward = max(rewards[t])
            # sampling for first 20 instances...?
            if t < 20:
                i = t % N
                reward = rewards[t][i]
                regret += correctReward - reward
                regretSteps.append(regret)
                distribution[i] += 1
                A[i] = A[i] + np.dot(contexts[t], np.transpose(contexts[t]))
                B[i] = B[i] + rewards[t][i] * contexts[t]
            else:
                # find max arm and compare reward
                p_max = max(P)
                max_arm = P.index(p_max)
                reward = rewards[t][max_arm]
                # Updating A, B, saving regret and updating distribution
                regret += correctReward - reward
                regretSteps.append(regret)
                distribution[max_arm] += 1
                A[max_arm] = A[max_arm] + np.dot(contexts[t], np.transpose(contexts[t]))
                B[max_arm] = B[max_arm] + reward * contexts[t]
        return distribution, regretSteps