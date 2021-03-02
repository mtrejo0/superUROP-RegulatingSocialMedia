// import freets from "./freets.json"

/**
 * @typedef Freet
 * @prop {int} id - unique ID identifying one specific freet
 * @prop {string} content - content of the freet as a string where messages are 140 characters or less
 * @prop {string} author - username
 * @prop {string} og_author = username
 * @prop {List[string]} upvotes - usernames that upvoted this freet
 * @prop {List[Freet]} refreets - refreet ids
 */

 let preFreets = [
    {
      "tweet": "Global warming report urges governments to act|BRUSSELS, Belgium (AP) - The world faces increased hunger and .. [link]"
    },
    {
      "tweet": "Fighting poverty and global warming in Africa [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming [link]"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change [link]"
    },
    {
      "tweet": "RT @sejorg: RT @JaymiHeimbuch: Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle [link]"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. [link]"
    },
    {
      "tweet": "Migratory Birds' New Climate Change Strategy: Stay Home [link]"
    },
    {
      "tweet": "Southern Africa: Competing for Limpopo Water: Climate change will bring higher temperatures to Southe... [link]"
    },
    {
      "tweet": "Global warming to impact wheat, rice production in India|Ludhiana, Apr 18 : Scarcity of water will have a serious .. [link]"
    },
    {
      "tweet": "How do we solve this global warming thing? [link]"
    },
    {
      "tweet": "Blog|A preliminary analysis suggests that natural gas could contribute far more to global warming than previously .. [link]"
    },
    {
      "tweet": "Ecotone: #Climate change from a #population perspective [link]"
    },
    {
      "tweet": "Climate change blamed as coastal whale migration dwindles •A_ Ventura County.. [link]"
    },
    {
      "tweet": "Spring storm season starting a little late this year???  Must be global warming!"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness.  CNSNews.com -  [link]"
    },
    {
      "tweet": "For #EarthDay Global warming could affect patient symptoms [link]"
    },
    {
      "tweet": "Wait here's an idea: it's natural climate change, not human induced global warming. [link]"
    },
    {
      "tweet": "EPA issues report on U.S. climate change indicators - warming is having measurable effect across ecosystems [link]"
    },
    {
      "tweet": "QUT researchers track climate change [link]"
    },
    {
      "tweet": "Global Warming: Ocean chemistry is changing faster than it has in 800,000 years: And that's because of the carbon ... [link]"
    },
    {
      "tweet": "Topography of Mountains Could Complicate Rates of Global Warming: ScienceDaily (Apr. 25, 2010) •A_ A new study concl... [link]"
    },
    {
      "tweet": "Soaring mercury; Blame it on global warming|Agartala, Apr 14 : Environmentalists have attributed the .. [link]"
    },
    {
      "tweet": "RT @WGofNYC Leader of National Indigenous Women's Org, \"Climate Change is Not Just abt the Climate, its abt R Lives\" bit.ly/9GdzRw"
    },
    {
      "tweet": "@GregMitch has there been any reporting on if the increase in sediment in upper atmospher could reduce global warming effect by reducing sun"
    },
    {
      "tweet": "effects of global warming •A_ YouTube •A_ Effects of Global Warming Stats: Back with more news for you today. It's ama... [link]"
    },
    {
      "tweet": "It's global climate change-not warming. #ac Read: www.associatedcontent.com/article/2872954/global_climate_change_not_global_warming.html"
    },
    {
      "tweet": "A preliminary analysis suggests that natural gas could contribute far more to global warming than previously thought. [link]"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change [link]"
    },
    {
      "tweet": "Eaarth: global warming is here to stay, how will we deal with it? [link]"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming [link]"
    },
    {
      "tweet": "@New_federalists  i have it on good auth tht global warming also causes toe fungus.  We R all fortunate tht thr IS no global warming! #tcot"
    },
    {
      "tweet": "Illegal war and the myth of global warming|My main campaign platform for this election will be the illegal .. [link]"
    },
    {
      "tweet": "the scientific community was scamed by global green  gov warming scam."
    },
    {
      "tweet": "I truly  Fat ASS Gore should get the Scam Artist Award of the decade with his Global Warming and Energy Credits worth close to Billion."
    },
    {
      "tweet": "40 degrees in NYC. please urinate on next liberal global warming /climate change scum you see."
    },
    {
      "tweet": "RT @virgiltexas: Hey Al Gore: see these tornadoes racing across Mississippi? So much for global \"warming\" #tornadocot #ocra #sgp #gop #ucot #tlot #p2 #tycot"
    },
    {
      "tweet": "#justinbiebersucks and global warming is a farce"
    },
    {
      "tweet": "One Stop Book Stop Confirmed! Global warming is 'settled' •A_ as a scam: WND.com Sussman's book, the ... [link]"
    },
    {
      "tweet": "Rationalists' who believe aliens exist & global warming=caused by humans, might as well believe in Jesus miracles,angels &fairies #tcot #p2"
    },
    {
      "tweet": "Air ban led by flawed computer models. Global warming come to mind? [link]"
    },
    {
      "tweet": "Proof there's no climate change. RT @jazgar 75-ft killer tsunami created in a Peruvian LAKE when a glacier fractures & falls Into the lake!"
    },
    {
      "tweet": "@OTOOLEFAN REAL science. Not Algore's climate change 'science' hacks with their man-made global warming hoax. Gore=Palin"
    },
    {
      "tweet": "30000 Anti-Global Warming Scientists Can't Be Wrong | Stranger ...: Nature Magazine, the academic journal that int... [link]"
    },
    {
      "tweet": "Global Warming Baloney: According to the experts at NASA, the difference between weather and climate is a measure ... [link]"
    },
    {
      "tweet": "computer forensics experts: are there still any idiots out there that belive global warming is true? [link]"
    },
    {
      "tweet": "Liberal Looney Toons: Global Warming Alarmist Comes Home With Artic Frost Bite: Gather.com they wont learn huh? lo... [link]"
    },
    {
      "tweet": "Despite Climategate, LEFT investing heavily in global warming hysteria as new way 2 impose nat'l & international controls on human freedom."
    },
    {
      "tweet": "Global warming you tube explanation you will enjoy #IPCC #teaparty [link]"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Memo On The White House Correspondents Dinner: If You Want To Be Green, Report On Climate Change: I'd never be on... [link]"
    },
    {
      "tweet": "Views on Global Warming Vary in Three Countries|(Angus Reid Global Monitor) - People in three countries hold .. [link]"
    },
    {
      "tweet": "SCENARIOS-Challenges to California climate change law: Source: Reuters By Peter Henderson SAN FRANCISCO, April 26 ... [link]"
    },
    {
      "tweet": "The Climate of Lindsay Graham's Support for Climate Change Legislation Has Changed: Today Lindsey Graham,... [link]"
    },
    {
      "tweet": "Arizona's immigration law, climate change legislation stalling--Which issue should Congress focus on now? Poll: [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... [link]"
    },
    {
      "tweet": "US Climate change bill stalls in Senate [link]"
    },
    {
      "tweet": "Peoples World: GRAND RAPIDS, Mich. - Opponents of climate change legislation typically argue that regulating globa... [link]"
    },
    {
      "tweet": "cnnbrk: Sen. Graham's move imperils Dems' push for immigration, climate change bills. [link]"
    },
    {
      "tweet": "Cafe Scientifique presents global warming talk, film|The April Cafe Scientifique presentation will be on the .. [link]"
    },
    {
      "tweet": "Check this video out -- The Business of Climate Change Conference 2009 [link]"
    },
    {
      "tweet": "Brilliant Tips For Valentine's Day : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... [link]"
    },
    {
      "tweet": "USA: Climate Change Policy Update - April 12, 2010  [link]"
    },
    {
      "tweet": "-- Press Releases April 2010 - Climate change negotiators agree on intensified .. [link]"
    },
    {
      "tweet": "@SooperMexican Global warming. Clearly."
    },
    {
      "tweet": "PostPartisan - Harry Reid's hapless play on immigration and climate change: [link]"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "Earth Day Live Chat with Carol Browner, Director of the Office of Energy and Climate Change Policy for the Obama Admin  [link]"
    },
    {
      "tweet": "Klein: \"A '50-50' chance that the Senate passes a climate change bill this year?\" [link]"
    },
    {
      "tweet": "@andychrism Yes. I have heard at least one person make the connection between the volcano and global warming."
    },
    {
      "tweet": "RT @redostoneage: NASAs changing Facts; Guess they thought you wouldnt notice #global warming #climate change #eco [link]"
    },
    {
      "tweet": "A religious spin on climate change.[link]"
    },
    {
      "tweet": "Environmental Groups Praise BASIC Meeting on Climate Change: Environmental groups are giving qualified praise to a... [link]"
    },
    {
      "tweet": "Only a Third of Americans Believe Global Warming is Human-Caused: By Bob Ellis on April 26th, 2010 Good news! What... [link]"
    },
    {
      "tweet": "Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of conscious actions t... [link]"
    },
    {
      "tweet": "In climate data, that \"suggests\" global warming, and then the assumption that it is our doing. [link]"
    },
    {
      "tweet": "Global Warming : Fiction or fact?: Deniers claim either that there is no global warming, or that it is not due to ... [link]"
    },
    {
      "tweet": "RT @TheBCast: The B-Cast Interview: Minnesotans for Global Warming' Fight YouTube Takedowns [link]"
    },
    {
      "tweet": "Opponents ramp up effort to delay Calif. global warming law [link]"
    },
    {
      "tweet": "How many are aware of the World People's Conference On Climate Change and Earth Rights in Bolivia #EarthWeek #Indigenous #1stNations"
    },
    {
      "tweet": "Sorry I won't be able to accept the invitation to be a panelist at Bolivia Climate Change Talks [link]"
    },
    {
      "tweet": "RT @GClugo: RT @guardianscience Climate scientist sues newspaper for 'poisoning' global warming debate [link]"
    },
    {
      "tweet": "RT @ sharifkouddous Indigenous groups from across Bolivia arriving at World People's conference on climate change [link]"
    },
    {
      "tweet": "Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes ... [link]"
    },
    {
      "tweet": "Great article  [link]"
    },
    {
      "tweet": "Cuccinelli files motion to force EPA to reopen global warming finding: Virginia Attorney General Ken Cuccinelli ha... [link]"
    },
    {
      "tweet": "Don Blankenship: Mine Safety Regulators \"As Silly as Global Warming\" [link]"
    },
    {
      "tweet": "Bring Back The Hair That You Once Had With Nanogen's Nanofibers ...: ... Climate Change, clinical trials collagen,... [link]"
    },
    {
      "tweet": "Street-corner Global-warming Counsel: Urgh, certain elements of this item in Sunday's Washington Post, •A_Five Myths... [link]"
    },
    {
      "tweet": "A religious take on climate change [link]"
    },
    {
      "tweet": "Are you ready for the climate change? PLI is with Environmental Regulation & Commercial Implications 2010: How the... [link]"
    },
    {
      "tweet": "LIVE TONIGHT: Fellow Heather Rogers joins Climate Change Expert James Hansen to discuss REAL solutions to Climate... [link]"
    },
    {
      "tweet": "Plan B: California Braces for Climate Change. [link]"
    },
    {
      "tweet": "Plants effective way of tackling global warming|Washington, Apr 30 : Plant leaves account for less than one per .. [link]"
    },
    {
      "tweet": "@angiemartinez & it's about 2 be 86 degrees out here in NYC, shiiiiiitttt, fuck glodman/sachs, Obama better get a plan 4 this global warming"
    },
    {
      "tweet": "Plants effective way of tackling global warming|Washington, Apr 30 : Plant leaves account for less than one per .. [link]"
    },
    {
      "tweet": "Climate change & sustainability will be a key driver of future economic development. Listen at [link]"
    },
    {
      "tweet": "Frederic Hague at #PEN: climate change isn't just a alarm bell. It's a whole blinking discotech"
    },
    {
      "tweet": "US Generals say: Climate Change Threatens America's Security: The Pentagon has made it well known that it consider... [link]"
    },
    {
      "tweet": "Even the generals know climate change is going to screw us. [link]"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness [link]"
    },
    {
      "tweet": "RT @disturbedwater: Climate change increases heat waves, floods: EPA [link]"
    },
    {
      "tweet": "RT @sciencedaily: Plants remain an effective way of tackling global warming [link]"
    },
    {
      "tweet": "So far in that class I have gotten into \"heated discussion\" with global climate change denier and w/ student that nothing is \"their fault."
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado [link]"
    },
    {
      "tweet": "EPA Confirms Climate IS Changing: In another display of the sea change that has occurred at the US Environmental P... [link]"
    },
    {
      "tweet": "Must See Places Before They Disappear! : Europe...[PICS]: If Global Warming Predictions prove to be true, the foll... [link]"
    },
    {
      "tweet": "RT @quixotecenter: Combating climate change: lessons from the world•A_s indigenous peoples [link]"
    },
    {
      "tweet": "@chrisdodd: I live in CT. Please support the climate bill and strong action on climate change!"
    },
    {
      "tweet": "RT @nicnunes: RT @EPSclimate: Indigenous tradition used to fight climate change [link]"
    },
    {
      "tweet": "RT @danlatorre: James Hansen/Heather Rogers, Green Gone Wrong: False Hope & Real Solutions to Climate Change - 7pm 4/30 [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists [link]"
    },
    {
      "tweet": "Climate change melts two glaciers|BILLINGS, Mont. ? Glacier National Park has lost two more of its namesake .. [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon [link]"
    },
    {
      "tweet": "RT @danielsaudade: What beautiful fall weather this morning, New York! Thanks climate change! Bleh!"
    },
    {
      "tweet": "What beautiful fall weather this morning, New York! Thanks climate change! Bleh!"
    },
    {
      "tweet": "Climate Change Threatens Japan's Cherry Blossoms | Environment ...: If you aren't familiar with the culture, Japan... [link]"
    },
    {
      "tweet": "Wed @sciam podcast: Mountain Vs. Valley Temps Stretch Apart With Climate Change [link]"
    },
    {
      "tweet": "Mountain Vs. Valley Temps Stretch Apart With Climate Change [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists [link]"
    },
    {
      "tweet": "Global warming report urges governments to act|BRUSSELS, Belgium (AP) - The world faces increased hunger and .. [link]"
    },
    {
      "tweet": "Arctic rain in April 'is sign of global warming'|The Canadian Arctic has been hit by rain in a sign that the .. [link]"
    },
    {
      "tweet": "Arctic rain in April 'is sign of global warming'|The Canadian Arctic has been hit by rain in a sign that the .. [link]"
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado [link]"
    },
    {
      "tweet": "Microbes Contribute Less to Global Warming|New Haven, Conn. .. [link]"
    },
    {
      "tweet": "Microbes Contribute Less to Global Warming|New Haven, Conn. .. [link]"
    },
    {
      "tweet": "South Asian nations to fight climate change: Foreign ministers of eight South Asian nations met in this secluded H... [link]"
    },
    {
      "tweet": "Climate change increases heat waves, floods|WASHINGTON (Reuters) - Deaths from heat waves, property damage from .. [link]"
    },
    {
      "tweet": "James Hansen & Heather Rogers - Green Gone Wrong: False Hope & Real Solutions to Climate Change - 7pm 4/30 @Demos_Org [link]"
    },
    {
      "tweet": "I LOVE FROG's LEAP!!!! Seriously. RT @grist: What climate change means for the wine industry (via @theclimatedesk) [link]"
    },
    {
      "tweet": "Report: Save the Whales and They'll Save Us from Global Warming [link]"
    },
    {
      "tweet": "RT @indiaenvportal: The contribution of organic agriculture to climate change mitigation [link]"
    },
    {
      "tweet": "Arctic Beauty in Black and White: Alaska Before the Effects of Global Warming [Slide Show]:  Toward the end of Wor... [link]"
    },
    {
      "tweet": "#EPA report documents \"very real\" impacts from #climate change in 22 of 24 indicators studied: [link]"
    },
    {
      "tweet": "#Canadian #CEOs more keen on #green than global counterparts; preparing for impacts of climate change...[link]"
    },
    {
      "tweet": "RT @carbonmarket: Ask the G8 & G20 to support #biochar. Fight climate change & food shortage! Check this HuffPo post: [link]"
    },
    {
      "tweet": "RT @christellar: Whale DooDoo could help fight #climate change? Sure! Why not!? [link]"
    },
    {
      "tweet": "Global warming science good news - Soils release less carbon than though as world warms: [link]"
    },
    {
      "tweet": "So it*s April 27th, Phoenix has 90•_Á weather & it might snow in New York today.. Hmmmm.. Global warming MUCH !"
    },
    {
      "tweet": "Higher temperature, sea level due to global warming|KUALA LUMPUR: Malaysia's average temperature has risen by 1.1 .. [link]"
    },
    {
      "tweet": "Higher temperature, sea level due to global warming|KUALA LUMPUR: Malaysia's average temperature has risen by 1.1 .. [link]"
    },
    {
      "tweet": "West Mediterranean countries unite on climate change (AFP) [link]"
    },
    {
      "tweet": "Cleaner Air Could Speed Global Warming|Hugh Pickens writes \\Scientists estimate that the US Clean Air Act has cut .. [link]"
    },
    {
      "tweet": "3,000 Businesses Create New Ad for Climate Change Action [link]"
    },
    {
      "tweet": "Person #1:\"Snow, then 65 degrees on the same day? Weather doesn't even surprise me anymore.\" Person #2:\"That's why global warming will win."
    },
    {
      "tweet": "Just heard an interesting report on report on understanding climate change/climate variability influence on human evolution and dispersal"
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado [link]"
    },
    {
      "tweet": "RT @jerryjamesstone: Alaska Before the Effects of Global Warming [pics]: [link]"
    },
    {
      "tweet": "New blog post: Mandating energy benchmarking: The next step for cities in addressing #climate change? [link]"
    },
    {
      "tweet": "RealDocWatson on global warming: Go to Antarctica and stake a claim now! It will be like Florida in a few years!"
    },
    {
      "tweet": "How much trouble does global warming mean for agriculture? Just ask the wine industry. [link]"
    },
    {
      "tweet": "Arctic Beauty in Black and White: Alaska Before the Effects of Global Warming [Slide Show] [link]"
    },
    {
      "tweet": "Climate Change: From Paris to the Alps, European Places in Peril (photos) [link]"
    },
    {
      "tweet": "How Climate Change Will Change The Electoral Map: The National Oceanic and Atmospheric Administration isn't known ... [link]"
    },
    {
      "tweet": "M Report: Cleaner Air Could Actually Intensify Global Warming: As much of the world marked Earth Day this past week, the Environmental..."
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado [link]"
    },
    {
      "tweet": "Global warming is a threat, after all|Tim Blair rounds up the latest news from the wild frontiers of global .. [link]"
    },
    {
      "tweet": "Kuna Indians Prepare For Relocation As Traditional Homes Sink Due To Climate Change [link]"
    },
    {
      "tweet": "How Global Warming Is Killing California's Wine Buzz: Dr. Kimberley Cahill presented on \"Climate Change in Califor... [link]"
    },
    {
      "tweet": "RT @uncajoe: uncajoe: PLZ RT & #Digg Climate Of Hate: The Politics Of Climate Change Denial: As H... [link]"
    },
    {
      "tweet": "GLOBAL WARMING: Ocean chemistry is changing faster than it has in 800,000 years|And that's because of the carbon .. [link]"
    },
    {
      "tweet": "GLOBAL WARMING: Ocean chemistry is changing faster than it has in 800,000 years|And that's because of the carbon .. [link]"
    },
    {
      "tweet": "Good going douche. I'm sure there is no climate change in your backass world - Graham move imperils Obama agenda - [link]"
    },
    {
      "tweet": "Ski resorts fight global warming|SALT LAKE CITY (AP) ? Ski resorts across the U.S. are using this Thanksgiving .. [link]"
    },
    {
      "tweet": "Ski resorts fight global warming|SALT LAKE CITY (AP) ? Ski resorts across the U.S. are using this Thanksgiving .. [link]"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change By Eating Insects: Birds, bats and lizards may play an important... [link]"
    },
    {
      "tweet": "RT @indiaenvportal: Make IT green: cloud computing and its contribution to climate change  [link]"
    },
    {
      "tweet": "RT @HeidiAmes: Climate change favors invasive species over indigenous ones. 30% of plants Thoreau saw are now extinct. [link]"
    },
    {
      "tweet": "scary RT @ClimateProject Climate change altering U.S. seasons: Spring 10 days early: [link]"
    },
    {
      "tweet": "RT @thompsonPLC @boliviaun Pres Evo Morales in @LATimes climate change:lessons from indigenous peoples [link]"
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado [link]"
    },
    {
      "tweet": "MediaGlobal report on special Tipping Point Earth Day event: Science and art mobilize to fight climate change [link]"
    },
    {
      "tweet": "a review of yesterday's discussions: [link]"
    },
    {
      "tweet": "Global Warming Kills Forests In Colorado [link]"
    },
    {
      "tweet": "Combating climate change: lessons from the world's indigenous peoples: When I arrived at the United Nations climat... [link]"
    },
    {
      "tweet": "Africa: Meteorology Services Gear Up for Climate Change: On the continent most vulnerable to climate c... [link]"
    },
    {
      "tweet": "GECKO 10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention ... [link]"
    },
    {
      "tweet": "China: The Key To Fixing Global Warming|With rapid expansion comes sizable environmental impact, so the world's .. [link]"
    },
    {
      "tweet": "China: The Key To Fixing Global Warming|With rapid expansion comes sizable environmental impact, so the world's .. [link]"
    },
    {
      "tweet": "Now on PBS: Going Green New York: Examining how New Yorkers are confronting climate change Check local listings [link]"
    },
    {
      "tweet": "Official NASA Report: Sun Causes Climate Change:  [link]"
    },
    {
      "tweet": "RT @TreeHugger RT @huffpostgreen well this is just crazy: Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' [link]"
    },
    {
      "tweet": "RT @sciam: Impacts of Climate Change Extend to Human Health [link]"
    },
    {
      "tweet": "Impacts of Climate Change Extend to Human Health [link]"
    },
    {
      "tweet": "The good news about the very bad news (about climate change) by Rebecca Solnit [link]"
    },
    {
      "tweet": "Alpha Phi Alpha Takes on Climate Change and Energy Efficiency - [link]"
    },
    {
      "tweet": "GECKO 10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention ... [link]"
    },
    {
      "tweet": "Natural variability does not explain global warming, climate scientists tell popular TV meteorologist [link]"
    },
    {
      "tweet": "Rebecca Solnit: 350 Degrees of Inseparability: The Good News About the Very Bad News (About Climate Change) [link]"
    },
    {
      "tweet": "Watch video: Climate change threatens sacred Tibetan mountain, including land known as Shangri-La [link]"
    },
    {
      "tweet": "African Meteorology Services Gear Up for Climate Change. (america.gov) #IRI [link]"
    },
    {
      "tweet": "Economists Say Climate Change Is Bad For Economy [link]"
    },
    {
      "tweet": "Economists Say Climate Change Is Bad For Economy [link]"
    },
    {
      "tweet": "Report: Allergy Season to Get Worse with Climate Change (Time.com) [link]"
    },
    {
      "tweet": "Don•A_t Kill Bill •A_ Save the Climate Change Accountability Act! [link]"
    },
    {
      "tweet": "RT @Oxfam #Climate change makes farmers & pastoralists in #Ethiopia increasingly vulnerable [link]"
    },
    {
      "tweet": "Denis Hayes, founder of Earth Day, compares global climate change to Irish Famine (IrishCentral) News Weather Politics [link]"
    },
    {
      "tweet": "RT @Oxfam: #Climate change makes farmers & pastoralists in #Ethiopia increasingly vulnerable [link]"
    },
    {
      "tweet": "ITS #EARTHDAY!!! Be aware of what you consume, waste, & how you treat this place. we only have 1 & as we can see global warming is in effect"
    },
    {
      "tweet": "Earth Day: Ben Verwaayen on what we're doing to curb climate change [link]"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report [link]"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report [link]"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report [link]"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report [link]"
    },
    {
      "tweet": "GECKO 10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention ... [link]"
    },
    {
      "tweet": "10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention biofuel... [link]"
    },
    {
      "tweet": "Climate change could raise cost of U.S. allergies (Reuters) [link]"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease: Bioethicists and international law experts met in Asilomar later las... [link]"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease: Bioethicists and international law experts met in Asilomar later las... [link]"
    },
    {
      "tweet": "well this is just crazy: Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' [link]"
    },
    {
      "tweet": "Military leads fight against climate change [link]"
    },
    {
      "tweet": "Military leads fight against climate change: The U.S. military, the government's largest fuel buyer, is leading th... [link]"
    },
    {
      "tweet": "10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention biofuel... [link]"
    },
    {
      "tweet": "Swedish expert says CO2 is not the main cause of global warming|Swedish climate expert Dr. Fred Goldberg has said .. [link]"
    },
    {
      "tweet": "Fighting poverty and global warming in Africa [link]"
    },
    {
      "tweet": "RT @greenforyou: Treating Climate Change as a Curable Disease | Wired Science | Wired.com #green [link]"
    },
    {
      "tweet": "[link]"
    },
    {
      "tweet": "Thursday on PBS: Going Green New York: Examining how New Yorkers are confronting climate change Check local listings [link]"
    },
    {
      "tweet": "UN •A_ Only Global Cooperation Can Prevent Runaway Climate Change, Secretary •A_: The United Nations seeks dialogue, i... [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming [link]"
    },
    {
      "tweet": "rt @democracy_now \"Most Important Event in Struggle Against Climate Change\" - Nigerian Environmentalist Nnimmo Bassey [link]"
    },
    {
      "tweet": "Military leads fight against climate change: Pew [link]"
    },
    {
      "tweet": "Report identifies 11 diseases & health issues affctd by climate change. Once u inclde mental health evrything's @ stake [link]"
    },
    {
      "tweet": "For Earth Day: Resources on coping with climate change: [link]"
    },
    {
      "tweet": "Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle [link]"
    },
    {
      "tweet": "Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle [link]"
    },
    {
      "tweet": "Fedele Bauccio: Combating Climate Change One Meal at a Time: This week, Americans will celebrate the 40th anniver... [link]"
    },
    {
      "tweet": "RT @egeemnz @mrdannyglover i support world people's conf on climate change in cochabamba,bolivia.watch live [link]"
    },
    {
      "tweet": "Barrett: better to have lots of small protocols on climate change than pushing for one comprehensive one"
    },
    {
      "tweet": "Topography of mountains could complicate rates of global warming [link]"
    },
    {
      "tweet": "RT @mrdannyglover i support the world people's conference on climate change in cochabamba, bolivia. watch live now at [link]"
    },
    {
      "tweet": "Many global issues require universal co-operation to address e.g. smallpox, ozone layer, climate change"
    },
    {
      "tweet": "RT @hereisawayjose Bolivia President on Global Warming [link]"
    },
    {
      "tweet": "RT @indiawater: Boiling Point: Containing the spill over of climate change in the Indian subcontinent - A•A_ [link]"
    },
    {
      "tweet": "No link now between Eyjafjallaj•__kull and climate change, but a warming world could trigger earthquakes, landslides... [link]"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change [link]"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change [link]"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming [link]"
    },
    {
      "tweet": "Ethiopia: Climate Change Increasing Poverty And Vulnerability [link]"
    },
    {
      "tweet": "Ethiopia: Climate Change Increasing Poverty And Vulnerability: Small-scale farmers and pastoralists i... [link]"
    },
    {
      "tweet": "RT @democracy_now: \"The Most Important Event in the Struggle Against Climate Change\" - Nigerian Environmentalist Nnimmo Bassey on •A_ [link]"
    },
    {
      "tweet": "The Most Important Event in the Struggle Against Climate Change\" - Nigerian Environmentalist Nnimmo Bassey on •A_ [link]"
    },
    {
      "tweet": "RT @sejorg: RT @JaymiHeimbuch: Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle [link]"
    },
    {
      "tweet": "RT @energysection: Backgrounder: China's major policies to tackle climate change since year 2000.. [link]"
    },
    {
      "tweet": "UW biologist links early blooms to global warming|Associated Press - April 21, 2010 6:15 AM ET STEVENS POINT, .. [link]"
    },
    {
      "tweet": "UW biologist links early blooms to global warming|Associated Press - April 21, 2010 6:15 AM ET STEVENS POINT, .. [link]"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. [link]"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. [link]"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. [link]"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry?|Melting glaciers around the world could trigger a global .. [link]"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry?|Melting glaciers around the world could trigger a global .. [link]"
    },
    {
      "tweet": "Climate Change: Could NYC Get Katrina-Like Flood in a Warmer, Wetter Future? - Sea Level Rise of 2 Feet in 70yrs [link]"
    },
    {
      "tweet": "Climate Change: Geologists Drill Into Antarctica & Find Troubling Signs 4 Ice Sheets' Future •A_  Melt Could Come FAST [link]"
    },
    {
      "tweet": "Either Capitalism dies or Mother Earth does\" Evo Morales Claims in the People's World Conference on Climate Change [link]"
    },
    {
      "tweet": "RT @rubberstamprosk: RT @MotherJones: Yet another gift from global warming: increased allergy attacks [link]"
    },
    {
      "tweet": "Africa: Time Bomb Awaiting Africa: THERE is no doubt that climate change as an environmental issue ha... [link]"
    },
    {
      "tweet": "Buying carbon offsets may ease eco-guilt but not global warming: [link]"
    },
    {
      "tweet": "RT @Qorianka: All Eyes on #Cochabamba Those alrdy suffering from global warming 'll havechancetospeakout\" [link]"
    },
    {
      "tweet": "RT @EcoSteward: This #EcoMonday, @InvasiveNotes discussion of climate change and invasive species recommended: [link]"
    },
    {
      "tweet": "Migratory Birds' New Climate Change Strategy: Stay Home [link]"
    },
    {
      "tweet": "On ocean floor populations of organisms despite little oxygen. global warming cause oxygen depletion&reduce biodiversity[link]"
    },
    {
      "tweet": "Join us for a discussion on Earth Day 4/22: Climate Change & Food Security - Irreversible Destiny? [link]"
    },
    {
      "tweet": "RT @NWF: New York City's new waterfront plan will take climate change into consideration: [link]"
    },
    {
      "tweet": "Pat Mooney on the Dangers of Geoengineering and Manipulating the Planet to Combat Climate Change [link]"
    },
    {
      "tweet": "Seasonal Allergies Getting Worse From Climate Change [link]"
    },
    {
      "tweet": "Just because I believe in global warming, peeps thinks I should believe in god instead. Why??"
    },
    {
      "tweet": "Seasonal Allergies Getting Worse From Climate Change [link]"
    },
    {
      "tweet": "Seasonal Allergies Getting Worse From Climate Change [link]"
    },
    {
      "tweet": "@Zener39 I advise everyone who thinks global warming is dead to buy oceanfront property and live there.  See ya!"
    },
    {
      "tweet": "Global Warming, Melting Ice Caps Could Help Trigger More Volcanic Eruptions [link]"
    },
    {
      "tweet": "Mary Ellen Harte and John Harte: Addressing Climate Change: Winning the War on Sustainability: At its heart, clim... [link]"
    },
    {
      "tweet": "RT @Drudge_Report: STATE DEPT. DECLARES:   'Global warming unequivocal and primarily human-induced'... [link]"
    },
    {
      "tweet": "Increasingly, corporations are concluding climate change is real. Betting on Climate Change | Wired.com [link]"
    },
    {
      "tweet": "Right on! Richard Branson's #EarthDay message 2 biz \"Get ur house in order.Fight global warming!#green #eco [link]"
    },
    {
      "tweet": "[#Meat-Wise]  Cynthia Bateman on Meat-Wise Monday: How Animal Agriculture Makes Global Warming Worse [link]"
    },
    {
      "tweet": "Global Warming, Melting Ice Caps Could Help Trigger More Volcanic Eruptions [link]"
    },
    {
      "tweet": "STATE DEPT. DECLARES:   'Global warming unequivocal and primarily human-induced'... [link]"
    },
    {
      "tweet": "Global warming, melting ice caps could trigger more volcanic eruptions: [link]"
    },
    {
      "tweet": "@LilFerret hey! We came up with all kinds of ideas for fixing global warming! Loved my Environmentalism class. *sighs*"
    },
    {
      "tweet": "An Overview of the Green Car Revolution | Going Green: The increasing awareness about the threat of global warming... [link]"
    },
    {
      "tweet": "Southern Africa: Competing for Limpopo Water: Climate change will bring higher temperatures to Southe... [link]"
    },
    {
      "tweet": "2nd eruption of Hekla in Iceland. Let's call 2010, the year the Earth struck back. \"This is for global warming and THIS is for oil spills!"
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) [link]"
    },
    {
      "tweet": "RT @EpiscopalRelief: Bishop Lane, #Episcopal Dio of #Maine: Climate change most important issue of our time - #Bangor Daily Nws [link]"
    },
    {
      "tweet": "RT @TreeHugger: In case you were wondering: What Impact Will The Volcano In Iceland Have On Climate Change? [link]"
    },
    {
      "tweet": "Cool it, global warming is bad enough without you heating things up.|In the interest of honest discussion, can we .. [link]"
    },
    {
      "tweet": "RT @InvasiveNotes: RT @RareWildlifeGuy: Climate change: Migration patterns have changed for 20 billion birds:   [link]"
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) [link]"
    },
    {
      "tweet": "Volcanic ash cloud: Global warming may trigger more volcanoes|Climate change could spark more ''hazardous'' .. [link]"
    },
    {
      "tweet": "Volcanic ash cloud: Global warming may trigger more volcanoes|Climate change could spark more ''hazardous'' .. [link]"
    },
    {
      "tweet": "Just briefed on global cooling & volcanoes via @abc But I wonder ... if it gets to the stratosphere can it slow/improve global warming??"
    },
    {
      "tweet": "Climate Change-ing your Allergies [link]"
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) [link]"
    },
    {
      "tweet": "Obama says China can't 'wait' on climate change: Sydney (AFP) April 15, 2010 - US President Barack Obama on Thursd... [link]"
    },
    {
      "tweet": "RT @beckbasher: RT @IanDavidB: RT @Shoq: CLIMATE CHANGE DENIERS: Bobby Jindal mocked volcano warnings. Read the papers lately? Start thinking for yourselves"
    },
    {
      "tweet": "RT @TEDNews: Cara Mertes at #tedxvolcano: We're all stranded this weekend. And we're getting a sneak preview of climate change. We have to adapt."
    },
    {
      "tweet": "Larry Brilliant at #TEDxVolcano: \"We have to fight for science; the single most important thing we face is climate change\" #socmedia @enviro"
    },
    {
      "tweet": "Larry Brilliant at TEDxVolcano: \"We have to fight for science; the single most important thing we face is climate change\" #socent #green"
    },
    {
      "tweet": "Damn man that ash cloud in Europe is crazy, they say due to global warming with the volcano activating,getting crazy"
    },
    {
      "tweet": "RT @TEDNews: Larry Brilliant at #tedxvolcano: Climate change is exacerbating all other crises of our age. But climate science is now under attack."
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) [link]"
    },
    {
      "tweet": "Global warming to impact wheat, rice production in India|Ludhiana, Apr 18 : Scarcity of water will have a serious .. [link]"
    },
    {
      "tweet": "Global Warming Causes Volcano Eruptions -- By: Jonah Goldberg: From Reuters: OSLO (Reuters) - A thaw of Iceland's... [link]"
    },
    {
      "tweet": "Global warming to impact wheat, rice production in India|Ludhiana, Apr 18 : Scarcity of water will have a serious .. [link]"
    },
    {
      "tweet": "RT @Climates_Change: Bring Indigenous Voices into the Conversation About Climate Change [link]"
    },
    {
      "tweet": "Climate Change & Volcanic Activity: \"Ice Cap Thaw May Awaken Icelandic Volcanoes [link]"
    },
    {
      "tweet": "•A_No Rain in the Amazon: How South America•A_s Climate Change Affects Entire Planet•A_ -Interview of Nikolas Kozloff (vid) [link]"
    },
    {
      "tweet": "Climate Change: Places To See Before They Disappear•A_The Americas (Photos) [link]"
    },
    {
      "tweet": "RT @bruces *Hmmm, they rather buried the lede here: Iceland glaciers melt from global warming, then volcanoes go off: [link]"
    },
    {
      "tweet": "Not sure if this is consensus, but: scientist warns climate change will lead to more volcano crises due to melting ice. [link]"
    },
    {
      "tweet": "Wishing I was in Cochabamba at the People's World Conference on Climate Change and the Rights of Mother Earth @boliviaun"
    },
    {
      "tweet": "I feel that already RT @organicnewyork Climate change making seasonal allergies worse. Near-record highs this Spring [link]"
    },
    {
      "tweet": "RT @organicnewyork: Climate change making seasonal allergies worse.  Near-record highs this Spring.  [link]"
    },
    {
      "tweet": "Like Icelandic volcanic eruptions disrupting your air travel? Climate change = glacier thaw = more of it. [link]"
    },
    {
      "tweet": "Cochabamba Summit Offers New Approach to Combating Climate Change [link]"
    },
    {
      "tweet": "Climate Change is Making You Sneeze: [link]"
    },
    {
      "tweet": "ENVIRONMENT: Climate of change: From something as simple as reminding computer users to power down when not workin... [link]"
    },
    {
      "tweet": "Professor?s Perspective: Reasons to be Concerned about Climate Change|Spring in Connecticut brings renewal, .. [link]"
    },
    {
      "tweet": "The need to switch to renewable energy|Climate scientists have long warned us that global warming is accelerating .. [link]"
    },
    {
      "tweet": "The need to switch to renewable energy|Climate scientists have long warned us that global warming is accelerating .. [link]"
    },
    {
      "tweet": "Climate Change culprit for \"Off-the-Charts\" Pollen Counts... [link]"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level [link]"
    },
    {
      "tweet": "Allergy Season To Worsen With Climate Change: Report: A new report released on Wednesday by the National Wildlife... [link]"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level [link]"
    },
    {
      "tweet": "Author Nikolas Kozloff on \"No Rain in the Amazon: How South America's Climate Change Affects the Entire Planet\" [link]"
    },
    {
      "tweet": "How do we solve this global warming thing? [link]"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level [link]"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level [link]"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level [link]"
    },
    {
      "tweet": "How do we solve this global warming thing? [link]"
    },
    {
      "tweet": "How do we solve this global warming thing? [link]"
    },
    {
      "tweet": "Report: Allergy Season to Get Worse with Climate Change (Time.com) [link]"
    },
    {
      "tweet": "Cute. I mention global warming and a denialist sends me a link to a Finnish newspaper article purportedly refuting it."
    },
    {
      "tweet": "Is nationalizing the energy industry necessary to fight global warming?  [link]"
    },
    {
      "tweet": "Blog|A preliminary analysis suggests that natural gas could contribute far more to global warming than previously .. [link]"
    },
    {
      "tweet": "Iceland volcano not likely to slow global warming|A vast cloud from an intensifying volcanic eruption in Iceland .. [link]"
    },
    {
      "tweet": "Iceland volcano not likely to slow global warming|A vast cloud from an intensifying volcanic eruption in Iceland .. [link]"
    },
    {
      "tweet": "reading from @time Allergies Worse Than Ever? Blame Global Warming [link]"
    },
    {
      "tweet": "The $6BN REDD+ forest conservation partnership to curb climate change leaves on env'l groups & indigenous populations. [link]"
    },
    {
      "tweet": "2/3rds of Tbaggers don't think climate change is a serious problem. As I said, they're ignorant."
    },
    {
      "tweet": "Missing' heat may affect future climate change [link]"
    },
    {
      "tweet": "Climate Change - Building a Green Economy [link]"
    },
    {
      "tweet": "Climate change threatening Glacier National Park and Montana's economy - Examiner.com [link]"
    },
    {
      "tweet": "New York: Climate change could raise cost of allergies [link]"
    },
    {
      "tweet": "Ecotone: #Climate change from a #population perspective [link]"
    },
    {
      "tweet": "Climate change blamed as coastal whale migration dwindles •A_ Ventura County.. [link]"
    },
    {
      "tweet": "Think your allergies are bad now? Wait until climate change kicks in, Michig.. [link]"
    },
    {
      "tweet": "Exclusive: Climate change could raise cost of U.S. allergies| Reuters [link]"
    },
    {
      "tweet": "Spring storm season starting a little late this year???  Must be global warming!"
    },
    {
      "tweet": "Kenya: Extreme Weather Tests Pastoralist Perceptions: The effects of climate change - such as drought... [link]"
    },
    {
      "tweet": "Climate Change is Not Just About the Climate, it is About Our Lives : TreeHugger [link]"
    },
    {
      "tweet": "All 30 Major League Baseball Teams Throw Curve to Climate Change Deniers [link]"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek [link]"
    },
    {
      "tweet": "Tip of the Day: Plant One Tree on your Birthday - Plants absorb CO2 which helps reduce Global Warming."
    },
    {
      "tweet": "United States Must Lead on Climate Change •A_ Kerry; Climate and Energy Bill Has Multiple Benefits #green [link]"
    },
    {
      "tweet": "Green:Net: How the Internet, Computing Can Fight Climate Change [link]"
    },
    {
      "tweet": "3,000 Businesses Create New Ad for Climate Change Action : CleanTechnica [link]"
    },
    {
      "tweet": "Green:Net: How the Internet, Computing Can Fight Climate Change: The Internet, software, computing... [link]"
    },
    {
      "tweet": "Leaked U.S. Document Calls For •A_Global Regime•A_ To Tackle Climate Change [link]"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek [link]"
    },
    {
      "tweet": "Reinvent Cities to Stop Climate Change [link]"
    },
    {
      "tweet": "Climate Change Continues To Melt Glacier National Park's Icons | National P.. [link]"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek [link]"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek [link]"
    },
    {
      "tweet": "Abu Dhabi faces climate change flood threat - expert - Culture & Society - Arabia.. [link]"
    },
    {
      "tweet": "China active, serious in tackling climate change, says vice president | Humani.. [link]"
    },
    {
      "tweet": "You and Us and Me - China active, serious in tackling climate change, says vic.. [link]"
    },
    {
      "tweet": "Study: SE Asia will be hit hard by climate change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Obama: China Must Act Soon on Climate Change [link]"
    },
    {
      "tweet": "If capitalism doesn•A_t end climate change, climate change will end capitalism - #degrowth [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Demand Congress take action on climate change. Pls sign the petition. [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Carbon Age is killing us. Climate change legislation now: [link]"
    },
    {
      "tweet": "Obama says in TV interview that 'we can't allow China to wait' on tackling climate change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Government Claims Global Warming May Cause Cancer [link]"
    },
    {
      "tweet": "Government Claims Global Warming May Cause Cancer [link]"
    },
    {
      "tweet": "Protect Wildlife Habitat from Climate Change: [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Plan B: California Braces for Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Nine scenarios for imminent apocalypse•A_only one is global warming [link]"
    },
    {
      "tweet": "If capitalism doesn•A_t end climate change, climate change will end capitalism - #degrowth [link]"
    },
    {
      "tweet": "DC: *FT Work for Greenpeace to STOP GLOBAL WARMING - $12-$13/hr*: Get Involved! Call now 202-595-3368 Greenpeac... [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "[link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change [link]"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness.  CNSNews.com -  [link]"
    },
    {
      "tweet": "SEC warns publically held companies to advise investors of risks of #climate change. [link]"
    },
    {
      "tweet": "Save the Whales and They'll Save Us from Global Warming [link]"
    },
    {
      "tweet": "Al Gore @ #IRA \"If a snake were coming up the aisle, there wouldn't be a long debate about what to do.\" And we dawdle about climate change."
    },
    {
      "tweet": "We should be leaders on climate change but it is always put on the back burner... [link]"
    },
    {
      "tweet": "RT @WWF_Climate    RT @CarbonDiplomacy Grapes of Wrath: How much trouble does #climate change mean for agriculture? [link]"
    },
    {
      "tweet": "Got Allergies? -- By: Jonah Goldberg: Blame global warming. From Time magazine: Allergies Worse Than Ever? Blame ... [link]"
    },
    {
      "tweet": "Climate change and Why Your Allergies Are Getting Worse [link]"
    },
    {
      "tweet": "Watch PBS 'Dimming the Sun' for more on this #NPR: Could Cleaner Air Actually Intensify Global Warming?-More at [link]"
    },
    {
      "tweet": "RT @CHIoxfamaction: People in poor countries are 20 times more likely to be affected by disasters caused by climate change than those in the developed world"
    },
    {
      "tweet": "Got Allergies? -- By: Jonah Goldberg: Blame global warming. From Time magazine: Allergies Worse Than Ever? Blame ... [link]"
    },
    {
      "tweet": "Italy: PhD Programme in Science and Management of Climate Change ...: PhD Programme in Science and Management of C... [link]"
    },
    {
      "tweet": "Oxfam: Climate change devastating rural Ethiopian communities. [link]"
    },
    {
      "tweet": "Alexi @Giannoulias believes in putting a price on global warming pollutants to spur development of alternative technology #p2 #ilsen"
    },
    {
      "tweet": "Go for the green! Olympic athletes push for climate change action -- [link]"
    },
    {
      "tweet": "DC: *FT Work for Greenpeace to STOP GLOBAL WARMING - $12-$13/hr*:Get Involved! Call now 202-595-3368 Greenpeace... [link]"
    },
    {
      "tweet": "Health effects are a big deal. RT @EPSclimate: Impacts of Climate Change Extend to Human Health [link]"
    },
    {
      "tweet": "Climate change causing change in ocean chemistry at unprecedented rate. [link]"
    },
    {
      "tweet": "Global warming can be good for [link]"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming (Time.com) [link]"
    },
    {
      "tweet": "RT @arkarthick: Bats, Birds & Lizards Can Fight #Climate Change (Wired) [link]"
    },
    {
      "tweet": "For #EarthDay Global warming could affect patient symptoms [link]"
    },
    {
      "tweet": "Just signed an #earthday petition to take action on climate change via @rockthevote: [link]"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease [link]"
    },
    {
      "tweet": "Global warming: Believe it - Vallejo Times-Herald: Your editorial on global warming (\"Keeping the debate honest,\" ... [link]"
    },
    {
      "tweet": "See how CCX Member Motorola is working to be part of the solution in addressing the climate change challenge: [link]"
    },
    {
      "tweet": "RT @manyko2: Bolivian President Blames Capitalism for Global Warming [link]"
    },
    {
      "tweet": "Interesting point re: why macro-probs like global warming are never solved: politicians need only solve immediate probs for re-election"
    },
    {
      "tweet": "RT @MotherJones: Yet another gift from global warming: increased allergy attacks [link]"
    },
    {
      "tweet": "Global Climate Change Effects on the Mid-Continent (Download to view animations) [link]"
    },
    {
      "tweet": "Are you ready for climate change, if so let your lawmakers know, how tell them sign petitions, drop a hint :)"
    },
    {
      "tweet": "UMC Expands Climate Change Policy and Carbon Emission Reduction Goals [link]"
    },
    {
      "tweet": "RT @Drudge_Report: STATE DEPT. DECLARES:   'Global warming unequivocal and primarily human-induced'... [link]"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming: Thanks to an unusually cold and snowy winter, followed by an earl... [link]"
    },
    {
      "tweet": "Ridiculous: giving a climate change denier a nature show? Keep Sarah Palin off #Discovery: [link]"
    },
    {
      "tweet": "Report: #Allergy Season to Get Worse with #Climate Change read from @time this really sucks for me: [link]"
    },
    {
      "tweet": "CODA Automotive Lauded for Innovation and Technology Efforts to Combat Climate Change and Air Pollution [link]"
    },
    {
      "tweet": "Report Claims Climate Change Is To Blame For Increase Of Allergies [link]"
    },
    {
      "tweet": "Report Claims Climate Change Is To Blame For Increase Of Allergies [link]"
    },
    {
      "tweet": "Tulips in mid-April in Chicago? Love the global warming. [link]"
    },
    {
      "tweet": "Global warming will make allergies worse for 25 million Americans, hitting those with asthma hardest: WWF (ClimateWire) #globalwarming"
    },
    {
      "tweet": "85 degrees in April eh? Hellooo global warming, nice to meet u"
    },
    {
      "tweet": "Rejoice, NY Times mentions crop wild relatives in article about adapting agriculture to climate change [link]"
    },
    {
      "tweet": "U.S. Document Calls For •A_Global Regime•A_ To Tackle Climate Change [link]"
    },
    {
      "tweet": "U.S. Document Calls For •A_Global Regime•A_ To Tackle Climate Change [link]"
    },
    {
      "tweet": "RT @highcountrynews RT @NPCA: Two more glaciers are gone from namesake nat. park due to global warming, USGS reports [link]"
    },
    {
      "tweet": "RT @solveclimate: Feeling the Heat Down Under When it Comes to Climate Change: Erwin Jackson, The Climate Institute.. [link]"
    },
    {
      "tweet": "UK leads the way! RT @10cities Schumacher College: Mobilising Democracy to Tackle Climate Change [link]"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies [link]"
    },
    {
      "tweet": "RT @EnergyBoom: Harvard and MIT Receive $2 Million to Study Health and Environmental Impacts of Climate Change [link]"
    },
    {
      "tweet": "Sen. Kerry writing in The Hill today: U.S. Must Lead on Climate Change [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "RT @BluePractice: The clothing industry started global warming in the first place. - Yvon Chouinard, Patagonia #FortuneGreen"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: [link]"
    },
    {
      "tweet": "Filmmaker Travels The Globe To Find People Fighting Climate Change ... [link]"
    },
    {
      "tweet": "Filmmaker Travels The Globe To Find People Fighting Climate Change ...: Filmmaker Travels The Globe To Find People... [link]"
    },
    {
      "tweet": "Rejoice, NY Times mentions crop wild relatives in article about adapting agriculture to climate change [link]"
    },
    {
      "tweet": "Effort to remake America's energy future and fight global warming could be harmed, or spurred, by Gulf #oilspill: [link]"
    },
    {
      "tweet": "How would catastrophic climate change change the average persons life? Think 100% unemployment every where on the planet for several decades"
    },
    {
      "tweet": "Arctic Ice Loss Accelerating Global Warming: Research: TopNews New Zealand Global warming may be getting worse tha... [link]"
    },
    {
      "tweet": "#California taking the lead on #climate change: [link]"
    },
    {
      "tweet": "Plants effective way of tackling global warming: Washington, Apr 30 (ANI): Plant leaves account for less than one ... [link]"
    },
    {
      "tweet": "Namibia: Govt to Get Active On Climate Change [link]"
    },
    {
      "tweet": "Plants effective way of tackling global warming [link]"
    },
    {
      "tweet": "Wait here's an idea: it's natural climate change, not human induced global warming. [link]"
    },
    {
      "tweet": "Just Read: US Generals say: Climate Change Threatens America's Security [link]"
    },
    {
      "tweet": "Glacial Melt From Global Warming Could Unplug Volcanos: Earthweek - A Diary of the Planet Eruptions of glacial vol... [link]"
    },
    {
      "tweet": "33 US Military Generals, Admirals: \"Climate Change is Threatening ... [link]"
    },
    {
      "tweet": "Off shore drilling threatens wildlife and contributes to climate change.  Urge Obama NOT to expand drilling!  [link]"
    },
    {
      "tweet": "AllGov - News - Global Warming Isn't All Bad•A_If You're an ...: In the frozen reaches of Canada, warmer temperature... [link]"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness: A new government report says global warmin... [link]"
    },
    {
      "tweet": "Global warming picking up steam, Obama top science adviser says: John P. Holdren, Obama's top science adviser, dis... [link]"
    },
    {
      "tweet": "RT @TheClimateDesk: Lyme disease already costs &gt; $2.5 billion a year, and climate change could make it even pricier. [link]"
    },
    {
      "tweet": "Whale Excrement To Check Global Warming: TopNews United States New researcher carried out by the Australian Antarc... [link]"
    },
    {
      "tweet": "Government Report Says Global Warming to Cause Cancer, Mental Illness: CNSNews.com By Matt Cover, Staff Writer (CN... [link]"
    },
    {
      "tweet": "EPA issues report on U.S. climate change indicators - warming is having measurable effect across ecosystems [link]"
    },
    {
      "tweet": "Report: Save the Whales and They'll Save Us from Global Warming: Need more proof that Global Warming is the proble... [link]"
    },
    {
      "tweet": "RT @fishmark: Wine grapes have become our best early-warning system for the effects of global warming. [link]"
    },
    {
      "tweet": "Wine grapes have become our best early-warning system for the effects of global warming. [link]"
    },
    {
      "tweet": "EPA Climate Change Indicators Report Shows the Evidence of Global Warming All Around Us [link]"
    },
    {
      "tweet": "EPA Climate Change Indicators Report Shows the Evidence of Global Warming All ...: Natural Resources Defense Counc... [link]"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies [link]"
    },
    {
      "tweet": "Syed Husin wanted to know the effects of global warming to Malaysia. [link]"
    },
    {
      "tweet": "Cleaner Air Could Speed Global Warming [link]"
    },
    {
      "tweet": "Whale Poo Fights Global Warming: By ROB MAYEDA and LORI PREUITT Star Trek IV: The Voyage Home had many convinced t... [link]"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies [link]"
    },
    {
      "tweet": "New facts support global warming case: Recent letter-writer Charles Kesner is either out-of-touch with reliable ne... [link]"
    },
    {
      "tweet": "QUT researchers track climate change [link]"
    },
    {
      "tweet": "Study: Climate Change Threatens Your Health, Too [link]"
    },
    {
      "tweet": "RT @panteraonca07: Slideshow of Alaska Before the Effects of Global Warming [link]"
    },
    {
      "tweet": "In Vino Veritas The delicate wine grape has become our best early-warning system for the effects of global warming. [link]"
    },
    {
      "tweet": "Conservation International:: Give a gift that helps prevent climate change, provides habitat for endangered specie... [link]"
    },
    {
      "tweet": "Conservation International:: Give a gift that helps prevent climate change, provides habitat for endangered specie... [link]"
    },
    {
      "tweet": "Climate change is real and climate change has consequences for all of us. [link]"
    },
    {
      "tweet": "Global Warming Contributes To Rapidly Increased Ocean Acidification: The US National Research Council warned last ... [link]"
    },
    {
      "tweet": "Global warming threatens Ca Mau Province: CA MAU •A_ The southernmost province of Ca Mau was among localities most v... [link]"
    },
    {
      "tweet": "Global warming means local storming [link]"
    },
    {
      "tweet": "Could Cleaner Air Actually Intensify Global Warming?: by NPR Staff As much of the world marked Earth Day this past w... [link]"
    },
    {
      "tweet": "Renewable Energy Advances •A_ Ocean Saltiness Shows Global Warming ...: After pulling data from 1.6 million salinity... [link]"
    },
    {
      "tweet": "The Key to Fixing Global Warming China | Magazine: It's late November 2009, and US energy secretary Steven Chu is ... [link]"
    },
    {
      "tweet": "Global Warming: Ocean chemistry is changing faster than it has in 800,000 years: And that's because of the carbon ... [link]"
    },
    {
      "tweet": "Topography of Mountains Could Complicate Rates of Global Warming: ScienceDaily (Apr. 25, 2010) •A_ A new study concl... [link]"
    },
    {
      "tweet": "Soaring mercury; Blame it on global warming|Agartala, Apr 14 : Environmentalists have attributed the .. [link]"
    },
    {
      "tweet": "Africa: Monitoring a Changing Climate: The gathering environmental crisis presented by global warming... [link]"
    },
    {
      "tweet": "The volcanic ash was bad for planes...but should help reduce global warming.  [link]"
    },
    {
      "tweet": "Ocean currents still strong despite global warming|Researchers at NASA have discovered that the ocean currents .. [link]"
    },
    {
      "tweet": "Ocean currents still strong despite global warming|Researchers at NASA have discovered that the ocean currents .. [link]"
    },
    {
      "tweet": "Long-distance journeys out of fashion? Global warming may be causing evolutionary changes in bird migration (sourc... [link]"
    },
    {
      "tweet": "Funniest 'conservative' comment of the day: \"Climate change is due to increased heat from the Earth's core."
    },
    {
      "tweet": "Scientists Say Global Warming Affects Marine Life: In Narragansett Bay, Rhode Island, winter flounder no longer re... [link]"
    },
    {
      "tweet": "Redding architect Theimer: Global warming doubters \"stupid\": James Theimer, known locally for his environmentally ... [link]"
    },
    {
      "tweet": "Indonesia Tree Program Looks to Reduce Global Warming: Planting trees is one way to help maintain the natural pres... [link]"
    },
    {
      "tweet": "Earth Day report: climate change is endangering our health: [link]"
    },
    {
      "tweet": "Global Climate Change, Not Global Warming @ [link]"
    },
    {
      "tweet": "#CUBeyond: Wlliam Lau says climate change is happening and we must deal with it, no matter what is causing it.  #ChapmanU"
    },
    {
      "tweet": "Chew's focus is on the ways global warming is causing the redistribution of plant and animal species. [link]"
    },
    {
      "tweet": "Military Leads Fight Against Climate Change: Pew [link]"
    },
    {
      "tweet": "Royal Society Stunner: Hazardous geosphere activity and global warming linked: Periods of exceptional climate chan... [link]"
    },
    {
      "tweet": "Fighting poverty and global warming in Africa: by Marc Gunther on 04/21/2010 22:10 0 comments , 0 views Rarely do ... [link]"
    },
    {
      "tweet": "Military leads fight against climate change: Pew | Reuters\" [link]"
    },
    {
      "tweet": "Spring Comes 10 Days Earlier In U.S. Due To Climate Change: [link]"
    },
    {
      "tweet": "NASA Launches Climate Change Supercomputer: [link]"
    },
    {
      "tweet": "@drgrist's excellent take on why even environmental economics limits our climate change policy options [link] #climate #agw"
    },
    {
      "tweet": "The Key to Fixing Global Warming? China [link]"
    },
    {
      "tweet": "@ClimateWise2 is here tonight at 7:30 to discuss what climate change is doing to women, children, families & communities [link]"
    },
    {
      "tweet": "Baby boomers must tackle global warming while they can: By Anonymous Baby boomers have enjoyed peace and the large... [link]"
    },
    {
      "tweet": "#Ocean Saltiness Shows #Global Warming Is Intensifying Our Water Cycle : TreeHugger [link]"
    },
    {
      "tweet": "Daniel C. Esty: Climate Change Plan B: Bringing down greenhouse gas emissions with a \"cap and trade\" system of tr... [link]"
    },
    {
      "tweet": "Military leads fight against climate change: Pew: WASHINGTON (Reuters) - The U.S. military, the government's large... [link]"
    },
    {
      "tweet": "Global warming implicated in shortened bird migration | Science Codex: Global warming implicated in shortened bird... [link]"
    },
    {
      "tweet": "NASA•A_s Gift to Earth: A Climate Change Supercomputer [link]"
    },
    {
      "tweet": "Daniel C. Esty: Climate Change Plan B: Bringing down greenhouse gas emissions with a \"cap and trade\" system of tr... [link]"
    },
    {
      "tweet": "UW biologist links early blooms to global warming [link]"
    },
    {
      "tweet": "UW biologist links early blooms to global warming: A researcher says plants in central Wisconsin are flowering ear... [link]"
    },
    {
      "tweet": "Bolivian President Blames Capitalism for Global Warming: Environment News Service COCHABAMBA, Bolivia, April 20, 2... [link]"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change: Global Geopolitics Net Sites / IPS In•__s Acosta... [link]"
    },
    {
      "tweet": "An Explosive Idea: are volcanoes the cure for global warming? [link]"
    },
    {
      "tweet": "RT @WGofNYC Leader of National Indigenous Women's Org, \"Climate Change is Not Just abt the Climate, its abt R Lives\" bit.ly/9GdzRw"
    },
    {
      "tweet": "See where @climate change is happening RT @ClimateCentral 8-part series on cities and climate change for BBC Worldnews: [link]"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming: Christian Science Monitor From a scheme to c... [link]"
    },
    {
      "tweet": "Buying carbon offsets may ease eco-guilt but not global warming [link]"
    },
    {
      "tweet": "Pat Mooney on the Dangers of Geoengineering and Manipulating the Planet to Combat Climate Change  - [link]"
    },
    {
      "tweet": "Icelandic Volcano's Impact on Global Warming, Green Transportation, Bird ...: By Alisa Opar NASA satellites captur... [link]"
    },
    {
      "tweet": "Birds in southern England suffer from global warming [link]"
    },
    {
      "tweet": "Video: Getting Focus Back on Climate Change [link]"
    },
    {
      "tweet": "Volcanic ash cloud: Global warming may trigger more volcanoes [link]"
    },
    {
      "tweet": "Global warming blamed for European air traffic collapse: The FINANCIAL -- Global warming, which altered European w... [link]"
    },
    {
      "tweet": "Republicans, why do you oppose global warming environmental ...: Really it makes no sense to oppose efforts to red... [link]"
    },
    {
      "tweet": "Safe, secure nuclear energy must be part of climate change solution [link]"
    },
    {
      "tweet": "Global Warming•A_s Eyjafjoell Volcano Triggers More Global Warming: [link]"
    },
    {
      "tweet": "STATE DEPT. DECLARES: 'Global warming unequivocal and primarily human-induced'... [link]"
    },
    {
      "tweet": "5th US Climate Action Report Released: \"Global Warming is Unequivocal\" [link]"
    },
    {
      "tweet": "Global Warming, Melting Ice Caps Could Help Trigger More Volcanic Eruptions... [link]"
    },
    {
      "tweet": "Photo: We dare someone tell us that climate change isn't real. [link]"
    },
    {
      "tweet": "5th US Climate Action Report Released: \"Global Warming is Unequivocal\": Treehugger by Brian Merchant, Brooklyn, Ne... [link]"
    },
    {
      "tweet": "Since Man can't, Mother Nature to end global warming with volcanoes & earthquakes. #Hekla #Icelandic"
    },
    {
      "tweet": "Blame the volcano trouble on sun and global warming [link]"
    },
    {
      "tweet": "Some hot health reminders on global warming: The debate is over; nearly all scientists (and politicians) agree tha... [link]"
    },
    {
      "tweet": "Since Man can't, Mother Earth to end global warming with volcanoes & earthquakes. #ashtag #Hekla #Icelandic"
    },
    {
      "tweet": "RT @kate_sheppard: Joe Romm (@climateprogress): \"Climate change is a BFD, if I can quote Joe Biden."
    },
    {
      "tweet": "Reinvent Cities to Stop Climate Change | Green Living Ideas  [link]"
    },
    {
      "tweet": "All 30 Major League Baseball Teams Throw Curve to Climate Change Deniers : CleanTechnica\" [link]"
    },
    {
      "tweet": "CST: A Lack Of Air Pollution Is Bad For Global Warming? •A_ Pirate's ... [link]"
    },
    {
      "tweet": "RT@greenforyou An estimated 20 billion birds changed their migrating habits in last few decades due to global warming [link]"
    },
    {
      "tweet": "Global warming melts ice and this can influence magmatic systems,\" he told Reuters. [link]"
    },
    {
      "tweet": "@GregMitch has there been any reporting on if the increase in sediment in upper atmospher could reduce global warming effect by reducing sun"
    },
    {
      "tweet": "Volcanic ash is a good thing. Blocks the sun's heat. Lessens air travel. Bye bye global warming. #fb"
    },
    {
      "tweet": "Why cleaner air could speed global warming | Air Pollution News [link]"
    },
    {
      "tweet": "Leaked U.S. Document Calls For \"Global Regime\" To Tackle Climate Change  [link]"
    },
    {
      "tweet": "Why cleaner air could speed global warming: Aerosol pollution, which is now on the downswing, has helped keep the ... [link]"
    },
    {
      "tweet": "Why cleaner air could speed global warming: Aerosol pollution, which is now on the downswing, has helped keep the ... [link]"
    },
    {
      "tweet": "Why cleaner air could speed global warming [link]"
    },
    {
      "tweet": "Why cleaner air could speed global warming [link]"
    },
    {
      "tweet": "Why cleaner air could speed global warming [link]"
    },
    {
      "tweet": "effects of global warming •A_ YouTube •A_ Effects of Global Warming Stats: Back with more news for you today. It's ama... [link]"
    },
    {
      "tweet": "It's global climate change-not warming. #ac Read: www.associatedcontent.com/article/2872954/global_climate_change_not_global_warming.html"
    },
    {
      "tweet": "Global Warming Today •A_ Blog Archive •A_ How can we tackle global ...: The only way at present is to reduce greenhous... [link]"
    },
    {
      "tweet": "CODA Automotive Lauded for Efforts to Combat Climate Change & Air Pollution [link]"
    },
    {
      "tweet": "Ocean Saltiness Getting Weird •A_ Blame Global Warming: IndyPosted (blog) A study conducted by scientists at Austral... [link]"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change [link]"
    },
    {
      "tweet": "A preliminary analysis suggests that natural gas could contribute far more to global warming than previously thought. [link]"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change [link]"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level [link]"
    },
    {
      "tweet": "USC prof Dan Mazmanian:  money needed for adaption to climate change in the state is a pressing social justice issue.#USC #SPPD #Keston"
    },
    {
      "tweet": "Iceland volcano unlikely to slow global warming: scientists [link]"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change [link]"
    },
    {
      "tweet": "Iceland volcano unlikely to slow global warming: scientists: AFP PARIS •A_ Big volcanic eruptions have had a cooling... [link]"
    },
    {
      "tweet": "Global warming may make cricket bats history: London: Cricket is facing a bizarre threat following a European Unio... [link]"
    },
    {
      "tweet": "volcano unlikely to slow global warming: By Richard Ingham, AFPApril 16, 2010 4:44 AM An EUMESAT satellite image s... [link]"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change [link]"
    },
    {
      "tweet": "Fifty years ago I was teaching and preaching about global warming and its catastrophic effects on our climate. [link]"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change [link]"
    },
    {
      "tweet": "President Barack Obama says the world cannot wait for China to commit to tackling global warming. [link]"
    },
    {
      "tweet": "Obama: China must act on climate change [link]"
    },
    {
      "tweet": "Renewable energy possible solution to global warming: By Milton Takei | University alumnus, 1992 In dealing with t... [link]"
    },
    {
      "tweet": "effects of global warming •A_ YouTube •A_ Impact of Climate Change on ...: There are many predicted effects for the en... [link]"
    },
    {
      "tweet": "Plz hlp fight Global warming- read my post abt effects of Global Warming [link]"
    },
    {
      "tweet": "UN to battle poverty, global warming .:. newkerala.com Online News ...: UN to battle poverty, global warming - New... [link]"
    },
    {
      "tweet": "Eaarth: global warming is here to stay, how will we deal with it? [link]"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming [link]"
    },
    {
      "tweet": "Germany is an important partner for us in trade as well as in the fight against climate change."
    },
    {
      "tweet": "Global Warming Likely to Worsen Allergies in Maine: That's according to a new report released today by the Nationa... [link]"
    },
    {
      "tweet": "SubTropolis, U.S.A. -  A creative solution to global warming 100 feet below ground. [link]"
    },
    {
      "tweet": "Global warming or unemployment...choose your own disaster?: By Max Jacobs Companies producing greenhouse gases in ... [link]"
    },
    {
      "tweet": "This one explained the extreme cold weather we have experienced this winter as just one more example of global warming. [link]"
    },
    {
      "tweet": "@Climate change Giant #Glacier Fall in Peru Causes Deadly Tsunami : [link]"
    },
    {
      "tweet": "Green' cement made from rice may help tackle global warming|London, April 13 : With the increasing rise in the .. [link]"
    },
    {
      "tweet": "Can you feel the shift in consciousness? -- 3K Businesses Create New Ad for Climate Change Action - [link]"
    },
    {
      "tweet": "RT @SolarInsure: 3,000 Businesses Create New Ad for Climate Change Action : CleanTechnica [link]"
    },
    {
      "tweet": "Global warming threatens Armenia by 2C higher temperature [link]"
    },
    {
      "tweet": "Climate change deadly? Scientists suspect global warming may be contributing to strange deaths of Arctic birds. [link]"
    },
    {
      "tweet": "Green' cement made from rice may help tackle global warming: London, April 13 (ANI): With the increasing rise in ... [link]"
    },
    {
      "tweet": "•A_Green•A_ cement made from rice may help tackle global warming [link]"
    },
    {
      "tweet": "Global Warming 'at Point of No Return': Global warming has reached the point of no return, a study published in th... [link]"
    },
    {
      "tweet": "World-Famous Places Endangered by Global Warming: If climatologists' predictions of global warming are right, some... [link]"
    },
    {
      "tweet": "Green' cement made from rice may help tackle global warming|London, April 13 : With the increasing rise in the .. [link]"
    },
    {
      "tweet": "Latest weapon in global warming fight •A_ 'green' cement made from rice: By FIONA MACLEOD AND RUAIRI CREANEY SCIENTI... [link]"
    },
    {
      "tweet": "Latest weapon in global warming fight •A_ 'green' cement made from rice [link]"
    },
    {
      "tweet": "Coping with Global Warming: How to Save on Utility Bills: By Dealman(view all posts by Dealman) Actually, this isn... [link]"
    },
    {
      "tweet": "Climate Change - Building a Green Economy - Paul Krugman - NYTimes.com\" [link]"
    },
    {
      "tweet": "Clean Technology Industry Forecast is Strong Due to Global Warming Concerns ...: April 12, 2010 (MMD Newswire) -- ... [link]"
    },
    {
      "tweet": "Porous materials to reduce the climate change [link]"
    },
    {
      "tweet": "celebrate Earth Day by signing Declaration of Energy Independence to show the Senate we demand action on climate change [link]"
    },
    {
      "tweet": "Top U.S. Vacation spots becoming endangered. Landscape threatened by global warming, mining, weather, environmental hazard & population"
    },
    {
      "tweet": "..leaders are failing to address the gravest threat our world has ever faced...\" \"Pressuring politicians on climate change is not working."
    },
    {
      "tweet": "Glacier National Park Loses Two More Glaciers Due To Global Warming: Thaindian.com By Meena Kar Montana, Apr 11, (... [link]"
    },
    {
      "tweet": "Plants can effectively tackle global warming|Don't have SiliconIndia account? Sign up Forgot your password? Reset .. [link]"
    },
    {
      "tweet": "Plants can effectively tackle global warming|Don't have SiliconIndia account? Sign up Forgot your password? Reset .. [link]"
    },
    {
      "tweet": "Climate change affects subterranean ecosystems|Changes above the ground, such as a higher concentration of carbon .. [link]"
    },
    {
      "tweet": "RT @RyanNewYork Gulf Coast spill better give Climate Change Legislation some momentum. It's a bigger tragedy than we're even aware of yet."
    },
    {
      "tweet": "Spill + coal mine tragedy = need for alt energy! RT @RyanNewYork: Gulf Coast spill better give Climate Change Legislation some momentum."
    },
    {
      "tweet": "Gulf Coast spill better give Climate Change Legislation some momentum. It's a bigger tragedy than we're even aware of yet. #P2"
    },
    {
      "tweet": "LIVE NOW: Green Gone Wrong: False Hope and Real Solutions to Climate Change [link]"
    },
    {
      "tweet": "@New_federalists  i have it on good auth tht global warming also causes toe fungus.  We R all fortunate tht thr IS no global warming! #tcot"
    },
    {
      "tweet": "Illegal war and the myth of global warming|My main campaign platform for this election will be the illegal .. [link]"
    },
    {
      "tweet": "It is in the 30's what happened to Spring? Global warming is for those that care to read about and not live it. The coldest Winter ever. FU"
    },
    {
      "tweet": "the scientific community was scamed by global green  gov warming scam."
    },
    {
      "tweet": "I truly  Fat ASS Gore should get the Scam Artist Award of the decade with his Global Warming and Energy Credits worth close to Billion."
    },
    {
      "tweet": "hide the decline is the global warming nut jobs current policy its all a epic scam they are lying to the world #climategate #tcot #p2"
    },
    {
      "tweet": "40 degrees in NYC. please urinate on next liberal global warming /climate change scum you see."
    },
    {
      "tweet": "RT @virgiltexas: Hey Al Gore: see these tornadoes racing across Mississippi? So much for global \"warming\" #tornadocot #ocra #sgp #gop #ucot #tlot #p2 #tycot"
    },
    {
      "tweet": "#justinbiebersucks and global warming is a farce"
    },
    {
      "tweet": "One Stop Book Stop Confirmed! Global warming is 'settled' •A_ as a scam: WND.com Sussman's book, the ... [link]"
    },
    {
      "tweet": "BOYCOTT SIEMENS for buying \"global warming\"/\"climate change\" in their advertisements. #tcot #sgp #teaparty"
    },
    {
      "tweet": "climate change scam #3wordslibshate"
    },
    {
      "tweet": "Global Warming? Vostok Antarctica sits at -100F -- with windchills to -142F ...  [link]"
    },
    {
      "tweet": "Global Warming?  Vostok Antarctica sits at -100F -- with lows forecast to -110F... [link]"
    },
    {
      "tweet": "RT @Climate scam another warmist has to be rescued from Arctic cold Global warming activist 'transported ... [link]"
    },
    {
      "tweet": "Why isn't @algore upset with the volcano for causing global warming? #climategate"
    },
    {
      "tweet": "Rationalists' who believe aliens exist & global warming=caused by humans, might as well believe in Jesus miracles,angels &fairies #tcot #p2"
    },
    {
      "tweet": "@psiryu Hmmm so global warming is a fraud!"
    },
    {
      "tweet": "Air ban led by flawed computer models. Global warming come to mind? [link]"
    },
    {
      "tweet": "Monster Chiller Horror Global Warming! [link]"
    },
    {
      "tweet": "Proof there's no climate change. RT @jazgar 75-ft killer tsunami created in a Peruvian LAKE when a glacier fractures & falls Into the lake!"
    },
    {
      "tweet": "COW FARTS EXONERATED FROM GLOBAL WARMING [link]"
    },
    {
      "tweet": "COW FARTS EXONERATED FROM GLOBAL WARMING [link]"
    },
    {
      "tweet": "@OTOOLEFAN REAL science. Not Algore's climate change 'science' hacks with their man-made global warming hoax. Gore=Palin"
    },
    {
      "tweet": "30000 Anti-Global Warming Scientists Can't Be Wrong | Stranger ...: Nature Magazine, the academic journal that int... [link]"
    },
    {
      "tweet": "@junerenner ,get a headache when grandson tells how argued w/teachers about Global warming being big hoax. One threatened to flunk him!"
    },
    {
      "tweet": "@foxandfriends global warming is like the goldman execs... full of sh*t"
    },
    {
      "tweet": "Global Warming Baloney: According to the experts at NASA, the difference between weather and climate is a measure ... [link]"
    },
    {
      "tweet": "Your Voice: The fraud of global warming: by Tim Michael Case, Tracy Since the early 1970s, our public school syste... [link]"
    },
    {
      "tweet": "computer forensics experts: are there still any idiots out there that belive global warming is true? [link]"
    },
    {
      "tweet": "Liberal Looney Toons: Global Warming Alarmist Comes Home With Artic Frost Bite: Gather.com they wont learn huh? lo... [link]"
    },
    {
      "tweet": "Dear Global Warming people: It is 52 degrees in S. CA on 4/23. Heat on. [contents of this message are copyrighted and property of author.]"
    },
    {
      "tweet": "I am freezing still in Southern California. Global warming fanatics, come visit me. Wear a hat, gloves and down jacket."
    },
    {
      "tweet": "@Cubachi you are so on target, Bullshit is even better than the climate change hoax & Gore /Climate change is bullshit #leadersdebate #fact"
    },
    {
      "tweet": "Climate Change Fraud - The Scandal of Solar Power in Spain [link]"
    },
    {
      "tweet": "Climate Change Fraud - Global Warming, Ethanol, DDT and ... [link]"
    },
    {
      "tweet": "Despite Climategate, LEFT investing heavily in global warming hysteria as new way 2 impose nat'l & international controls on human freedom."
    },
    {
      "tweet": "RT @ClimateDepot: ''Obama does a 3-minute Earth Day video; fails to mention the global warming hoax'' [link]"
    },
    {
      "tweet": "#ALMS Let me politely suggest that I DO NOT WATCH MOTORSPORTS TO BE LECTURED ON IMAGINARY GLOBAL WARMING! #nascar"
    },
    {
      "tweet": "Someone go tell the Climate Change crowd to go hang, after they read this: [link]"
    },
    {
      "tweet": "Gagnon, like most liberals you have been duped by the global warming, socialist propaganda. [link]"
    },
    {
      "tweet": "I believe that Global Warming is an international conspiracy perpetrated by GE in order to sell more air conditioners"
    },
    {
      "tweet": "UN process in danger unless world agrees on climate change - Telegraph [link]"
    },
    {
      "tweet": "Does Virginia's Governor Believe In Global Warming? [link]"
    },
    {
      "tweet": "@SenatorReid Calls @GrahamBlog's Bluff On Climate Change: 'It's Up To You\" ( [link]"
    },
    {
      "tweet": "Reid To Graham On Climate Change: 'It's Up To You' [link]"
    },
    {
      "tweet": "What do you know about climate change? Test your knowledge with the following 10 questions @change [link]"
    },
    {
      "tweet": "RT @sponsorpitch: Shell's Climate Change #Sponsorship Causes Blogosphere Meltdown [link]"
    },
    {
      "tweet": "What do you know about climate change? Test your knowledge with the following 10 questions @change [link]"
    },
    {
      "tweet": "Global warming you tube explanation you will enjoy #IPCC #teaparty [link]"
    },
    {
      "tweet": "Funny how timely oil spill in Gulf and new AZ law have pushed climate change bill away and drawn forth immigration reform."
    },
    {
      "tweet": "Announcement: SPR Principal Jeff Gracer to Moderate Panel on Climate Change at New York City•A_ [link]"
    },
    {
      "tweet": "Tom Switzer: Australia's Changing Climate-Change Climate [link]"
    },
    {
      "tweet": "Kindling Controversy: Hansen, McKibben, Revkin & Lomborg of climate change gurus at The Met in NYC 8pm Thurs 4/29/10 [link]"
    },
    {
      "tweet": "I uploaded a YouTube video -- MaximsNewsNetwork: ENERGY & CLIMATE CHANGE: U.N.'s BAN KI-MOON (UNTV) [link]"
    },
    {
      "tweet": "Climate change you tube animation you will like #IPCC #gop [link]"
    },
    {
      "tweet": "RT @tweetdrudge Reid set to move on climate change bill -- before immigration... [link]"
    },
    {
      "tweet": "Asking Your Own Man 100 Questions To Discover The Answers You Want ...: ... Climate Change, clinical trials collag... [link]"
    },
    {
      "tweet": "Attending the Secretary-General•A_s press conference to present the report of his Advisory Group on Energy and Climate Change"
    },
    {
      "tweet": "Meeting Dr. Sultan Al-Jaber, Assistant Foreign Minister, United Arab Emirates and Special Envoy for Energy and Climate Change"
    },
    {
      "tweet": "Should You Removal That Mole? : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art,... [link]"
    },
    {
      "tweet": "Making remarks at launching of report by his Advisory Group on Energy and Climate Change (AGECC) •A_ Energy for Development..."
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Discussions on Indigenous Women and Climate Change at the UN [link]"
    },
    {
      "tweet": "Politico story on the state of play in DC re climate change and #immigration [link]"
    },
    {
      "tweet": "The choice that won•A_t change the world, and the one that might [link]"
    },
    {
      "tweet": "At new school climate change panel, heritage's David Kreutzer just asked audience to wait 3 mins before throwing water bottles at him"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Memo On The White House Correspondents Dinner: If You Want To Be Green, Report On Climate Change: I'd never be on... [link]"
    },
    {
      "tweet": "Geological Society of America Position Statement on Climate Change  [link]"
    },
    {
      "tweet": "Global warming dirt-carbon peril models are wrong, say boffins|Greenhouse experiments show reduced greenhouse .. [link]"
    },
    {
      "tweet": "CLIMATE CHANGE: No Deal in Sight, Say Leading Economies of the South: CAPE TOWN, Apr 26 (IPS) - Environment minist... [link]"
    },
    {
      "tweet": "Senior Technical Advisor: Communities and Climate Change, Environment and Development, New York @UNjobs #jobs [link]"
    },
    {
      "tweet": "Survey gauges opinions about global warming|Dan Reiland UW-Eau Claire students displayed posters Monday afternoon .. [link]"
    },
    {
      "tweet": "Survey gauges opinions about global warming|Dan Reiland UW-Eau Claire students displayed posters Monday afternoon .. [link]"
    },
    {
      "tweet": "Views on Global Warming Vary in Three Countries|(Angus Reid Global Monitor) - People in three countries hold .. [link]"
    },
    {
      "tweet": "Views on Global Warming Vary in Three Countries|(Angus Reid Global Monitor) - People in three countries hold .. [link]"
    },
    {
      "tweet": "The choice that won•A_t change the world, and the one that might [link]"
    },
    {
      "tweet": "Connecticut buys into global warming, but some Senate candidates do not|One might assume that, regardless of .. [link]"
    },
    {
      "tweet": "Connecticut buys into global warming, but some Senate candidates do not|One might assume that, regardless of .. [link]"
    },
    {
      "tweet": "RT @NROcorner: Legislative Steamrolling -- By: Kathryn Jean Lopez: April 26 (Bloomberg) -- Immigration and climate-change legisl... [link]"
    },
    {
      "tweet": "(AFX UK Focus) 2010-04-26 20:41 SCENARIOS-Challenges to California climate change law: By Peter Henderson [link]"
    },
    {
      "tweet": "True RT @drgrist: Larry Shapiro is astute Why immigration reform is getting more traction than climate change in Senate [link]"
    },
    {
      "tweet": "SCENARIOS-Challenges to California climate change law: Source: Reuters By Peter Henderson SAN FRANCISCO, April 26 ... [link]"
    },
    {
      "tweet": "The Climate of Lindsay Graham's Support for Climate Change Legislation Has Changed: Today Lindsey Graham,... [link]"
    },
    {
      "tweet": "Arizona's immigration law, climate change legislation stalling--Which issue should Congress focus on now? Poll: [link]"
    },
    {
      "tweet": "Which is next on Capitol Hill: #immigration or #climate change? [link]"
    },
    {
      "tweet": "#pr By noon: FoxNews.com/Gene Koprowski seeks experts re: audit of IPCC climate-change report: [link]"
    },
    {
      "tweet": "Climate change bill stalls amid epic immigration sortie: [link]"
    },
    {
      "tweet": "CNN: Graham's exit puts climate change bill in limbo: A climate-change bill that was scheduled to be unveiled at a... [link]"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo [link]"
    },
    {
      "tweet": "Legislative Steamrolling -- By: Kathryn Jean Lopez: April 26 (Bloomberg) -- Immigration and climate-change legisl... [link]"
    },
    {
      "tweet": "Watching &gt;&gt; RT @genosworld Sting and his wife talk to CNN about climate change. [link]"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo [link]"
    },
    {
      "tweet": "reflections of a rebel: CLIMATE CHANGE AND SOCIAL JUSTICE TOWARDS ...: The more familiar image of green capitalism... [link]"
    },
    {
      "tweet": "Legislative Steamrolling -- By: Kathryn Jean Lopez: April 26 (Bloomberg) -- Immigration and climate-change legisl... [link]"
    },
    {
      "tweet": "Legislative Steamrolling -- By: Kathryn Jean Lopez:  April 26 (Bloomberg) -- Immigration and climate-change legisl... [link]"
    },
    {
      "tweet": "cnnbrk: Graham's exit from talks puts climate change bill in limbo [link]"
    },
    {
      "tweet": "Climate scientists get hate mail, abuse|E-mails brimming accusing them of fabricating global warming data flood .. [link]"
    },
    {
      "tweet": "Why the GOP's Graham Put the Kibosh on a Climate Bill: Even the industry-friendly Senate global-warming legislatio... [link]"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo: A climate-change bill that was scheduled to be unveiled at a news... [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo [link]"
    },
    {
      "tweet": "Obama Politics: Pushing Immigration Reform, Sidelining Climate Change: About - News & Issues (blog) Who regularly ... [link]"
    },
    {
      "tweet": "Tea Party With a Difference: ... climate change really hits will come with instructions in Chinese. Go Green Tea ... [link]"
    },
    {
      "tweet": "US Climate change bill stalls in Senate [link]"
    },
    {
      "tweet": "Gawker: Logic Report: Lindsey Graham's Climate Change Bill Flip-Flop [Polidicks] [link]"
    },
    {
      "tweet": "Logic Report: Lindsey Graham's Climate Change Bill Flip-Flop [Polidicks] [link]"
    },
    {
      "tweet": "Passing Any Legislation At All Will Kill the Climate Change Bill: [link]"
    },
    {
      "tweet": "Portfolio Lighting Delivers Broad Assortment Lighting For The Home ...: ... Climate Change, clinical trials collag... [link]"
    },
    {
      "tweet": "New delay in Senate climate change bill [link]"
    },
    {
      "tweet": "The Sunday Word: Energy: Lawmakers decided to delay the unveiling of their bipartisan climate change and energy b... [link]"
    },
    {
      "tweet": "Decision Time •A_ UK Election & Climate Change [link]"
    },
    {
      "tweet": "Peoples World: GRAND RAPIDS, Mich. - Opponents of climate change legislation typically argue that regulating globa... [link]"
    },
    {
      "tweet": "Graham Threatens to Pull Energy Bill Sponsorship: Senator Lindsey Graham, a central architect of a climate change... [link]"
    },
    {
      "tweet": "cnnbrk: Sen. Graham's move imperils Dems' push for immigration, climate change bills. [link]"
    },
    {
      "tweet": "Cafe Scientifique presents global warming talk, film|The April Cafe Scientifique presentation will be on the .. [link]"
    },
    {
      "tweet": "Survey Finds US Doesn't Give a ***** About Climate Change: A new survey conducted by HSBC finds that in cities aro... [link]"
    },
    {
      "tweet": "Cafe Scientifique presents global warming talk, film|The April Cafe Scientifique presentation will be on the .. [link]"
    },
    {
      "tweet": "Best Core Exercise: Plank/Back Extension - Gaiam Blog: affirmation burn-calories change climate change diet energy... [link]"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart|Earth Day is over. Or is it? Thousands of conscious actions took place .. [link]"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart [link]"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart|Earth Day is over. Or is it? Thousands of conscious actions took place .. [link]"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of consc... [link]"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of consc... [link]"
    },
    {
      "tweet": "Survey Finds US Doesn't Give a Shit About Climate Change: [link]"
    },
    {
      "tweet": "RT @Public_Citizen here's where to start the talk about climate change [link]"
    },
    {
      "tweet": "Webb Touts Global Warming Department|LITTLE ROCK - The Arkansas lawmaker who authored legislation that created .. [link]"
    },
    {
      "tweet": "Webb Touts Global Warming Department|LITTLE ROCK - The Arkansas lawmaker who authored legislation that created .. [link]"
    },
    {
      "tweet": "Climate Bill Drops on Monday -- Or Not: The long-awaited Senate climate change bill being brokered by Senators Ker... [link]"
    },
    {
      "tweet": "RT @TribecaFilmFest: RT @jpatricof: @jessicaalba and sebastian copeland at premiere of climate of change right now #tribeca"
    },
    {
      "tweet": "Climatologists, Meteorologists Divided on Global Warming [link]"
    },
    {
      "tweet": "Climate science's chinese whispers: The books that separate global warming fact from fiction|The culture shock of .. [link]"
    },
    {
      "tweet": "Don Blankenship Calls Efforts On Mine Safety Regulation 'As Silly As Global Warming' [link]"
    },
    {
      "tweet": "RT @MediaFixBlog: If you missed report on U.S. news groups working together on climate change project.  [link]"
    },
    {
      "tweet": "Sarah Palin On Climate Change [link]"
    },
    {
      "tweet": "Don Blankenship Calls Efforts On Mine Safety Regulation 'As Silly As Global Warming': At his Labor Day anti-union... [link]"
    },
    {
      "tweet": "#Global warming vs Shangri-la? [link]"
    },
    {
      "tweet": "CLIMATE: Top coal execs to testify before global warming panel [link]"
    },
    {
      "tweet": "WaterSISWEB: Integrated Regional Water Management Climate Change Document Clearinghouse [link]"
    },
    {
      "tweet": "CLIMATE: Top coal execs to testify before global warming panel [link]"
    },
    {
      "tweet": "In with Immigration, Out with Climate Change? [link]"
    },
    {
      "tweet": "2009: year in which sceptics stole running on climate change|Australian business could show our politicians the .. [link]"
    },
    {
      "tweet": "Check this video out -- The Business of Climate Change Conference 2009 [link]"
    },
    {
      "tweet": "RT @yvettethijm: RT @boingboing Video: Larry Brilliant on the volcano and climate change - Boing Boing [link]"
    },
    {
      "tweet": "Earth Day at 40: The Politics Finally Erupt: [link]"
    },
    {
      "tweet": "Paul Rogat Loeb: \"'Soul Of A Citizen': Jesus And Climate Change - The Journey Of Evangelical Leader Rich Cizik\" - [link]"
    },
    {
      "tweet": "Climate-Change Bill Avoids ?Cap-and-Trade? Tag in U.S. Senate|April 22 (Bloomberg) -- When Tea Party activists .. [link]"
    },
    {
      "tweet": "CLIMATE: Top coal execs to testify before global warming panel [link]"
    },
    {
      "tweet": "RT @dbiello: US climate change negotiating plans revealed! [link]"
    },
    {
      "tweet": "Overheard: from Carol Browner, Assistant to the President for Energy and Climate Change - She mentioned that... [link]"
    },
    {
      "tweet": "Maria Rodale: Does Climate Change Exist, and Does It Even Matter?: It amazes me, really, how many different views... [link]"
    },
    {
      "tweet": "Maria Rodale: Does Climate Change Exist, and Does It Even Matter?: It amazes me, really, how many different views... [link]"
    },
    {
      "tweet": "Stay Glued to Your Fitness Plan : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip ar... [link]"
    },
    {
      "tweet": "Media(ted) discourses and climate change: a focus on political subjectivity and (dis) engagement [link]"
    },
    {
      "tweet": "RT @grittv: American media isn't putting out much on Climate Change. That's why you should watch GRIT's take![link]"
    },
    {
      "tweet": "American media isn't putting out much on Climate Change. That's why you should watch GRIT's take![link]"
    },
    {
      "tweet": "RT @pwire: Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... [link]"
    },
    {
      "tweet": "RT @pwire: Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... [link]"
    },
    {
      "tweet": "RT @pwire: Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... [link]"
    },
    {
      "tweet": "Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... [link]"
    },
    {
      "tweet": "Superb Valentine's Day Gifts For Your Kitchen : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, cli... [link]"
    },
    {
      "tweet": "John Fugelsang, Climate Change, and Coal Goes Shopping: Gun advocates rallied this week in support of their rig... [link]"
    },
    {
      "tweet": "@hawkeviper so, you are a 'No' then on global warming then and the results of that..."
    },
    {
      "tweet": "Climate change reporting project involves Slate,Wired,PBS,CIR,Atlantic & Mother Jones [link]"
    },
    {
      "tweet": "Skirmishes renewed at U.N. global warming conference|Climate talks nearly ground to a halt before they began in .. [link]"
    },
    {
      "tweet": "Skirmishes renewed at U.N. global warming conference|Climate talks nearly ground to a halt before they began in .. [link]"
    },
    {
      "tweet": "Simple Tips for Shopping for Grooved Tungsten Ring Online : A ...: ... Climate Change, clinical trials collagen, c... [link]"
    },
    {
      "tweet": "Labour Policies : Environment, Climate Change and Energy Policy: Labour's environment, energy and climate change p... [link]"
    },
    {
      "tweet": "U.N. Climate Panel Gets an 'F': An audit of the United Nations' landmark climate change report gave 21 of the 44 c... [link]"
    },
    {
      "tweet": "Climate change and our identity [link]"
    },
    {
      "tweet": "Climate change and our identity [link]"
    },
    {
      "tweet": "Brilliant Tips For Valentine's Day : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... [link]"
    },
    {
      "tweet": "Via Kevin Drum: Capitalism and Climate Change: Over at the Climate Desk, Clive Thompson writes that althoug... [link]"
    },
    {
      "tweet": "RT @rabbleca What is the People's World Referendum on Climate Change? [link]"
    },
    {
      "tweet": "Climate change's 'evil twin' [link]"
    },
    {
      "tweet": "RT @WHY_RU_Talking: Itz cold -_- {We could put our bodies together n start global warming}"
    },
    {
      "tweet": "Retro Video Games Consoles For Valentine's Day Gifts : A Screaming •A_O•A_: ... Climate Change, clinical trials collag... [link]"
    },
    {
      "tweet": "Will the Iceland Volcano Change the Climate?: While volcanoes can cause changes to Earth's climate, recent eruptio... [link]"
    },
    {
      "tweet": "Tips for Adopting A Canine : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, cl... [link]"
    },
    {
      "tweet": "Podcast:unrest in Thailand; Iran's nuclear summit;DC climate change conference ; SASC debates ballistic missile defense [link]"
    },
    {
      "tweet": "Internet Dating : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clothes, clot... [link]"
    },
    {
      "tweet": "As I said only days ago, we will start seeing much more tempered reporting on \"global warming\", starting w the @nytimes [link]"
    },
    {
      "tweet": "Food Lovers Fat Loss System Review : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... [link]"
    },
    {
      "tweet": "Watchdog backs DfT climate change advert|A clever television advert claiming car pollution is the worst .. [link]"
    },
    {
      "tweet": "global warming play decide; info & discussion game|This is a structured discussion in three stages on global .. [link]"
    },
    {
      "tweet": "[link]"
    },
    {
      "tweet": "The Tension Set Wedding Rings Can Be Found Styles to Fit Every ...: ... Climate Change, clinical trials collagen, ... [link]"
    },
    {
      "tweet": "State climate change regulations face opposition •A_ New Mexico ...: Turner argued that the issue should be addresse... [link]"
    },
    {
      "tweet": "The Advantages Of Using An Elliptical Cross Trainer Before You Go ...: ... Climate Change, clinical trials collage... [link]"
    },
    {
      "tweet": "M-Edge Touring Kindle Sleeve , Yellow | Global Warming Advices [link]"
    },
    {
      "tweet": "The Advantages of Owning a Commercial-Grade Treadmill : A ...: ... Climate Change, clinical trials collagen, clini... [link]"
    },
    {
      "tweet": "Selecting The Proper Music For The Perfect Valentine's Day : A ...: ... Climate Change, clinical trials collagen, ... [link]"
    },
    {
      "tweet": "Key Lessons for Married women looking for Married : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen,... [link]"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? [link]"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? [link]"
    },
    {
      "tweet": "How People Are Often finding themselves Waiting In A Long Line To ...: ... Climate Change, clinical trials collage... [link]"
    },
    {
      "tweet": "Basic Rules To Think About When Beginning A Advertising Campaign ...: ... Climate Change, clinical trials collagen... [link]"
    },
    {
      "tweet": "Drilling and Climate Change [link]"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? [link]"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? [link]"
    },
    {
      "tweet": "Gather Info on How to Whiten Teeth : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... [link]"
    },
    {
      "tweet": "How To Get Your Ex Back : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, cloth... [link]"
    },
    {
      "tweet": "Ask the ministers: climate change and energy election debate | Politics | guar.. [link]"
    },
    {
      "tweet": "USA: Climate Change Policy Update - April 12, 2010  [link]"
    },
    {
      "tweet": "Questions on Climate Change? Stormfront Has an Answer [link]"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  [link]"
    },
    {
      "tweet": "USA: Climate Change Policy Update - April 12, 2010  [link]"
    },
    {
      "tweet": "RT @cosmicjester: Best propaganda poster ever. [link]"
    },
    {
      "tweet": "#update garp_erp: Energy News: Energy headlines: Police quiz climate change sceptics •A_ FT BP to press on with [link]"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  [link]"
    },
    {
      "tweet": "USA: SEC Issues Guidance on Climate Change Disclosures [link]"
    },
    {
      "tweet": "UN agrees to host two more rounds of climate change talks before summit in Mexico [link]"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  [link]"
    },
    {
      "tweet": "Issue 2 of WIREs Climate Change now available FREE online! [link]"
    },
    {
      "tweet": "Crunch time for climate change bill - The Hill's E2-Wire [link]"
    },
    {
      "tweet": "Senators prepare compromise climate change bill - Yahoo! News [link]"
    },
    {
      "tweet": "-- Press Releases April 2010 - Climate change negotiators agree on intensified .. [link]"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  [link]"
    },
    {
      "tweet": "@SooperMexican Global warming. Clearly."
    },
    {
      "tweet": "@sensible Tornados, Global warming, hurricanes."
    },
    {
      "tweet": "Is climate change a moral issue? What would God say? - Green House - USATODAY.com [link]"
    },
    {
      "tweet": "Aid News - Copenhagen brought change of climate in Sino-India ties: Ramesh [link]"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  [link]"
    },
    {
      "tweet": "NPR's Science Friday and Global Warming: [link]"
    },
    {
      "tweet": "Visualizations | Climate Change [link]"
    },
    {
      "tweet": "@jiminhofe to Address Global Warming Skeptics at 4th ICCC. [link] #agw #tcot #tlot #climate"
    },
    {
      "tweet": "GREEN: Climate Change Wyss Fellow - Sierra Nevada Alliance:  [link]"
    },
    {
      "tweet": "GREEN: Climate Change Wyss Fellow:  [link]"
    },
    {
      "tweet": "Ezra Klein - Sen. Lindsey Graham: 'I care equally about immigration and climate change': [link]"
    },
    {
      "tweet": "RT @PDofRSD: Climate scientist sues newspaper for 'poisoning' global warming debate | Environment | guardian.co.uk [link]"
    },
    {
      "tweet": "PostPartisan - Harry Reid's hapless play on immigration and climate change: [link]"
    },
    {
      "tweet": "garp_erp: Energy News: Energy headlines: Police quiz climate change sceptics - FT BP to press on with Canada o... [link]"
    },
    {
      "tweet": "I never smile, because when I do the sun comes out. 2 combat global warming, I often refrain from having fun. My smile can brighten the day."
    },
    {
      "tweet": "Ways The Difficult Economy has Helped people Focus on Family and ...: ... Climate Change, clinical trials collagen... [link]"
    },
    {
      "tweet": "Climate Change Bill In Limbo Following White House Push For Immigration Reform: The bill is not dead but it•A_s in E... [link]"
    },
    {
      "tweet": "Get Your Dunkin: Workout plan, Tenther, The Simpsons, Macbeth, Wine country Climate Change, Census 2010 [link]"
    },
    {
      "tweet": ".@PollySigh1 & it has made Frank Luntz talking points on climate change impotent as now the focus is on immigration reform! great job!"
    },
    {
      "tweet": "Lindsey is out.  Only GOP Sponsor Jumps Ship From Obama's Climate Change Bill [link]"
    },
    {
      "tweet": "Veteran #climate activist asks for name change for Earth [link]"
    },
    {
      "tweet": "Trigger Numbers Online Roulette Scam : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, cl... [link]"
    },
    {
      "tweet": "Climate scientist sues newspaper for •A_poisoning•A_ global warming debate [link]"
    },
    {
      "tweet": "Climate scientist sues newspaper for •A_poisoning•A_ global warming debate [link]"
    },
    {
      "tweet": "Climate scientist sues newspaper for •A_poisoning•A_ global warming debate [link]"
    },
    {
      "tweet": "POLITICO: Graham's own private climate change - Glenn Thrush - Graham's own private #climatechange: [link]"
    },
    {
      "tweet": "Democratic leader moves immigration bill ahead of climate change as a Senate priority: WASHINGTON (AP) •A_ Senate Ma... [link]"
    },
    {
      "tweet": "Keeping A Migraine At Bay : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clo... [link]"
    },
    {
      "tweet": "RT @GClugo: RT @guardianscience Climate scientist sues newspaper for 'poisoning' global warming debate [link]"
    },
    {
      "tweet": "RT @guardianeco #Climate scientist sues newspaper for 'poisoning' global warming debate [link]"
    },
    {
      "tweet": "In a half hour, Carol Browner, Assistant to the President for Energy & Climate Change, will answer questions live: [link]"
    },
    {
      "tweet": "Earth Day Live Chat with Carol Browner, Director of the Office of Energy and Climate Change Policy for the Obama Admin  [link]"
    },
    {
      "tweet": "Can you hedge against climate change? Read this [link]"
    },
    {
      "tweet": "how did i wind up on lists called \"global-warming-frauds,\"douchebags-nuff-said,\" and \"dilusional [sic] -ho-s-that-hate\"?"
    },
    {
      "tweet": "Global Warming Fact or Myth? (Daily Green) [link]"
    },
    {
      "tweet": "Kerry releases #climate change law this week. How does it affect the sector? find out by reading The Week In Green Energy [link]"
    },
    {
      "tweet": "Klein: \"A '50-50' chance that the Senate passes a climate change bill this year?\" [link]"
    },
    {
      "tweet": "@andychrism Here's a link to the volcano &lt;--&gt; global warming story [link]"
    },
    {
      "tweet": "@andychrism Yes. I have heard at least one person make the connection between the volcano and global warming."
    },
    {
      "tweet": "@brysown1 I think it will be \"The Man that controls global warming is racist\"."
    },
    {
      "tweet": "What I Leaned This Week: Global warming, famine, nuclear annihilation - no threat to humanity is more dangerous than the Double Down."
    },
    {
      "tweet": "Calif. Trucking Assn. joins fight to suspend state's climate-change law. (E&ENewsPM) #climatechange"
    },
    {
      "tweet": "@owillis Birthers. Global warming deniers. Young-earth Creationists. And Neil Armstrong complains about Obama•A_s NASA budget."
    },
    {
      "tweet": "RT @redostoneage: NASAs changing Facts; Guess they thought you wouldnt notice #global warming #climate change #eco [link]"
    },
    {
      "tweet": "Hill @E2Wire:Crunch time for climate change bill - [link]"
    },
    {
      "tweet": "Will Supreme Court nomination bump climate change debate into next year? [link]"
    },
    {
      "tweet": "RT @latimesgreen: A religious take on climate change [link]"
    },
    {
      "tweet": "Great Tom Toles #climate change cartoon: [link]"
    },
    {
      "tweet": "A religious take on climate change [link]"
    },
    {
      "tweet": "One Hot Topic: K-12 Web Sites About Global Warming: By Gail Junion-Metz -- School Library Journal, 5/1/2010 This s... [link]"
    },
    {
      "tweet": "A religious spin on climate change.[link]"
    },
    {
      "tweet": "Los Angeles: A religious spin on climate change [link]"
    },
    {
      "tweet": "RT @ZachBehrens RT @KQED_CapNotes Initiative campaign to suspend global warming law AB32 reports $973K raised... $500k from oil comp Valero"
    },
    {
      "tweet": "Panel Debates Business Cost Of Calif. Global Warming Law|SAN DIEGO ? Panelists debated the economic merits of .. [link]"
    },
    {
      "tweet": "@madlyv really, wtf?!  global warming?  : )"
    },
    {
      "tweet": "Does Northrop Bob Grumman McDonnell Believe in Global Warming?: By David Swanson (about the author) Page 1 of 1 pa... [link]"
    },
    {
      "tweet": "SAARC plans expert group on climate change [link]"
    },
    {
      "tweet": "Libertarians may debate the merits of global warming, but not the worthiness of an emissions market. [link]"
    },
    {
      "tweet": "Hide the Decline' Global Warming Video Creator Says Mann Backlash Effort to ...: If you try to sweep your problem... [link]"
    },
    {
      "tweet": "Some Advices On How To Avoid Your Partner Getting Involved In ...: ... Climate Change, clinical trials collagen, c... [link]"
    },
    {
      "tweet": "Industry Insiders: Michaelangelo L'Acqua, Global Warming: When Michaelangelo L'Acqua first entered the high stakes... [link]"
    },
    {
      "tweet": "Saving the Hollywood sign; ballot initiatives; Iceland•A_s volcano and global warming [link]"
    },
    {
      "tweet": "Saving the Hollywood sign; ballot initiatives; Iceland•A_s volcano and global warming [link]"
    },
    {
      "tweet": "Saving the Hollywood sign; ballot initiatives; Iceland•A_s volcano and global warming [link]"
    },
    {
      "tweet": "Letter: Global warming in God's hands •A_ Knoxville News Sentinel  [link]"
    },
    {
      "tweet": "Long-term fortune favours the brave on climate change [link]"
    },
    {
      "tweet": "Dedication And Persistence Necessary For Homegrown Hydroponics : A ...: ... Climate Change, clinical trials collag... [link]"
    },
    {
      "tweet": "news break story  -  Reid set to move on climate change bill ahead of immigration [link]"
    },
    {
      "tweet": "Global warming retreat •A_ except for California's government: The state air board in its wisdom continues to advanc... [link]"
    },
    {
      "tweet": "Only 12% of Americans Are Very Worried About Global Warming. E.P.A. Makes Its Case on Climate Change - [link]"
    },
    {
      "tweet": "Immigration reform and climate change: A tale of two issues in the Senate [link]"
    },
    {
      "tweet": "Environmental Groups Praise BASIC Meeting on Climate Change: Environmental groups are giving qualified praise to a... [link]"
    },
    {
      "tweet": "Environmental Groups Praise BASIC Meeting on Climate Change: Environmental groups are giving qualified praise to a... [link]"
    },
    {
      "tweet": "(UIY) Kerry: Action on climate bill remains likely (AP): AP - The Democratic sponsor of climate change legisl... [link]"
    },
    {
      "tweet": "Immigration reform and climate change: A tale of two issues in the Senate [link]"
    },
    {
      "tweet": "GLOBAL WARMING: Is James Cameron a Genocidal Maniac?: by John Nolte Either James Cameron is a genocidal maniac or ... [link]"
    },
    {
      "tweet": "Brooke Shields annoyed with 'global warming doesn't exist' reports [link]"
    },
    {
      "tweet": "Q: Should we focus our energy on climate change before immigration? (via @ztf) #GOODasks"
    },
    {
      "tweet": "A Tale of 2 Issues: Why immigration reform is getting more traction than climate change in Senate [link]"
    },
    {
      "tweet": "RT @GOODfeed: Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate [link]"
    },
    {
      "tweet": "Climbing Out Of The Dark: Social Justice Replaces Global Warming!: Climate change hanging on by it's fingernails. ... [link]"
    },
    {
      "tweet": "I'd like to know who gives a rat's ass if immigration comes before climate change. DO YOUR JOBS regardless of ORDER. #childrenactbetter"
    },
    {
      "tweet": "Brooke Shields Upset With Reports That Global Warming Doesn't Exist [link]"
    },
    {
      "tweet": "That Actual Provide Utilizing Automatic Global trade Swapping : A ...: ... Climate Change, clinical trials collage... [link]"
    },
    {
      "tweet": "Brooke Shields Upset With Reports that Global Warming Doesn't Exist: FOXNews By Hollie McKay The subject of global... [link]"
    },
    {
      "tweet": "Environmental Economics: Note to Environmentalists Part II: The climate change bill that was supposed to be unveil... [link]"
    },
    {
      "tweet": "Environmental Economics: Note to Environmentalists Part II: The climate change bill that was supposed to be unveil... [link]"
    },
    {
      "tweet": "Only a Third of Americans Believe Global Warming is Human-Caused: By Bob Ellis on April 26th, 2010 Good news! What... [link]"
    },
    {
      "tweet": "Podcast. Climate Change, Immigration Reform and California [link]"
    },
    {
      "tweet": "Geoff Jenkins, chairman of the United Nations Intergovernmental Panel on Climate Change [link]"
    },
    {
      "tweet": "Retuning Of Love : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clothes, clo... [link]"
    },
    {
      "tweet": "Fox News Watch Cites Media Research Center Study on Global Warming Coverage [link]"
    },
    {
      "tweet": "Fox News Watch Cites Media Research Center Study on Global Warming Coverage: By Kyle Drennen (Bio | Archive) On Sa... [link]"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo (@cnn) [link]"
    },
    {
      "tweet": "Soccer fever hits Namibia on global warming - by Carlos Kambaekwa: New Era OMUTHIYA - The chairman of the NFA Oshi... [link]"
    },
    {
      "tweet": "via @cnnbrk cnnbrk: Graham's exit from talks puts climate change bill in limbo [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unvei... [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... [link]"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo [link]"
    },
    {
      "tweet": "ADVENTURES IN EPISTEMIC OPENING: Mark Levin vs Jim Manzi on Global Warming: The fancy phrase •A_epistemic closure•A_ m... [link]"
    },
    {
      "tweet": "Senate dispute puts climate legislation on hold|Associated Press WASHINGTON ? Long-awaited climate change .. [link]"
    },
    {
      "tweet": "Global warming: The Oxburgh Inquiry was an offer he couldn't refuse.: When Lord Oxburgh was requested to chair the... [link]"
    },
    {
      "tweet": "Gawker: Logic Report: Lindsey Graham's Climate Change Bill Flip-Flop [Polidicks]: •A_ [link]"
    },
    {
      "tweet": "A Simple Guide To Head Shaving : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art... [link]"
    },
    {
      "tweet": "(UIY) Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was ... [link]"
    },
    {
      "tweet": "(UIY) Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was ... [link]"
    },
    {
      "tweet": "Climate Bill Placed on Hold Over Senate Dispute|WASHINGTON -- Long-awaited climate change legislation was put on .. [link]"
    },
    {
      "tweet": "Americans Dont Give A **** About Global Warming, Survey Says: Retail investors from cities other than in the US fe... [link]"
    },
    {
      "tweet": "Will Indigenous People Be Included in UN Climate Change Policies? [link]"
    },
    {
      "tweet": "via @cnnbrk cnnbrk: Sen. Graham's move imperils Dems' push for immigration, climate change bills. [link]"
    },
    {
      "tweet": "THR: Climate bill gives polluter and nuclear breaks - WASHINGTON (Reuters) - The U.S. climate change bill expected ... [link]"
    },
    {
      "tweet": "Global Warming: The New Ombudsman? | Eurasia Review: By Sonali Huria for IPCS Global warming has purportedly put t... [link]"
    },
    {
      "tweet": "@WordtotheBrides Just read your blog! And 1) Awesome 2) Who holds a climate change conference in Cancun?"
    },
    {
      "tweet": "Brochure on Global Warming 1992: Brochure on Global Warming 1992 added by: neham 0 comments [link]"
    },
    {
      "tweet": "Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of conscious actions t... [link]"
    },
    {
      "tweet": "THR: Climate bill gives polluter and nuclear breaks - WASHINGTON (Reuters) - The U.S. climate change bill expected ... [link]"
    },
    {
      "tweet": "Fat Loss Program : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clothes, clo... [link]"
    },
    {
      "tweet": "In climate data, that \"suggests\" global warming, and then the assumption that it is our doing. [link]"
    },
    {
      "tweet": "WASHINGTON - The term Green Movement was not yet in vogue, and there was little talk of combating global warming. [link]"
    },
    {
      "tweet": "TFF 2010: Jessica Alba, Brian Hill Talk 'Climate of Change' [link]"
    },
    {
      "tweet": "Natives gather in Bolivia to criticize \"Copenhagen club.\" [link]"
    },
    {
      "tweet": "Money | The Graham-Kerry-Lieberman global warming bill faces a hostile climate ...: World Magazine AP/Photo by Har... [link]"
    },
    {
      "tweet": "WASHINGTON - There was no green movement yet and little talk of global warming. [link]"
    },
    {
      "tweet": "Check this video out -- George Carlin on Global Warming [link]"
    },
    {
      "tweet": "RealClearPolitics - Global Warming Panic Attack: With the Senate about to begin a long-awaited debate over energy ... [link]"
    },
    {
      "tweet": "RT @Earth_News: Guardian: Climate scientist sues newspaper for 'poisoning' global warming debate [link]"
    },
    {
      "tweet": "Live #ChapmanU Climate Conference:  Exciting! Climate debate coming up at 4:30.  Causes pf climate change?   [link]"
    },
    {
      "tweet": "Looks like some ppl just gave some more $fuel$ to slow down the California global warming law #AB32. [link]"
    },
    {
      "tweet": "In November of 2008, I really wouldn't have predicted that immigration reform might move before climate-change legislation. /via @ezraklein"
    },
    {
      "tweet": "Global warming probability poll update: OCRegister (blog) And my favorite: 39 times as many people believe our bel... [link]"
    },
    {
      "tweet": "RT @LAist: Photos: Protesters Take on Valero Over Initiative that Would Change California's Landmark Climate Bill: [link]"
    },
    {
      "tweet": "LAist| Protesters Take on Valero Over Initiative that Would Change California's Landmark Climate Bill: •A_•A_•A_•A_•A_•A_•A_For ... [link]"
    },
    {
      "tweet": "Co-host Meredith Vieira talking about global warming on NBC•A_s Today , January 8, 2007. [link]"
    },
    {
      "tweet": "[CAMPAIGN] ASA dismisses complaints against DfT climate change ad: LONDON - The Advertising Standards Authority (A... [link]"
    },
    {
      "tweet": "RT @globetrottgirl I'm doing my part in contributing to both global warming and depletion of the ozone layer. I'm hot and sometimes, I fart."
    },
    {
      "tweet": "From The Christian Post: Methodist clergy listens to members on climate change. [link]"
    },
    {
      "tweet": "**PLS SMILE, OK?** Climate change and human health studied: BETHESDA, Md., April 22 (UPI) -- The US National Insti... [link]"
    },
    {
      "tweet": "#climate of Change @tribeca film festival and on demand. #earthday #p2 [link]"
    },
    {
      "tweet": "[BRANDREP] ASA dismisses complaints against DfT climate change ad: LONDON - The Advertising Standards Authority (A... [link]"
    },
    {
      "tweet": "Climate scientist sues newspaper for 'poisoning' global warming debate: Andrew Weaver with the IPCC's 2007 report ... [link]"
    },
    {
      "tweet": "State anti-global warming bill probably dead [link]"
    },
    {
      "tweet": "Don't be swayed by distraction of climate change, treat Earth responsibly. #EarthDay"
    },
    {
      "tweet": "Global Warming : Fiction or fact?: Deniers claim either that there is no global warming, or that it is not due to ... [link]"
    },
    {
      "tweet": "RT @TheBCast: The B-Cast Interview: Minnesotans for Global Warming' Fight YouTube Takedowns [link]"
    },
    {
      "tweet": "State's Global Warming Bill May Not Have Votes to Pass: MADISON, Wis. (WTAQ) - There might not be enough votes in ... [link]"
    },
    {
      "tweet": "RT @PIPIL4LIFE: Solar activity and climate change [link]"
    },
    {
      "tweet": "Video: Larry Brilliant on the volcano and climate change [link]"
    },
    {
      "tweet": "Global warming bill likely dead: By Jason Stein and Patrick Marley of the Journal Sentinel Madison •A_ A bill to cut... [link]"
    },
    {
      "tweet": "Fishing from the Other Side of the Boat (Creation Sunday Sermon on Christianity and Global Warming) [link]"
    },
    {
      "tweet": "Getting into Hot Water: Evangelicals and Global Warming: by Benjamin B. Phillips Since 2000 various evangelical gr... [link]"
    },
    {
      "tweet": "Global Warming = Mobile Phones? [link]"
    },
    {
      "tweet": "Betting on climate change [link]"
    },
    {
      "tweet": "Volcanic Eruptions Global Warming:: Lacerta knew he imperforate to go to milwaukee to suavely be centrifugal to er... [link]"
    },
    {
      "tweet": "Wed 4/21 #ChapmanU Climate Change confab opens w/film nite at Knott Studios, 7pm: Into the Arctic, Living Sea. Free. [link]"
    },
    {
      "tweet": "Opponents ramp up effort to delay Calif. global warming law [link]"
    },
    {
      "tweet": "How many are aware of the World People's Conference On Climate Change and Earth Rights in Bolivia #EarthWeek #Indigenous #1stNations"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "OK, that last part was a joke, but here is the latest ranking for the UN Climate Change panel.  [link]"
    },
    {
      "tweet": "Sorry I won't be able to accept the invitation to be a panelist at Bolivia Climate Change Talks [link]"
    },
    {
      "tweet": "Iceland Volcano Vs. Alternative Energy and Global Warming (FSLR, PBW, PEIX) [link]"
    },
    {
      "tweet": "RT @latimes: Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "RT @ sharifkouddous Indigenous groups from across Bolivia arriving at World People's conference on climate change [link]"
    },
    {
      "tweet": "effects of global warming •A_ We Are God's Caretakers by Cory L. Kemp: An Inconvenient Truth, the documentary and bo... [link]"
    },
    {
      "tweet": "Dollars, Sense and Climate Change [link]"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it [link]"
    },
    {
      "tweet": "Global Warming Bill Expected Next Monday: Senators John Kerry, Lindsey Graham and Joseph Lieberman are expected to... [link]"
    },
    {
      "tweet": "Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes ... [link]"
    },
    {
      "tweet": "Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes ... [link]"
    },
    {
      "tweet": "#KCRW GoodFood Blog: Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes [link]"
    },
    {
      "tweet": "Great article  [link]"
    },
    {
      "tweet": "Commonsense & Wonder: Global warming needed here: [link]"
    },
    {
      "tweet": "Global Warming Science: Global Warming Summary. The Summary [updated 2009/08/16]. The Simplified \" Nutshell\" [upda... [link]"
    },
    {
      "tweet": "Contra Costa Times editorial: Assess global warming with uncensored science ...: THE DEBATE over global warming ha... [link]"
    },
    {
      "tweet": "Global warming: Balancing quotes: There are some who are saying that because the Oxburgh inquiry didn't come back ... [link]"
    },
    {
      "tweet": "Ben Bova: In the news ... global warming, stock market and Earth Day: By BEN BOVA One swallow does not a summer ma... [link]"
    },
    {
      "tweet": "PODCAST: Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes [link]"
    },
    {
      "tweet": "Climate Change Initiatives [link]"
    },
    {
      "tweet": "Greenhoof •A_ Blog Archive •A_ From tobacco to climate change ... [link]"
    },
    {
      "tweet": "Pavley predicts ballot measure will aim to overturn global warming law [link]"
    },
    {
      "tweet": "County disputes global warming: By Laura London, Staff Writer The Otero County Commission had an involved discussi... [link]"
    },
    {
      "tweet": "What Do You Think Of Global Warming? - Find Answers to this Question: Answers to the question, What Do You Think O... [link]"
    },
    {
      "tweet": "It looks like a new climate change bill is going to be introduced in the Senate a week from Monday.  Not sure the... [link]"
    },
    {
      "tweet": "New strategy for Senate's climate bill leaves out global warming: Global warming policy is no longer driving compr... [link]"
    },
    {
      "tweet": "Cuccinelli files motion to force EPA to reopen global warming finding: Virginia Attorney General Ken Cuccinelli ha... [link]"
    },
    {
      "tweet": "My mind is not closed re global warming. The opposite. I want evidence on BOTH SIDES presented fairly, so We can judge, not Uncle Gorey."
    },
    {
      "tweet": "What to Do When the Current Climate Change Legislation Threatens to Do More Harm Than Good [link]"
    },
    {
      "tweet": "Gov. Christie Cuts NJ's Global-Warming Fund: Gov. Chris Christie is taking $65 million, the entire allocation, fro... [link]"
    },
    {
      "tweet": "C3: New Mexico's Democrats/Liberals Push Global Warming ...: Read here. Despite the US government temperature data... [link]"
    },
    {
      "tweet": "Global Warming Measurements Don't Account For 'Missing Heat' [link]"
    },
    {
      "tweet": "Volcanic ash an air traffic-stopper but not a climate or health hazard: Unless there's a big change in the amount ... [link]"
    },
    {
      "tweet": "Who Cares About Global Warming?: by Jackie Gingrich Cushman In 1971, I joined my parents and older sister in the s... [link]"
    },
    {
      "tweet": "The climate is worsening for a debate on global warming: That's why the University of East Anglia's Climate Resear... [link]"
    },
    {
      "tweet": "RT @JulesBeaujolais: Hilarious! Complimenti! RT: @expatina: Baked Alakasa: Sarah Palin's Guide To Global Warming    #tcottv"
    },
    {
      "tweet": "Hilarious! Complimenti! RT: @expatina: Baked Alakasa: Sarah Palin's Guide To Global Warming    #tcottv"
    },
    {
      "tweet": "@Heritage Global Warming, Melting Glaciers and Prohibition  [link]"
    },
    {
      "tweet": "Don Blankenship: Mine Safety Regulators \"As Silly as Global Warming\" [link]"
    },
    {
      "tweet": "Wisconsin's scaled-back global warming bill unveiled | Alternative ... [link]"
    },
    {
      "tweet": "@AG_323 ur tweet about #drakeseyebrows causing global warming lol"
    },
    {
      "tweet": "Ditch Cardio for Rapid Fat Loss : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip ar... [link]"
    },
    {
      "tweet": "Nice. RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund [link]"
    },
    {
      "tweet": "The most expensive provisions of the governor's global warming task force remain in the new substitute amendment. [link]"
    },
    {
      "tweet": "Bring Back The Hair That You Once Had With Nanogen's Nanofibers ...: ... Climate Change, clinical trials collagen,... [link]"
    },
    {
      "tweet": "Christie cutting $65 million for global warming prevention: BY TOM HESTER SR. Gov. Chris Christie is taking $65 mi... [link]"
    },
    {
      "tweet": "Don Blankenship Called Safety Regulators \"as Silly as Global Warming\" [link]"
    },
    {
      "tweet": "Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' [link]"
    },
    {
      "tweet": "US Senators prepare compromise climate change bill [link]"
    },
    {
      "tweet": "Senators prepare compromise climate change bill | Reuters [link]"
    },
    {
      "tweet": "Street-corner Global-warming Counsel: Urgh, certain elements of this item in Sunday's Washington Post, •A_Five Myths... [link]"
    },
    {
      "tweet": "Finding The Right Gifts To Give To Your Wedding Guests : A ...: ... Climate Change, clinical trials collagen, clin... [link]"
    },
    {
      "tweet": "april showers on us......right now!  feels like winter? Global Warming?"
    },
    {
      "tweet": "Sunday Funnies: Stephen Colbert Moderates Global Warming Debate: By Noel Sheppard (Bio | Archive) In fairness, it ... [link]"
    },
    {
      "tweet": "Comedy Central's Stephen Colbert on Tuesday actually moderated a debate about global warming. [link]"
    },
    {
      "tweet": "Baby Furniture ? Keeping Baby Safe : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... [link]"
    },
    {
      "tweet": "THR: Senators prepare compromise climate change bill - WASHINGTON (Reuters) - Six months after introducing a sweepi... [link]"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a \\scam.\\ .. [link]"
    },
    {
      "tweet": "@bloodless_coup There's a link to Luntz' climate change memo here:[link] #p2 #tcot"
    },
    {
      "tweet": "A religious take on climate change [link]"
    },
    {
      "tweet": "Minnesotans 4 Global Warming threatened with law suit over \"Hide The Decline\" video.Respond with new vid. [link]"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a \\scam.\\ .. [link]"
    },
    {
      "tweet": "Global warming conference set Sunday|Robert Bullard, known as the \\Father of Environmental Justice,\\ is a .. [link]"
    },
    {
      "tweet": "Global warming conference set Sunday|Robert Bullard, known as the \\Father of Environmental Justice,\\ is a .. [link]"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a \\scam.\\ .. [link]"
    },
    {
      "tweet": "Are you ready for the climate change? PLI is with Environmental Regulation & Commercial Implications 2010: How the... http://bit.ly/cYxGvk"
    },
    {
      "tweet": "LIVE TONIGHT: Fellow Heather Rogers joins Climate Change Expert James Hansen to discuss REAL solutions to Climate... http://bit.ly/aT8CgK"
    },
    {
      "tweet": "Plan B: California Braces for Climate Change. http://bit.ly/b7w8Rf"
    },
    {
      "tweet": "Plants effective way of tackling global warming|Washington, Apr 30 : Plant leaves account for less than one per .. http://oohja.com/xc0yn"
    },
    {
      "tweet": "@angiemartinez & it's about 2 be 86 degrees out here in NYC, shiiiiiitttt, fuck glodman/sachs, Obama better get a plan 4 this global warming"
    },
    {
      "tweet": "Plants effective way of tackling global warming|Washington, Apr 30 : Plant leaves account for less than one per .. http://oohja.com/xc0tB"
    },
    {
      "tweet": "Climate change & sustainability will be a key driver of future economic development. Listen at http://bit.ly/9Uytgl"
    },
    {
      "tweet": "Frederic Hague at #PEN: climate change isn't just a alarm bell. It's a whole blinking discotech"
    },
    {
      "tweet": "US Generals say: Climate Change Threatens America's Security: The Pentagon has made it well known that it consider... http://bit.ly/aZ754n"
    },
    {
      "tweet": "Even the generals know climate change is going to screw us. http://tinyurl.com/2urnnvo Clean energy bill, anyone? #climate"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness http://bit.ly/9Vg5Co"
    },
    {
      "tweet": "RT @disturbedwater: Climate change increases heat waves, floods: EPA http://bit.ly/afoCcp"
    },
    {
      "tweet": "RT @sciencedaily: Plants remain an effective way of tackling global warming http://bit.ly/d0O3xa"
    },
    {
      "tweet": "So far in that class I have gotten into \"heated discussion\" with global climate change denier and w/ student that nothing is \"their fault."
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado http://bit.ly/coOWIt"
    },
    {
      "tweet": "EPA Confirms Climate IS Changing: In another display of the sea change that has occurred at the US Environmental P... http://bit.ly/bb2l7d"
    },
    {
      "tweet": "Must See Places Before They Disappear! : Europe...[PICS]: If Global Warming Predictions prove to be true, the foll... http://bit.ly/adUgl4"
    },
    {
      "tweet": "RT @quixotecenter: Combating climate change: lessons from the world•A_s indigenous peoples http://tinyurl.com/25eatpb"
    },
    {
      "tweet": "@chrisdodd: I live in CT. Please support the climate bill and strong action on climate change!"
    },
    {
      "tweet": "RT @nicnunes: RT @EPSclimate: Indigenous tradition used to fight climate change http://bit.ly/76tX5h"
    },
    {
      "tweet": "RT @danlatorre: James Hansen/Heather Rogers, Green Gone Wrong: False Hope & Real Solutions to Climate Change - 7pm 4/30 http://bit.ly/djxvhd"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://bit.ly/cEX69x"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://bit.ly/cEX69x"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://goo.gl/fb/ZnfEn #cleantech"
    },
    {
      "tweet": "Climate change melts two glaciers|BILLINGS, Mont. ? Glacier National Park has lost two more of its namesake .. http://oohja.com/xaAdm"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://url4.eu/31XMX"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://url4.eu/31XMi"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon http://bit.ly/bRHMYi"
    },
    {
      "tweet": "RT @danielsaudade: What beautiful fall weather this morning, New York! Thanks climate change! Bleh!"
    },
    {
      "tweet": "What beautiful fall weather this morning, New York! Thanks climate change! Bleh!"
    },
    {
      "tweet": "Climate Change Threatens Japan's Cherry Blossoms | Environment ...: If you aren't familiar with the culture, Japan... http://bit.ly/9MPGhy"
    },
    {
      "tweet": "Wed @sciam podcast: Mountain Vs. Valley Temps Stretch Apart With Climate Change http://bit.ly/aVW0AT"
    },
    {
      "tweet": "Mountain Vs. Valley Temps Stretch Apart With Climate Change http://bit.ly/9bDfVR"
    },
    {
      "tweet": "CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://bit.ly/bRHMYi IPSAmazon"
    },
    {
      "tweet": "Global warming report urges governments to act|BRUSSELS, Belgium (AP) - The world faces increased hunger and .. http://oohja.com/xbQhb"
    },
    {
      "tweet": "Arctic rain in April 'is sign of global warming'|The Canadian Arctic has been hit by rain in a sign that the .. http://oohja.com/xbPDv"
    },
    {
      "tweet": "Arctic rain in April 'is sign of global warming'|The Canadian Arctic has been hit by rain in a sign that the .. http://oohja.com/xbPyL"
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado http://bit.ly/coOWIt"
    },
    {
      "tweet": "Microbes Contribute Less to Global Warming|New Haven, Conn. .. http://oohja.com/xbO0z"
    },
    {
      "tweet": "Microbes Contribute Less to Global Warming|New Haven, Conn. .. http://oohja.com/xbNVU"
    },
    {
      "tweet": "South Asian nations to fight climate change: Foreign ministers of eight South Asian nations met in this secluded H... http://bit.ly/cE3hoX"
    },
    {
      "tweet": "Climate change increases heat waves, floods|WASHINGTON (Reuters) - Deaths from heat waves, property damage from .. http://oohja.com/xbNDn"
    },
    {
      "tweet": "James Hansen & Heather Rogers - Green Gone Wrong: False Hope & Real Solutions to Climate Change - 7pm 4/30 @Demos_Org http://bit.ly/djxvhd"
    },
    {
      "tweet": "I LOVE FROG's LEAP!!!! Seriously. RT @grist: What climate change means for the wine industry (via @theclimatedesk) http://bit.ly/9I4FGp"
    },
    {
      "tweet": "Report: Save the Whales and They'll Save Us from Global Warming http://tinyurl.com/3y6j4cj"
    },
    {
      "tweet": "RT @indiaenvportal: The contribution of organic agriculture to climate change mitigation http://www.environmentportal.in/node/304091"
    },
    {
      "tweet": "Arctic Beauty in Black and White: Alaska Before the Effects of Global Warming [Slide Show]:  Toward the end of Wor... http://bit.ly/a22gQ2"
    },
    {
      "tweet": "#EPA report documents \"very real\" impacts from #climate change in 22 of 24 indicators studied: http://ht.ly/1DN9o #energy /via @matt_weiser"
    },
    {
      "tweet": "#Canadian #CEOs more keen on #green than global counterparts; preparing for impacts of climate change...http://bit.ly/bgxOba"
    },
    {
      "tweet": "RT @carbonmarket: Ask the G8 & G20 to support #biochar. Fight climate change & food shortage! Check this HuffPo post: http://huff.to/d0Ejgu"
    },
    {
      "tweet": "RT @christellar: Whale DooDoo could help fight #climate change? Sure! Why not!? http://bit.ly/9jWcCB [via @Earth_News]"
    },
    {
      "tweet": "Global warming science good news - Soils release less carbon than though as world warms: http://bit.ly/bM3We6"
    },
    {
      "tweet": "So it*s April 27th, Phoenix has 90•_Á weather & it might snow in New York today.. Hmmmm.. Global warming MUCH !"
    },
    {
      "tweet": "Higher temperature, sea level due to global warming|KUALA LUMPUR: Malaysia's average temperature has risen by 1.1 .. http://oohja.com/xbKOm"
    },
    {
      "tweet": "Higher temperature, sea level due to global warming|KUALA LUMPUR: Malaysia's average temperature has risen by 1.1 .. http://oohja.com/xbKLB"
    },
    {
      "tweet": "West Mediterranean countries unite on climate change (AFP) http://nxy.in/jiyiz"
    },
    {
      "tweet": "Cleaner Air Could Speed Global Warming|Hugh Pickens writes \\Scientists estimate that the US Clean Air Act has cut .. http://oohja.com/xbK49"
    },
    {
      "tweet": "3,000 Businesses Create New Ad for Climate Change Action http://bit.ly/9KFTB6"
    },
    {
      "tweet": "Person #1:\"Snow, then 65 degrees on the same day? Weather doesn't even surprise me anymore.\" Person #2:\"That's why global warming will win."
    },
    {
      "tweet": "Just heard an interesting report on report on understanding climate change/climate variability influence on human evolution and dispersal"
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado http://bit.ly/coOWIt"
    },
    {
      "tweet": "RT @jerryjamesstone: Alaska Before the Effects of Global Warming [pics]: http://digg.com/d31PUXt?t"
    },
    {
      "tweet": "New blog post: Mandating energy benchmarking: The next step for cities in addressing #climate change? http://bit.ly/8Zztmt"
    },
    {
      "tweet": "RealDocWatson on global warming: Go to Antarctica and stake a claim now! It will be like Florida in a few years!"
    },
    {
      "tweet": "How much trouble does global warming mean for agriculture? Just ask the wine industry. http://theclimatedesk.org/articles/grapes-wrath"
    },
    {
      "tweet": "Arctic Beauty in Black and White: Alaska Before the Effects of Global Warming [Slide Show] http://bit.ly/aJHKwp"
    },
    {
      "tweet": "Climate Change: From Paris to the Alps, European Places in Peril (photos) http://bit.ly/cjYBQp"
    },
    {
      "tweet": "How Climate Change Will Change The Electoral Map: The National Oceanic and Atmospheric Administration isn't known ... http://bit.ly/buHIW1"
    },
    {
      "tweet": "M Report: Cleaner Air Could Actually Intensify Global Warming: As much of the world marked Earth Day this past week, the Environmental..."
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado http://bit.ly/coOWIt"
    },
    {
      "tweet": "Global warming is a threat, after all|Tim Blair rounds up the latest news from the wild frontiers of global .. http://oohja.com/xbD6G"
    },
    {
      "tweet": "Kuna Indians Prepare For Relocation As Traditional Homes Sink Due To Climate Change http://bit.ly/cEs5qN by @indigenousissue"
    },
    {
      "tweet": "How Global Warming Is Killing California's Wine Buzz: Dr. Kimberley Cahill presented on \"Climate Change in Califor... http://bit.ly/aocBUG"
    },
    {
      "tweet": "RT @uncajoe: uncajoe: PLZ RT & #Digg Climate Of Hate: The Politics Of Climate Change Denial: As H... http://bit.ly/cgBtsy ( #p2 #du1 #pgn )"
    },
    {
      "tweet": "GLOBAL WARMING: Ocean chemistry is changing faster than it has in 800,000 years|And that's because of the carbon .. http://oohja.com/xbBeK"
    },
    {
      "tweet": "GLOBAL WARMING: Ocean chemistry is changing faster than it has in 800,000 years|And that's because of the carbon .. http://oohja.com/xbBaT"
    },
    {
      "tweet": "Good going douche. I'm sure there is no climate change in your backass world - Graham move imperils Obama agenda - http://goo.gl/qiDM"
    },
    {
      "tweet": "Ski resorts fight global warming|SALT LAKE CITY (AP) ? Ski resorts across the U.S. are using this Thanksgiving .. http://oohja.com/xbycu"
    },
    {
      "tweet": "Ski resorts fight global warming|SALT LAKE CITY (AP) ? Ski resorts across the U.S. are using this Thanksgiving .. http://oohja.com/xby9R"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change By Eating Insects: Birds, bats and lizards may play an important... http://huff.to/9a6b7C"
    },
    {
      "tweet": "RT @indiaenvportal: Make IT green: cloud computing and its contribution to climate change  http://www.environmentportal.in/node/302549"
    },
    {
      "tweet": "RT @HeidiAmes: Climate change favors invasive species over indigenous ones. 30% of plants Thoreau saw are now extinct. http://j.mp/bbjysn"
    },
    {
      "tweet": "scary RT @ClimateProject Climate change altering U.S. seasons: Spring 10 days early: http://ow.ly/1BphQ #climate"
    },
    {
      "tweet": "RT @thompsonPLC @boliviaun Pres Evo Morales in @LATimes climate change:lessons from indigenous peoples http://is.gd/bF60T #cochabamba #cmpcc"
    },
    {
      "tweet": "RT @Newsweek: Global Warming Kills Forests In Colorado http://bit.ly/coOWIt"
    },
    {
      "tweet": "MediaGlobal report on special Tipping Point Earth Day event: Science and art mobilize to fight climate change http://shar.es/m7N1X"
    },
    {
      "tweet": "a review of yesterday's discussions: http://bit.ly/a7YnV2 Science and art mobilize to fight climate change, by Rebekah Mintzer"
    },
    {
      "tweet": "Global Warming Kills Forests In Colorado http://bit.ly/coOWIt"
    },
    {
      "tweet": "Combating climate change: lessons from the world's indigenous peoples: When I arrived at the United Nations climat... http://bit.ly/aYcViw"
    },
    {
      "tweet": "Africa: Meteorology Services Gear Up for Climate Change: On the continent most vulnerable to climate c... http://tinyurl.com/zbt3ep #Africa"
    },
    {
      "tweet": "GECKO 10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention ... http://kin6q.tk GECKO"
    },
    {
      "tweet": "China: The Key To Fixing Global Warming|With rapid expansion comes sizable environmental impact, so the world's .. http://oohja.com/xbr8g"
    },
    {
      "tweet": "China: The Key To Fixing Global Warming|With rapid expansion comes sizable environmental impact, so the world's .. http://oohja.com/xbr3M"
    },
    {
      "tweet": "Now on PBS: Going Green New York: Examining how New Yorkers are confronting climate change Check local listings http://ow.ly/1BvA8"
    },
    {
      "tweet": "Official NASA Report: Sun Causes Climate Change:  http://bit.ly/csJwrh (FTSN Social)"
    },
    {
      "tweet": "RT @TreeHugger RT @huffpostgreen well this is just crazy: Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' http://bit.ly/aJTn26"
    },
    {
      "tweet": "RT @sciam: Impacts of Climate Change Extend to Human Health http://bit.ly/aZbBoW"
    },
    {
      "tweet": "Impacts of Climate Change Extend to Human Health http://bit.ly/aZbBoW"
    },
    {
      "tweet": "The good news about the very bad news (about climate change) by Rebecca Solnit http://bit.ly/cUKQVi"
    },
    {
      "tweet": "Alpha Phi Alpha Takes on Climate Change and Energy Efficiency - http://bit.ly/cz4Wzk #climate"
    },
    {
      "tweet": "GECKO 10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention ... http://qd6yo.tk GECKO"
    },
    {
      "tweet": "Natural variability does not explain global warming, climate scientists tell popular TV meteorologist http://bit.ly/9UUCej #climate #agw"
    },
    {
      "tweet": "Rebecca Solnit: 350 Degrees of Inseparability: The Good News About the Very Bad News (About Climate Change) http://bit.ly/9dOTC6"
    },
    {
      "tweet": "Watch video: Climate change threatens sacred Tibetan mountain, including land known as Shangri-La http://bit.ly/aN1srk #earthday"
    },
    {
      "tweet": "African Meteorology Services Gear Up for Climate Change. (america.gov) #IRI http://bit.ly/aakK70"
    },
    {
      "tweet": "Economists Say Climate Change Is Bad For Economy http://ow.ly/1BQTj #earthday"
    },
    {
      "tweet": "Economists Say Climate Change Is Bad For Economy http://ow.ly/1BQG2 #earthday"
    },
    {
      "tweet": "Report: Allergy Season to Get Worse with Climate Change (Time.com) http://nxy.in/k9oox"
    },
    {
      "tweet": "Don•A_t Kill Bill •A_ Save the Climate Change Accountability Act! http://trim.li/nk/1GB8 via @WiretapMagazine"
    },
    {
      "tweet": "RT @Oxfam #Climate change makes farmers & pastoralists in #Ethiopia increasingly vulnerable http://bit.ly/alhpwN #earthday"
    },
    {
      "tweet": "Denis Hayes, founder of Earth Day, compares global climate change to Irish Famine (IrishCentral) News Weather Politics http://bit.ly/9XCuA1"
    },
    {
      "tweet": "RT @Oxfam: #Climate change makes farmers & pastoralists in #Ethiopia increasingly vulnerable http://bit.ly/alhpwN #earthday"
    },
    {
      "tweet": "ITS #EARTHDAY!!! Be aware of what you consume, waste, & how you treat this place. we only have 1 & as we can see global warming is in effect"
    },
    {
      "tweet": "Earth Day: Ben Verwaayen on what we're doing to curb climate change http://bit.ly/a3hgA3 #Green #EarthDay (via @Alcatel_Lucent)"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report http://bit.ly/btYoHc"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report http://bit.ly/btYoHc"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report http://url4.eu/2r22O"
    },
    {
      "tweet": "HEALTH: U.S. and other industrial nations already feel impacts of climate change -- report http://url4.eu/2r22Y"
    },
    {
      "tweet": "GECKO 10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention ... http://5vj09.tk GECKO"
    },
    {
      "tweet": "10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention biofuel... http://bit.ly/a3CGvV"
    },
    {
      "tweet": "Climate change could raise cost of U.S. allergies (Reuters) http://nxy.in/412x6"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease: Bioethicists and international law experts met in Asilomar later las... http://bit.ly/bIA0k6"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease: Bioethicists and international law experts met in Asilomar later las... http://bit.ly/bIA0k6"
    },
    {
      "tweet": "well this is just crazy: Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' http://bit.ly/aJTn26"
    },
    {
      "tweet": "Military leads fight against climate change http://z3igz.tk EnvNewsNet"
    },
    {
      "tweet": "Military leads fight against climate change: The U.S. military, the government's largest fuel buyer, is leading th... http://bit.ly/cGv0Fi"
    },
    {
      "tweet": "10 first steps to greener living: It all seems so daunting: Climate change. Carbon credits. Not to mention biofuel... http://bit.ly/doKgfh"
    },
    {
      "tweet": "Swedish expert says CO2 is not the main cause of global warming|Swedish climate expert Dr. Fred Goldberg has said .. http://oohja.com/xbo5q"
    },
    {
      "tweet": "Fighting poverty and global warming in Africa http://goo.gl/fb/Shq49 #energy"
    },
    {
      "tweet": "RT @greenforyou: Treating Climate Change as a Curable Disease | Wired Science | Wired.com #green http://bit.ly/bPm7kx #ESG #sustainability"
    },
    {
      "tweet": "http://bit.ly/azDu0 It's time to tackle climate change through wind energy http://bit.ly/cCB87D"
    },
    {
      "tweet": "Thursday on PBS: Going Green New York: Examining how New Yorkers are confronting climate change Check local listings http://ow.ly/1BvA8"
    },
    {
      "tweet": "UN •A_ Only Global Cooperation Can Prevent Runaway Climate Change, Secretary •A_: The United Nations seeks dialogue, i... http://bit.ly/9sLEvH"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming http://bit.ly/aKb76i"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming http://bit.ly/aKb76i"
    },
    {
      "tweet": "rt @democracy_now \"Most Important Event in Struggle Against Climate Change\" - Nigerian Environmentalist Nnimmo Bassey http://bit.ly/beV0W0"
    },
    {
      "tweet": "Military leads fight against climate change: Pew http://ff.im/-jeG3f"
    },
    {
      "tweet": "Report identifies 11 diseases & health issues affctd by climate change. Once u inclde mental health evrything's @ stake http://bit.ly/apYoIc"
    },
    {
      "tweet": "For Earth Day: Resources on coping with climate change: http://tinyurl.com/2cck5xd"
    },
    {
      "tweet": "Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle http://bit.ly/bJsszY"
    },
    {
      "tweet": "Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle http://bit.ly/bJsszY"
    },
    {
      "tweet": "Fedele Bauccio: Combating Climate Change One Meal at a Time: This week, Americans will celebrate the 40th anniver... http://huff.to/9W7JPn"
    },
    {
      "tweet": "RT @egeemnz @mrdannyglover i support world people's conf on climate change in cochabamba,bolivia.watch live http://cmpcc.org"
    },
    {
      "tweet": "Barrett: better to have lots of small protocols on climate change than pushing for one comprehensive one"
    },
    {
      "tweet": "Topography of mountains could complicate rates of global warming http://bit.ly/cA5Bom"
    },
    {
      "tweet": "RT @mrdannyglover i support the world people's conference on climate change in cochabamba, bolivia. watch live now at http://cmpcc.org"
    },
    {
      "tweet": "Many global issues require universal co-operation to address e.g. smallpox, ozone layer, climate change"
    },
    {
      "tweet": "RT @hereisawayjose Bolivia President on Global Warming http://su.pr/2YY1Lc \"Main cause of Earth destruction is capitalism\" #Green #EarthDay"
    },
    {
      "tweet": "RT @indiawater: Boiling Point: Containing the spill over of climate change in the Indian subcontinent - A•A_ http://goo.gl/fb/GITQV"
    },
    {
      "tweet": "No link now between Eyjafjallaj•__kull and climate change, but a warming world could trigger earthquakes, landslides... http://bit.ly/93Mj9D"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change http://goo.gl/fb/zOgmE #cleantech"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change http://url4.eu/2pBxm"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change http://url4.eu/2pBxr"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming http://url4.eu/2pAAi"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming http://url4.eu/2pAAt"
    },
    {
      "tweet": "Ethiopia: Climate Change Increasing Poverty And Vulnerability http://bit.ly/9Vlo8s #africa #solar"
    },
    {
      "tweet": "Ethiopia: Climate Change Increasing Poverty And Vulnerability: Small-scale farmers and pastoralists i... http://tinyurl.com/yystbl4 #Africa"
    },
    {
      "tweet": "RT @democracy_now: \"The Most Important Event in the Struggle Against Climate Change\" - Nigerian Environmentalist Nnimmo Bassey on •A_ http://bit.ly/beV0W0"
    },
    {
      "tweet": "The Most Important Event in the Struggle Against Climate Change\" - Nigerian Environmentalist Nnimmo Bassey on •A_ http://bit.ly/beV0W0"
    },
    {
      "tweet": "RT @sejorg: RT @JaymiHeimbuch: Ocean Saltiness Shows Global Warming Is Intensifying Our Water Cycle http://bit.ly/bKlU4H"
    },
    {
      "tweet": "RT @energysection: Backgrounder: China's major policies to tackle climate change since year 2000.. http://bit.ly/bTZpff #chinagreen"
    },
    {
      "tweet": "UW biologist links early blooms to global warming|Associated Press - April 21, 2010 6:15 AM ET STEVENS POINT, .. http://oohja.com/xbiVi"
    },
    {
      "tweet": "UW biologist links early blooms to global warming|Associated Press - April 21, 2010 6:15 AM ET STEVENS POINT, .. http://oohja.com/xbiRQ"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. http://oohja.com/xbhWq"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. http://oohja.com/xbhVZ"
    },
    {
      "tweet": "Global warming evidence all around us|A message to global warming deniers and doubters: Just look around our .. http://oohja.com/xbhRx"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry?|Melting glaciers around the world could trigger a global .. http://oohja.com/xbhkY"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry?|Melting glaciers around the world could trigger a global .. http://oohja.com/xbhgq"
    },
    {
      "tweet": "Climate Change: Could NYC Get Katrina-Like Flood in a Warmer, Wetter Future? - Sea Level Rise of 2 Feet in 70yrs http://twurl.nl/kuge4f"
    },
    {
      "tweet": "Climate Change: Geologists Drill Into Antarctica & Find Troubling Signs 4 Ice Sheets' Future •A_  Melt Could Come FAST http://twurl.nl/ioewyh"
    },
    {
      "tweet": "Either Capitalism dies or Mother Earth does\" Evo Morales Claims in the People's World Conference on Climate Change http://bit.ly/9LXgOj"
    },
    {
      "tweet": "RT @rubberstamprosk: RT @MotherJones: Yet another gift from global warming: increased allergy attacks http://bit.ly/9o8F9y #p2 ||@JoyVBehar"
    },
    {
      "tweet": "Africa: Time Bomb Awaiting Africa: THERE is no doubt that climate change as an environmental issue ha... http://tinyurl.com/y3z9q2k #Africa"
    },
    {
      "tweet": "Buying carbon offsets may ease eco-guilt but not global warming: http://j.mp/necir http://www.csmonitor.com/carbonoffsets http://j.mp/aonX07"
    },
    {
      "tweet": "RT @Qorianka: All Eyes on #Cochabamba Those alrdy suffering from global warming 'll havechancetospeakout\" http://is.gd/bwrfQ #cmpcc"
    },
    {
      "tweet": "RT @EcoSteward: This #EcoMonday, @InvasiveNotes discussion of climate change and invasive species recommended: http://bit.ly/a0re9B"
    },
    {
      "tweet": "Migratory Birds' New Climate Change Strategy: Stay Home http://shar.es/mvU8M KB: More proof global warming is 4 the birds. Not. #eco #green"
    },
    {
      "tweet": "On ocean floor populations of organisms despite little oxygen. global warming cause oxygen depletion&reduce biodiversityhttp://bit.ly/b7NUDJ"
    },
    {
      "tweet": "Join us for a discussion on Earth Day 4/22: Climate Change & Food Security - Irreversible Destiny? http://bit.ly/8XvRNS (also live webcast!)"
    },
    {
      "tweet": "RT @NWF: New York City's new waterfront plan will take climate change into consideration: http://bit.ly/9ASqdR"
    },
    {
      "tweet": "Pat Mooney on the Dangers of Geoengineering and Manipulating the Planet to Combat Climate Change http://bit.ly/b93A5l"
    },
    {
      "tweet": "Seasonal Allergies Getting Worse From Climate Change http://url4.eu/2mhrI"
    },
    {
      "tweet": "Just because I believe in global warming, peeps thinks I should believe in god instead. Why??"
    },
    {
      "tweet": "Seasonal Allergies Getting Worse From Climate Change http://bit.ly/cy7Jc8"
    },
    {
      "tweet": "Seasonal Allergies Getting Worse From Climate Change http://bit.ly/cy7Jc8"
    },
    {
      "tweet": "@Zener39 I advise everyone who thinks global warming is dead to buy oceanfront property and live there.  See ya!"
    },
    {
      "tweet": "Global Warming, Melting Ice Caps Could Help Trigger More Volcanic Eruptions http://bit.ly/aUBHb3"
    },
    {
      "tweet": "Mary Ellen Harte and John Harte: Addressing Climate Change: Winning the War on Sustainability: At its heart, clim... http://huff.to/cI7Rik"
    },
    {
      "tweet": "RT @Drudge_Report: STATE DEPT. DECLARES:   'Global warming unequivocal and primarily human-induced'... http://drudge.tw/cYgyix"
    },
    {
      "tweet": "Increasingly, corporations are concluding climate change is real. Betting on Climate Change | Wired.com http://j.mp/aaUM2W"
    },
    {
      "tweet": "Right on! Richard Branson's #EarthDay message 2 biz \"Get ur house in order.Fight global warming!#green #eco http://bit.ly/aqJi4L -Plez RT"
    },
    {
      "tweet": "[#Meat-Wise]  Cynthia Bateman on Meat-Wise Monday: How Animal Agriculture Makes Global Warming Worse http://bit.ly/9c04zs"
    },
    {
      "tweet": "Global Warming, Melting Ice Caps Could Help Trigger More Volcanic Eruptions http://bit.ly/aUBHb3"
    },
    {
      "tweet": "STATE DEPT. DECLARES:   'Global warming unequivocal and primarily human-induced'... http://bit.ly/adhL7L #breaking"
    },
    {
      "tweet": "Global warming, melting ice caps could trigger more volcanic eruptions: http://bit.ly/b4JVwb"
    },
    {
      "tweet": "@LilFerret hey! We came up with all kinds of ideas for fixing global warming! Loved my Environmentalism class. *sighs*"
    },
    {
      "tweet": "An Overview of the Green Car Revolution | Going Green: The increasing awareness about the threat of global warming... http://bit.ly/doQ3i5"
    },
    {
      "tweet": "Southern Africa: Competing for Limpopo Water: Climate change will bring higher temperatures to Southe... http://tinyurl.com/y7q29uk #Africa"
    },
    {
      "tweet": "2nd eruption of Hekla in Iceland. Let's call 2010, the year the Earth struck back. \"This is for global warming and THIS is for oil spills!"
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) http://bit.ly/b8aJbG"
    },
    {
      "tweet": "RT @EpiscopalRelief: Bishop Lane, #Episcopal Dio of #Maine: Climate change most important issue of our time - #Bangor Daily Nws http://bit.ly/cwy6b3 via @addthis"
    },
    {
      "tweet": "RT @TreeHugger: In case you were wondering: What Impact Will The Volcano In Iceland Have On Climate Change? http://bit.ly/dlvKNq"
    },
    {
      "tweet": "Cool it, global warming is bad enough without you heating things up.|In the interest of honest discussion, can we .. http://oohja.com/xb9Ck"
    },
    {
      "tweet": "RT @InvasiveNotes: RT @RareWildlifeGuy: Climate change: Migration patterns have changed for 20 billion birds:   http://bit.ly/byeIQM"
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) http://bit.ly/b8aJbG"
    },
    {
      "tweet": "Volcanic ash cloud: Global warming may trigger more volcanoes|Climate change could spark more ''hazardous'' .. http://oohja.com/xb8ws"
    },
    {
      "tweet": "Volcanic ash cloud: Global warming may trigger more volcanoes|Climate change could spark more ''hazardous'' .. http://oohja.com/xb8s2"
    },
    {
      "tweet": "Just briefed on global cooling & volcanoes via @abc But I wonder ... if it gets to the stratosphere can it slow/improve global warming??"
    },
    {
      "tweet": "Climate Change-ing your Allergies http://bit.ly/d3bTo0 (NRDC)"
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) http://bit.ly/b8aJbG"
    },
    {
      "tweet": "Obama says China can't 'wait' on climate change: Sydney (AFP) April 15, 2010 - US President Barack Obama on Thursd... http://bit.ly/cbVER7"
    },
    {
      "tweet": "RT @beckbasher: RT @IanDavidB: RT @Shoq: CLIMATE CHANGE DENIERS: Bobby Jindal mocked volcano warnings. Read the papers lately? Start thinking for yourselves"
    },
    {
      "tweet": "RT @TEDNews: Cara Mertes at #tedxvolcano: We're all stranded this weekend. And we're getting a sneak preview of climate change. We have to adapt."
    },
    {
      "tweet": "Larry Brilliant at #TEDxVolcano: \"We have to fight for science; the single most important thing we face is climate change\" #socmedia @enviro"
    },
    {
      "tweet": "Larry Brilliant at TEDxVolcano: \"We have to fight for science; the single most important thing we face is climate change\" #socent #green"
    },
    {
      "tweet": "Damn man that ash cloud in Europe is crazy, they say due to global warming with the volcano activating,getting crazy"
    },
    {
      "tweet": "RT @TEDNews: Larry Brilliant at #tedxvolcano: Climate change is exacerbating all other crises of our age. But climate science is now under attack."
    },
    {
      "tweet": "RT @Newsweek: Climate Change: Places To See Before They Disappear•A_The Americas (Photos) http://bit.ly/b8aJbG"
    },
    {
      "tweet": "Global warming to impact wheat, rice production in India|Ludhiana, Apr 18 : Scarcity of water will have a serious .. http://oohja.com/xb62Q"
    },
    {
      "tweet": "Global Warming Causes Volcano Eruptions -- By: Jonah Goldberg: From Reuters: OSLO (Reuters) - A thaw of Iceland's... http://bit.ly/dqvsYV"
    },
    {
      "tweet": "Global warming to impact wheat, rice production in India|Ludhiana, Apr 18 : Scarcity of water will have a serious .. http://oohja.com/xb60z"
    },
    {
      "tweet": "RT @Climates_Change: Bring Indigenous Voices into the Conversation About Climate Change http://bit.ly/bbP0gG"
    },
    {
      "tweet": "Climate Change & Volcanic Activity: \"Ice Cap Thaw May Awaken Icelandic Volcanoes http://twurl.nl/f0aqb3"
    },
    {
      "tweet": "•A_No Rain in the Amazon: How South America•A_s Climate Change Affects Entire Planet•A_ -Interview of Nikolas Kozloff (vid) http://twurl.nl/asgkwk"
    },
    {
      "tweet": "Climate Change: Places To See Before They Disappear•A_The Americas (Photos) http://bit.ly/b8aJbG"
    },
    {
      "tweet": "RT @bruces *Hmmm, they rather buried the lede here: Iceland glaciers melt from global warming, then volcanoes go off: http://bit.ly/anoudi"
    },
    {
      "tweet": "Not sure if this is consensus, but: scientist warns climate change will lead to more volcano crises due to melting ice. http://bit.ly/9ELCjd"
    },
    {
      "tweet": "Wishing I was in Cochabamba at the People's World Conference on Climate Change and the Rights of Mother Earth @boliviaun"
    },
    {
      "tweet": "I feel that already RT @organicnewyork Climate change making seasonal allergies worse. Near-record highs this Spring http://bit.ly/d5DMi6"
    },
    {
      "tweet": "RT @organicnewyork: Climate change making seasonal allergies worse.  Near-record highs this Spring.  http://bit.ly/d5DMi6"
    },
    {
      "tweet": "Like Icelandic volcanic eruptions disrupting your air travel? Climate change = glacier thaw = more of it. http://bit.ly/aJOZGb (via @mims)"
    },
    {
      "tweet": "Cochabamba Summit Offers New Approach to Combating Climate Change http://bit.ly/btb7jh"
    },
    {
      "tweet": "Climate Change is Making You Sneeze: http://bit.ly/c3YVMW The Eco-Sexy Solution? Nettle Root tincture, baby!"
    },
    {
      "tweet": "ENVIRONMENT: Climate of change: From something as simple as reminding computer users to power down when not workin... http://bit.ly/duQAk9"
    },
    {
      "tweet": "Professor?s Perspective: Reasons to be Concerned about Climate Change|Spring in Connecticut brings renewal, .. http://oohja.com/xaZEP"
    },
    {
      "tweet": "The need to switch to renewable energy|Climate scientists have long warned us that global warming is accelerating .. http://oohja.com/xaZAj"
    },
    {
      "tweet": "The need to switch to renewable energy|Climate scientists have long warned us that global warming is accelerating .. http://oohja.com/xaZzN"
    },
    {
      "tweet": "Climate Change culprit for \"Off-the-Charts\" Pollen Counts... http://bit.ly/biteQA"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level http://bit.ly/97DPXg"
    },
    {
      "tweet": "Allergy Season To Worsen With Climate Change: Report: A new report released on Wednesday by the National Wildlife... http://huff.to/9ipDju"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level http://bit.ly/97DPXg"
    },
    {
      "tweet": "Author Nikolas Kozloff on \"No Rain in the Amazon: How South America's Climate Change Affects the Entire Planet\" http://bit.ly/cKs5dW"
    },
    {
      "tweet": "How do we solve this global warming thing? http://goo.gl/fb/ON8rH #cleantech"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level http://url4.eu/2heiW"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level http://url4.eu/2heip"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level http://goo.gl/fb/hKvfY #cleantech"
    },
    {
      "tweet": "How do we solve this global warming thing? http://url4.eu/2hdT2"
    },
    {
      "tweet": "How do we solve this global warming thing? http://url4.eu/2hdSo"
    },
    {
      "tweet": "Report: Allergy Season to Get Worse with Climate Change (Time.com) http://nxy.in/h4e3z"
    },
    {
      "tweet": "Cute. I mention global warming and a denialist sends me a link to a Finnish newspaper article purportedly refuting it."
    },
    {
      "tweet": "Is nationalizing the energy industry necessary to fight global warming?  http://bit.ly/9AEI0k"
    },
    {
      "tweet": "Blog|A preliminary analysis suggests that natural gas could contribute far more to global warming than previously .. http://oohja.com/xaW3l"
    },
    {
      "tweet": "Iceland volcano not likely to slow global warming|A vast cloud from an intensifying volcanic eruption in Iceland .. http://oohja.com/xaVgV"
    },
    {
      "tweet": "Iceland volcano not likely to slow global warming|A vast cloud from an intensifying volcanic eruption in Iceland .. http://oohja.com/xaVcb"
    },
    {
      "tweet": "reading from @time Allergies Worse Than Ever? Blame Global Warming http://bit.ly/9QVt5w"
    },
    {
      "tweet": "The $6BN REDD+ forest conservation partnership to curb climate change leaves on env'l groups & indigenous populations. http://bit.ly/9bbuoO"
    },
    {
      "tweet": "2/3rds of Tbaggers don't think climate change is a serious problem. As I said, they're ignorant."
    },
    {
      "tweet": "Missing' heat may affect future climate change http://bit.ly/diXzNL #environment #eco"
    },
    {
      "tweet": "Climate Change - Building a Green Economy http://bit.ly/bzJACi"
    },
    {
      "tweet": "Climate change threatening Glacier National Park and Montana's economy - Examiner.com http://bit.ly/bN869t"
    },
    {
      "tweet": "New York: Climate change could raise cost of allergies http://newyork.cityandpress.com/2010/04/15/climate-change-could-raise-cost-allergies"
    },
    {
      "tweet": "Ecotone: #Climate change from a #population perspective http://ow.ly/1yNlN #cities #environment (via @argus27)"
    },
    {
      "tweet": "Climate change blamed as coastal whale migration dwindles •A_ Ventura County.. http://retwt.me/1MPSj (via @PlanetSantaBarb)"
    },
    {
      "tweet": "Think your allergies are bad now? Wait until climate change kicks in, Michig.. http://retwt.me/1MPQX (via @greenmichigan)"
    },
    {
      "tweet": "Exclusive: Climate change could raise cost of U.S. allergies| Reuters http://retwt.me/1MPF2 (via @healthfreaks)"
    },
    {
      "tweet": "Spring storm season starting a little late this year???  Must be global warming!"
    },
    {
      "tweet": "Kenya: Extreme Weather Tests Pastoralist Perceptions: The effects of climate change - such as drought... http://tinyurl.com/yyupfmh #Africa"
    },
    {
      "tweet": "Climate Change is Not Just About the Climate, it is About Our Lives : TreeHugger http://retwt.me/1MPhx (via @paulo_one)"
    },
    {
      "tweet": "All 30 Major League Baseball Teams Throw Curve to Climate Change Deniers http://bit.ly/cywGTN"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek http://retwt.me/1MODN (via @tweeterism)"
    },
    {
      "tweet": "Tip of the Day: Plant One Tree on your Birthday - Plants absorb CO2 which helps reduce Global Warming."
    },
    {
      "tweet": "United States Must Lead on Climate Change •A_ Kerry; Climate and Energy Bill Has Multiple Benefits #green http://bit.ly/d0lRwo"
    },
    {
      "tweet": "Green:Net: How the Internet, Computing Can Fight Climate Change http://bit.ly/9exozj"
    },
    {
      "tweet": "3,000 Businesses Create New Ad for Climate Change Action : CleanTechnica http://retwt.me/1MOwy (via @greenREACH)"
    },
    {
      "tweet": "Green:Net: How the Internet, Computing Can Fight Climate Change: The Internet, software, computing... http://bit.ly/9exozj (Via @inhabitat)"
    },
    {
      "tweet": "Leaked U.S. Document Calls For •A_Global Regime•A_ To Tackle Climate Change http://retwt.me/1MOhG (via @planetprison3r)"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek http://ff.im/-iVsBt"
    },
    {
      "tweet": "Reinvent Cities to Stop Climate Change http://retwt.me/1MO9d (via @reenymal)"
    },
    {
      "tweet": "Climate Change Continues To Melt Glacier National Park's Icons | National P.. http://retwt.me/1MNUL (via @nat_parks_news)"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek http://retwt.me/1MNMY (via @meganurupo)"
    },
    {
      "tweet": "Climate Change - 100 Endangered Places and How to Save Them - Newsweek http://retwt.me/1MNC2 (via @stevegeritano)"
    },
    {
      "tweet": "Abu Dhabi faces climate change flood threat - expert - Culture & Society - Arabia.. http://retwt.me/1MNjF (via @zaqzaqat)"
    },
    {
      "tweet": "China active, serious in tackling climate change, says vice president | Humani.. http://retwt.me/1MN3W (via @NewsOnGreen)"
    },
    {
      "tweet": "You and Us and Me - China active, serious in tackling climate change, says vic.. http://retwt.me/1MN3p (via @NewsOnGreen)"
    },
    {
      "tweet": "Study: SE Asia will be hit hard by climate change http://retwt.me/1MN2w (via @cuddlendance)"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 27"
    },
    {
      "tweet": "Obama: China Must Act Soon on Climate Change http://bit.ly/b6vhX2"
    },
    {
      "tweet": "If capitalism doesn•A_t end climate change, climate change will end capitalism - #degrowth http://bit.ly/afdSTy"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 28"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 29"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 30"
    },
    {
      "tweet": "Demand Congress take action on climate change. Pls sign the petition. http://bit.ly/9tnK2S"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 31"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 32"
    },
    {
      "tweet": "Carbon Age is killing us. Climate change legislation now: http://action.sierraclub.org/site/MessageViewer?em_id=173961.0"
    },
    {
      "tweet": "Obama says in TV interview that 'we can't allow China to wait' on tackling climate change http://bit.ly/b9XdIz"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 33"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 34"
    },
    {
      "tweet": "Government Claims Global Warming May Cause Cancer http://bit.ly/cbPJhu"
    },
    {
      "tweet": "Government Claims Global Warming May Cause Cancer http://bit.ly/dhLLuq"
    },
    {
      "tweet": "Protect Wildlife Habitat from Climate Change: http://www.thepetitionsite.com/takeaction/820159630"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 35"
    },
    {
      "tweet": "Plan B: California Braces for Climate Change http://bit.ly/99dwDO"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 36"
    },
    {
      "tweet": "Nine scenarios for imminent apocalypse•A_only one is global warming http://j.mp/aYqZO2 (via @rawdawgbuffalo)"
    },
    {
      "tweet": "If capitalism doesn•A_t end climate change, climate change will end capitalism - #degrowth http://bit.ly/afdSTy"
    },
    {
      "tweet": "DC: *FT Work for Greenpeace to STOP GLOBAL WARMING - $12-$13/hr*: Get Involved! Call now 202-595-3368 Greenpeac... http://bit.ly/cqCzSj"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 7"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 8"
    },
    {
      "tweet": "http://bit.ly/dCjUlz -Ancient Weapons Emerge From Melting Arctic Ice-Wow,positive side of Global Warming.Other one is reclaim of dry land"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra 9"
    },
    {
      "tweet": "Take Action @change: Help Protect Wildlife Habitat from Climate Change http://bit.ly/9Ogdyi #climatechange #SierraClub #SaveTerra"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness.  CNSNews.com -  http://bit.ly/cDeYFt"
    },
    {
      "tweet": "SEC warns publically held companies to advise investors of risks of #climate change. http://ow.ly/1DUIy #CSR"
    },
    {
      "tweet": "Save the Whales and They'll Save Us from Global Warming http://bit.ly/cN013J #tcot"
    },
    {
      "tweet": "Al Gore @ #IRA \"If a snake were coming up the aisle, there wouldn't be a long debate about what to do.\" And we dawdle about climate change."
    },
    {
      "tweet": "We should be leaders on climate change but it is always put on the back burner... http://dld.bz/b3mA"
    },
    {
      "tweet": "RT @WWF_Climate    RT @CarbonDiplomacy Grapes of Wrath: How much trouble does #climate change mean for agriculture? http://bit.ly/abDh6c"
    },
    {
      "tweet": "Got Allergies? -- By: Jonah Goldberg: Blame global warming. From Time magazine: Allergies Worse Than Ever? Blame ... http://bit.ly/cPxcfZ"
    },
    {
      "tweet": "Climate change and Why Your Allergies Are Getting Worse http://bit.ly/dzYKHK /via @MotherJones"
    },
    {
      "tweet": "Watch PBS 'Dimming the Sun' for more on this #NPR: Could Cleaner Air Actually Intensify Global Warming?-More at http://n.pr/126226938"
    },
    {
      "tweet": "RT @CHIoxfamaction: People in poor countries are 20 times more likely to be affected by disasters caused by climate change than those in the developed world"
    },
    {
      "tweet": "Got Allergies? -- By: Jonah Goldberg: Blame global warming. From Time magazine: Allergies Worse Than Ever? Blame ... http://bit.ly/94D2xv"
    },
    {
      "tweet": "Italy: PhD Programme in Science and Management of Climate Change ...: PhD Programme in Science and Management of C... http://bit.ly/9I6mr6"
    },
    {
      "tweet": "Oxfam: Climate change devastating rural Ethiopian communities. http://tinyurl.com/3a67ary #Oxfam #climatechange"
    },
    {
      "tweet": "Alexi @Giannoulias believes in putting a price on global warming pollutants to spur development of alternative technology #p2 #ilsen"
    },
    {
      "tweet": "Go for the green! Olympic athletes push for climate change action -- http://mnn.com/node/55056 #climatechange #climateaction #green"
    },
    {
      "tweet": "DC: *FT Work for Greenpeace to STOP GLOBAL WARMING - $12-$13/hr*:Get Involved! Call now 202-595-3368 Greenpeace... http://bit.ly/9m44EJ"
    },
    {
      "tweet": "Health effects are a big deal. RT @EPSclimate: Impacts of Climate Change Extend to Human Health http://bit.ly/99jnIZ #moms #families #eco"
    },
    {
      "tweet": "Climate change causing change in ocean chemistry at unprecedented rate. http://www.planetark.com/enviro-news/item/57703 #climatechange"
    },
    {
      "tweet": "Global warming can be good for http://bit.ly/dd2Rm3, another cool video"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming (Time.com) http://nxy.in/dxleu"
    },
    {
      "tweet": "RT @arkarthick: Bats, Birds & Lizards Can Fight #Climate Change (Wired) http://bit.ly/c4PCkp (via @unreal_g) #Science RT @Flipbooks"
    },
    {
      "tweet": "For #EarthDay Global warming could affect patient symptoms http://bit.ly/7FppTC classic post"
    },
    {
      "tweet": "Just signed an #earthday petition to take action on climate change via @rockthevote: http://bit.ly/ainwzM"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease http://viigo.im/3fSu"
    },
    {
      "tweet": "Global warming: Believe it - Vallejo Times-Herald: Your editorial on global warming (\"Keeping the debate honest,\" ... http://bit.ly/9CueV7"
    },
    {
      "tweet": "See how CCX Member Motorola is working to be part of the solution in addressing the climate change challenge: http://bit.ly/aC6NgS"
    },
    {
      "tweet": "RT @manyko2: Bolivian President Blames Capitalism for Global Warming http://bit.ly/bcIloj //US policies threaten indigenous peoples #p2"
    },
    {
      "tweet": "Interesting point re: why macro-probs like global warming are never solved: politicians need only solve immediate probs for re-election"
    },
    {
      "tweet": "RT @MotherJones: Yet another gift from global warming: increased allergy attacks http://bit.ly/9o8F9y #p2"
    },
    {
      "tweet": "Global Climate Change Effects on the Mid-Continent (Download to view animations) http://slidesha.re/bRD3BW"
    },
    {
      "tweet": "Are you ready for climate change, if so let your lawmakers know, how tell them sign petitions, drop a hint :)"
    },
    {
      "tweet": "UMC Expands Climate Change Policy and Carbon Emission Reduction Goals http://goo.gl/fb/T7njr"
    },
    {
      "tweet": "RT @Drudge_Report: STATE DEPT. DECLARES:   'Global warming unequivocal and primarily human-induced'... http://tinyurl.com/y7wvwvp #tcot"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming: Thanks to an unusually cold and snowy winter, followed by an earl... http://bit.ly/aJKsz3"
    },
    {
      "tweet": "Ridiculous: giving a climate change denier a nature show? Keep Sarah Palin off #Discovery: http://bit.ly/bmUK4w (via @CREDOmobile)"
    },
    {
      "tweet": "Report: #Allergy Season to Get Worse with #Climate Change read from @time this really sucks for me: http://bit.ly/aDeS0r"
    },
    {
      "tweet": "CODA Automotive Lauded for Innovation and Technology Efforts to Combat Climate Change and Air Pollution http://goo.gl/fb/AQRum"
    },
    {
      "tweet": "Report Claims Climate Change Is To Blame For Increase Of Allergies http://bit.ly/dgT4CS"
    },
    {
      "tweet": "Report Claims Climate Change Is To Blame For Increase Of Allergies http://bit.ly/bG1dIR"
    },
    {
      "tweet": "Tulips in mid-April in Chicago? Love the global warming. http://ow.ly/i/16qg"
    },
    {
      "tweet": "Global warming will make allergies worse for 25 million Americans, hitting those with asthma hardest: WWF (ClimateWire) #globalwarming"
    },
    {
      "tweet": "85 degrees in April eh? Hellooo global warming, nice to meet u"
    },
    {
      "tweet": "Rejoice, NY Times mentions crop wild relatives in article about adapting agriculture to climate change http://bit.ly/dmIB7F #agriculture"
    },
    {
      "tweet": "U.S. Document Calls For •A_Global Regime•A_ To Tackle Climate Change http://bit.ly/ddyxmX"
    },
    {
      "tweet": "U.S. Document Calls For •A_Global Regime•A_ To Tackle Climate Change http://bit.ly/c75hGf"
    },
    {
      "tweet": "RT @highcountrynews RT @NPCA: Two more glaciers are gone from namesake nat. park due to global warming, USGS reports http://bit.ly/dpXXWW"
    },
    {
      "tweet": "RT @solveclimate: Feeling the Heat Down Under When it Comes to Climate Change: Erwin Jackson, The Climate Institute.. http://bit.ly/c1uWL4"
    },
    {
      "tweet": "UK leads the way! RT @10cities Schumacher College: Mobilising Democracy to Tackle Climate Change http://post.ly/RsXv"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies http://bit.ly/bQan2X"
    },
    {
      "tweet": "RT @EnergyBoom: Harvard and MIT Receive $2 Million to Study Health and Environmental Impacts of Climate Change http://bit.ly/cLhcxz"
    },
    {
      "tweet": "Sen. Kerry writing in The Hill today: U.S. Must Lead on Climate Change http://bit.ly/dCT9yb"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 1"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 2"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies http://bit.ly/bQan2X"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 3"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 4"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 5"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 6"
    },
    {
      "tweet": "RT @BluePractice: The clothing industry started global warming in the first place. - Yvon Chouinard, Patagonia #FortuneGreen"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 7"
    },
    {
      "tweet": "Fight Climate Change From All Fronts: http://is.gd/biT49 #climatechange #SaveTerra 8"
    },
    {
      "tweet": "Filmmaker Travels The Globe To Find People Fighting Climate Change ... http://bit.ly/bgM3w5"
    },
    {
      "tweet": "Filmmaker Travels The Globe To Find People Fighting Climate Change ...: Filmmaker Travels The Globe To Find People... http://bit.ly/bgM3w5"
    },
    {
      "tweet": "Rejoice, NY Times mentions crop wild relatives in article about adapting agriculture to climate change http://bit.ly/dmIB7F #agriculture"
    },
    {
      "tweet": "Effort to remake America's energy future and fight global warming could be harmed, or spurred, by Gulf #oilspill: http://bit.ly/dl4zuD"
    },
    {
      "tweet": "How would catastrophic climate change change the average persons life? Think 100% unemployment every where on the planet for several decades"
    },
    {
      "tweet": "Arctic Ice Loss Accelerating Global Warming: Research: TopNews New Zealand Global warming may be getting worse tha... http://bit.ly/cx7Jz2"
    },
    {
      "tweet": "#California taking the lead on #climate change: http://tinyurl.com/2dxp6ms #green"
    },
    {
      "tweet": "Plants effective way of tackling global warming: Washington, Apr 30 (ANI): Plant leaves account for less than one ... http://bit.ly/9Ygtzk"
    },
    {
      "tweet": "Namibia: Govt to Get Active On Climate Change http://bit.ly/ct0bmF"
    },
    {
      "tweet": "Plants effective way of tackling global warming http://bit.ly/9dmNc3"
    },
    {
      "tweet": "Wait here's an idea: it's natural climate change, not human induced global warming. http://bit.ly/alsvDh"
    },
    {
      "tweet": "Just Read: US Generals say: Climate Change Threatens America's Security http://bit.ly/blOh67"
    },
    {
      "tweet": "Glacial Melt From Global Warming Could Unplug Volcanos: Earthweek - A Diary of the Planet Eruptions of glacial vol... http://bit.ly/boNsiq"
    },
    {
      "tweet": "33 US Military Generals, Admirals: \"Climate Change is Threatening ... http://bit.ly/bbFBhD"
    },
    {
      "tweet": "Off shore drilling threatens wildlife and contributes to climate change.  Urge Obama NOT to expand drilling!  http://bit.ly/c2iwYa"
    },
    {
      "tweet": "AllGov - News - Global Warming Isn't All Bad•A_If You're an ...: In the frozen reaches of Canada, warmer temperature... http://bit.ly/9o0pxS"
    },
    {
      "tweet": "Government Report Says Global Warming May Cause Cancer, Mental Illness: A new government report says global warmin... http://bit.ly/cmuSvn"
    },
    {
      "tweet": "Global warming picking up steam, Obama top science adviser says: John P. Holdren, Obama's top science adviser, dis... http://bit.ly/ckAKgF"
    },
    {
      "tweet": "RT @TheClimateDesk: Lyme disease already costs &gt; $2.5 billion a year, and climate change could make it even pricier. http://bit.ly/bazHHY"
    },
    {
      "tweet": "Whale Excrement To Check Global Warming: TopNews United States New researcher carried out by the Australian Antarc... http://bit.ly/cA69Fc"
    },
    {
      "tweet": "Government Report Says Global Warming to Cause Cancer, Mental Illness: CNSNews.com By Matt Cover, Staff Writer (CN... http://bit.ly/cGDR9K"
    },
    {
      "tweet": "EPA issues report on U.S. climate change indicators - warming is having measurable effect across ecosystems http://bit.ly/c9RnR6"
    },
    {
      "tweet": "Report: Save the Whales and They'll Save Us from Global Warming: Need more proof that Global Warming is the proble... http://bit.ly/dBKXCh"
    },
    {
      "tweet": "RT @fishmark: Wine grapes have become our best early-warning system for the effects of global warming. http://awe.sm/55QVf  via @Slate"
    },
    {
      "tweet": "Wine grapes have become our best early-warning system for the effects of global warming. http://awe.sm/55QVf via @Slate"
    },
    {
      "tweet": "EPA Climate Change Indicators Report Shows the Evidence of Global Warming All Around Us http://bit.ly/96VuYB"
    },
    {
      "tweet": "EPA Climate Change Indicators Report Shows the Evidence of Global Warming All ...: Natural Resources Defense Counc... http://bit.ly/abm7iZ"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies http://url4.eu/2cQ8D"
    },
    {
      "tweet": "Syed Husin wanted to know the effects of global warming to Malaysia. http://bit.ly/cG4TMa"
    },
    {
      "tweet": "Cleaner Air Could Speed Global Warming http://bit.ly/d2xBrO"
    },
    {
      "tweet": "Whale Poo Fights Global Warming: By ROB MAYEDA and LORI PREUITT Star Trek IV: The Voyage Home had many convinced t... http://bit.ly/afv9hq"
    },
    {
      "tweet": "EXCLUSIVE - Climate change could raise cost of U.S. allergies http://url4.eu/2cQ8W"
    },
    {
      "tweet": "New facts support global warming case: Recent letter-writer Charles Kesner is either out-of-touch with reliable ne... http://bit.ly/9AB5Sb"
    },
    {
      "tweet": "QUT researchers track climate change http://bit.ly/91EJHE"
    },
    {
      "tweet": "Study: Climate Change Threatens Your Health, Too http://bit.ly/cbSUb5"
    },
    {
      "tweet": "RT @panteraonca07: Slideshow of Alaska Before the Effects of Global Warming http://bit.ly/d1szFE"
    },
    {
      "tweet": "In Vino Veritas The delicate wine grape has become our best early-warning system for the effects of global warming. http://bit.ly/9lUTkI"
    },
    {
      "tweet": "Conservation International:: Give a gift that helps prevent climate change, provides habitat for endangered specie... http://bit.ly/dcuSyT"
    },
    {
      "tweet": "Conservation International:: Give a gift that helps prevent climate change, provides habitat for endangered specie... http://bit.ly/dcuSyT"
    },
    {
      "tweet": "Climate change is real and climate change has consequences for all of us. http://bit.ly/8XLIpP"
    },
    {
      "tweet": "Global Warming Contributes To Rapidly Increased Ocean Acidification: The US National Research Council warned last ... http://bit.ly/bUwIcJ"
    },
    {
      "tweet": "Global warming threatens Ca Mau Province: CA MAU •A_ The southernmost province of Ca Mau was among localities most v... http://bit.ly/b26Twc"
    },
    {
      "tweet": "Global warming means local storming http://bit.ly/d5mwF6"
    },
    {
      "tweet": "Could Cleaner Air Actually Intensify Global Warming?: by NPR Staff As much of the world marked Earth Day this past w... http://n.pr/ahDB11"
    },
    {
      "tweet": "Renewable Energy Advances •A_ Ocean Saltiness Shows Global Warming ...: After pulling data from 1.6 million salinity... http://bit.ly/c1fL3g"
    },
    {
      "tweet": "The Key to Fixing Global Warming China | Magazine: It's late November 2009, and US energy secretary Steven Chu is ... http://bit.ly/aMtvEN"
    },
    {
      "tweet": "Global Warming: Ocean chemistry is changing faster than it has in 800,000 years: And that's because of the carbon ... http://bit.ly/cdflgK"
    },
    {
      "tweet": "Topography of Mountains Could Complicate Rates of Global Warming: ScienceDaily (Apr. 25, 2010) •A_ A new study concl... http://bit.ly/aUXnxh"
    },
    {
      "tweet": "Soaring mercury; Blame it on global warming|Agartala, Apr 14 : Environmentalists have attributed the .. http://oohja.com/xaMXU"
    },
    {
      "tweet": "Africa: Monitoring a Changing Climate: The gathering environmental crisis presented by global warming... http://tinyurl.com/y252cn2 #Africa"
    },
    {
      "tweet": "The volcanic ash was bad for planes...but should help reduce global warming.  http://bit.ly/9RRKdQ"
    },
    {
      "tweet": "Ocean currents still strong despite global warming|Researchers at NASA have discovered that the ocean currents .. http://oohja.com/xaMox"
    },
    {
      "tweet": "Ocean currents still strong despite global warming|Researchers at NASA have discovered that the ocean currents .. http://oohja.com/xaMjc"
    },
    {
      "tweet": "Long-distance journeys out of fashion? Global warming may be causing evolutionary changes in bird migration (sourc... http://bit.ly/9mHr4G"
    },
    {
      "tweet": "Funniest 'conservative' comment of the day: \"Climate change is due to increased heat from the Earth's core."
    },
    {
      "tweet": "Scientists Say Global Warming Affects Marine Life: In Narragansett Bay, Rhode Island, winter flounder no longer re... http://bit.ly/cm6zar"
    },
    {
      "tweet": "Redding architect Theimer: Global warming doubters \"stupid\": James Theimer, known locally for his environmentally ... http://bit.ly/9jKBvt"
    },
    {
      "tweet": "Indonesia Tree Program Looks to Reduce Global Warming: Planting trees is one way to help maintain the natural pres... http://bit.ly/aJ6Nck"
    },
    {
      "tweet": "Earth Day report: climate change is endangering our health: http://ping.fm/gJLKg"
    },
    {
      "tweet": "Global Climate Change, Not Global Warming @ http://aclnk.com/ar2872954"
    },
    {
      "tweet": "#CUBeyond: Wlliam Lau says climate change is happening and we must deal with it, no matter what is causing it.  #ChapmanU"
    },
    {
      "tweet": "Chew's focus is on the ways global warming is causing the redistribution of plant and animal species. http://bit.ly/blUs7S"
    },
    {
      "tweet": "Military Leads Fight Against Climate Change: Pew http://bit.ly/9kNEi8"
    },
    {
      "tweet": "Royal Society Stunner: Hazardous geosphere activity and global warming linked: Periods of exceptional climate chan... http://bit.ly/cUtIiv"
    },
    {
      "tweet": "Fighting poverty and global warming in Africa: by Marc Gunther on 04/21/2010 22:10 0 comments , 0 views Rarely do ... http://bit.ly/9NIVtq"
    },
    {
      "tweet": "Military leads fight against climate change: Pew | Reuters\" http://j.mp/9BCWf7  #cleantech #greentech"
    },
    {
      "tweet": "Spring Comes 10 Days Earlier In U.S. Due To Climate Change: http://huffingtonpost.com/2010/04/21/spring-comes-10-days-earl_n_545790.html"
    },
    {
      "tweet": "NASA Launches Climate Change Supercomputer: http://huffingtonpost.com/2010/04/21/nasa-launches-climate-cha_n_546174.html"
    },
    {
      "tweet": "@drgrist's excellent take on why even environmental economics limits our climate change policy options http://bit.ly/cK5R26 #climate #agw"
    },
    {
      "tweet": "The Key to Fixing Global Warming? China http://ow.ly/178nxi"
    },
    {
      "tweet": "@ClimateWise2 is here tonight at 7:30 to discuss what climate change is doing to women, children, families & communities http://ow.ly/1Btrl"
    },
    {
      "tweet": "Baby boomers must tackle global warming while they can: By Anonymous Baby boomers have enjoyed peace and the large... http://bit.ly/bw322k"
    },
    {
      "tweet": "#Ocean Saltiness Shows #Global Warming Is Intensifying Our Water Cycle : TreeHugger http://bit.ly/9iuMYS"
    },
    {
      "tweet": "Daniel C. Esty: Climate Change Plan B: Bringing down greenhouse gas emissions with a \"cap and trade\" system of tr... http://huff.to/d2RUP1"
    },
    {
      "tweet": "Military leads fight against climate change: Pew: WASHINGTON (Reuters) - The U.S. military, the government's large... http://bit.ly/ctNt3e"
    },
    {
      "tweet": "Global warming implicated in shortened bird migration | Science Codex: Global warming implicated in shortened bird... http://bit.ly/9xfGO8"
    },
    {
      "tweet": "NASA•A_s Gift to Earth: A Climate Change Supercomputer http://bit.ly/at5YdW"
    },
    {
      "tweet": "Daniel C. Esty: Climate Change Plan B: Bringing down greenhouse gas emissions with a \"cap and trade\" system of tr... http://huff.to/cAbv99"
    },
    {
      "tweet": "UW biologist links early blooms to global warming http://bit.ly/aBLMsi"
    },
    {
      "tweet": "UW biologist links early blooms to global warming: A researcher says plants in central Wisconsin are flowering ear... http://bit.ly/cs1aju"
    },
    {
      "tweet": "Bolivian President Blames Capitalism for Global Warming: Environment News Service COCHABAMBA, Bolivia, April 20, 2... http://bit.ly/9bcYzS"
    },
    {
      "tweet": "URUGUAY: Tools Needed for Those Most Vulnerable to Climate Change: Global Geopolitics Net Sites / IPS In•__s Acosta... http://bit.ly/alYhq4"
    },
    {
      "tweet": "An Explosive Idea: are volcanoes the cure for global warming? http://bit.ly/8ZpofC"
    },
    {
      "tweet": "RT @WGofNYC Leader of National Indigenous Women's Org, \"Climate Change is Not Just abt the Climate, its abt R Lives\" bit.ly/9GdzRw"
    },
    {
      "tweet": "See where @climate change is happening RT @ClimateCentral 8-part series on cities and climate change for BBC Worldnews: http://ow.ly/1AXou"
    },
    {
      "tweet": "Carbon offsets: How a Vatican forest failed to reduce global warming: Christian Science Monitor From a scheme to c... http://bit.ly/adexIe"
    },
    {
      "tweet": "Buying carbon offsets may ease eco-guilt but not global warming http://bit.ly/conBCO"
    },
    {
      "tweet": "Pat Mooney on the Dangers of Geoengineering and Manipulating the Planet to Combat Climate Change  - http://awarela.org/?p=10280"
    },
    {
      "tweet": "Icelandic Volcano's Impact on Global Warming, Green Transportation, Bird ...: By Alisa Opar NASA satellites captur... http://bit.ly/drEnq0"
    },
    {
      "tweet": "Birds in southern England suffer from global warming http://bit.ly/aPezr3"
    },
    {
      "tweet": "Video: Getting Focus Back on Climate Change http://bit.ly/doUp0V"
    },
    {
      "tweet": "Volcanic ash cloud: Global warming may trigger more volcanoes http://bit.ly/byFZLx"
    },
    {
      "tweet": "Global warming blamed for European air traffic collapse: The FINANCIAL -- Global warming, which altered European w... http://bit.ly/aJ73eo"
    },
    {
      "tweet": "Republicans, why do you oppose global warming environmental ...: Really it makes no sense to oppose efforts to red... http://bit.ly/d1ESuz"
    },
    {
      "tweet": "Safe, secure nuclear energy must be part of climate change solution http://bit.ly/a8xqgM"
    },
    {
      "tweet": "Global Warming•A_s Eyjafjoell Volcano Triggers More Global Warming: http://ping.fm/i2ppK"
    },
    {
      "tweet": "STATE DEPT. DECLARES: 'Global warming unequivocal and primarily human-induced'... http://ow.ly/1774mS"
    },
    {
      "tweet": "5th US Climate Action Report Released: \"Global Warming is Unequivocal\" http://viigo.im/3dpt"
    },
    {
      "tweet": "Global Warming, Melting Ice Caps Could Help Trigger More Volcanic Eruptions... http://viigo.im/3dpo"
    },
    {
      "tweet": "Photo: We dare someone tell us that climate change isn't real. http://tumblr.com/x5x8kszx2 #green #eco #greens"
    },
    {
      "tweet": "5th US Climate Action Report Released: \"Global Warming is Unequivocal\": Treehugger by Brian Merchant, Brooklyn, Ne... http://bit.ly/bnzk6I"
    },
    {
      "tweet": "Since Man can't, Mother Nature to end global warming with volcanoes & earthquakes. #Hekla #Icelandic"
    },
    {
      "tweet": "Blame the volcano trouble on sun and global warming http://bit.ly/aVwFKq #science"
    },
    {
      "tweet": "Some hot health reminders on global warming: The debate is over; nearly all scientists (and politicians) agree tha... http://bit.ly/dlVeXS"
    },
    {
      "tweet": "Since Man can't, Mother Earth to end global warming with volcanoes & earthquakes. #ashtag #Hekla #Icelandic"
    },
    {
      "tweet": "RT @kate_sheppard: Joe Romm (@climateprogress): \"Climate change is a BFD, if I can quote Joe Biden."
    },
    {
      "tweet": "Reinvent Cities to Stop Climate Change | Green Living Ideas  http://bit.ly/cpFCze #cities #climate #eco"
    },
    {
      "tweet": "All 30 Major League Baseball Teams Throw Curve to Climate Change Deniers : CleanTechnica\" http://j.mp/ars7W2 #cleantech #greentech #MLB"
    },
    {
      "tweet": "CST: A Lack Of Air Pollution Is Bad For Global Warming? •A_ Pirate's ... http://bit.ly/aW42qa"
    },
    {
      "tweet": "RT@greenforyou An estimated 20 billion birds changed their migrating habits in last few decades due to global warming http://bit.ly/cRfauy"
    },
    {
      "tweet": "Global warming melts ice and this can influence magmatic systems,\" he told Reuters. http://bit.ly/9aCQ41"
    },
    {
      "tweet": "@GregMitch has there been any reporting on if the increase in sediment in upper atmospher could reduce global warming effect by reducing sun"
    },
    {
      "tweet": "Volcanic ash is a good thing. Blocks the sun's heat. Lessens air travel. Bye bye global warming. #fb"
    },
    {
      "tweet": "Why cleaner air could speed global warming | Air Pollution News http://bit.ly/bpx3Xh"
    },
    {
      "tweet": "Leaked U.S. Document Calls For \"Global Regime\" To Tackle Climate Change  http://bit.ly/9Wi5zf"
    },
    {
      "tweet": "Why cleaner air could speed global warming: Aerosol pollution, which is now on the downswing, has helped keep the ... http://bit.ly/a4xVkM"
    },
    {
      "tweet": "Why cleaner air could speed global warming: Aerosol pollution, which is now on the downswing, has helped keep the ... http://lat.ms/adYnMi"
    },
    {
      "tweet": "Why cleaner air could speed global warming http://lat.ms/cCps7Q"
    },
    {
      "tweet": "Why cleaner air could speed global warming http://lat.ms/cCps7Q"
    },
    {
      "tweet": "Why cleaner air could speed global warming http://goo.gl/fb/GSGPZ"
    },
    {
      "tweet": "effects of global warming •A_ YouTube •A_ Effects of Global Warming Stats: Back with more news for you today. It's ama... http://bit.ly/9NKRqf"
    },
    {
      "tweet": "It's global climate change-not warming. #ac Read: www.associatedcontent.com/article/2872954/global_climate_change_not_global_warming.html"
    },
    {
      "tweet": "Global Warming Today •A_ Blog Archive •A_ How can we tackle global ...: The only way at present is to reduce greenhous... http://bit.ly/d3eFUB"
    },
    {
      "tweet": "CODA Automotive Lauded for Efforts to Combat Climate Change & Air Pollution http://bit.ly/aPUjlz"
    },
    {
      "tweet": "Ocean Saltiness Getting Weird •A_ Blame Global Warming: IndyPosted (blog) A study conducted by scientists at Austral... http://bit.ly/cCQa1y"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change http://bit.ly/dmnjXj"
    },
    {
      "tweet": "A preliminary analysis suggests that natural gas could contribute far more to global warming than previously thought. http://bit.ly/9rRgSg"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change http://bit.ly/dmnjXj"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level http://bit.ly/8ZcErl"
    },
    {
      "tweet": "USC prof Dan Mazmanian:  money needed for adaption to climate change in the state is a pressing social justice issue.#USC #SPPD #Keston"
    },
    {
      "tweet": "Iceland volcano unlikely to slow global warming: scientists http://bit.ly/aFIIU5"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change http://goo.gl/fb/0L3uP #cleantech"
    },
    {
      "tweet": "Iceland volcano unlikely to slow global warming: scientists: AFP PARIS •A_ Big volcanic eruptions have had a cooling... http://bit.ly/9fkHqu"
    },
    {
      "tweet": "Global warming may make cricket bats history: London: Cricket is facing a bizarre threat following a European Unio... http://bit.ly/bemHL3"
    },
    {
      "tweet": "volcano unlikely to slow global warming: By Richard Ingham, AFPApril 16, 2010 4:44 AM An EUMESAT satellite image s... http://bit.ly/bbTGnb"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change http://url4.eu/2aBIw"
    },
    {
      "tweet": "Fifty years ago I was teaching and preaching about global warming and its catastrophic effects on our climate. http://bit.ly/c7rKVi"
    },
    {
      "tweet": "SCIENCE: Scientists explore the evolution of climate change http://url4.eu/2aBIi"
    },
    {
      "tweet": "President Barack Obama says the world cannot wait for China to commit to tackling global warming. http://bit.ly/c2Z3yF"
    },
    {
      "tweet": "Obama: China must act on climate change http://bit.ly/9a8mIJ"
    },
    {
      "tweet": "Renewable energy possible solution to global warming: By Milton Takei | University alumnus, 1992 In dealing with t... http://bit.ly/ain2AN"
    },
    {
      "tweet": "effects of global warming •A_ YouTube •A_ Impact of Climate Change on ...: There are many predicted effects for the en... http://bit.ly/9HL1M3"
    },
    {
      "tweet": "Plz hlp fight Global warming- read my post abt effects of Global Warming http://bit.ly/effectsofglobalwarming Let me know what u think TXS"
    },
    {
      "tweet": "UN to battle poverty, global warming .:. newkerala.com Online News ...: UN to battle poverty, global warming - New... http://bit.ly/8Z3EBD"
    },
    {
      "tweet": "Eaarth: global warming is here to stay, how will we deal with it? http://amzn.to/dhUsHJ"
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming http://bit.ly/aJKsz3"
    },
    {
      "tweet": "Germany is an important partner for us in trade as well as in the fight against climate change."
    },
    {
      "tweet": "Global Warming Likely to Worsen Allergies in Maine: That's according to a new report released today by the Nationa... http://bit.ly/9rpS9P"
    },
    {
      "tweet": "SubTropolis, U.S.A. -  A creative solution to global warming 100 feet below ground. http://bit.ly/c4jcuH"
    },
    {
      "tweet": "Global warming or unemployment...choose your own disaster?: By Max Jacobs Companies producing greenhouse gases in ... http://bit.ly/cuF4Kq"
    },
    {
      "tweet": "This one explained the extreme cold weather we have experienced this winter as just one more example of global warming. http://bit.ly/amrhqA"
    },
    {
      "tweet": "@Climate change Giant #Glacier Fall in Peru Causes Deadly Tsunami : http://bit.ly/bvG95C"
    },
    {
      "tweet": "Green' cement made from rice may help tackle global warming|London, April 13 : With the increasing rise in the .. http://oohja.com/xaIU0"
    },
    {
      "tweet": "Can you feel the shift in consciousness? -- 3K Businesses Create New Ad for Climate Change Action - http://bit.ly/cADHuR via @sustainablog"
    },
    {
      "tweet": "RT @SolarInsure: 3,000 Businesses Create New Ad for Climate Change Action : CleanTechnica http://bit.ly/cADHuR"
    },
    {
      "tweet": "Global warming threatens Armenia by 2C higher temperature http://bit.ly/d1Yc1c"
    },
    {
      "tweet": "Climate change deadly? Scientists suspect global warming may be contributing to strange deaths of Arctic birds. http://tinyurl.com/yaqbeop"
    },
    {
      "tweet": "Green' cement made from rice may help tackle global warming: London, April 13 (ANI): With the increasing rise in ... http://bit.ly/bmFTC2"
    },
    {
      "tweet": "•A_Green•A_ cement made from rice may help tackle global warming http://bit.ly/biqJnb"
    },
    {
      "tweet": "Global Warming 'at Point of No Return': Global warming has reached the point of no return, a study published in th... http://bit.ly/ddCDeo"
    },
    {
      "tweet": "World-Famous Places Endangered by Global Warming: If climatologists' predictions of global warming are right, some... http://bit.ly/a7S4GQ"
    },
    {
      "tweet": "Green' cement made from rice may help tackle global warming|London, April 13 : With the increasing rise in the .. http://oohja.com/xaIQ0"
    },
    {
      "tweet": "Latest weapon in global warming fight •A_ 'green' cement made from rice: By FIONA MACLEOD AND RUAIRI CREANEY SCIENTI... http://bit.ly/cqL0Hs"
    },
    {
      "tweet": "Latest weapon in global warming fight •A_ 'green' cement made from rice http://bit.ly/abWP35"
    },
    {
      "tweet": "Coping with Global Warming: How to Save on Utility Bills: By Dealman(view all posts by Dealman) Actually, this isn... http://bit.ly/bh02P7"
    },
    {
      "tweet": "Climate Change - Building a Green Economy - Paul Krugman - NYTimes.com\" http://j.mp/a6XGmr #greentech"
    },
    {
      "tweet": "Clean Technology Industry Forecast is Strong Due to Global Warming Concerns ...: April 12, 2010 (MMD Newswire) -- ... http://bit.ly/bUSB2O"
    },
    {
      "tweet": "Porous materials to reduce the climate change http://bit.ly/aoLbPB"
    },
    {
      "tweet": "celebrate Earth Day by signing Declaration of Energy Independence to show the Senate we demand action on climate change http://bit.ly/aPLanA"
    },
    {
      "tweet": "Top U.S. Vacation spots becoming endangered. Landscape threatened by global warming, mining, weather, environmental hazard & population"
    },
    {
      "tweet": "..leaders are failing to address the gravest threat our world has ever faced...\" \"Pressuring politicians on climate change is not working."
    },
    {
      "tweet": "Glacier National Park Loses Two More Glaciers Due To Global Warming: Thaindian.com By Meena Kar Montana, Apr 11, (... http://bit.ly/d3ujff"
    },
    {
      "tweet": "Plants can effectively tackle global warming|Don't have SiliconIndia account? Sign up Forgot your password? Reset .. http://oohja.com/xc5Re"
    },
    {
      "tweet": "Plants can effectively tackle global warming|Don't have SiliconIndia account? Sign up Forgot your password? Reset .. http://oohja.com/xc5Nw"
    },
    {
      "tweet": "Climate change affects subterranean ecosystems|Changes above the ground, such as a higher concentration of carbon .. http://oohja.com/xc5Mz"
    },
    {
      "tweet": "RT @RyanNewYork Gulf Coast spill better give Climate Change Legislation some momentum. It's a bigger tragedy than we're even aware of yet."
    },
    {
      "tweet": "Spill + coal mine tragedy = need for alt energy! RT @RyanNewYork: Gulf Coast spill better give Climate Change Legislation some momentum."
    },
    {
      "tweet": "Gulf Coast spill better give Climate Change Legislation some momentum. It's a bigger tragedy than we're even aware of yet. #P2"
    },
    {
      "tweet": "LIVE NOW: Green Gone Wrong: False Hope and Real Solutions to Climate Change http://bit.ly/arODNy"
    },
    {
      "tweet": "@New_federalists  i have it on good auth tht global warming also causes toe fungus.  We R all fortunate tht thr IS no global warming! #tcot"
    },
    {
      "tweet": "Illegal war and the myth of global warming|My main campaign platform for this election will be the illegal .. http://oohja.com/xbQAI"
    },
    {
      "tweet": "It is in the 30's what happened to Spring? Global warming is for those that care to read about and not live it. The coldest Winter ever. FU"
    },
    {
      "tweet": "the scientific community was scamed by global green  gov warming scam."
    },
    {
      "tweet": "I truly  Fat ASS Gore should get the Scam Artist Award of the decade with his Global Warming and Energy Credits worth close to Billion."
    },
    {
      "tweet": "hide the decline is the global warming nut jobs current policy its all a epic scam they are lying to the world #climategate #tcot #p2"
    },
    {
      "tweet": "40 degrees in NYC. please urinate on next liberal global warming /climate change scum you see."
    },
    {
      "tweet": "RT @virgiltexas: Hey Al Gore: see these tornadoes racing across Mississippi? So much for global \"warming\" #tornadocot #ocra #sgp #gop #ucot #tlot #p2 #tycot"
    },
    {
      "tweet": "#justinbiebersucks and global warming is a farce"
    },
    {
      "tweet": "One Stop Book Stop Confirmed! Global warming is 'settled' •A_ as a scam: WND.com Sussman's book, the ... http://bit.ly/b4Kv2l mybookstop.info"
    },
    {
      "tweet": "BOYCOTT SIEMENS for buying \"global warming\"/\"climate change\" in their advertisements. #tcot #sgp #teaparty"
    },
    {
      "tweet": "climate change scam #3wordslibshate"
    },
    {
      "tweet": "Global Warming? Vostok Antarctica sits at -100F -- with windchills to -142F ...  http://tinyurl.com/y39tlgg #tcot"
    },
    {
      "tweet": "Global Warming?  Vostok Antarctica sits at -100F -- with lows forecast to -110F... http://bit.ly/96JtQu #breaking"
    },
    {
      "tweet": "RT @Climate scam another warmist has to be rescued from Arctic cold Global warming activist 'transported ... http://bit.ly/9mgHdk #tcot #p2"
    },
    {
      "tweet": "Why isn't @algore upset with the volcano for causing global warming? #climategate"
    },
    {
      "tweet": "Rationalists' who believe aliens exist & global warming=caused by humans, might as well believe in Jesus miracles,angels &fairies #tcot #p2"
    },
    {
      "tweet": "@psiryu Hmmm so global warming is a fraud!"
    },
    {
      "tweet": "Air ban led by flawed computer models. Global warming come to mind? http://bit.ly/c7lUcx #tcot"
    },
    {
      "tweet": "Monster Chiller Horror Global Warming! http://goo.gl/Ziza  have you considered the possibility that your climate models are wrong? #tcot"
    },
    {
      "tweet": "Proof there's no climate change. RT @jazgar 75-ft killer tsunami created in a Peruvian LAKE when a glacier fractures & falls Into the lake!"
    },
    {
      "tweet": "COW FARTS EXONERATED FROM GLOBAL WARMING http://bit.ly/ddsHDe Al Gore sighs HUGE relief....from his rectum #cbiz #tcot #sgp #teaparty #ucot"
    },
    {
      "tweet": "COW FARTS EXONERATED FROM GLOBAL WARMING http://bit.ly/ddsHDe Al Gore sighs HUGE relief....from his rectum #cbiz #tcot #sgp #teaparty #ucot"
    },
    {
      "tweet": "@OTOOLEFAN REAL science. Not Algore's climate change 'science' hacks with their man-made global warming hoax. Gore=Palin"
    },
    {
      "tweet": "30000 Anti-Global Warming Scientists Can't Be Wrong | Stranger ...: Nature Magazine, the academic journal that int... http://bit.ly/beGJE2"
    },
    {
      "tweet": "@junerenner ,get a headache when grandson tells how argued w/teachers about Global warming being big hoax. One threatened to flunk him!"
    },
    {
      "tweet": "@foxandfriends global warming is like the goldman execs... full of sh*t"
    },
    {
      "tweet": "Global Warming Baloney: According to the experts at NASA, the difference between weather and climate is a measure ... http://bit.ly/bnRDwH"
    },
    {
      "tweet": "Your Voice: The fraud of global warming: by Tim Michael Case, Tracy Since the early 1970s, our public school syste... http://bit.ly/cfAprS"
    },
    {
      "tweet": "computer forensics experts: are there still any idiots out there that belive global warming is true? http://bit.ly/aUrimy"
    },
    {
      "tweet": "Liberal Looney Toons: Global Warming Alarmist Comes Home With Artic Frost Bite: Gather.com they wont learn huh? lo... http://bit.ly/9NAECt"
    },
    {
      "tweet": "Dear Global Warming people: It is 52 degrees in S. CA on 4/23. Heat on. [contents of this message are copyrighted and property of author.]"
    },
    {
      "tweet": "I am freezing still in Southern California. Global warming fanatics, come visit me. Wear a hat, gloves and down jacket."
    },
    {
      "tweet": "@Cubachi you are so on target, Bullshit is even better than the climate change hoax & Gore /Climate change is bullshit #leadersdebate #fact"
    },
    {
      "tweet": "Climate Change Fraud - The Scandal of Solar Power in Spain http://bit.ly/bCu0pA"
    },
    {
      "tweet": "Climate Change Fraud - Global Warming, Ethanol, DDT and ... http://bit.ly/bMPEBB"
    },
    {
      "tweet": "Despite Climategate, LEFT investing heavily in global warming hysteria as new way 2 impose nat'l & international controls on human freedom."
    },
    {
      "tweet": "RT @ClimateDepot: ''Obama does a 3-minute Earth Day video; fails to mention the global warming hoax'' http://bit.ly/bbzwxD"
    },
    {
      "tweet": "#ALMS Let me politely suggest that I DO NOT WATCH MOTORSPORTS TO BE LECTURED ON IMAGINARY GLOBAL WARMING! #nascar"
    },
    {
      "tweet": "Someone go tell the Climate Change crowd to go hang, after they read this: http://bit.ly/bPTxBZ #tcot"
    },
    {
      "tweet": "Gagnon, like most liberals you have been duped by the global warming, socialist propaganda. http://bit.ly/ap10io"
    },
    {
      "tweet": "I believe that Global Warming is an international conspiracy perpetrated by GE in order to sell more air conditioners"
    },
    {
      "tweet": "UN process in danger unless world agrees on climate change - Telegraph http://bit.ly/aYM2XM GLOBAL WARMING IS A FRAUD FOR WORLD GOVERNMENT"
    },
    {
      "tweet": "Does Virginia's Governor Believe In Global Warming? http://www.paltalknewsnetwork.com/node/2863 #virginia #northrupgrumman"
    },
    {
      "tweet": "@SenatorReid Calls @GrahamBlog's Bluff On Climate Change: 'It's Up To You\" ( http://bit.ly/d789Yr ) #p2"
    },
    {
      "tweet": "Reid To Graham On Climate Change: 'It's Up To You' http://bit.ly/doMNLK"
    },
    {
      "tweet": "What do you know about climate change? Test your knowledge with the following 10 questions @change http://tinyurl.change.org/wPPas"
    },
    {
      "tweet": "RT @sponsorpitch: Shell's Climate Change #Sponsorship Causes Blogosphere Meltdown http://bit.ly/a1RLnx #museums"
    },
    {
      "tweet": "What do you know about climate change? Test your knowledge with the following 10 questions @change http://tinyurl.change.org/wPPas"
    },
    {
      "tweet": "Global warming you tube explanation you will enjoy #IPCC #teaparty http://is.gd/bLp94"
    },
    {
      "tweet": "Funny how timely oil spill in Gulf and new AZ law have pushed climate change bill away and drawn forth immigration reform."
    },
    {
      "tweet": "Announcement: SPR Principal Jeff Gracer to Moderate Panel on Climate Change at New York City•A_ http://goo.gl/fb/63w2E"
    },
    {
      "tweet": "Tom Switzer: Australia's Changing Climate-Change Climate http://on.wsj.com/duzwtK"
    },
    {
      "tweet": "Kindling Controversy: Hansen, McKibben, Revkin & Lomborg of climate change gurus at The Met in NYC 8pm Thurs 4/29/10 http://bit.ly/ddyCu0"
    },
    {
      "tweet": "I uploaded a YouTube video -- MaximsNewsNetwork: ENERGY & CLIMATE CHANGE: U.N.'s BAN KI-MOON (UNTV) http://youtu.be/4lt--jpqFoE?a"
    },
    {
      "tweet": "Climate change you tube animation you will like #IPCC #gop http://is.gd/bLp94"
    },
    {
      "tweet": "RT @tweetdrudge Reid set to move on climate change bill -- before immigration... http://cli.gs/HmWzy #tcot"
    },
    {
      "tweet": "Asking Your Own Man 100 Questions To Discover The Answers You Want ...: ... Climate Change, clinical trials collag... http://bit.ly/cTOSE4"
    },
    {
      "tweet": "Attending the Secretary-General•A_s press conference to present the report of his Advisory Group on Energy and Climate Change"
    },
    {
      "tweet": "Meeting Dr. Sultan Al-Jaber, Assistant Foreign Minister, United Arab Emirates and Special Envoy for Energy and Climate Change"
    },
    {
      "tweet": "Should You Removal That Mole? : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art,... http://bit.ly/aUSLxG"
    },
    {
      "tweet": "Making remarks at launching of report by his Advisory Group on Energy and Climate Change (AGECC) •A_ Energy for Development..."
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate http://bit.ly/9Oz6GS"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate http://bit.ly/9Oz6GS"
    },
    {
      "tweet": "Discussions on Indigenous Women and Climate Change at the UN http://ht.ly/1DRGh"
    },
    {
      "tweet": "Politico story on the state of play in DC re climate change and #immigration http://ow.ly/1DOLJ Bottom line: #immigrants r being backstabbed"
    },
    {
      "tweet": "The choice that won•A_t change the world, and the one that might http://bit.ly/9e44mX (Youth Climate Mvmt)"
    },
    {
      "tweet": "At new school climate change panel, heritage's David Kreutzer just asked audience to wait 3 mins before throwing water bottles at him"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate http://url4.eu/2zjaA"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate http://url4.eu/2zjaJ"
    },
    {
      "tweet": "Memo On The White House Correspondents Dinner: If You Want To Be Green, Report On Climate Change: I'd never be on... http://huff.to/97a46H"
    },
    {
      "tweet": "Geological Society of America Position Statement on Climate Change  http://bit.ly/aNt7PO"
    },
    {
      "tweet": "Global warming dirt-carbon peril models are wrong, say boffins|Greenhouse experiments show reduced greenhouse .. http://oohja.com/xbKVE"
    },
    {
      "tweet": "CLIMATE CHANGE: No Deal in Sight, Say Leading Economies of the South: CAPE TOWN, Apr 26 (IPS) - Environment minist... http://bit.ly/ba2uEQ"
    },
    {
      "tweet": "Senior Technical Advisor: Communities and Climate Change, Environment and Development, New York @UNjobs #jobs http://p11.org/WYzTrbA"
    },
    {
      "tweet": "Survey gauges opinions about global warming|Dan Reiland UW-Eau Claire students displayed posters Monday afternoon .. http://oohja.com/xbJpp"
    },
    {
      "tweet": "Survey gauges opinions about global warming|Dan Reiland UW-Eau Claire students displayed posters Monday afternoon .. http://oohja.com/xbJkD"
    },
    {
      "tweet": "Views on Global Warming Vary in Three Countries|(Angus Reid Global Monitor) - People in three countries hold .. http://oohja.com/xbJ7i"
    },
    {
      "tweet": "Views on Global Warming Vary in Three Countries|(Angus Reid Global Monitor) - People in three countries hold .. http://oohja.com/xbJ2b"
    },
    {
      "tweet": "The choice that won•A_t change the world, and the one that might http://bit.ly/9e44mX (Youth Climate Mvmt)"
    },
    {
      "tweet": "Connecticut buys into global warming, but some Senate candidates do not|One might assume that, regardless of .. http://oohja.com/xbIwF"
    },
    {
      "tweet": "Connecticut buys into global warming, but some Senate candidates do not|One might assume that, regardless of .. http://oohja.com/xbIpx"
    },
    {
      "tweet": "RT @NROcorner: Legislative Steamrolling -- By: Kathryn Jean Lopez: April 26 (Bloomberg) -- Immigration and climate-change legisl... http://bit.ly/dCSxsW"
    },
    {
      "tweet": "(AFX UK Focus) 2010-04-26 20:41 SCENARIOS-Challenges to California climate change law: By Peter Henderson http://bit.ly/9MSEOO"
    },
    {
      "tweet": "True RT @drgrist: Larry Shapiro is astute Why immigration reform is getting more traction than climate change in Senate http://bit.ly/cnKDqU"
    },
    {
      "tweet": "SCENARIOS-Challenges to California climate change law: Source: Reuters By Peter Henderson SAN FRANCISCO, April 26 ... http://bit.ly/bo14lU"
    },
    {
      "tweet": "The Climate of Lindsay Graham's Support for Climate Change Legislation Has Changed: Today Lindsey Graham,... http://bit.ly/b1Acp1 #politics"
    },
    {
      "tweet": "Arizona's immigration law, climate change legislation stalling--Which issue should Congress focus on now? Poll: http://bit.ly/9YZMpl"
    },
    {
      "tweet": "Which is next on Capitol Hill: #immigration or #climate change? http://bit.ly/d0eCIX A Place to Call Home http://bit.ly/7K78Ok"
    },
    {
      "tweet": "#pr By noon: FoxNews.com/Gene Koprowski seeks experts re: audit of IPCC climate-change report: http://bit.ly/c0fE4N"
    },
    {
      "tweet": "Climate change bill stalls amid epic immigration sortie: http://bit.ly/bNZC1q"
    },
    {
      "tweet": "CNN: Graham's exit puts climate change bill in limbo: A climate-change bill that was scheduled to be unveiled at a... http://bit.ly/cWHcZx"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo http://tinyurl.com/37zkgam"
    },
    {
      "tweet": "Legislative Steamrolling -- By: Kathryn Jean Lopez: April 26 (Bloomberg) -- Immigration and climate-change legisl... http://bit.ly/dCSxsW"
    },
    {
      "tweet": "Watching &gt;&gt; RT @genosworld Sting and his wife talk to CNN about climate change. http://bit.ly/cO7ntm"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo http://flne.ws/24171449 on Fluent News"
    },
    {
      "tweet": "reflections of a rebel: CLIMATE CHANGE AND SOCIAL JUSTICE TOWARDS ...: The more familiar image of green capitalism... http://bit.ly/c2kACY"
    },
    {
      "tweet": "Legislative Steamrolling -- By: Kathryn Jean Lopez: April 26 (Bloomberg) -- Immigration and climate-change legisl... http://bit.ly/dCSxsW"
    },
    {
      "tweet": "Legislative Steamrolling -- By: Kathryn Jean Lopez:  April 26 (Bloomberg) -- Immigration and climate-change legisl... http://bit.ly/9h4OE4"
    },
    {
      "tweet": "cnnbrk: Graham's exit from talks puts climate change bill in limbo http://on.cnn.com/cG18SD  via @YoTwits #cnnbrk"
    },
    {
      "tweet": "Climate scientists get hate mail, abuse|E-mails brimming accusing them of fabricating global warming data flood .. http://oohja.com/xbFlL"
    },
    {
      "tweet": "Why the GOP's Graham Put the Kibosh on a Climate Bill: Even the industry-friendly Senate global-warming legislatio... http://bit.ly/bGSOm0"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo: A climate-change bill that was scheduled to be unveiled at a news... http://bit.ly/bME9KO"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... http://bit.ly/c7I58s"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... http://bit.ly/dmbd8y"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo http://tinyurl.com/3y3mrsc"
    },
    {
      "tweet": "Obama Politics: Pushing Immigration Reform, Sidelining Climate Change: About - News & Issues (blog) Who regularly ... http://bit.ly/bSjOGA"
    },
    {
      "tweet": "Tea Party With a Difference: ... climate change really hits will come with instructions in Chinese. Go Green Tea ... http://nyti.ms/dyWFV6"
    },
    {
      "tweet": "US Climate change bill stalls in Senate http://goo.gl/fb/bdMK6 #energy"
    },
    {
      "tweet": "Gawker: Logic Report: Lindsey Graham's Climate Change Bill Flip-Flop [Polidicks] http://bit.ly/acoSd7 #news"
    },
    {
      "tweet": "Logic Report: Lindsey Graham's Climate Change Bill Flip-Flop [Polidicks] http://bit.ly/9uVjvu"
    },
    {
      "tweet": "Passing Any Legislation At All Will Kill the Climate Change Bill: http://wp.me/pibxO-CX"
    },
    {
      "tweet": "Portfolio Lighting Delivers Broad Assortment Lighting For The Home ...: ... Climate Change, clinical trials collag... http://bit.ly/c0y605"
    },
    {
      "tweet": "New delay in Senate climate change bill http://bit.ly/98JMQu"
    },
    {
      "tweet": "The Sunday Word: Energy: Lawmakers decided to delay the unveiling of their bipartisan climate change and energy b... http://nyti.ms/9encpz"
    },
    {
      "tweet": "Decision Time •A_ UK Election & Climate Change http://trim.li/nk/1O4w via @WiretapMagazine"
    },
    {
      "tweet": "Peoples World: GRAND RAPIDS, Mich. - Opponents of climate change legislation typically argue that regulating globa... http://bit.ly/cjAvcG"
    },
    {
      "tweet": "Graham Threatens to Pull Energy Bill Sponsorship: Senator Lindsey Graham, a central architect of a climate change... http://nyti.ms/de18G5"
    },
    {
      "tweet": "cnnbrk: Sen. Graham's move imperils Dems' push for immigration, climate change bills. http://on.cn..  via @YoTwits #cnnbrk"
    },
    {
      "tweet": "Cafe Scientifique presents global warming talk, film|The April Cafe Scientifique presentation will be on the .. http://oohja.com/xbx1H"
    },
    {
      "tweet": "Survey Finds US Doesn't Give a ***** About Climate Change: A new survey conducted by HSBC finds that in cities aro... http://bit.ly/9mHgzH"
    },
    {
      "tweet": "Cafe Scientifique presents global warming talk, film|The April Cafe Scientifique presentation will be on the .. http://oohja.com/xbwXB"
    },
    {
      "tweet": "Best Core Exercise: Plank/Back Extension - Gaiam Blog: affirmation burn-calories change climate change diet energy... http://bit.ly/bT08pM"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart|Earth Day is over. Or is it? Thousands of conscious actions took place .. http://oohja.com/xbvkr"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart http://www.huffingtonpost.com/alexia-parks/global-warming-of-the-hea_b_549700.html"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart|Earth Day is over. Or is it? Thousands of conscious actions took place .. http://oohja.com/xbvfc"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of consc... http://huff.to/9Xw7kP"
    },
    {
      "tweet": "Alexia Parks: Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of consc... http://huff.to/bzVUns"
    },
    {
      "tweet": "Survey Finds US Doesn't Give a Shit About Climate Change: http://digg.com/d31PJ5V?t"
    },
    {
      "tweet": "RT @Public_Citizen here's where to start the talk about climate change http://is.gd/bFj8k http://bit.ly/amKY33"
    },
    {
      "tweet": "Webb Touts Global Warming Department|LITTLE ROCK - The Arkansas lawmaker who authored legislation that created .. http://oohja.com/xbtMV"
    },
    {
      "tweet": "Webb Touts Global Warming Department|LITTLE ROCK - The Arkansas lawmaker who authored legislation that created .. http://oohja.com/xbtJ3"
    },
    {
      "tweet": "Climate Bill Drops on Monday -- Or Not: The long-awaited Senate climate change bill being brokered by Senators Ker... http://bit.ly/dbbdtB"
    },
    {
      "tweet": "RT @TribecaFilmFest: RT @jpatricof: @jessicaalba and sebastian copeland at premiere of climate of change right now #tribeca"
    },
    {
      "tweet": "Climatologists, Meteorologists Divided on Global Warming http://bit.ly/bm1Xil"
    },
    {
      "tweet": "Climate science's chinese whispers: The books that separate global warming fact from fiction|The culture shock of .. http://oohja.com/xbqa9"
    },
    {
      "tweet": "Don Blankenship Calls Efforts On Mine Safety Regulation 'As Silly As Global Warming' http://huff.to/8ZIAcu"
    },
    {
      "tweet": "RT @MediaFixBlog: If you missed report on U.S. news groups working together on climate change project.  http://www.journalism.co.uk/2/articles/538378.php"
    },
    {
      "tweet": "Sarah Palin On Climate Change http://bit.ly/7ZvxVH #earthday"
    },
    {
      "tweet": "Don Blankenship Calls Efforts On Mine Safety Regulation 'As Silly As Global Warming': At his Labor Day anti-union... http://huff.to/9T3pkh"
    },
    {
      "tweet": "#Global warming vs Shangri-la? http://bit.ly/bQsE92"
    },
    {
      "tweet": "CLIMATE: Top coal execs to testify before global warming panel http://bit.ly/9A3LhC"
    },
    {
      "tweet": "WaterSISWEB: Integrated Regional Water Management Climate Change Document Clearinghouse http://bit.ly/d1d6jK"
    },
    {
      "tweet": "CLIMATE: Top coal execs to testify before global warming panel http://bit.ly/9A3LhC"
    },
    {
      "tweet": "In with Immigration, Out with Climate Change? http://j4lqw.tk Via @firedoglake"
    },
    {
      "tweet": "2009: year in which sceptics stole running on climate change|Australian business could show our politicians the .. http://oohja.com/xboDo"
    },
    {
      "tweet": "Check this video out -- The Business of Climate Change Conference 2009 http://youtu.be/wYuLjGQQ-jg  #transition"
    },
    {
      "tweet": "RT @yvettethijm: RT @boingboing Video: Larry Brilliant on the volcano and climate change - Boing Boing http://bit.ly/awYZnD"
    },
    {
      "tweet": "Earth Day at 40: The Politics Finally Erupt: http://www.care2.com/causes/global-warming/blog/earth-day-at-40-the-politics-finally-erupt/"
    },
    {
      "tweet": "Paul Rogat Loeb: \"'Soul Of A Citizen': Jesus And Climate Change - The Journey Of Evangelical Leader Rich Cizik\" - http://bit.ly/94ubU4 #p2"
    },
    {
      "tweet": "Climate-Change Bill Avoids ?Cap-and-Trade? Tag in U.S. Senate|April 22 (Bloomberg) -- When Tea Party activists .. http://oohja.com/xbn9Y"
    },
    {
      "tweet": "CLIMATE: Top coal execs to testify before global warming panel http://goo.gl/fb/r0Fzd #cleantech"
    },
    {
      "tweet": "RT @dbiello: US climate change negotiating plans revealed! http://bit.ly/drXdvA if doc left behind on a copy machine can be believed"
    },
    {
      "tweet": "Overheard: from Carol Browner, Assistant to the President for Energy and Climate Change - She mentioned that... http://tumblr.com/xul8j2mvs"
    },
    {
      "tweet": "Maria Rodale: Does Climate Change Exist, and Does It Even Matter?: It amazes me, really, how many different views... http://huff.to/bwnMxR"
    },
    {
      "tweet": "Maria Rodale: Does Climate Change Exist, and Does It Even Matter?: It amazes me, really, how many different views... http://huff.to/cWRRVB"
    },
    {
      "tweet": "Stay Glued to Your Fitness Plan : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip ar... http://bit.ly/dm7C3E"
    },
    {
      "tweet": "Media(ted) discourses and climate change: a focus on political subjectivity and (dis) engagement http://ow.ly/1xp6F"
    },
    {
      "tweet": "RT @grittv: American media isn't putting out much on Climate Change. That's why you should watch GRIT's take!http://digg.com/u1U6aY"
    },
    {
      "tweet": "American media isn't putting out much on Climate Change. That's why you should watch GRIT's take!http://digg.com/u1U6aY"
    },
    {
      "tweet": "RT @pwire: Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... http://pwire.at/bbpL2N"
    },
    {
      "tweet": "RT @pwire: Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... http://pwire.at/bbpL2N"
    },
    {
      "tweet": "RT @pwire: Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... http://pwire.at/bbpL2N"
    },
    {
      "tweet": "Going big: After health care, Democrats still plan legislation on bank reform, climate change and immigration... http://pwire.at/bbpL2N"
    },
    {
      "tweet": "Superb Valentine's Day Gifts For Your Kitchen : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, cli... http://bit.ly/cqbupL"
    },
    {
      "tweet": "John Fugelsang, Climate Change, and Coal Goes Shopping: Gun advocates rallied this week in support of their rig... http://bit.ly/9YsENz #p2"
    },
    {
      "tweet": "@hawkeviper so, you are a 'No' then on global warming then and the results of that..."
    },
    {
      "tweet": "Climate change reporting project involves Slate,Wired,PBS,CIR,Atlantic & Mother Jones http://is.gd/bAJ4W Can they satisfy all those editors?"
    },
    {
      "tweet": "Skirmishes renewed at U.N. global warming conference|Climate talks nearly ground to a halt before they began in .. http://oohja.com/xaDjK"
    },
    {
      "tweet": "Skirmishes renewed at U.N. global warming conference|Climate talks nearly ground to a halt before they began in .. http://oohja.com/xaDeO"
    },
    {
      "tweet": "Simple Tips for Shopping for Grooved Tungsten Ring Online : A ...: ... Climate Change, clinical trials collagen, c... http://bit.ly/c82yIo"
    },
    {
      "tweet": "Labour Policies : Environment, Climate Change and Energy Policy: Labour's environment, energy and climate change p... http://bit.ly/c0Sh3L"
    },
    {
      "tweet": "U.N. Climate Panel Gets an 'F': An audit of the United Nations' landmark climate change report gave 21 of the 44 c... http://bit.ly/9nSiqC"
    },
    {
      "tweet": "Climate change and our identity http://bit.ly/cZa58u"
    },
    {
      "tweet": "Climate change and our identity http://bit.ly/cZa58u"
    },
    {
      "tweet": "Brilliant Tips For Valentine's Day : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... http://bit.ly/d8RLpT"
    },
    {
      "tweet": "Via Kevin Drum: Capitalism and Climate Change: Over at the Climate Desk, Clive Thompson writes that althoug... http://bit.ly/aRzOsJ ( #p2 )"
    },
    {
      "tweet": "RT @rabbleca What is the People's World Referendum on Climate Change? http://bit.ly/bC19BA"
    },
    {
      "tweet": "Climate change's 'evil twin' http://ff.im/j9INY"
    },
    {
      "tweet": "RT @WHY_RU_Talking: Itz cold -_- {We could put our bodies together n start global warming}"
    },
    {
      "tweet": "Retro Video Games Consoles For Valentine's Day Gifts : A Screaming •A_O•A_: ... Climate Change, clinical trials collag... http://bit.ly/boTDKL"
    },
    {
      "tweet": "Will the Iceland Volcano Change the Climate?: While volcanoes can cause changes to Earth's climate, recent eruptio... http://bit.ly/bFDX53"
    },
    {
      "tweet": "Tips for Adopting A Canine : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, cl... http://bit.ly/dtxhEs"
    },
    {
      "tweet": "Podcast:unrest in Thailand; Iran's nuclear summit;DC climate change conference ; SASC debates ballistic missile defense http://bit.ly/btzWpV"
    },
    {
      "tweet": "Internet Dating : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clothes, clot... http://bit.ly/cTiHgu"
    },
    {
      "tweet": "As I said only days ago, we will start seeing much more tempered reporting on \"global warming\", starting w the @nytimes http://ow.ly/1zpej"
    },
    {
      "tweet": "Food Lovers Fat Loss System Review : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... http://bit.ly/cZZ80S"
    },
    {
      "tweet": "Watchdog backs DfT climate change advert|A clever television advert claiming car pollution is the worst .. http://oohja.com/xaY9P"
    },
    {
      "tweet": "global warming play decide; info & discussion game|This is a structured discussion in three stages on global .. http://oohja.com/xaXJ5"
    },
    {
      "tweet": "http://bit.ly/10NrOO Labour Policies : Environment, Climate Change and Energy Policy http://bit.ly/9jHJJ1"
    },
    {
      "tweet": "The Tension Set Wedding Rings Can Be Found Styles to Fit Every ...: ... Climate Change, clinical trials collagen, ... http://bit.ly/aCjI0r"
    },
    {
      "tweet": "State climate change regulations face opposition •A_ New Mexico ...: Turner argued that the issue should be addresse... http://bit.ly/crNi0S"
    },
    {
      "tweet": "The Advantages Of Using An Elliptical Cross Trainer Before You Go ...: ... Climate Change, clinical trials collage... http://bit.ly/b6zKpG"
    },
    {
      "tweet": "M-Edge Touring Kindle Sleeve , Yellow | Global Warming Advices http://bit.ly/bf5nUu"
    },
    {
      "tweet": "The Advantages of Owning a Commercial-Grade Treadmill : A ...: ... Climate Change, clinical trials collagen, clini... http://bit.ly/bfVLVn"
    },
    {
      "tweet": "Selecting The Proper Music For The Perfect Valentine's Day : A ...: ... Climate Change, clinical trials collagen, ... http://bit.ly/bvcfF0"
    },
    {
      "tweet": "Key Lessons for Married women looking for Married : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen,... http://bit.ly/9MA04T"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? http://bit.ly/aH1nL5"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? http://bit.ly/aH1nL5"
    },
    {
      "tweet": "How People Are Often finding themselves Waiting In A Long Line To ...: ... Climate Change, clinical trials collage... http://bit.ly/cSs76y"
    },
    {
      "tweet": "Basic Rules To Think About When Beginning A Advertising Campaign ...: ... Climate Change, clinical trials collagen... http://bit.ly/aVbbEs"
    },
    {
      "tweet": "Drilling and Climate Change http://bit.ly/ceM1Lv"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? http://url4.eu/2fREM"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? http://url4.eu/2fREE"
    },
    {
      "tweet": "Gather Info on How to Whiten Teeth : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... http://bit.ly/czfmhd"
    },
    {
      "tweet": "How To Get Your Ex Back : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, cloth... http://bit.ly/deOCME"
    },
    {
      "tweet": "Ask the ministers: climate change and energy election debate | Politics | guar.. http://retwt.me/1MPsp (via @philbealeuk)"
    },
    {
      "tweet": "USA: Climate Change Policy Update - April 12, 2010  http://tinyurl.com/y8ovu2f"
    },
    {
      "tweet": "Questions on Climate Change? Stormfront Has an Answer http://bit.ly/9oyuPD"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "USA: Climate Change Policy Update - April 12, 2010  http://tinyurl.com/y8ovu2f"
    },
    {
      "tweet": "RT @cosmicjester: Best propaganda poster ever. http://twitpic.com/1f9d7u  Modern version - substitute climate change deniers"
    },
    {
      "tweet": "#update garp_erp: Energy News: Energy headlines: Police quiz climate change sceptics •A_ FT BP to press on with http://url4.eu/2ezg3"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "USA: SEC Issues Guidance on Climate Change Disclosures http://tinyurl.com/y8ev7yh"
    },
    {
      "tweet": "UN agrees to host two more rounds of climate change talks before summit in Mexico http://retwt.me/1MOud (via @vthoughts)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Issue 2 of WIREs Climate Change now available FREE online! http://xrl.us/bhgrjo"
    },
    {
      "tweet": "Crunch time for climate change bill - The Hill's E2-Wire http://retwt.me/1MO2t (via @E2Wire)"
    },
    {
      "tweet": "Senators prepare compromise climate change bill - Yahoo! News http://retwt.me/1MO0l (via @pauline_ma)"
    },
    {
      "tweet": "-- Press Releases April 2010 - Climate change negotiators agree on intensified .. http://retwt.me/1MNQO (via @UNEPandYou)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "@SooperMexican Global warming. Clearly."
    },
    {
      "tweet": "@sensible Tornados, Global warming, hurricanes."
    },
    {
      "tweet": "Is climate change a moral issue? What would God say? - Green House - USATODAY.com http://retwt.me/1MNqX (via @wendykoch)"
    },
    {
      "tweet": "Aid News - Copenhagen brought change of climate in Sino-India ties: Ramesh http://retwt.me/1MNge (via @AidNews)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "NPR's Science Friday and Global Warming: http://bit.ly/aC79cZ"
    },
    {
      "tweet": "Visualizations | Climate Change http://retwt.me/1MN08 (via @Revkin)"
    },
    {
      "tweet": "@jiminhofe to Address Global Warming Skeptics at 4th ICCC. http://ow.ly/1FctQ #agw #tcot #tlot #climate"
    },
    {
      "tweet": "GREEN: Climate Change Wyss Fellow - Sierra Nevada Alliance:  http://bit.ly/dmpyRE"
    },
    {
      "tweet": "GREEN: Climate Change Wyss Fellow:  http://bit.ly/aSbzjU"
    },
    {
      "tweet": "Ezra Klein - Sen. Lindsey Graham: 'I care equally about immigration and climate change': http://bit.ly/9FHKfL via @addthis"
    },
    {
      "tweet": "RT @PDofRSD: Climate scientist sues newspaper for 'poisoning' global warming debate | Environment | guardian.co.uk http://bit.ly/bbYRlx #p2"
    },
    {
      "tweet": "PostPartisan - Harry Reid's hapless play on immigration and climate change: http://bit.ly/ak3Dad via @addthis"
    },
    {
      "tweet": "garp_erp: Energy News: Energy headlines: Police quiz climate change sceptics - FT BP to press on with Canada o... http://bit.ly/c2kjcR"
    },
    {
      "tweet": "I never smile, because when I do the sun comes out. 2 combat global warming, I often refrain from having fun. My smile can brighten the day."
    },
    {
      "tweet": "Ways The Difficult Economy has Helped people Focus on Family and ...: ... Climate Change, clinical trials collagen... http://bit.ly/9OIovA"
    },
    {
      "tweet": "Climate Change Bill In Limbo Following White House Push For Immigration Reform: The bill is not dead but it•A_s in E... http://bit.ly/9pbUuP"
    },
    {
      "tweet": "Get Your Dunkin: Workout plan, Tenther, The Simpsons, Macbeth, Wine country Climate Change, Census 2010 http://bit.ly/aFBhlM #p2 #boxing"
    },
    {
      "tweet": ".@PollySigh1 & it has made Frank Luntz talking points on climate change impotent as now the focus is on immigration reform! great job!"
    },
    {
      "tweet": "Lindsey is out.  Only GOP Sponsor Jumps Ship From Obama's Climate Change Bill http://bit.ly/aXFS7N #tcot"
    },
    {
      "tweet": "Veteran #climate activist asks for name change for Earth http://bit.ly/cS2f5I"
    },
    {
      "tweet": "Trigger Numbers Online Roulette Scam : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, cl... http://bit.ly/9pR58f"
    },
    {
      "tweet": "Climate scientist sues newspaper for •A_poisoning•A_ global warming debate http://post.ly/ck8C"
    },
    {
      "tweet": "Climate scientist sues newspaper for •A_poisoning•A_ global warming debate http://bit.ly/ahMa2k"
    },
    {
      "tweet": "Climate scientist sues newspaper for •A_poisoning•A_ global warming debate http://bit.ly/9jugTy"
    },
    {
      "tweet": "POLITICO: Graham's own private climate change - Glenn Thrush - Graham's own private #climatechange: http://bit.ly/9TOtPZ via @addthis"
    },
    {
      "tweet": "Democratic leader moves immigration bill ahead of climate change as a Senate priority: WASHINGTON (AP) •A_ Senate Ma... http://bit.ly/9vGUlB"
    },
    {
      "tweet": "Keeping A Migraine At Bay : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clo... http://bit.ly/ake2zo"
    },
    {
      "tweet": "RT @GClugo: RT @guardianscience Climate scientist sues newspaper for 'poisoning' global warming debate http://bit.ly/bk55t0 #p2 #tcot"
    },
    {
      "tweet": "RT @guardianeco #Climate scientist sues newspaper for 'poisoning' global warming debate http://bit.ly/9xfbDA #earthday Happy Earth Day"
    },
    {
      "tweet": "In a half hour, Carol Browner, Assistant to the President for Energy & Climate Change, will answer questions live: http://is.gd/bDGG6"
    },
    {
      "tweet": "Earth Day Live Chat with Carol Browner, Director of the Office of Energy and Climate Change Policy for the Obama Admin  http://bit.ly/dmjdO7"
    },
    {
      "tweet": "Can you hedge against climate change? Read this http://ow.ly/1BeAA @FelixSalmon post. Then look at our weather products http://ow.ly/1BezL"
    },
    {
      "tweet": "how did i wind up on lists called \"global-warming-frauds,\"douchebags-nuff-said,\" and \"dilusional [sic] -ho-s-that-hate\"?"
    },
    {
      "tweet": "Global Warming Fact or Myth? (Daily Green) http://shar.es/mvAfM #globalwarming"
    },
    {
      "tweet": "Kerry releases #climate change law this week. How does it affect the sector? find out by reading The Week In Green Energy http://ow.ly/1zY3u"
    },
    {
      "tweet": "Klein: \"A '50-50' chance that the Senate passes a climate change bill this year?\" http://bit.ly/9jSBCe"
    },
    {
      "tweet": "@andychrism Here's a link to the volcano &lt;--&gt; global warming story http://tinyurl.com/yycupus"
    },
    {
      "tweet": "@andychrism Yes. I have heard at least one person make the connection between the volcano and global warming."
    },
    {
      "tweet": "@brysown1 I think it will be \"The Man that controls global warming is racist\"."
    },
    {
      "tweet": "What I Leaned This Week: Global warming, famine, nuclear annihilation - no threat to humanity is more dangerous than the Double Down."
    },
    {
      "tweet": "Calif. Trucking Assn. joins fight to suspend state's climate-change law. (E&ENewsPM) #climatechange"
    },
    {
      "tweet": "@owillis Birthers. Global warming deniers. Young-earth Creationists. And Neil Armstrong complains about Obama•A_s NASA budget."
    },
    {
      "tweet": "RT @redostoneage: NASAs changing Facts; Guess they thought you wouldnt notice #global warming #climate change #eco http://bit.ly/8XqItD"
    },
    {
      "tweet": "Hill @E2Wire:Crunch time for climate change bill - http://bit.ly/bhtiDx"
    },
    {
      "tweet": "Will Supreme Court nomination bump climate change debate into next year? http://tinyurl.com/yaj6jww #climatechangebill"
    },
    {
      "tweet": "RT @latimesgreen: A religious take on climate change http://goo.gl/fb/sLoJR"
    },
    {
      "tweet": "Great Tom Toles #climate change cartoon: http://bit.ly/bE2CyG #agw"
    },
    {
      "tweet": "A religious take on climate change http://goo.gl/fb/sLoJR"
    },
    {
      "tweet": "One Hot Topic: K-12 Web Sites About Global Warming: By Gail Junion-Metz -- School Library Journal, 5/1/2010 This s... http://bit.ly/aDYd2d"
    },
    {
      "tweet": "A religious spin on climate change.http://c.yolone.com/5146408/co_421/"
    },
    {
      "tweet": "Los Angeles: A religious spin on climate change http://losangeles.cityandpress.com/news/2010/05/01/religious-spin-climate-change"
    },
    {
      "tweet": "RT @ZachBehrens RT @KQED_CapNotes Initiative campaign to suspend global warming law AB32 reports $973K raised... $500k from oil comp Valero"
    },
    {
      "tweet": "Panel Debates Business Cost Of Calif. Global Warming Law|SAN DIEGO ? Panelists debated the economic merits of .. http://oohja.com/xc338"
    },
    {
      "tweet": "@madlyv really, wtf?!  global warming?  : )"
    },
    {
      "tweet": "Does Northrop Bob Grumman McDonnell Believe in Global Warming?: By David Swanson (about the author) Page 1 of 1 pa... http://bit.ly/9FsK05"
    },
    {
      "tweet": "SAARC plans expert group on climate change http://bit.ly/coTaML"
    },
    {
      "tweet": "Libertarians may debate the merits of global warming, but not the worthiness of an emissions market. http://bit.ly/97FFCL"
    },
    {
      "tweet": "Hide the Decline' Global Warming Video Creator Says Mann Backlash Effort to ...: If you try to sweep your problem... http://bit.ly/djflGn"
    },
    {
      "tweet": "Some Advices On How To Avoid Your Partner Getting Involved In ...: ... Climate Change, clinical trials collagen, c... http://bit.ly/b1XjZK"
    },
    {
      "tweet": "Industry Insiders: Michaelangelo L'Acqua, Global Warming: When Michaelangelo L'Acqua first entered the high stakes... http://bit.ly/9hENwN"
    },
    {
      "tweet": "Saving the Hollywood sign; ballot initiatives; Iceland•A_s volcano and global warming http://lat.ms/bLJoTV"
    },
    {
      "tweet": "Saving the Hollywood sign; ballot initiatives; Iceland•A_s volcano and global warming http://lat.ms/bLJoTV"
    },
    {
      "tweet": "Saving the Hollywood sign; ballot initiatives; Iceland•A_s volcano and global warming http://goo.gl/fb/sNLwq"
    },
    {
      "tweet": "Letter: Global warming in God's hands •A_ Knoxville News Sentinel  http://bit.ly/43l8h5"
    },
    {
      "tweet": "Long-term fortune favours the brave on climate change http://bit.ly/d4WrTQ"
    },
    {
      "tweet": "Dedication And Persistence Necessary For Homegrown Hydroponics : A ...: ... Climate Change, clinical trials collag... http://bit.ly/cqOlLt"
    },
    {
      "tweet": "news break story  -  Reid set to move on climate change bill ahead of immigration http://bit.ly/cBLtYX"
    },
    {
      "tweet": "Global warming retreat •A_ except for California's government: The state air board in its wisdom continues to advanc... http://bit.ly/avn9k1"
    },
    {
      "tweet": "Only 12% of Americans Are Very Worried About Global Warming. E.P.A. Makes Its Case on Climate Change - http://nyti.ms/dkl0en"
    },
    {
      "tweet": "Immigration reform and climate change: A tale of two issues in the Senate http://su.pr/7LaoFD"
    },
    {
      "tweet": "Environmental Groups Praise BASIC Meeting on Climate Change: Environmental groups are giving qualified praise to a... http://bit.ly/aO6Kn0"
    },
    {
      "tweet": "Environmental Groups Praise BASIC Meeting on Climate Change: Environmental groups are giving qualified praise to a... http://bit.ly/aO6Kn0"
    },
    {
      "tweet": "(UIY) Kerry: Action on climate bill remains likely (AP): AP - The Democratic sponsor of climate change legisl... http://bit.ly/ds3v2O"
    },
    {
      "tweet": "Immigration reform and climate change: A tale of two issues in the Senate http://su.pr/7LaoFD"
    },
    {
      "tweet": "GLOBAL WARMING: Is James Cameron a Genocidal Maniac?: by John Nolte Either James Cameron is a genocidal maniac or ... http://bit.ly/binNp0"
    },
    {
      "tweet": "Brooke Shields annoyed with 'global warming doesn't exist' reports http://bit.ly/d8BrRK"
    },
    {
      "tweet": "Q: Should we focus our energy on climate change before immigration? (via @ztf) #GOODasks"
    },
    {
      "tweet": "A Tale of 2 Issues: Why immigration reform is getting more traction than climate change in Senate http://bit.ly/awDdsB HT @Grist #ri4a"
    },
    {
      "tweet": "RT @GOODfeed: Immigration Reform and Climate Change: A Tale of Two Issues in the Senate http://ow.ly/17bSpj"
    },
    {
      "tweet": "Immigration Reform and Climate Change: A Tale of Two Issues in the Senate http://ow.ly/17bSpj"
    },
    {
      "tweet": "Climbing Out Of The Dark: Social Justice Replaces Global Warming!: Climate change hanging on by it's fingernails. ... http://bit.ly/aqe34x"
    },
    {
      "tweet": "I'd like to know who gives a rat's ass if immigration comes before climate change. DO YOUR JOBS regardless of ORDER. #childrenactbetter"
    },
    {
      "tweet": "Brooke Shields Upset With Reports That Global Warming Doesn't Exist http://bit.ly/aFInYX"
    },
    {
      "tweet": "That Actual Provide Utilizing Automatic Global trade Swapping : A ...: ... Climate Change, clinical trials collage... http://bit.ly/aRBLnV"
    },
    {
      "tweet": "Brooke Shields Upset With Reports that Global Warming Doesn't Exist: FOXNews By Hollie McKay The subject of global... http://bit.ly/97GmSD"
    },
    {
      "tweet": "Environmental Economics: Note to Environmentalists Part II: The climate change bill that was supposed to be unveil... http://bit.ly/btOPIX"
    },
    {
      "tweet": "Environmental Economics: Note to Environmentalists Part II: The climate change bill that was supposed to be unveil... http://bit.ly/btOPIX"
    },
    {
      "tweet": "Only a Third of Americans Believe Global Warming is Human-Caused: By Bob Ellis on April 26th, 2010 Good news! What... http://bit.ly/9XGqPB"
    },
    {
      "tweet": "Podcast. Climate Change, Immigration Reform and California http://bit.ly/aWsg41 on To The Point"
    },
    {
      "tweet": "Geoff Jenkins, chairman of the United Nations Intergovernmental Panel on Climate Change http://ping.fm/o1wZy"
    },
    {
      "tweet": "Retuning Of Love : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clothes, clo... http://bit.ly/bfMS9S"
    },
    {
      "tweet": "Fox News Watch Cites Media Research Center Study on Global Warming Coverage http://bit.ly/bpgJt1"
    },
    {
      "tweet": "Fox News Watch Cites Media Research Center Study on Global Warming Coverage: By Kyle Drennen (Bio | Archive) On Sa... http://bit.ly/cEE7IS"
    },
    {
      "tweet": "Graham's exit puts climate change bill in limbo (@cnn) http://bit.ly/8YZ1NB"
    },
    {
      "tweet": "Soccer fever hits Namibia on global warming - by Carlos Kambaekwa: New Era OMUTHIYA - The chairman of the NFA Oshi... http://bit.ly/aCYAaa"
    },
    {
      "tweet": "via @cnnbrk cnnbrk: Graham's exit from talks puts climate change bill in limbo http://on.cnn.com/cG18SD http://ow.ly/17aWHl"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unvei... http://twurl.nl/0ro0hd"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo: A climate-change bill that was scheduled to be unveile... http://bit.ly/dmbd8y"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo http://ow.ly/17aWdx"
    },
    {
      "tweet": "ADVENTURES IN EPISTEMIC OPENING: Mark Levin vs Jim Manzi on Global Warming: The fancy phrase •A_epistemic closure•A_ m... http://bit.ly/cKfL0U"
    },
    {
      "tweet": "Senate dispute puts climate legislation on hold|Associated Press WASHINGTON ? Long-awaited climate change .. http://oohja.com/xbEh4"
    },
    {
      "tweet": "Global warming: The Oxburgh Inquiry was an offer he couldn't refuse.: When Lord Oxburgh was requested to chair the... http://bit.ly/bTBuq9"
    },
    {
      "tweet": "Gawker: Logic Report: Lindsey Graham's Climate Change Bill Flip-Flop [Polidicks]: •A_ http://bit.ly/cGr6UV"
    },
    {
      "tweet": "A Simple Guide To Head Shaving : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art... http://bit.ly/9VfRCV"
    },
    {
      "tweet": "(UIY) Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was ... http://bit.ly/9oBCRS"
    },
    {
      "tweet": "(UIY) Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was ... http://bit.ly/cJlXu6"
    },
    {
      "tweet": "Climate Bill Placed on Hold Over Senate Dispute|WASHINGTON -- Long-awaited climate change legislation was put on .. http://oohja.com/xbzIK"
    },
    {
      "tweet": "Americans Dont Give A **** About Global Warming, Survey Says: Retail investors from cities other than in the US fe... http://bit.ly/aIPLJY"
    },
    {
      "tweet": "Will Indigenous People Be Included in UN Climate Change Policies? http://bit.ly/bqWPfn"
    },
    {
      "tweet": "via @cnnbrk cnnbrk: Sen. Graham's move imperils Dems' push for immigration, climate change bills. http://on.cnn.com... http://ow.ly/17afJp"
    },
    {
      "tweet": "THR: Climate bill gives polluter and nuclear breaks - WASHINGTON (Reuters) - The U.S. climate change bill expected ... http://ow.ly/17acnj"
    },
    {
      "tweet": "Global Warming: The New Ombudsman? | Eurasia Review: By Sonali Huria for IPCS Global warming has purportedly put t... http://bit.ly/dyvNuZ"
    },
    {
      "tweet": "@WordtotheBrides Just read your blog! And 1) Awesome 2) Who holds a climate change conference in Cancun?"
    },
    {
      "tweet": "Brochure on Global Warming 1992: Brochure on Global Warming 1992 added by: neham 0 comments http://bit.ly/bbxgVF"
    },
    {
      "tweet": "Global Warming of the Heart: Earth Day is over. Or is it? Thousands -- perhaps millions -- of conscious actions t... http://huff.to/a3OCsr"
    },
    {
      "tweet": "THR: Climate bill gives polluter and nuclear breaks - WASHINGTON (Reuters) - The U.S. climate change bill expected ... http://ow.ly/179M6l"
    },
    {
      "tweet": "Fat Loss Program : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip art, clothes, clo... http://bit.ly/93lqRb"
    },
    {
      "tweet": "In climate data, that \"suggests\" global warming, and then the assumption that it is our doing. http://bit.ly/as44kV"
    },
    {
      "tweet": "WASHINGTON - The term Green Movement was not yet in vogue, and there was little talk of combating global warming. http://bit.ly/9lBWqk"
    },
    {
      "tweet": "TFF 2010: Jessica Alba, Brian Hill Talk 'Climate of Change' http://bit.ly/9shhJC"
    },
    {
      "tweet": "Natives gather in Bolivia to criticize \"Copenhagen club.\" http://www.bluecorncomics.com/2010/04/climate-change-conference-in-bolivia.htm"
    },
    {
      "tweet": "Money | The Graham-Kerry-Lieberman global warming bill faces a hostile climate ...: World Magazine AP/Photo by Har... http://bit.ly/dq4Ptw"
    },
    {
      "tweet": "WASHINGTON - There was no green movement yet and little talk of global warming. http://bit.ly/a3gT4D"
    },
    {
      "tweet": "Check this video out -- George Carlin on Global Warming http://youtu.be/qOOc5yiIWkg"
    },
    {
      "tweet": "RealClearPolitics - Global Warming Panic Attack: With the Senate about to begin a long-awaited debate over energy ... http://bit.ly/bQsUCa"
    },
    {
      "tweet": "RT @Earth_News: Guardian: Climate scientist sues newspaper for 'poisoning' global warming debate http://bit.ly/bk55t0"
    },
    {
      "tweet": "Live #ChapmanU Climate Conference:  Exciting! Climate debate coming up at 4:30.  Causes pf climate change?   http://bit.ly/9Dg5oZ #CUBeyond"
    },
    {
      "tweet": "Looks like some ppl just gave some more $fuel$ to slow down the California global warming law #AB32. http://bit.ly/9lyXFj"
    },
    {
      "tweet": "In November of 2008, I really wouldn't have predicted that immigration reform might move before climate-change legislation. /via @ezraklein"
    },
    {
      "tweet": "Global warming probability poll update: OCRegister (blog) And my favorite: 39 times as many people believe our bel... http://bit.ly/da36uw"
    },
    {
      "tweet": "RT @LAist: Photos: Protesters Take on Valero Over Initiative that Would Change California's Landmark Climate Bill: http://bit.ly/cLllUE"
    },
    {
      "tweet": "LAist| Protesters Take on Valero Over Initiative that Would Change California's Landmark Climate Bill: •A_•A_•A_•A_•A_•A_•A_For ... http://bit.ly/d3bdPr"
    },
    {
      "tweet": "Co-host Meredith Vieira talking about global warming on NBC•A_s Today , January 8, 2007. http://bit.ly/bItzbs"
    },
    {
      "tweet": "[CAMPAIGN] ASA dismisses complaints against DfT climate change ad: LONDON - The Advertising Standards Authority (A... http://bit.ly/at6G0n"
    },
    {
      "tweet": "RT @globetrottgirl I'm doing my part in contributing to both global warming and depletion of the ozone layer. I'm hot and sometimes, I fart."
    },
    {
      "tweet": "From The Christian Post: Methodist clergy listens to members on climate change. http://bit.ly/95wK9O"
    },
    {
      "tweet": "**PLS SMILE, OK?** Climate change and human health studied: BETHESDA, Md., April 22 (UPI) -- The US National Insti... http://bit.ly/dvzWKl"
    },
    {
      "tweet": "#climate of Change @tribeca film festival and on demand. #earthday #p2 http://bit.ly/bMQgOt"
    },
    {
      "tweet": "[BRANDREP] ASA dismisses complaints against DfT climate change ad: LONDON - The Advertising Standards Authority (A... http://bit.ly/awuOKV"
    },
    {
      "tweet": "Climate scientist sues newspaper for 'poisoning' global warming debate: Andrew Weaver with the IPCC's 2007 report ... http://bit.ly/bjpymP"
    },
    {
      "tweet": "State anti-global warming bill probably dead http://bit.ly/9DqJiX"
    },
    {
      "tweet": "Don't be swayed by distraction of climate change, treat Earth responsibly. #EarthDay"
    },
    {
      "tweet": "Global Warming : Fiction or fact?: Deniers claim either that there is no global warming, or that it is not due to ... http://bit.ly/c2ANla"
    },
    {
      "tweet": "RT @TheBCast: The B-Cast Interview: Minnesotans for Global Warming' Fight YouTube Takedowns http://ow.ly/178ywU"
    },
    {
      "tweet": "State's Global Warming Bill May Not Have Votes to Pass: MADISON, Wis. (WTAQ) - There might not be enough votes in ... http://bit.ly/aslseK"
    },
    {
      "tweet": "RT @PIPIL4LIFE: Solar activity and climate change http://www.tmgnow.com/repository/solar/lassen1.html"
    },
    {
      "tweet": "Video: Larry Brilliant on the volcano and climate change http://bit.ly/bPBwq8"
    },
    {
      "tweet": "Global warming bill likely dead: By Jason Stein and Patrick Marley of the Journal Sentinel Madison •A_ A bill to cut... http://bit.ly/9SwlPf"
    },
    {
      "tweet": "Fishing from the Other Side of the Boat (Creation Sunday Sermon on Christianity and Global Warming) http://ow.ly/1B49N"
    },
    {
      "tweet": "Getting into Hot Water: Evangelicals and Global Warming: by Benjamin B. Phillips Since 2000 various evangelical gr... http://bit.ly/a3NFsV"
    },
    {
      "tweet": "Global Warming = Mobile Phones? http://bit.ly/9p1EQ0"
    },
    {
      "tweet": "Betting on climate change http://bit.ly/bI3hjG"
    },
    {
      "tweet": "Volcanic Eruptions Global Warming:: Lacerta knew he imperforate to go to milwaukee to suavely be centrifugal to er... http://bit.ly/aGf3cW"
    },
    {
      "tweet": "Wed 4/21 #ChapmanU Climate Change confab opens w/film nite at Knott Studios, 7pm: Into the Arctic, Living Sea. Free. http://bit.ly/d5V8Dp"
    },
    {
      "tweet": "Opponents ramp up effort to delay Calif. global warming law http://bit.ly/9eOUGM"
    },
    {
      "tweet": "How many are aware of the World People's Conference On Climate Change and Earth Rights in Bolivia #EarthWeek #Indigenous #1stNations"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it http://lat.ms/cwIF6b"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it http://lat.ms/cwIF6b"
    },
    {
      "tweet": "OK, that last part was a joke, but here is the latest ranking for the UN Climate Change panel.  http://tinyurl.com/y2htvtz"
    },
    {
      "tweet": "Sorry I won't be able to accept the invitation to be a panelist at Bolivia Climate Change Talks http://tinyurl.com/y6ezeaw"
    },
    {
      "tweet": "Iceland Volcano Vs. Alternative Energy and Global Warming (FSLR, PBW, PEIX) http://bit.ly/b10Y96"
    },
    {
      "tweet": "RT @latimes: Foes of California's global warming law pour money into a campaign to delay it http://lat.ms/bSpqIX"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it http://lat.ms/bSpqIX"
    },
    {
      "tweet": "RT @ sharifkouddous Indigenous groups from across Bolivia arriving at World People's conference on climate change http://twitpic.com/1gtfje"
    },
    {
      "tweet": "effects of global warming •A_ We Are God's Caretakers by Cory L. Kemp: An Inconvenient Truth, the documentary and bo... http://bit.ly/9mYR9m"
    },
    {
      "tweet": "Dollars, Sense and Climate Change http://getu.in/8pm-"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it http://lat.ms/94MdLJ"
    },
    {
      "tweet": "Foes of California's global warming law pour money into a campaign to delay it http://goo.gl/fb/Mn3Q8"
    },
    {
      "tweet": "Global Warming Bill Expected Next Monday: Senators John Kerry, Lindsey Graham and Joseph Lieberman are expected to... http://bit.ly/dkJiqP"
    },
    {
      "tweet": "Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes ... http://bit.ly/9PN5oF"
    },
    {
      "tweet": "Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes ... http://bit.ly/9PN5oF"
    },
    {
      "tweet": "#KCRW GoodFood Blog: Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes http://bit.ly/cdq1ZJ"
    },
    {
      "tweet": "Great article  http://www.thenation.com/doc/20100503/hari  google methane deposits, global warming"
    },
    {
      "tweet": "Commonsense & Wonder: Global warming needed here: http://www.wunderground.com/cgi-bin/findweather/getForecast?quer... http://bit.ly/bSjbWu"
    },
    {
      "tweet": "Global Warming Science: Global Warming Summary. The Summary [updated 2009/08/16]. The Simplified \" Nutshell\" [upda... http://bit.ly/aP1xII"
    },
    {
      "tweet": "Contra Costa Times editorial: Assess global warming with uncensored science ...: THE DEBATE over global warming ha... http://bit.ly/9ehI0Z"
    },
    {
      "tweet": "Global warming: Balancing quotes: There are some who are saying that because the Oxburgh inquiry didn't come back ... http://bit.ly/9XiQNo"
    },
    {
      "tweet": "Ben Bova: In the news ... global warming, stock market and Earth Day: By BEN BOVA One swallow does not a summer ma... http://bit.ly/aTrkc8"
    },
    {
      "tweet": "PODCAST: Recycling Water; Meat and Global Warming; Peanuts; Rare Grapes http://bit.ly/d7YCKu #KCRW's Good Food"
    },
    {
      "tweet": "Climate Change Initiatives http://ow.ly/1zEjO"
    },
    {
      "tweet": "Greenhoof •A_ Blog Archive •A_ From tobacco to climate change ... http://bit.ly/akxgIb"
    },
    {
      "tweet": "Pavley predicts ballot measure will aim to overturn global warming law http://bit.ly/bDPnZ2"
    },
    {
      "tweet": "County disputes global warming: By Laura London, Staff Writer The Otero County Commission had an involved discussi... http://bit.ly/blxlra"
    },
    {
      "tweet": "What Do You Think Of Global Warming? - Find Answers to this Question: Answers to the question, What Do You Think O... http://bit.ly/cPGPAx"
    },
    {
      "tweet": "It looks like a new climate change bill is going to be introduced in the Senate a week from Monday.  Not sure the... http://bit.ly/bGpGgg"
    },
    {
      "tweet": "New strategy for Senate's climate bill leaves out global warming: Global warming policy is no longer driving compr... http://bit.ly/cdQivZ"
    },
    {
      "tweet": "Cuccinelli files motion to force EPA to reopen global warming finding: Virginia Attorney General Ken Cuccinelli ha... http://bit.ly/d8dxzN"
    },
    {
      "tweet": "My mind is not closed re global warming. The opposite. I want evidence on BOTH SIDES presented fairly, so We can judge, not Uncle Gorey."
    },
    {
      "tweet": "What to Do When the Current Climate Change Legislation Threatens to Do More Harm Than Good http://bit.ly/97GSgN"
    },
    {
      "tweet": "Gov. Christie Cuts NJ's Global-Warming Fund: Gov. Chris Christie is taking $65 million, the entire allocation, fro... http://bit.ly/bEYHIb"
    },
    {
      "tweet": "C3: New Mexico's Democrats/Liberals Push Global Warming ...: Read here. Despite the US government temperature data... http://bit.ly/9Ll4YC"
    },
    {
      "tweet": "Global Warming Measurements Don't Account For 'Missing Heat' http://bit.ly/byIM9l"
    },
    {
      "tweet": "Volcanic ash an air traffic-stopper but not a climate or health hazard: Unless there's a big change in the amount ... http://lat.ms/aGCW22"
    },
    {
      "tweet": "Who Cares About Global Warming?: by Jackie Gingrich Cushman In 1971, I joined my parents and older sister in the s... http://bit.ly/d8T9Js"
    },
    {
      "tweet": "The climate is worsening for a debate on global warming: That's why the University of East Anglia's Climate Resear... http://bit.ly/dxxOgU"
    },
    {
      "tweet": "RT @JulesBeaujolais: Hilarious! Complimenti! RT: @expatina: Baked Alakasa: Sarah Palin's Guide To Global Warming    #tcottv"
    },
    {
      "tweet": "Hilarious! Complimenti! RT: @expatina: Baked Alakasa: Sarah Palin's Guide To Global Warming    #tcottv"
    },
    {
      "tweet": "@Heritage Global Warming, Melting Glaciers and Prohibition  http://tinyurl.com/y7rw3y8"
    },
    {
      "tweet": "Don Blankenship: Mine Safety Regulators \"As Silly as Global Warming\" http://bit.ly/bnr4mF"
    },
    {
      "tweet": "Wisconsin's scaled-back global warming bill unveiled | Alternative ... http://bit.ly/d8FFDf"
    },
    {
      "tweet": "@AG_323 ur tweet about #drakeseyebrows causing global warming lol"
    },
    {
      "tweet": "Ditch Cardio for Rapid Fat Loss : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip ar... http://bit.ly/cA5A9v"
    },
    {
      "tweet": "Nice. RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO"
    },
    {
      "tweet": "The most expensive provisions of the governor's global warming task force remain in the new substitute amendment. http://bit.ly/d6yqIU"
    },
    {
      "tweet": "Bring Back The Hair That You Once Had With Nanogen's Nanofibers ...: ... Climate Change, clinical trials collagen,... http://bit.ly/9KA9IF"
    },
    {
      "tweet": "Christie cutting $65 million for global warming prevention: BY TOM HESTER SR. Gov. Chris Christie is taking $65 mi... http://bit.ly/d2OnWj"
    },
    {
      "tweet": "Don Blankenship Called Safety Regulators \"as Silly as Global Warming\" http://ow.ly/173j7l"
    },
    {
      "tweet": "Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' http://huff.to/as7elo"
    },
    {
      "tweet": "US Senators prepare compromise climate change bill http://bit.ly/b9poc3"
    },
    {
      "tweet": "Senators prepare compromise climate change bill | Reuters http://ow.ly/1xlm2"
    },
    {
      "tweet": "Street-corner Global-warming Counsel: Urgh, certain elements of this item in Sunday's Washington Post, •A_Five Myths... http://bit.ly/9Lolme"
    },
    {
      "tweet": "Finding The Right Gifts To Give To Your Wedding Guests : A ...: ... Climate Change, clinical trials collagen, clin... http://bit.ly/as8l8m"
    },
    {
      "tweet": "april showers on us......right now!  feels like winter? Global Warming?"
    },
    {
      "tweet": "Sunday Funnies: Stephen Colbert Moderates Global Warming Debate: By Noel Sheppard (Bio | Archive) In fairness, it ... http://bit.ly/cwzZnP"
    },
    {
      "tweet": "Comedy Central's Stephen Colbert on Tuesday actually moderated a debate about global warming. http://bit.ly/ceVmBm"
    },
    {
      "tweet": "Baby Furniture ? Keeping Baby Safe : A Screaming •A_O•A_: ... Climate Change, clinical trials collagen, clinique, clip... http://bit.ly/ckrIzv"
    },
    {
      "tweet": "THR: Senators prepare compromise climate change bill - WASHINGTON (Reuters) - Six months after introducing a sweepi... http://ow.ly/172wPc"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a \\scam.\\ .. http://oohja.com/xaHnX"
    },
    {
      "tweet": "@bloodless_coup There's a link to Luntz' climate change memo here: http://bit.ly/bnchP1 #p2 #tcot"
    },
    {
      "tweet": "A religious take on climate change http://bit.ly/a6TnDl"
    },
    {
      "tweet": "Minnesotans 4 Global Warming threatened with law suit over \"Hide The Decline\" video.Respond with new vid. http://is.gd/bLy8k @realalexjones"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a \\scam.\\ .. http://oohja.com/xaHnu"
    },
    {
      "tweet": "Global warming conference set Sunday|Robert Bullard, known as the \\Father of Environmental Justice,\\ is a .. http://oohja.com/xc5d9"
    },
    {
      "tweet": "Global warming conference set Sunday|Robert Bullard, known as the \\Father of Environmental Justice,\\ is a .. http://oohja.com/xc58T"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a \\scam.\\ .. http://oohja.com/xaHjo"
    },
    {
      "tweet": "@kennethsilber Doesn't your position assume man-made carbon(2.89% of atmosphere) causes Climate change? Today this is Untenable hypothesis,"
    },
    {
      "tweet": "Where's the Real Roadblock to Climate Change and Clean Energy Legislation in the US? http://bit.ly/dBqhIg"
    },
    {
      "tweet": "Where's the Real Roadblock to Climate Change and Clean Energy Legislation in the US? http://bit.ly/dBqhIg"
    },
    {
      "tweet": "#news Dissecting those 'Overpopulation' Numbers:  Part One ' Population Where?: Is global warming caused by too http://url4.eu/353hM"
    },
    {
      "tweet": "For Greenpeace, 'Cool IT' means sensitivity to climate change, and Cisco is now tops: I know so... http://bit.ly/9vFxAk #greentech #greenit"
    },
    {
      "tweet": "For Greenpeace, 'Cool IT' means sensitivity to climate change, and Cisco is now tops http://zd.net/ahyzhy"
    },
    {
      "tweet": "@i2pi reminds me of this study by NYU prof on temperature and attitudes on climate change http://bit.ly/dwHiGw"
    },
    {
      "tweet": "Still believe in human-caused #Global #Warming? More information exposing the truth. #Hoboken #NJ http://cli.gs/6sY6y"
    },
    {
      "tweet": "RT @charles_baker 3,000 Businesses Create New Ad for Climate Change Action: http://bit.ly/cADHuR (via @FaisalSethi + @DoGoodHQ)"
    },
    {
      "tweet": "EPA Points Out Climate Change Indicators: Public support for climate change legislation appears to be flagging.' P... http://bit.ly/cueEiI"
    },
    {
      "tweet": "Where's the Real Roadblock to Climate Change and Clean Energy Legislation in the US? http://url4.eu/34tFU"
    },
    {
      "tweet": "Where's the Real Roadblock to Climate Change and Clean Energy Legislation in the US? http://url4.eu/34tFS"
    },
    {
      "tweet": "Where's the Real Roadblock to Climate Change and Clean Energy Legislation in the' http://goo.gl/fb/0B6ih #cleantech"
    },
    {
      "tweet": "Climate change you tube animation you will appreciate #climatechange #sgp http://is.gd/bLp94"
    },
    {
      "tweet": "Pew Center on Global Climate Change Releases Report Calling for Federal Leadership on Climate Adaptation http://bit.ly/buyu3l"
    },
    {
      "tweet": "Pew Center on Global Climate Change Releases Report Calling for Federal Leadership on Climate Adaptation http://bit.ly/buyu3l #green #energy"
    },
    {
      "tweet": "Watch Al Gore sweat--and it isn't related to global warming--great questions from Bill O'Reilly's Jesse Waters  http://bit.ly/cp2vJk"
    },
    {
      "tweet": "Letter: Global warming dilemma|Fifty years ago I was teaching and preaching about global warming and its .. http://oohja.com/xc0go"
    },
    {
      "tweet": "Letter: Global warming dilemma|Fifty years ago I was teaching and preaching about global warming and its .. http://oohja.com/xc0bT"
    },
    {
      "tweet": "International climate change liability, cont'd: More whetting of transnational-law appetites, via Mother Jones: \"A... http://bit.ly/dfQUax"
    },
    {
      "tweet": "Global warming: a market proposal even libertarians would love|Libertarians may debate the merits of global .. http://oohja.com/xbZha"
    },
    {
      "tweet": "Global warming: a market proposal even libertarians would love|Libertarians may debate the merits of global .. http://oohja.com/xbZbw"
    },
    {
      "tweet": "RT @gb_Joe: The tolerant left: deny climate change and you'd be guilty of a crime against peace http://bit.ly/aFfkez"
    },
    {
      "tweet": "Plan B: California Braces for Climate Change|California leads its fellow states in mitigating climate change, in .. http://oohja.com/xbYF4"
    },
    {
      "tweet": "At the #PEN talk on climate at Met. @Revkin offers a useful note of realism. Climate change is in our heads-and we need to change our heads"
    },
    {
      "tweet": "@ggreenwald Don't forget Jon Kyl, world's most powerful global warming denier. Maybe 140 character limit kept him off your list."
    },
    {
      "tweet": "Plan B: California Braces for Climate Change: California leads its fellow states in mitigating climate change, in ... http://bit.ly/bkt3jv"
    },
    {
      "tweet": "Plan B: California Braces for Climate Change: California leads its fellow states in mitigating climate change, in ... http://bit.ly/bkt3jv"
    },
    {
      "tweet": "John DeCock: The Secret Plan to Address Climate Change: If I'm lucky, this post will be outdated by the time it c... http://huff.to/a8sMDa"
    },
    {
      "tweet": "Can Global Warming Give You Kidney Stones? How Will Insurance Companies Deal With Rising Temperatures?: It's true... http://huff.to/brgCIm"
    },
    {
      "tweet": "RT @yidwithlid: Nor A Joke US Govt's New Climate Change Claim: Global Warming Causes....Well...EVERYTHING http://is.gd/bLTaY"
    },
    {
      "tweet": "RT @gb_Joe: Global Warming sea level rise? Carbon footprint? Al Gore buys $9 million  estate by ocean http://bit.ly/bZKtRk"
    },
    {
      "tweet": "The tolerant left: deny climate change and you'd be guilty of a crime against peace http://bit.ly/aFfkez"
    },
    {
      "tweet": "Global Warming sea level rise? Carbon footprint? Al Gore buys $9 million  estate by ocean http://bit.ly/bZKtRk"
    },
    {
      "tweet": "Climate-Change Cover-Up Down Under http://on.wsj.com/9oLe9G"
    },
    {
      "tweet": "Yeah, about that Global Warming footprint, Al... You hypocritical jackass."
    },
    {
      "tweet": "@BrittaRiley spoke about http://www.windowfarms.org at last weeks discussion 'Illuminating the Science: Art and Climate Change'."
    },
    {
      "tweet": "Global warming you tube parody you will like #IPCC #gop http://bit.ly/bBGWhC"
    },
    {
      "tweet": "NASA's also up for a Webby Award in Science (Climate Change site). Today is your last chance to vote! http://bit.ly/a0yCo9 (via @NASA)"
    },
    {
      "tweet": "RT @KetyE: Impressions from the Ppl's World Conf 4 Climate Change & the Rights of Mother Earth http://bit.ly/99Rn5X #PWCCC #Cochabamba"
    },
    {
      "tweet": "And why the fuck is it so cold? Fuck you, global warming."
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change - Green Blog - NYTimes.com http://bit.ly/9QoabV #green #climate change #environment"
    },
    {
      "tweet": "Ensure the Participation of Indigenous Peoples in UN Climate Change Policies: http://www.thepetitionsite.com/takeaction/534272577"
    },
    {
      "tweet": "Hide the Decline' Global Warming Video Creator Says Backlash Effort to 'Cleanup' ClimateGate Indiscretion NewsBusters http://bit.ly/aHbbpu"
    },
    {
      "tweet": "http://bit.ly/5ipja China Going Green For Security Reasons | The Global Warming Statistics http://bit.ly/c6r4So"
    },
    {
      "tweet": "RT @Chrissyh_22: Ensure the Participation of Indigenous Peoples in UN Climate Change Policies: http://is.gd/buDZb"
    },
    {
      "tweet": "RT @ClimateCentral: From a fab series of AGU lectures: Matthew Nisbet, \"Framing and Public Engagement on Climate Change\": http://ht.ly/1DFRG"
    },
    {
      "tweet": "Irish LED manufacturer Nualight raises '9.1m in funding round led by Climate Change Capital http://bit.ly/9ege9t"
    },
    {
      "tweet": "Irish LED manufacturer Nualight raises '9.1m in funding round led by Climate Change Capital http://bit.ly/9ege9t"
    },
    {
      "tweet": "RT @UN: SG's Advisory Group on Energy & Climate Change calls for new initiative to bring clean energy to the poor  http://bit.ly/9C0066 #UN"
    },
    {
      "tweet": "SG's Advisory Group on Energy & Climate Change calls for new initiative to bring clean energy to the poor  http://bit.ly/9C0066 #UN"
    },
    {
      "tweet": "Now they say we may go crazy?RT @myfoxnation: Gov't Report Says Global Warming May Cause Mental Illness : A new (cont) http://tl.gd/12h5nr"
    },
    {
      "tweet": "#news Earth Day, Climate Change, and Cochabamba: -Mainstream Green Groups Cave In on Climate-Reclaiming Earth http://url4.eu/31w77"
    },
    {
      "tweet": "More Global Warming Profiteering by Obama Energy Official http://ff.im/-jx0or"
    },
    {
      "tweet": "RT @wilsondasilva: good journalism in The Economist, looking at climate change http://is.gd/bqexR #science #climate #environment #media"
    },
    {
      "tweet": "RT @nytimesbusiness: E.P.A. Makes Its Case on Climate Change http://bit.ly/as7lTs"
    },
    {
      "tweet": "RT @nytimesbusiness: E.P.A. Makes Its Case on Climate Change http://bit.ly/as7lTs"
    },
    {
      "tweet": "Global warming you tube explanation you will like #capandtrade #ocra http://is.gd/bLp94"
    },
    {
      "tweet": "Mother Earth, and other texts adopted by the recent People's Conference on Climate Change in Bolivia http://su.pr/ATeEfr"
    },
    {
      "tweet": "The only time Obama showed his Eyes to the camera He promised \"Energy Cost Will Skyrocket under Climate Change Bill\" Bueller, Bueller ferris"
    },
    {
      "tweet": "Fire Fire the nations on fire your loaded on a freight train but the Climate Change Bill loads you the People like sheep to the slaughter"
    },
    {
      "tweet": "The Open Veins of Climate Change http://su.pr/252poN #Latism @beingLatino @KetyE #Green #climatechange #WCCPC"
    },
    {
      "tweet": "Hey, UN:\"pay more than lip service to the notion that women are the agents of change\" & name a woman to climate chief. http://bit.ly/bb1X4s"
    },
    {
      "tweet": ": The Climate-Change Delay http://www.commentarymagazine.com/blogs/index.php/jillian-melchior/285851"
    },
    {
      "tweet": "RT @Dr912: Stopping Reids Climate Change Is Like Saving The World #tcot  #912 #Teaparty #RNC #GOP #p2"
    },
    {
      "tweet": "Will climate change advance gender equality?  Advancement in \"social dimensions\" in UNFCC talks, according to Tracy Raczek"
    },
    {
      "tweet": "New E.P.A. report on U.S. Climate Indicators. http://green.blogs.nytimes.com/2010/04/27/e-p-a-makes-its-case-on-climate-change/"
    },
    {
      "tweet": "RT @nytimesscience: E.P.A. Makes Its Case on Climate Change http://bit.ly/bqRlWe"
    },
    {
      "tweet": "Irish LED manufacturer Nualight raises '9.1m in funding round led by Climate Change Capital http://url4.eu/31Xrk"
    },
    {
      "tweet": "Irish LED manufacturer Nualight raises '9.1m in funding round led by Climate Change Capital http://url4.eu/31XrI"
    },
    {
      "tweet": "Remember the right-wing furor over leaked climate change emails. Where is their rage over the Goldman Sachs emails?"
    },
    {
      "tweet": "Hmmm. Human activities, global warming...see a connection? : 1905 | Shorpy http://bit.ly/cb4Sc7"
    },
    {
      "tweet": "Brooke Shields Upset that Global Warming Does not Exist: Brooke Shields Upset With Reports that Global Warming Doe... http://bit.ly/aKDM71"
    },
    {
      "tweet": "RT @nytenvironment: E.P.A. Makes Its Case on Climate Change http://bit.ly/c4lwEX"
    },
    {
      "tweet": "CONTRAILS & MAN-MADE CLOUDS CHANGE CLIMATE, HARMING AGRICULTURE:  http://bit.ly/brjTWO (FTSN Social)"
    },
    {
      "tweet": "MIT Sloan Feed: Leading an Environmentally Sustainable Enterprise: Climate change poses perhaps the premiere threa... http://bit.ly/djVwut"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change http://bit.ly/as7lTs"
    },
    {
      "tweet": ": ) @snarkandboobs Why the heck did it get cold all of a sudden? Is Al Gore in town for a Global Warming speech or something?"
    },
    {
      "tweet": "RT @UN: 2 more rounds of climate change talks to be hosted by UN before summit in Mexico  http://bit.ly/btN2fv #UN #news"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change http://bit.ly/95qwi1"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change http://bit.ly/bqRlWe"
    },
    {
      "tweet": "talking about iguanas, I love this vid of frozen iguanas falling out of trees. global warming! http://bit.ly/aAz2Lx"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change: The E.P.A. releases a glossy report to help Americans make sense of clima... http://bit.ly/beCmid"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change: The E.P.A. releases a glossy report to help Americans make sense of clima... http://bit.ly/cPdG4r"
    },
    {
      "tweet": "Climate Change Still Ranks As Top Global Issue http://bit.ly/9DbEv4"
    },
    {
      "tweet": "RT @UN: 2 more rounds of climate change talks to be hosted by UN before summit in Mexico  http://bit.ly/btN2fv #UN #news"
    },
    {
      "tweet": "Climate Change Still Ranks As Top Global Issue http://bit.ly/9DbEv4"
    },
    {
      "tweet": "RT @samboykin: 66% of Hispanics: \"tackling climate change should be a 'high' or 'very high' priority\": http://bit.ly/aFLskA"
    },
    {
      "tweet": "66% of Hispanics: \"tackling climate change should be a 'high' or 'very high' priority\": http://bit.ly/aFLskA"
    },
    {
      "tweet": "Why CO2 projections on Global Warming are false: While projections and predictions on CO2 concentrations in the at... http://bit.ly/d9Ta02"
    },
    {
      "tweet": "EPA Issues Report on U.S. Climate Change Indicators http://bit.ly/bko2Qw"
    },
    {
      "tweet": "U.S. EPA Climate Change Indicator Report http://bit.ly/9Ea6Gp"
    },
    {
      "tweet": "2 more rounds of climate change talks to be hosted by UN before summit in Mexico  http://bit.ly/btN2fv #UN #news"
    },
    {
      "tweet": "RT @funnywhitedog: RT @ipsnews: CLIMATE CHANGE: Forests Not for Absorbing Carbon, Say Activists http://bit.ly/c89JS4 #redd #indigenous"
    },
    {
      "tweet": "Grapes: the best early-warning system for the effects of climate change? @TheAtlantic http://bit.ly/9QYx9f"
    },
    {
      "tweet": "Climate Change Still Ranks As Top Global Issue http://goo.gl/fb/EaWzu #cleantech"
    },
    {
      "tweet": "Climate Change Still Ranks As Top Global Issue http://url4.eu/2zjag"
    },
    {
      "tweet": "Climate Change Still Ranks As Top Global Issue http://url4.eu/2zjaU"
    },
    {
      "tweet": "RT @loveandstyle: http://twitpic.com/1ivple -//INSANE almost May and #Vermont has snow!  Seriously who said Global Warming doesnt exist?"
    },
    {
      "tweet": "Farmers Profit From Raw Milk; Vegetable Carts Not So Lucrative ...: Plus: wine grapes as global-warming barometer,... http://bit.ly/dtvq3K"
    },
    {
      "tweet": "Global Warming & Profiteering in the Obama Administration http://www.pjtv.com/v/3455"
    },
    {
      "tweet": "Factor producer Jesse Watters caught up with former VP Al Gore and talked about global warming.  We'll show you the... http://bit.ly/cJFuBI"
    },
    {
      "tweet": "@xharekx33 That's a good article, though I think the statistics on global warming are actually its weakest link as far as I can see."
    },
    {
      "tweet": "Science!: Whales Fight Global Warming http://tinyurl.com/2vwys8q"
    },
    {
      "tweet": "Brooke's 'Green' Worries: POP TARTS: Shields says she is disturbed by reports that global warming doesn't exist, w... http://bit.ly/cMY7SJ"
    },
    {
      "tweet": "@glennbeck goldman ball sack, sally freddie and global government warming gore tax capstone oil shit."
    },
    {
      "tweet": "@deejaykhalil yeah, racism drugs & sex are no longer problems apparently cuz TV shows only preach to us about global warming now #hcr"
    },
    {
      "tweet": "Global Warming & Guyana's Flood Control Problems! http://guyanaatthecrossroads.blogspot.com/"
    },
    {
      "tweet": "How Cap And Trade Was 'Trashed': Climate-change legislation has suffered a major setback in the Senate, with its key... http://n.pr/ajcBSn"
    },
    {
      "tweet": "New York: NIRI-NY Presents Program on 'Navigating Climate Change Disclosure' http://bit.ly/do2npj"
    },
    {
      "tweet": "UN remains proper platform for climate change talks: De Boer: By Xinhua writer Liu Xiaoyan, Huang Kun BONN, German... http://bit.ly/9czEgo"
    },
    {
      "tweet": "RT @GayaneAdourian: Is global warming causing more volcanoes? (video) http://bit.ly/biH63s #science"
    },
    {
      "tweet": "Kevin Grandia: Winning Webby's for Climate Change: Three top climate change campaigns last year are up for presti... http://huff.to/c0xww0"
    },
    {
      "tweet": "Disastrous Computer Models Predictions From Limits to Growth to Global Warming http://ff.im/-jqwJN"
    },
    {
      "tweet": "Tina Gerhardt: Bolivia 'people's conference' calls for system change, not climate change http://bit.ly/a7JOfE"
    },
    {
      "tweet": "A. Siegel: Scientific Society Revises Climate Change Statement: science advances: For some reason, it seems doubt... http://huff.to/abTvMU"
    },
    {
      "tweet": "Those linking the Miss. tornadoes and #climate change, have we already forgotten #snowpocalypse? Not a winning argument.."
    },
    {
      "tweet": "@Newsweek - emotional climate change here in the US!"
    },
    {
      "tweet": "Arctic adventurers get set to study climate change http://bit.ly/bKSe0d"
    },
    {
      "tweet": "Graham backs out of climate-change coalition http://is.gd/bIqhY Was supp to introduce today--blow to Obozo #tcot #gop #teaparty"
    },
    {
      "tweet": "New post: Cloudy with a Chance of Climate Change (http://bit.ly/asXGjd) http://bit.ly/asXGjd"
    },
    {
      "tweet": "NIRI-NY Presents Program on 'Navigating Climate Change Disclosure' - http://tinyurl.com/y4bm63x #nyc"
    },
    {
      "tweet": "Global Warming: EPA Cover-Up ~ Walter E. Williams:  http://bit.ly/9TlcqK (FTSN Social)"
    },
    {
      "tweet": "WASHINGTON (Reuters) - One of President Barack Obama's top priorities -- tackling global warming -- suffered a sev... http://bit.ly/baCvYl"
    },
    {
      "tweet": "Scary! Could global warming be causing tropical illnesses and bacteria to appear in otherwise non tropical areas of the world?"
    },
    {
      "tweet": "Dems will still push global maybe warming bill: http://bit.ly/aT2kXl via @addthis"
    },
    {
      "tweet": "Obama's climate change agenda in turmoil: http://crotchshotradio.com/2010/04/25/obama's-climate-change-agenda-in-turmoil/ - &lt;i..."
    },
    {
      "tweet": "Decision Time ' UK Election & Climate Change http://bit.ly/bHI1ks (Youth Climate Mvmt)"
    },
    {
      "tweet": "RT @USRealityCheck: Obama's climate change agenda in turmoil: WASHINGTON (AFP) ' http://bit.ly/dBZ5lo raw #US"
    },
    {
      "tweet": "@bryanrwalsh When I read 'I'm all for combating global warming, but,'  hard to keep reading. Wait till next yr and pass carbon tax? Pleeze."
    },
    {
      "tweet": "I'm considering telling my professor that finishing this final paper would poison the well on the climate change bill. #lindseygrahamisatool"
    },
    {
      "tweet": "Charter Of Assembly Of Social Movements Of Global People's Conference On Climate Change http://bit.ly/9uJYmJ by @indigenousissue"
    },
    {
      "tweet": "Climate change scientists turn to Inuits for research: http://digg.com/d31O9N2"
    },
    {
      "tweet": "Millions out to protest global warming... http://tweetphoto.com/12771109 - I found Al Gore! http://tweetphoto.com/12771190 #tcot"
    },
    {
      "tweet": "RT @MarthaStewart: much needed rain is falling-gardens & fields verdant & blooming, but everything's 2 wks ahead of schedule-global warming?"
    },
    {
      "tweet": "RT @RaysFreedomHash: Kuna Indians Prepare For Relocation As Traditional Homes Sink Due To Climate Change http://bit.ly/cEs5qN by @indigenousissue"
    },
    {
      "tweet": "Kuna Indians Prepare For Relocation As Traditional Homes Sink Due To Climate Change http://bit.ly/cEs5qN by @indigenousissue"
    },
    {
      "tweet": "Celebrate Earth Day 2010 by watching \"The Climate Change Rally\" in DC online today (Sunday, April 25). http://tinyurl.com/2da96cc"
    },
    {
      "tweet": "RT @nprscience: Could Cleaner Air Actually Intensify Global Warming? http://n.pr/aJVq8f"
    },
    {
      "tweet": "Twenty Years of Advocacy, Not Journalism, on Global Warming http://bit.ly/cG3pnf"
    },
    {
      "tweet": "Lindsey Graham bails on climate change at the 1st opportunity conveniently avoiding lunatics in his own party who would have come after him."
    },
    {
      "tweet": "Charter Of The Assembly Of Social Movements Of The Global People's Conference On Climate Change ... http://bit.ly/9uJYmJ by @indigenousissue"
    },
    {
      "tweet": "RT @AmericaBlog: Surprsie! Lindsey Graham drops out of climate change talks because Dems want to bring up immig... http://bit.ly/9VOYFP #p2"
    },
    {
      "tweet": "So what do my #sustainable twerps think about Lindsey Graham pulling his support for climate change legislation."
    },
    {
      "tweet": "Eruption of volcano may yield climate change clues  http://bit.ly/9LulI5"
    },
    {
      "tweet": "DK Matai: Are Global Warming, Volcanoes and Earthquakes Linked?|A thaw of ice caps caused by global warming may .. http://oohja.com/xbBL5"
    },
    {
      "tweet": "Decision Time ' UK Election & Climate Change http://bit.ly/bHI1ks (Youth Climate Mvmt)"
    },
    {
      "tweet": "DK Matai: Are Global Warming, Volcanoes and Earthquakes Linked?|A thaw of ice caps caused by global warming may .. http://oohja.com/xbBIv"
    },
    {
      "tweet": "DK Matai: Are Global Warming, Volcanoes and Earthquakes Linked?: A thaw of ice caps in coming decades caused by g... http://huff.to/9EufPr"
    },
    {
      "tweet": "DK Matai: Are Global Warming, Volcanoes and Earthquakes Linked?: A thaw of ice caps in coming decades caused by g... http://huff.to/avcX6b"
    },
    {
      "tweet": "Timeline: 70 Years of Environmental Change: From protecting the bald eagle to the Copenhagen climate talks, enviro... http://bit.ly/drlQgB"
    },
    {
      "tweet": "California Teamsters oppose effort to delay global warming measure|The group is the first major union to .. http://oohja.com/xbAaS"
    },
    {
      "tweet": "California Teamsters oppose effort to delay global warming measure|The group is the first major union to .. http://oohja.com/xbA7D"
    },
    {
      "tweet": "I thought liberals were 4 separation of church & state RT @KatyinIndy WhiteHouse wants churches 2 advance climate change http://is.gd/bGJTK"
    },
    {
      "tweet": "Watching 'Tudors' I see there was global warming during King Henry's monarchy Good thing Al Gore wasn't there!"
    },
    {
      "tweet": "The Church of Climate Change - Yuval Levin - The Corner on National Review Online: http://bit.ly/aeHSkD"
    },
    {
      "tweet": "FOXNews Rino Senator on Climate Change Rips Leftist scumbag Reid for Shifting Focus to Immigration  http://shar.es/muG1l"
    },
    {
      "tweet": "Why are major media downplaying international summit on climate change? #cochabamba http://bit.ly/aVWW4r via @thirstyboots07"
    },
    {
      "tweet": "Climate bill gives polluter and nuclear breaks: WASHINGTON (Reuters) - The U.S. climate change bill expected to be... http://bit.ly/agpZbD"
    },
    {
      "tweet": "Freakonomics: A ClimateGate Victim, and the State of the Global-Warming Problem: A walk though the many angles at ... http://bit.ly/bL1FIp"
    },
    {
      "tweet": "The Church of Climate Change -- By: Yuval Levin: When President Bush created the faith-based office at the White H... http://bit.ly/bSvd8i"
    },
    {
      "tweet": "Greenpeace - Making Waves: The Agreement of the People at the World People's Conference on Climate Change and the ... http://bit.ly/9UuKE6"
    },
    {
      "tweet": "Maybe instead of global warming we should worry about global shaking! Everyone slow down and no more marching in step. No jumprope either."
    },
    {
      "tweet": "Never has a public-policy agenda been pursued with so little regard for scientific fact or for public opinion. The Global-Warming Tax. #tcot"
    },
    {
      "tweet": "Climate warming leaves 'em cold|Harrisburg weatherman Rob Dixon is cool toward dire global warming scenarios.He .. http://oohja.com/xazp2"
    },
    {
      "tweet": "Warming Wins Global Warming War: Kiddo, Florida was nice, but you didn't miss too much. Think: NewYork's waiting r... http://bit.ly/ddi8mS"
    },
    {
      "tweet": "Rebecca Solnit shares The Good News About the Very Bad News (About Climate Change): http://bit.ly/9Gg5Ke  @TomDispatch"
    },
    {
      "tweet": "15-year old speaks about global warming at Palace Theater|Earth Day may have come and gone, but the fight to .. http://oohja.com/xbvQ1"
    },
    {
      "tweet": "15-year old speaks about global warming at Palace Theater|Earth Day may have come and gone, but the fight to .. http://oohja.com/xbvM0"
    },
    {
      "tweet": "@stoplibs silly...elite statists don't cause global warming, it's the great unwashed..."
    },
    {
      "tweet": "PHOTOS: Ten Environmental Losses of 2009: Global Warming Not Going Gently http://bit.ly/c2y2R6"
    },
    {
      "tweet": "Attractive Nuisance: Should Judges Help Tackle Climate Change? - http://is.gd/bFs5D"
    },
    {
      "tweet": "Gazelle Emami: '70 Million Tons' Tackles Climate Change With Comedy: The premise of 70 Million Tons, an off-off B... http://huff.to/9viVef"
    },
    {
      "tweet": "Gazelle Emami: '70 Million Tons' Tackles Climate Change With Comedy: The premise of 70 Million Tons, an off-off B... http://huff.to/bISMds"
    },
    {
      "tweet": "Bad climate change argument watch: Eyjafjallajokull edition http://is.gd/bFlbf"
    },
    {
      "tweet": "ABC Offers Serious Look at Global Warming Skeptics, But Downplays ClimateGate http://is.gd/bFkFN"
    },
    {
      "tweet": "U.S. Bucks World Trend in Lack of Concern for Climate Change http://bit.ly/9grbTA"
    },
    {
      "tweet": "U.S. Bucks World Trend in Lack of Concern for Climate Change http://bit.ly/9q4hEt"
    },
    {
      "tweet": "Progress in Improving Transparency in Environmental Protection and Climate Change in' http://goo.gl/fb/3AhNx #energy"
    },
    {
      "tweet": "Senate Democratic sources now say climate change legislation is unlikely this year... http://pwire.at/aFoExC"
    },
    {
      "tweet": "News Corp Aims To Go Carbon Neutral While Fox News Promotes Climate Change As A Hoax http://huff.to/bKAvrT"
    },
    {
      "tweet": "Mark Levin recommends the Great Global Warming Blunder on The Corner: http://bit.ly/aPxlTL"
    },
    {
      "tweet": "Shaving my beard.. Darn you global warming"
    },
    {
      "tweet": "It's still America down here\": In the midst of a blog thread on global warming some lib troll chided Stacy... http://bit.ly/c5DVdR #tcot"
    },
    {
      "tweet": "This is a WebMemo On Climate Change|The United Nation?s first significant global warming meeting since last .. http://oohja.com/xbu6Q"
    },
    {
      "tweet": "news corp aims to go carbon neutral by the end of the year, while fox news claims climate change is a hoax http://huff.to/9OraM4"
    },
    {
      "tweet": "Whale poo fights global warming! http://is.gd/bF6oT via @yahoonews http://bit.ly/b6TNUF"
    },
    {
      "tweet": "Jake Whitney: On the Hoax of the Climate Change Hoax: Climate change 'skeptics' have been singing a victory song ... http://huff.to/btTGqK"
    },
    {
      "tweet": "Jake Whitney: On the Hoax of the Climate Change Hoax: Climate change 'skeptics' have been singing a victory song ... http://huff.to/cK0e6F"
    },
    {
      "tweet": "Whale poo saves world from global warming|Save the whale, and it'll save you too, say Australian scientists, by .. http://oohja.com/xbtjI"
    },
    {
      "tweet": "Whale poo saves world from global warming|Save the whale, and it'll save you too, say Australian scientists, by .. http://oohja.com/xbtfR"
    },
    {
      "tweet": "New blog post about competing or complementary corporate financial disclosure rules for #climate change liability http://bit.ly/bRJNrY"
    },
    {
      "tweet": "Never has a public-policy agenda been pursued with so little regard for scientific fact or for public opinion. The Global-Warming Tax. #tcot"
    },
    {
      "tweet": "RT @mediamentor: RT @democracy_now: Full coverage of the World Peoples' Summit on Climate Change in Bolivia http://ow.ly/1C3It"
    },
    {
      "tweet": "Full Democracy Now!  coverage of the World Peoples' Summit on Climate Change in Bolivia http://bit.ly/bACATh"
    },
    {
      "tweet": "Bolivia climate conference demands $300B to combat global warming, creation of climate court|TIQUIPAYA, Bolivia - .. http://oohja.com/xbrtX"
    },
    {
      "tweet": "Bolivia climate conference demands $300B to combat global warming, creation of climate court|TIQUIPAYA, Bolivia - .. http://oohja.com/xbroL"
    },
    {
      "tweet": "Either capitalism dies, or Mother Earth dies\" http://is.gd/bEl1G 'Climate Change' true agenda on display #tcot #gop #teaparty"
    },
    {
      "tweet": "climate change as a religious issue: http://tinyurl.com/yekkvfa"
    },
    {
      "tweet": "RT @MMFA: Radio host Sussman: Gore \"doesn't believe in global warming ... he believes in money\": Fro... http://bit.ly/cqyb4Y ( #p2 #media )"
    },
    {
      "tweet": "Homelessness Sucks: Carteret Island Climate Change Refugees http://ow.ly/1C0o2 #earthday"
    },
    {
      "tweet": "@stefanweitz yeha because $50million of a climate change orgs budget is best spent on advertising instead of, you know,fighting climate chng"
    },
    {
      "tweet": "Avatar' Director: Climate Change Great as Any Threat Since WWII http://is.gd/bEe7f Jim, leave reality to others #tcot #teaparty"
    },
    {
      "tweet": "Climate change activists in Bolivia preparing for a different kind of summit http://www.350.org/bolivia @350"
    },
    {
      "tweet": "Global warming alarmists have been discredited, but you wouldn't know it from the rhetoric this Earth Day. http://bit.ly/doS24K #agw"
    },
    {
      "tweet": "Independent Women's Forum tries to suggest there's still a debate to be had as to the legitimacy of climate change. Morons. #p2 #tcot"
    },
    {
      "tweet": "NEW YORK (Reuters) - Residents of major world cities cite climate change as the most pressing global issue, except... http://bit.ly/aW64Bo"
    },
    {
      "tweet": "Iceland Volcano | Global warming to blame for Iceland's volcano eruption? | Radio: http://wp.me/pQUNo-W"
    },
    {
      "tweet": "Check this video out -- \"The Unraveling: Eggs, String, & Climate Change\" http://youtu.be/GLTgRuqSV1g"
    },
    {
      "tweet": "Plz #Digg & RT: Coal CEO Calls Mine Safety Rules: As Silly As Global Warming http://bit.ly/df2H0a ( #p2 #dnj #du1)"
    },
    {
      "tweet": "Warming Wins Global Warming War: http://digg.com/d31PC8W?t #LOL  @rocketman528"
    },
    {
      "tweet": "Never has a public-policy agenda been pursued with so little regard for scientific fact or for public opinion. The Global-Warming Tax. #tcot"
    },
    {
      "tweet": "Happy Earth Day! This #CFR guide offers background & analysis on #climate change: http://bit.ly/djzoRI"
    },
    {
      "tweet": "@climatecentral's Ben Strauss: \"We are inviting the planet to humble us\" via climate change, other enviro ills. http://huff.to/dbitCD"
    },
    {
      "tweet": "Declaration of Women in Asia on Climate Change http://ow.ly/1BTJt"
    },
    {
      "tweet": "Climate Change and \"Buen Vivir\": People's World Conference on Climate Change http://ow.ly/1BU55"
    },
    {
      "tweet": "OWNED! RT @marklevinshow I had to Smack Down a Global Warming Zealot on Earth Day http://bit.ly/dgMT5T"
    },
    {
      "tweet": "Climate change and human health studied: BETHESDA, Md., April 22 (UPI) -- The US National Institutes of Health say... http://bit.ly/dvzWKl"
    },
    {
      "tweet": "RT @DavidCornDC: #Clegg slaps #Cameron for clubbing around with climate change deniers. #leadersdebate"
    },
    {
      "tweet": "Gordon Brown to Nick Clegg: \"Your anti-Americanism will not help us.\" on climate change. #leadersdebate"
    },
    {
      "tweet": "RT @pauljimerson: \"First World People's Conference on Climate Change and the Rights of Mother Earth.\" www.350.org/bolivia"
    },
    {
      "tweet": "Senators struggling over climate compromise: WASHINGTON (Reuters) - U.S. senators writing a massive climate-change... http://bit.ly/c023Ye"
    },
    {
      "tweet": "Artists and scientists discuss art and climate change today at CUNY Grad Center: http://bit.ly/a7HR0K Organized by @EarthInstitute #earthday"
    },
    {
      "tweet": "RT @rabbleca: Water wars and climate change in the 'heart of Bolivia' http://bit.ly/aJnl9k #cochabamba #wpccc"
    },
    {
      "tweet": "#nickcleggsfault for global warming"
    },
    {
      "tweet": "Jason James, Center for Climate Change Law: What are the consequences of single-use plastic bag laws? http://bit.ly/bNKZQx #earthday"
    },
    {
      "tweet": "Film fetes small steps to address climate change (Reuters) http://nxy.in/theps"
    },
    {
      "tweet": "RT @AmeliaCeja: #HappyEarthDay! World People's Conference on Climate Change and the Rights of Mother Earth http://pwccc.wordpress.com/"
    },
    {
      "tweet": "RT @aaronsklar RT @Vcrow: Day 3 of the Peoples Summit on #Climate change. Follow my blogs http://ow.ly/1BP26 #eco #cop15"
    },
    {
      "tweet": "www.el-talent.com Film Fetes Small Steps to Address Climate Change http://bit.ly/cjqZou"
    },
    {
      "tweet": "RT @TREE_MUSEUM: Earth Day talks at CUNY, 3pm + 6.30pm http://bit.ly/a7HR0K Illuminating the Science: Art and Climate Change (artists + scientists speaking)"
    },
    {
      "tweet": "RT @guardianeco: In pictures: Thousands gather for the climate change summit in Bolivia http://bit.ly/a3kT9Y"
    },
    {
      "tweet": "Climate Science Under Attack: How Can We Change the Narrative? Webinar | Union of Concerned Scientists http://ow.ly/1BKec"
    },
    {
      "tweet": "RT @TREE_MUSEUM: Earth Day talks at CUNY, 3pm + 6.30pm http://bit.ly/a7HR0K Illuminating the Science: Art and Climate Change (artists + scientists speaking)"
    },
    {
      "tweet": "The Third International Water Fair: Global People's Conference On Climate Change And The Rights ... http://bit.ly/bebgDe by @indigenousissue"
    },
    {
      "tweet": "Earth Day talks at CUNY, 3pm + 6.30pm http://bit.ly/a7HR0K Illuminating the Science: Art and Climate Change (artists + scientists speaking)"
    },
    {
      "tweet": "RT @inhabitat: NASA's Gift to Earth: A Climate Change Supercomputer http://bit.ly/dbrh6B"
    },
    {
      "tweet": "Maybe NASA Isn't Completely Worthless [Global Warming]|# globalwarming NASA's Solar Dynamics Observatory released .. http://oohja.com/xbopk"
    },
    {
      "tweet": "Maybe NASA Isn't Completely Worthless [Global Warming]|# globalwarming NASA's Solar Dynamics Observatory released .. http://oohja.com/xbono"
    },
    {
      "tweet": "Gawker: Maybe NASA Isn't Completely Worthless [Global Warming] http://bit.ly/cETNt0 #news"
    },
    {
      "tweet": "(Indigenist-Edtrls) Viola Wilkins: Mother Earth: Bolivian President Blames Capitalism for Global Warming + Via Camp... http://ow.ly/178Kdj"
    },
    {
      "tweet": "RT @kokomoko: WSJ- Global warming alarmists have been discredited, but you wouldn't know it from the rhetoric this Earth Day. http://on.wsj.com/bbuPvl"
    },
    {
      "tweet": "Maybe NASA Isn't Completely Worthless [Global Warming] http://bit.ly/cWSYDm"
    },
    {
      "tweet": "WSJ- Global warming alarmists have been discredited, but you wouldn't know it from the rhetoric this Earth Day. http://on.wsj.com/bbuPvl"
    },
    {
      "tweet": "@Daggy1 Remember \"Soylent Green\" was based on climate change.  Dead oceans required discovery of an algae substitute."
    },
    {
      "tweet": "Gotta head to bed. Eyeballs are burning...probably due to global warming or something. Oh...maybe I shouldn't have said that on Earth Day."
    },
    {
      "tweet": "Moreland set for green jobs boost|VICTORIA'S Climate Change Minister yesterday met with Moreland retailers, .. http://oohja.com/xbmRx"
    },
    {
      "tweet": "Moreland set for green jobs boost|VICTORIA'S Climate Change Minister yesterday met with Moreland retailers, .. http://oohja.com/xbmMy"
    },
    {
      "tweet": "The Key to Fixing Global Warming? China|Energy secretary Steven Chu wants to change the way people think about .. http://oohja.com/xbmcR"
    },
    {
      "tweet": "The Key to Fixing Global Warming? China|Energy secretary Steven Chu wants to change the way people think about .. http://oohja.com/xbm8b"
    },
    {
      "tweet": "Great Climate Central post using baseball and steroids as a way to explain climate change: http://tinyurl.com/y45gkwy"
    },
    {
      "tweet": "Pomona Hosts Global Warming Meeting|Pomona College hosted residents of the greater Los Angeles area on Saturday .. http://oohja.com/xblVs"
    },
    {
      "tweet": "Pomona Hosts Global Warming Meeting|Pomona College hosted residents of the greater Los Angeles area on Saturday .. http://oohja.com/xblR1"
    },
    {
      "tweet": "From @wired: The Key to Fixing Global Warming? China http://ow.ly/178p5k"
    },
    {
      "tweet": "#Immigration & #climate change http://bit.ly/blMpeL Immigrant voices http://bit.ly/7K78Ok What to know about #CO2 http://bit.ly/8PoGem"
    },
    {
      "tweet": "WSJ editorial today argues for fighting \"real natural disasters\" like tsunamis rather than man-made ones like global warming."
    },
    {
      "tweet": "Wired: The Key to Fixing Global Warming? China http://bit.ly/b4pCjD #socialmedia #news"
    },
    {
      "tweet": "Richard S. Lindzen: Climate Science In Denial: Global warming alarmists have been discredited, but you wouldn'... http://on.wsj.com/cZTENo"
    },
    {
      "tweet": "The Key to Fixing Global Warming? China: Energy secretary Steven Chu wants to change the way people think about gl... http://bit.ly/b4pCjD"
    },
    {
      "tweet": "The Key to Fixing Global Warming? China: Energy secretary Steven Chu wants to change the way people think about gl... http://bit.ly/b4pCjD"
    },
    {
      "tweet": "Attend Tribeca Film Festival at home to see \"Climate of Change\" documentary: http://bit.ly/aFwiCS via @treehugger"
    },
    {
      "tweet": "Activist Duchess of York speaks out on global warming, Royal marriages and TV shows http://nxy.in/8pp0w"
    },
    {
      "tweet": "RT @democracy_now Cochabamba, the Water Wars and Climate Change http://bit.ly/by7Cuj #cmpcc"
    },
    {
      "tweet": "RT @earthisland: RT @kidsVSwarming World People's Conference on Climate Change & The Rights of Mother Earth http://envivo.cmpcc.org.bo/"
    },
    {
      "tweet": "RT @actforclimate: #blog from peoples conference on #climate change http://thurly.net//l9l #cmpcc #wpccc #bolivia #cochabamba"
    },
    {
      "tweet": "Elevator Talks http://bit.ly/a1QvqZ How to explain peak oil, climate change and economic instability in one quick shot!"
    },
    {
      "tweet": "Bolivia's 'People's Conference' On Climate Change Kicks Off With Opening Ceremony (VIDEO): The World People's Con... http://huff.to/9Xzvsp"
    },
    {
      "tweet": "RT @democracy_now: Cochabamba, the Water Wars and Climate Change http://bit.ly/by7Cuj"
    },
    {
      "tweet": "Cochabamba, the Water Wars and Climate Change http://bit.ly/by7Cuj"
    },
    {
      "tweet": "Barrett: biggest problem with climate change action is freeriding"
    },
    {
      "tweet": "In A Global Warming World Should Black People Own Coal Mines? http://bit.ly/cg8P6G"
    },
    {
      "tweet": "Putting a Price on Climate Change: The People's World Conference on Climate Change in Cochabamba, Bolivia kicks... http://bit.ly/8XnI5N #p2"
    },
    {
      "tweet": "Our Global South perspective RT @thereisawayjose Amy Goodman: Cochabamba, the Water Wars+Climate Change http://ow.ly/1Bj2x #Green #EarthDay"
    },
    {
      "tweet": "NASA Launches Climate Change Supercomputer: Just in time for Earth Day, a new NASA data-crunching tool aims to re... http://huff.to/cBmtxF"
    },
    {
      "tweet": "People's World Conference on Climate Change: This week, April 19-22, more than 7,500 people from 100 countries are... http://bit.ly/99jHN1"
    },
    {
      "tweet": "RT @ryebutler my friends Lili, Kandi (@mhawea), Kari (@checktheweather) in Bolivia for the World People's Conference on Climate Change"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry? http://bit.ly/biMjco"
    },
    {
      "tweet": "RT @WTFSexFacts: Scientists say global warming will cause the world's oceans to rise 5 feet. This can mean only one thing - Justin Biebe ..."
    },
    {
      "tweet": "Greenpeace - Making Waves: Greenpeace at the World People's Conference on Climate Change and the Rights of Mother Earth http://bit.ly/ckx6RH"
    },
    {
      "tweet": "Official: UN process 'in danger of collapsing' unless countries agree to stop global warming by end of ye... http://bit.ly/bhT6Gg #breaking"
    },
    {
      "tweet": "RT @WTFSexFacts: Scientists say global warming will cause the world's oceans to rise 5 feet. This can mean only one thing - Justin Biebe ..."
    },
    {
      "tweet": "RT @WTFSexFacts: Scientists say global warming will cause the world's oceans to rise 5 feet. This can mean only one thing - Justin Biebe ..."
    },
    {
      "tweet": "Allergies Worse Than Ever? Blame Global Warming (Time.com)http://bit.ly/cWRRmi"
    },
    {
      "tweet": "Acid in the Oceans Fraud #global warming #climate change http://bit.ly/9WPyv3 #eco"
    },
    {
      "tweet": "@Aaron_Morris haven't you heard of global warming?"
    },
    {
      "tweet": "@lizarddawg Non-Science Nonsense; Greed & global warming #climate change http://bit.ly/d1zDAG"
    },
    {
      "tweet": "RT @impolitical: Two votes on climate change accountability passed in #HOC tonight, Conservatives on wrong side of history, voting again ..."
    },
    {
      "tweet": "@matthancockUK Climatism-Anthropogenic Global Warming as a Religion #climate change http://bit.ly/aFw6cx"
    },
    {
      "tweet": "Good votes: #NDP #climate change bill & bill to ban GMO seeds, Angus plan to compensate artists, Liberal enviro motion, all passed. #cdnpoli"
    },
    {
      "tweet": "Hurrah - #NDP Climate Change Bill passes report stage vote: one step closer to real targets to stop climate change! #cdnpoli"
    },
    {
      "tweet": "RT @DavidTheroux Major study: Global warming graph junk science http://tinyurl.com/y6679sm #Bolivia #Teaparty #YAL #C4L #TCOT #TLOT"
    },
    {
      "tweet": "Global warming graph attacked by study; 'Ice hockey stick' temperature rise slammed as 'exaggerated'... http://tinyurl.com/y4f7m8m"
    },
    {
      "tweet": "Proof Of Global Warming\" - http://ping.fm/5wj6n"
    },
    {
      "tweet": "RT @noreenahertz: RT @mpondfield:How we can afford to tackle climate change...good read http://nyti.ms/doCiD8"
    },
    {
      "tweet": "RT @IFC_SKN: How do we better monitor climate change in Africa? Involve farmers in data collex http://ow.ly/1yxj8 #sustainability #climate"
    },
    {
      "tweet": "Global warming screwed with my lunch!: WTF? No tomatoes on a burger? What is this, Russia? http://bit.ly/d3kpvI"
    },
    {
      "tweet": "[@climatebrad] Inslee: Mine Safety Is As Silly As Global Warming' http://ow.ly/174ncn"
    },
    {
      "tweet": "@SOULidified Good News! Cow Flatulence may REDUCE greenhouse Gasses #global warming #climate change #eco http://bit.ly/bllCHw"
    },
    {
      "tweet": "@miguel899 Climate Bible gets 21 Fs on Report Card #global warming #climate change #ecohttp://bit.ly/drIEmL"
    },
    {
      "tweet": "Why not clean up air in the most polluted communities while also addressing #climate change? http://huff.to/bHWmMz"
    },
    {
      "tweet": "Ashlander Jim Mau only needs $1 mil to tell the story about how #climate change is monkeying with wine grapes. More at http://bit.ly/12mRfQ"
    },
    {
      "tweet": "Global Warming Likely to Worsen Allergies in Maine http://bit.ly/a1YAWL"
    },
    {
      "tweet": "RT @EcoInteractive: Environmental Literature: Real solutions to real environmental problems. The larger story to climate change http://b ..."
    },
    {
      "tweet": "SoundOff: PlantSuccess 2010 Energy Leadership Conference: This afternoon we're talking climate change, and manufac... http://bit.ly/cKHtSW"
    },
    {
      "tweet": "The complete guide to modern day climate change http://climateprogress.org/2010/04/14/the-complete-guide-to-modern-day-climate-change/"
    },
    {
      "tweet": "RT @theAGU: Cool Earth Day event, \"Illuminating the science: Art and climate change\" next week in NYC, organized by @EarthInstitute..."
    },
    {
      "tweet": "RT@/judyth_piazzaYahoo::RSS::Type::DateTime=HASH(0x5d38b30)John's Daily Dump: Another Global Warming Hoax, Huckabe... http://bit.ly/aH14QI"
    },
    {
      "tweet": "@L_W_D something definately going wrong with this planet - is this GLOBAL WARMING or NATURES WAY!!! mmmm!"
    },
    {
      "tweet": "Another day, another proof that while climate change is real, \"climategate\" was a bunch of hooey. http://bit.ly/auor1d"
    },
    {
      "tweet": "RT @BayCityTimes: Think your allergies are bad now? Wait until climate change kicks in, Michigan group says http://bit.ly/dCgvce"
    },
    {
      "tweet": "@MyronAnderson Green Fact:Did you know that Skeptics and Advocates both agree there has been no global warming since 1995? #climate change"
    },
    {
      "tweet": "I think global warming might truly be a myth! I've hated people for years and by now I would have thought they'd have warmed up to the idea!"
    },
    {
      "tweet": "Head of Marketing and Campaigns - new campaign on climate change...:  HEAD OF MARKETING AND CAMPAIGNS FOR A NEW NAT ... http://bit.ly/9JRhS9"
    },
    {
      "tweet": "The clothing industry started global warming in the first place. - Yvon Chouinard #FortuneGreen"
    },
    {
      "tweet": "Extreme allergies: @NWF's new report on how #climate change is making spring even more sniffly: http://bit.ly/9xcq7d"
    },
    {
      "tweet": "The world is warming - The complete guide to modern day climate change: http://bit.ly/aJk2LD"
    },
    {
      "tweet": "RT @RickWarren: My ecology is based on theology.Global Warming is unclear but God's Word isnt! Caring for creation is COMMANDED stewardship"
    },
    {
      "tweet": "@NettieWriter I think they changed that to \"climate change\" for a reason? It all gets worse? *grin*"
    },
    {
      "tweet": "@GT1802 am V well thanx..hope u r 2. Enjoying the weather b4 it breaks and gets cold again :( ..so much 4 global warming eh ?!"
    },
    {
      "tweet": "Global Warming: Next Chapter|For those in the American Northeast last winter was rugged and fairly cold. Yet what .. http://oohja.com/xaP2T"
    },
    {
      "tweet": "59% Say Scientists Disagree 'Significantly' Over Global Warming - http://is.gd/bC9FK - #TCOT #AGW"
    },
    {
      "tweet": "The complete guide to modern day climate change ' Climate Progress http://retwt.me/1MPLD (via @ClimaTweets)"
    },
    {
      "tweet": "RT @iconicearth: Its True! Major Solar power Scam #global warming #climate change #eco http://bit.ly/cFREtU http://bit.ly/cjdGwO"
    },
    {
      "tweet": "RT @redostoneage: Its True! Major Solar power Scam #global warming #climate change #eco http://bit.ly/cFREtU"
    },
    {
      "tweet": "@Sweetfacecuttie damn global warming! lol"
    },
    {
      "tweet": "says \"Quick, stop global warming before all the chocolate melts!"
    },
    {
      "tweet": "@BUFFALONYUSNEWS The Climate Blame Game; or how to game the system for fame & $ #global warming #climate change #eco http://bit.ly/aMjKBb"
    },
    {
      "tweet": "Real----&gt;RT @CarlosDelgado42: @GetLikeMiike Things go in cycles! Species, climate change, philosophy, religion, business, trade, war, etc..."
    },
    {
      "tweet": "East Anglia uni climate change email report clears them of any wrongdoing. The 1st mention of climate change since the election was called."
    },
    {
      "tweet": "RT @mattklewis: RT @andyroth With the help of Lindsey Graham, the Dems are quietly moving their climate change bill through the Senate.  ..."
    },
    {
      "tweet": "RT @WeCanEndPoverty: Hollywood stars join politicians at Bolivia's 'cool' global warming summit  http://bit.ly/9B78rw (via @guardiannews)"
    },
    {
      "tweet": "Help make the Great Global Warming Blunder a Bestseller! It's currently ranked #28 on Amazon (#8 in Nonfiction)! http://bit.ly/9s5oaz"
    },
    {
      "tweet": "With the help of Lindsey Graham, the Democrats are quietly moving their climate change bill through the Senate. Time to be worried."
    },
    {
      "tweet": "hisake I need some regional climate change \"Spring\" please. http://goo.gl/fb/Woyqo"
    },
    {
      "tweet": "@jozzjonz The Man-made Global Warming Hoax (Part 5): Although Al Gore and his media cronies endlessly bleat that g... http://bit.ly/aHSBMK"
    },
    {
      "tweet": "Hates global warming!"
    },
    {
      "tweet": "@wcpoweather Bees have been declining due to global warming/environmental factors. Varieties rebounding in our area lately however."
    },
    {
      "tweet": "ACHOO! Are allergies driving you mad this spring? Learn about the connection between allergies and climate change http://ow.ly/1ymgb"
    },
    {
      "tweet": "Vattenfall's CEO on clean energy, and not being a 'lone wolf' on climate change http://bit.ly/bPKwzC"
    },
    {
      "tweet": "S'not true: Allergies due to global warming will get worse, drive up healthcare costs http://fb.me/w6SiRvVl"
    },
    {
      "tweet": "The #eu use forbiden #technology for #emissions trading benchmark excercise #climate change #ag #fertilizer http://tinyurl.com/y5slgtb"
    },
    {
      "tweet": "New article on darkpolitricks: Gingrich Defends Global Warming Commercial with Pelosi http://bit.ly/cwszpb"
    },
    {
      "tweet": "[Climate Progress] The complete guide to modern day climate change - All the data you need to show that the world ... http://bit.ly/cK46HY"
    },
    {
      "tweet": "@startilda It's not true' Global warming won't kill us. Cheers"
    },
    {
      "tweet": "Seculars worship at feet of fickle ANGRY Global Warming / Cooling god. And proselytize world. #tcot #gop #seanhannity"
    },
    {
      "tweet": "Will you #wakeup and walk out on April 26th 1pm for climate change?  http://bit.ly/a9ruaR - can't wait to see what action consumers take"
    },
    {
      "tweet": "RT @stevecockburn Care about poverty or climate change in #GE2010? Visit www.voteglobal.org.uk for events and hustings. @vote_global"
    },
    {
      "tweet": "RT @stevecockburn: Care about poverty or climate change in #GE2010? Visit www.voteglobal.org.uk for events and hustings. Follow @vote_gl ..."
    },
    {
      "tweet": "@deannatdon HAHAH LOL global warming!"
    },
    {
      "tweet": "stop global warming..................."
    },
    {
      "tweet": "RT @AdamRamsay: @guardianeco #climateQ what will you do to stop RBS driving climate change with public money? #cleanRBS"
    },
    {
      "tweet": "Hmm.. Is London's temperamental mood changes ACTUALLY to do with the famous 'global warming?' = o Hav we nearly run out of F.Fuels?!"
    },
    {
      "tweet": "Key leaves Washington for Canada - Yahoo!Xtra News: partner\" on non-proliferation and climate change, and was also... http://bit.ly/aQRDbr"
    },
    {
      "tweet": "Ask the ministers: climate change and energy election debate | Politics | guar.. http://retwt.me/1MPsp (via @philbealeuk)"
    },
    {
      "tweet": "RT @guardianeco: Ask the ministers: climate change and energy election debate http://bit.ly/a7Mbog #ge2010 &lt;&lt;send your Qs as an @ msg to us"
    },
    {
      "tweet": "RT @guardianeco: Ask the ministers: climate change and energy election debate http://bit.ly/a7Mbog"
    },
    {
      "tweet": "RT @guardianeco: Ask the ministers: climate change and energy election debate http://bit.ly/a7Mbog"
    },
    {
      "tweet": "Wisconsin's scaled-back global warming bill unveiled | Alternative ... http://bit.ly/d8FFDf"
    },
    {
      "tweet": "This weekend huge ice block from the Hualcan glacier in Peru broke off- so much for glacial retreat http://bit.ly/cwSGyI #climate change"
    },
    {
      "tweet": "WV stakeholders tackle climate change concerns: Stakeholders in Western Visayas gather for a two-day regional conf... http://bit.ly/dpaK9s"
    },
    {
      "tweet": "RT @Gendraa RT @Leryleroy: RT @KayziaKoraag: RT @DamnRightTweets: Too hot, blame global warming. Too cold, still blame global warming"
    },
    {
      "tweet": "Sori ya @normauditia, not delicious body gue gabisa ikut. Makanya kita cegah global warming dgn film kita #adakorelasinyakok"
    },
    {
      "tweet": "Global Warming as An Opportunity. [ Article @ http://ow.ly/1yd4U ] #environment /cc @AvidCyclist_Ray"
    },
    {
      "tweet": "Breitbart.tv 'Gingrich Defends Global Warming Commercial with Pelosi: http://bit.ly/c6plky #tcot #rino #iamthemob #teaparty #tlot #gop #ocra"
    },
    {
      "tweet": "autumn comes first this year? 3degrees in april? global warming or global freezing?"
    },
    {
      "tweet": "Gingrich Defends Global Warming Commercial with Pelosi:  http://bit.ly/dcWxCG"
    },
    {
      "tweet": "Cousteau spreads climate change message in Hobart (repeating many of his father's warnings) (ABC) http://bit.ly/bWAgVt"
    },
    {
      "tweet": "Real solutions to real environmental problems. The larger story to climate change \"Good Read\" http://bit.ly/EcoEconomics via @EcoInteractive"
    },
    {
      "tweet": "Open Question: Who will be the most effected by global change and climate change?: and how will the change in clim... http://bit.ly/960XA1"
    },
    {
      "tweet": "Global Warming Evidence http://bit.ly/asUTe0"
    },
    {
      "tweet": "RT @globalalert: 10 things you can do to reduce global warming _ http://migre.me/fU6k"
    },
    {
      "tweet": "Cousteau spreads climate change message - Yahoo!7 News: the state to research a possible documentary on underwater... http://bit.ly/92toMS"
    },
    {
      "tweet": "RT @columbiawater: RT @Revkin: Geol. Society updates statement on human-driven climate change, synching with IPCC, Nat Acad, AGU, etc: http://j.mp/GeolSoc #agw"
    },
    {
      "tweet": "#drakeseyebrows could stop global warming."
    },
    {
      "tweet": "Global warming or unemployment...choose your own disaster?: By Max Jacobs Companies producing greenhouse gases in ... http://bit.ly/cuF4Kq"
    },
    {
      "tweet": "@justinbieber Ya know, you look really hot! You must be real reason for global warming..."
    },
    {
      "tweet": "Valero gas wants to kill AB 32, CA's global warming law. Join @CredoAction & @CourageCampaign to stop them: http://BoycottValero.com Pls RT"
    },
    {
      "tweet": "@therealjonnyj @boogie_963now hey hey i know what get's his goat! lol Its either lake levels or THE TRUTH about global warming hahaha"
    },
    {
      "tweet": "ASA dismisses complaints against DfT climate change ad - LONDON - The Advertising Standards Authority (ASA) has dis... http://ow.ly/173SHb"
    },
    {
      "tweet": "Carbon in warming soil could accelerate climate change: Study http://bit.ly/aVP2gd"
    },
    {
      "tweet": "RT @nickjacob_116: (Seriously my hero!) Christie- cutting $65 million 4 global warming prevention|NJ-Newsroom - http://bit.ly/cbbS8l #tcot"
    },
    {
      "tweet": "@dogsul ?~ @mdoctoradvice ?? ????? ???????? ?????.?? climate change? ??? ???? ???~ ????? ??? ??? ?? ??? ?? ??? ????? ???? ??????(????)???- ?"
    },
    {
      "tweet": "Keepers' logbooks shed light on climate change|LIGHTHOUSE keepers' logbooks should be studied for clues about .. http://oohja.com/xaL7W"
    },
    {
      "tweet": "Our local B&N has a sign in kids section that reads 'enjoy this season' next to stack of global warming books. Trying to send a message?"
    },
    {
      "tweet": "Keepers' logbooks shed light on climate change|LIGHTHOUSE keepers' logbooks should be studied for clues about .. http://oohja.com/xaKZO"
    },
    {
      "tweet": "@tasha9698 Yikes...sounds rough..has it always been like that...or is it part of Global warming that's occurring?"
    },
    {
      "tweet": "While doing home-improvement projects, consider the larger home ' Earth. Help Stop Global Warming Check it out: http://look.ac/cabuvv"
    },
    {
      "tweet": "I lunch more important than global warming? See Al Gore's response: http://www.youtube.com/watch?v=fGaHiWDZRNY"
    },
    {
      "tweet": "Nice. RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO"
    },
    {
      "tweet": "@allyCouture HAHA! I really like that answer. They stay blaming every weird phenomena on global warming!"
    },
    {
      "tweet": "RT @redostoneage: @IMBCROSS EPA Puts a Mafia-Style Hit on Sound Science #global warming #climate change http://bit.ly/cFh5Pl"
    },
    {
      "tweet": "RT @brianbeutler: RT @mattyglesias: Someone should try a tax cuts & ignore climate change approach to economic growth. History says it c ..."
    },
    {
      "tweet": "@M_Ignatieff This Wednesday make sure all Liberal MPs vote to pass #ndp climate change bill"
    },
    {
      "tweet": "Join Meg Caldwell tonight for an open talk on coastal communities & climate change -California Colloquium on Water,... http://bit.ly/awMl38"
    },
    {
      "tweet": "RT @Revkin: Geol. Society updates statement on human-driven climate change, synching with IPCC, Nat Acad, AGU, etc: http://j.mp/GeolSoc #agw"
    },
    {
      "tweet": "RT @redostoneage: Climategate:Faster & faster the Dominos fall http://bit.ly/akBYCa #global warming #climate change"
    },
    {
      "tweet": "RT @mattyglesias: Someone should try a tax cuts & ignore climate change approach to economic growth. History says it can't fail."
    },
    {
      "tweet": "RT @Consequence09: Pretty awesome 10-min breakdown of climate change: http://ow.ly/1y00p"
    },
    {
      "tweet": "Does anyone have a paper on global warming by any chance???"
    },
    {
      "tweet": "RT@TreeHugger: Giant Glacier Fall in Peru Causes Deadly Tsunami http://bit.ly/am0dlJ ::example #873 why climate change is real"
    },
    {
      "tweet": "Cows absolved of causing global warming with nitrous oxide http://tinyurl.com/yf754h6 mabye GRAZING is key #ag"
    },
    {
      "tweet": "@VHenry Global Warming Doomsday Called Off #climate change #eco http://bit.ly/b251bF"
    },
    {
      "tweet": "Industrial animal farming discush on YLE2. Farmers, unsurprisingly, think animals've jolly ol' time&impact on climate change exaggrtd. Right"
    },
    {
      "tweet": "RT @annspade: This made me laugh --&gt; RT @AlanDistro: My ice cream is melting faster than I can eat it. Stupid global warming."
    },
    {
      "tweet": "fucc i feel sicc chale stupid climate change =/ omg i know exactly what to say.."
    },
    {
      "tweet": "#CloudComputing Cloud computing and climate change http://bit.ly/cykkJM"
    },
    {
      "tweet": "RT @corporateknight: Check out CK's podcast with Yann Martel and Ed Burtynsky on art and climate change http://bit.ly/c5cbMzis"
    },
    {
      "tweet": "How'd they read that so fast? RT: @WRN WIEG: \"slimmed down\" global warming bill still has massive costs http://post.ly/aA3U"
    },
    {
      "tweet": "TV weathercasters divided on global warming. What are your thoughts ? - http://bit.ly/c2CmII #ireport"
    },
    {
      "tweet": "RT @redostoneage: @Well_Read1 NASA creates its own global warming by altering data #climate change http://bit.ly/b0aV1E"
    },
    {
      "tweet": "Global Warming Hysteria: Obama to Try to Jam it Through  http://bit.ly/NTFig"
    },
    {
      "tweet": "Global Warming Hysteria: Obama to Try to Jam it Through http://bit.ly/9ymGwF"
    },
    {
      "tweet": "RT @KeraCA: Finally, Obama seems ready to get tough on a #climate change bill. - http://nyti.ms/as6bXI"
    },
    {
      "tweet": "State climate bill: Efficiency will count toward renewable mandate: A scaled-back global warming bill would enable... http://bit.ly/9DusAa"
    },
    {
      "tweet": "@623Sis Here are the Climategate E-mails, Prima Fascia Evidence of a Global Warming Lie #climate change http://bit.ly/8iy6hV"
    },
    {
      "tweet": "@TransGreen Oh, the humanity! Global warming is destroying Los Angeles! #climate changehttp://bit.ly/cuepQb"
    },
    {
      "tweet": "@szach87129 Oh, the humanity! Global warming is destroying Los Angeles! #climate changehttp://bit.ly/cuepQb"
    },
    {
      "tweet": "@tovX Lyin' for Climate Indoctrination #global warming #climate change http://bit.ly/djnikJ"
    },
    {
      "tweet": "Wisconsin's scaled-back global warming bill unveiled: A revised state clean energy and global warming bill unveile... http://bit.ly/bSOrWH"
    },
    {
      "tweet": "Dilweg's odyssey to climate change chief started with GOP http://bit.ly/92298e"
    },
    {
      "tweet": "@prismsinc Worlds Greenest Celebrity: Limos, Pilots & Mansions, Oh My #global warming #climate change #green #eco http://bit.ly/9yiahH"
    },
    {
      "tweet": "@sharifkouddous Green Fact: Did you know that Skeptics and Advocates both agree there has been no global warming since 1995? #climate change"
    },
    {
      "tweet": "@conn1231 NASAs changing Facts; Guess they thought you wouldnt notice #global warming #climate change #eco http://bit.ly/8XqItD"
    },
    {
      "tweet": "@PDXRedhead Death by CAFE Standards:Green logic-Killing people to save them? #global warming #climate change #eco http://bit.ly/aC1Xd3"
    },
    {
      "tweet": "@trevoracious NASAs changing Facts; Guess they thought you wouldnt notice #global warming #climate change #eco http://bit.ly/8XqItD"
    },
    {
      "tweet": "Evo Morales Opens Climate Change Conference in Tiquipaya http://bit.ly/cq8e0k"
    },
    {
      "tweet": "@CO2HOG EPA Puts a Mafia-Style Hit on Sound Science #global warming #climate change http://bit.ly/cFh5Pl"
    },
    {
      "tweet": "@PhilHarrison NASAs changing Facts; Guess they thought you wouldnt notice #global warming #climate change #eco http://bit.ly/8XqItD"
    },
    {
      "tweet": "@alonsob_psm Worlds Greenest Celebrity: Limos, Pilots & Mansions, Oh My #global warming #climate change #green #eco http://bit.ly/9yiahH"
    },
    {
      "tweet": "RT @dd0s: #Green Hollywood stars join politicians at Bolivia's 'cool' global warming summit ht... http://bit.ly/adTSkx #prc #gfw #bypassgfw"
    },
    {
      "tweet": "David sokol from buffets mid american on coal and climate change is an embarassment. Shame on them #fortunegreen"
    },
    {
      "tweet": "Obama and his suprem just. picking and trying to push  climate change bill  hurry hurry  we are melting add more stimulis/slush ok daddy #p2"
    },
    {
      "tweet": "Wonk Room ' Don Blankenship Called Safety Regulators 'As Silly As Global Warming' http://ow.ly/1xUAe"
    },
    {
      "tweet": "High-school teacher spreads the word on climate change http://bit.ly/cKDhB3 #jisc10"
    },
    {
      "tweet": "Global warming ' fact or myth? (Y! Green)http://bit.ly/c5VEMQ"
    },
    {
      "tweet": "The benefits of the eco car:Lower greenhouse gas emissions impacting climate change, Lower levels of pollutants being pumped into the air"
    },
    {
      "tweet": "TV weathercasters divided on global warming http://dlvr.it/VCJl #SanJose"
    },
    {
      "tweet": "RT @BRCSCADA: RT @reuters: U.S. senators prepare compromise climate change bill  http://bit.ly/aTzX1J. DOA"
    },
    {
      "tweet": "i can feel the effect of global warming now....i'm suffering....from the heat!!!"
    },
    {
      "tweet": "More than 1/4 TV weathercasters think global warming a scam-http://bit.ly/bi9p1v  Are these meteorologists or just pretty map pointers?"
    },
    {
      "tweet": "@whitehouse   All of the major issues (security, global warming, job creation) all come down to sustainability and R&D #whgc"
    },
    {
      "tweet": "RT @ClimateBuzz: How the world can move forward in climate change negotiations -http://bit.ly/c6InLW"
    },
    {
      "tweet": "Grant Holt solves all worldwide traffic congestion issues and Global Warming with Acupuncture, easily #grantholtfacts"
    },
    {
      "tweet": "Organic agriculture: a guide to climate change and food security http://www.environmentportal.in/node/302789"
    },
    {
      "tweet": "RT @osuengineering: Ohio State Engineering Dean Washington blogs about #transportation and #climate change: http://engineering.osu.edu/i ..."
    },
    {
      "tweet": "Gove listing people who want to take over schools. He forgot \"climate change deniers\" and \"creationist nutjobs\" though."
    },
    {
      "tweet": "RT @cindsy: RT @icanyssa: RT @mandaahey: LETS STOP GLOBAL WARMING PLEASE,LIAT BUMI UDAH KAYAK NERAKA BOCOR"
    },
    {
      "tweet": "Fancy working on the UK's coolest climate change campaign? We've got some internships waiting to be filled http://bit.ly/bH8iWy #1010"
    },
    {
      "tweet": "hybrid forums. climate change. small islands. it's too much. it's too late. it's too early. it's just fucked up. i fucked up. mierda."
    },
    {
      "tweet": "heee males banget deh besok uprak plbj disuruh buat prsentasi ttg global warming. cari di gadis aja :p wkwk"
    },
    {
      "tweet": "I hate global warming! #StopGlobalWarming #StopGlobalWarming"
    },
    {
      "tweet": "Global warming deniers take note: according to Bon Jovi tour ad \"this summer just got hotter\"."
    },
    {
      "tweet": "Last few days climate change had shown its full impact on most part of India.Its now high time we two legged animals should behave sensibly."
    },
    {
      "tweet": "Ga dmana2,sama aja panasss..ohhhh,global warming.. http://loc.la/CFmJOJFjW9"
    },
    {
      "tweet": "According to the Mixi news, it would be 5 degrees celsius less than the average year from tomorrow. I can't keep up with the climate change."
    },
    {
      "tweet": "Cikini hujan lebat, katanya di BI panas kerontang.. Waaah global warming nih *soktau :p"
    },
    {
      "tweet": "@gazedd Study:Cooling of Greenland over past 8000 years #global warming #climate changehttp://bit.ly/9eAPcp"
    },
    {
      "tweet": "@MrsJoJoxx Science disproves Global Warming Alarmist claims for Glaciers in Glacier National Park #climate change http://bit.ly/cS3ESR"
    },
    {
      "tweet": "I hate all the rubbish about climate change, wish someone could just sort it out, too much talk not enough action!!!"
    },
    {
      "tweet": "RT @OlipVia RT @ChiaLiciouss Global Warming kill us slowly :( panas gilaaa...."
    },
    {
      "tweet": "what a hot &humid summer we r running through.please minimise the effects of global warming,get us rid from abnormal weather change."
    },
    {
      "tweet": "10 Sustainable Super Structures to withstand global climate change: http://bit.ly/coemLB"
    },
    {
      "tweet": "#enviroment: Research Rough Draft: Global Warming: ... http://allconcern.com/research-rough-draft-global-warming-just-let-the-planet-go-to/"
    },
    {
      "tweet": "Baca artikel majalah tentang global warming dan climate change"
    },
    {
      "tweet": "RT @ZEROGreenhouse: Global Warming 'at Point of No Return' a new study suggests http://bit.ly/dbWg3Y"
    },
    {
      "tweet": "RT @romyromanza: VERY HOT out there. Is that the impact of global warming? Let's Go Green! http://myloc.me/5WVVz"
    },
    {
      "tweet": "This may help: \"Sue Al Gore for Fraud\" http://twurl.nl/w0mpdh RT @brooksbayne weathercasters divided on global warming http://bit.ly/9sBoRl"
    },
    {
      "tweet": "Does global warming mean The Fortress of Solitude is melting? @ThatKevinSmith @GeoffJohns0"
    },
    {
      "tweet": "India: Delhi filmmaker Rohit Gandhi's documentary on climate change wins international award http://bit.ly/avthBz"
    },
    {
      "tweet": "TV weathercasters divided on global warming|More than half believe phenomenon exists, but some say it's a scam. .. http://oohja.com/xaHgS"
    },
    {
      "tweet": "#enviroment: Global warming will kill the United Nations http://allconcern.com/global-warming-will-kill-the-united-nations-2/"
    },
    {
      "tweet": "@gl0bal_warming  RT @UN 2 more rounds of climate change talks to be hosted by UN before summit in Mexico http://bit.ly/btN2fv #UN #news"
    },
    {
      "tweet": "@chemicallygreen Point taken ! The words we choose mean everything.  'Support actions that buffer and reduce the impacts of climate change'"
    },
    {
      "tweet": "COW FARTS EXONERATED FROM GLOBAL WARMING http://bit.ly/ddsHDe Al Gore sighs HUGE relief....from his rectum!"
    },
    {
      "tweet": "RT @niubi: Coal CEO Calls Mine Safety Rules 'As Silly As Global Warming' /Shanxi west Virginia   - http://tinyurl.com/y8ek4s4"
    },
    {
      "tweet": "RT @gb_Joe: The tolerant left: deny climate change and you'd be guilty of a crime against peace http://bit.ly/aFfkez"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry? http://tinyurl.com/y6tpw2x"
    },
    {
      "tweet": "RT @UN: 2 more rounds of climate change talks to be hosted by UN before summit in Mexico  http://bit.ly/btN2fv #UN #news #unfccc"
    },
    {
      "tweet": "Kerala is getting hotter and hotter, thank you global warming(sponsored by americans)"
    },
    {
      "tweet": "Must See Places Before They Disappear! : Europe...[PICS]: If Global Warming Predictions prove to be true, the foll... http://bit.ly/cLThD2"
    },
    {
      "tweet": "Its amazing how NOW every1 wants to be all xtra \"green\", no1 took n2 consideration the negative possibilities of lets say global warming :-D"
    },
    {
      "tweet": "@winners50 What if I don't want 10,000 clicks per day? What if I want world peace and an end to global warming? Where do I go for that?"
    },
    {
      "tweet": "Global Warming, illiteracy, obesity, deforestation, homelessness...Let's do something about it! www.karmacurrency.com.au/workplace-giving"
    },
    {
      "tweet": "The UN will host two more rounds of climate change discussions before Mexico summit in November http://bit.ly/acrekt"
    },
    {
      "tweet": "RT @therightblue: RT @eco_pirate:   Richard Branson's #EarthDay message 2 biz \"Get ur house in order.Fight global warming!#green http:// ..."
    },
    {
      "tweet": "@jozzjonz TV weathercasters divided on global warming: And about a quarter of those polled agreed or strongly agre... http://bit.ly/clC10g"
    },
    {
      "tweet": "Everything I read is global warming, going green"
    },
    {
      "tweet": "Whether global warming is real or not, why don&#8217;t we just move to clean energy regardless?: Also, whether .. http://bit.ly/9SI22d"
    },
    {
      "tweet": "http://www.contracostatimes.com/news/ci_14869684?source=rss&nclick_check=1 meta reporting (meteorologists and climate change).."
    },
    {
      "tweet": "Leaked confidential doc. reveals Obama's plan for a Global Regime to combat climate change http://ow.ly/1xDgi #tcot"
    },
    {
      "tweet": "Dealing with climate change is up to companies, not just governments via @ForbesNews #climatechange http://bit.ly/ct9VD9"
    },
    {
      "tweet": "@EdibleSF Are the models capable of projecting climate changes for 100 years? #global warminghttp://bit.ly/bfMKmz"
    },
    {
      "tweet": "@M_Ignatieff This Wednesday make sure all Liberal MPs vote to pass #ndp climate change bill"
    },
    {
      "tweet": "@deadman2098 Is Science Just Another Religion? Pt1 #global warming #climate change #eco http://bit.ly/cWAqa9"
    },
    {
      "tweet": "In an ominous sign of climate change hitting home, India has seen accelerated warming in ... http://tinymsg.appspot.com/26Y #climate"
    },
    {
      "tweet": "@sendboyle I don't believe enough will be done to stop ireversable climate change. Big business is more important. Earth will die slowly."
    },
    {
      "tweet": "A Psychological Profiling of Global Warming #climate change http://bit.ly/bNzFZJ #eco"
    },
    {
      "tweet": "NASA's Gift to Earth: A Climate Change Supercomputer:  Just in time for Earth Day, a new NASA data-crunching tool ... http://bit.ly/axo15p"
    },
    {
      "tweet": "@M_Ignatieff This Wednesday make sure all Liberal MPs vote to pass #ndp climate change bill"
    },
    {
      "tweet": "@zoomarang Is Science Just Another Religion? Pt1 #global warming #climate change #eco http://bit.ly/cWAqa9"
    },
    {
      "tweet": "@Canergy Climatism-Anthropogenic Global Warming as a Religion #climate change http://bit.ly/aFw6cx"
    },
    {
      "tweet": "RT @redostoneage: @tsotres DrSpencer:The Illusion of a sensitive climate system #global warming #climate change http://bit.ly/civrt9"
    },
    {
      "tweet": "#Globalwarming #Hoax alert!!&gt;&gt;Left wing nut job thinks #climate change is comparable to Nazism!! http://ow.ly/1xAsW #tcot #agw #p2 #teaparty"
    },
    {
      "tweet": "Labour election manifesto: weak, not tough, on causes of climate change | Politics | guardian.co.uk http://bit.ly/c0tgfF"
    },
    {
      "tweet": "@trasie Pilgrimage to Montana; Glacier National Park-#global warming #climate change http://bit.ly/9Wk9Z4"
    },
    {
      "tweet": "@emmycurry MND: Climategate Investigation #global warming #climate change #eco http://bit.ly/dzpTSl"
    },
    {
      "tweet": "Vancouver: G8'S top policy makers sit down with global anti-poverty and\t\t\t\tclimate change activists: OTTAWA, April... http://cli.gs/6rQnp"
    },
    {
      "tweet": "Japan's cherry blossoms are under threat from climate change: http://bit.ly/cnU2Dm"
    },
    {
      "tweet": "Volcano climate change - Global agriculture could benefit from increased CO2 from Iceland's volcanic eruptions - http://is.gd/bC0wM - #TCOT"
    },
    {
      "tweet": "UN agrees to host two more rounds of climate change talks before summit in Mexico http://ping.fm/XHSlQ"
    },
    {
      "tweet": "RT @ecoactions: #RTR Reversing forest decline can combat climate change http://bit.ly/RFdecline"
    },
    {
      "tweet": "RT@guardianeco Labour election manifesto: weak, not tough, on causes of climate change http://bit.ly/bZKANV"
    },
    {
      "tweet": "RT @envirolib: Senators compromise to create bipartisan climate change bill http://cli.gs/DpD0M"
    },
    {
      "tweet": "@rdgreen Non-Science Nonsense; Greed & global warming #climate change http://bit.ly/d1zDAG"
    },
    {
      "tweet": "RT @WWF_Climate: Looking for great media material on human impact of #climate change? Climate Witness stories http://is.gd/5fSMv #wwf"
    },
    {
      "tweet": "RT @WWF_Climate: Looking for great media material on human impact of #climate change? Climate Witness stories http://is.gd/5fSMv #wwf"
    },
    {
      "tweet": "Looking for great media material on human impact of #climate change? Check our Climate Witness stories http://is.gd/5fSMv #wwf"
    },
    {
      "tweet": "Carbon Diary: Labour fronts up climate change http://bit.ly/cKTpmD"
    },
    {
      "tweet": "The Hill The Big Question: Is the push for a climate change bill dead?: Some of the nation's top political comment... http://bit.ly/bAJyXK"
    },
    {
      "tweet": "Check out one of the most important climate change organizations in the world - http://www.theclimategroup.org/ @climategroup"
    },
    {
      "tweet": "H•_Arer om Final outcome of COP15. 8 timer arbeid fordelt p•_Î to grupper. Jeg har om Forests og The politics behind climate change."
    },
    {
      "tweet": "NEWS - Climate lessons 'gathering dust': Clues to climate change are lying \"gathering dust\" in Scottish archives, ... http://bit.ly/92ctrb"
    },
    {
      "tweet": "BBC News: Climate lessons 'gathering dust': Clues to climate change are lying \"gathering dust\" in Scottish archive... http://bit.ly/9Df2Wn"
    },
    {
      "tweet": "Can green capitalism be the 'profitable solution to climate change?' http://bit.ly/bY9qY4 #climate #climatechange"
    },
    {
      "tweet": "How does Sea Grant make a difference on climate change? http://bit.ly/a5uae7"
    },
    {
      "tweet": "RT @EcoInteractive: #RTR Reversing forest decline can combat climate change http://bit.ly/RFdecline"
    },
    {
      "tweet": "Crunch time for climate change bill - The Hill's E2-Wire http://retwt.me/1MO2t (via @E2Wire)"
    },
    {
      "tweet": "Crunch time for climate change bill http://bit.ly/acgse5 #climate"
    },
    {
      "tweet": "RT @freedom4USA: Intl News:#tcot #sgp 'Slim'  prospects  for climate deal this year, says  UN  climate change chief: Prospects of... htt ..."
    },
    {
      "tweet": "After Uganda Nile River expedition, NWNL held there due to Europe's ash.  Read about climate change links to volcanoes! http://bit.ly/cR3rob"
    },
    {
      "tweet": "Many fret about costs of addressing climate change. Don't ignore costs of inaction. Not just icebergs... Worth a look: http://bgt.st/9OacaK"
    },
    {
      "tweet": "Slim' prospects for climate deal this year, says UN climate change chief|Copenhagen (Denmark), Apr.12 : .. http://oohja.com/xaE6h"
    },
    {
      "tweet": "@maxphillips You don't even have to talk about climate change to realise there are problems with coal. I'm winding down my mine. #4corners"
    },
    {
      "tweet": "Right Side News Senate Global Warming Bill on Track: Six months after introducing a sweeping climate change bill t... http://bit.ly/chRgR4"
    },
    {
      "tweet": "Outgoing head of #climate change negotiations warns: #UN process in danger unless world agrees on climate change http://bit.ly/aaeIHe"
    },
    {
      "tweet": "Earthquakes recorded in the past 7 days. Hard to believe climate change isn't real after seeing this: http://bit.ly/dB1jrI"
    },
    {
      "tweet": "rt @GerardHenderson I confused James Hansen with Jim Henson. Both true believers, one in climate change, the other in the rainbow connection"
    },
    {
      "tweet": "RT @noreenahertz: RT @mpondfield:How we can afford to tackle climate change...good read http://nyti.ms/doCiD8"
    },
    {
      "tweet": "@cledz_rosario A Psychological Profiling of Global Warming #climate change http://bit.ly/bNzFZJ"
    },
    {
      "tweet": "@Zyenab Planet Earth Barely Notices Effect of Anthropogenic CO2 #global warming #climate change http://bit.ly/bZekmq"
    },
    {
      "tweet": "@jm_philippines NOAA Enforcement Chief accused of Shredding Documents removed from Post #global warming #climate change http://bit.ly/b7JXLY"
    },
    {
      "tweet": "@robertfreedland Artic Sea Ice Reports: Who to Believe? #global warming #climate change http://bit.ly/dbv9eb"
    },
    {
      "tweet": "Capto News: Prospects for climate deal 'slim' - The chances of forging a binding agreement on climate change are sm... http://ow.ly/172LdM"
    },
    {
      "tweet": "What the Mayan predictions about global warming and climate change mean for our planet (It's not what you think!)  http://bit.ly/a3AFs8"
    },
    {
      "tweet": "60 years ago today, my uncle was born in a blizzard. Yeah, climate change is a lie"
    },
    {
      "tweet": "BBC: Prospects for climate deal 'slim': The chances of forging a binding agreement on climate change are small, says the UN climate ch..."
    },
    {
      "tweet": "Enviro:  European Space Agency launches satellite to check climate change.. see blast-off!=&gt;  http://ow.ly/1xaGk"
    },
    {
      "tweet": "Wow.  This episode just turned from convoluted to brilliant statement on climate change...from 1978...#mindblown"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters)http://bit.ly/diPfaG"
    },
    {
      "tweet": "climate change, a myth or a truth?"
    },
    {
      "tweet": "SKY1: \"Ross Kemp investigates climate change...\"  errr what?"
    },
    {
      "tweet": "RT @epsomguardian: Photo exhibition 2 highlight climate change: A celebrity-filled showcase aimed at tackling climat... http://bit.ly/96gwUk"
    },
    {
      "tweet": "Excellent article in the New York Times http://nyti.ms/9FJZ10 about the economics of #climate change and the rational for cap and trade"
    },
    {
      "tweet": "@JimPrentice making progress? RT @bbcworld: The chances of forging a binding agreement on climate change are small... http://bit.ly/aH1PWt"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters)http://bit.ly/diPfaG"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters)http://bit.ly/diPfaG"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters)http://bit.ly/diPfaG"
    },
    {
      "tweet": "Vision 2030: The resilience of water supply and sanitation in the face of climate change: Focusing on lo... http://bit.ly/axZ7Q0 /Zunia.org"
    },
    {
      "tweet": "US senators prepare compromise climate change bill - Hindustan Times http://bit.ly/9j8bSC"
    },
    {
      "tweet": "Augh! plz make it stop! RT @bccohan: NOOOOOO! RT @Reuters: Senators prepare compromise climate change bill http://link.reuters.com/pup37j"
    },
    {
      "tweet": "NYT: Brilliant and comprehensive article on climate change economics by Paul Krugman: http://nyti.ms/cUy4y8"
    },
    {
      "tweet": "Senators prepare compromise climate change bill - Washington Post http://bit.ly/9KY8zM"
    },
    {
      "tweet": "[BBC Science] Prospects for climate deal 'slim': The chances of forging a binding agreement on climate change are ... http://bit.ly/chhtWD"
    },
    {
      "tweet": "Prospects for climate deal 'slim' - The chances of forging a binding agreement on climate change are small, says th... http://ow.ly/172xmP"
    },
    {
      "tweet": "Hainan : Concrete results expected at Mexico climate change conference: Danish PM - Xinhua http://url4.eu/2XZvV"
    },
    {
      "tweet": "#News Topic - Prospects for climate deal 'slim': The chances of forging a binding agreement on climate change are ... http://bit.ly/9h8s0o"
    },
    {
      "tweet": "Press Release: UNFCCC Receives List of Government Climate Pledges: Following the conclusion of the climate change ... http://bit.ly/aowP0W"
    },
    {
      "tweet": "Reuters Top News : Senators prepare compromise climate change bill"
    },
    {
      "tweet": "Look At this! Senators prepare compromise climate change bill http://bit.ly/b9CeAI"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters)http://bit.ly/diPfaG"
    },
    {
      "tweet": "Bolivian President Blames Capitalism for Global Warming|Ceremonial sounds welcome delegates to the Cochabamba .. http://oohja.com/xbijX"
    },
    {
      "tweet": "Senators prepare compromise climate change bill - http://bit.ly/aHEzjq"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters)http://bit.ly/diPfaG"
    },
    {
      "tweet": "Senators prepare compromise climate change bill: WASHINGTON (Reuters) - Six months after introducing a sweeping cl... http://bit.ly/cCSoLJ"
    },
    {
      "tweet": "@amcp [11 Apr 12h] climate change: 2"
    },
    {
      "tweet": "uh-oh RT @MyCooL03Mc: Abu Dhabi faces climate change flood threat - expert: Scientist says capital could have to (cont) http://tl.gd/qqnuf"
    },
    {
      "tweet": "RT @Dothegreenthing: Utterly superb Paul Krugman explanation of the true economics of fighting climate change http://nyti.ms/cY5MzU #dtgt"
    },
    {
      "tweet": "Negotiators aim to reinvigorate UN climate change talks English.news.cn   2010-04-09  Negotiators gathered for a... http://bit.ly/c8z6Ue"
    },
    {
      "tweet": "RT @UNcareers: UN remains proper platform for climate change talks: De Boer: By Xinhua writer Liu Xiaoyan, Huang Kun BONN, German... htt ..."
    },
    {
      "tweet": "China active, serious in tackling climate change, says vice president http://dlvr.it/T8cq"
    },
    {
      "tweet": "China, Denmark pledge joint efforts to tackle climate change, upgrade ties|&$ &$Chinese Vice President Xi Jinping .. http://oohja.com/xazQc"
    },
    {
      "tweet": "Bolivian President Blames Capitalism for Global Warming|Ceremonial sounds welcome delegates to the Cochabamba .. http://oohja.com/xbifb"
    },
    {
      "tweet": "@GeMartian DrSpencer:The Illusion of a sensitive climate system #global warming #climate change http://bit.ly/civrt9"
    },
    {
      "tweet": "What's the cause and result of abnormal climate changes"
    },
    {
      "tweet": "RT @Eco_Costa_Rica: Costa Rica's Monteverde, climate change & effects the on biodiversity http://bit.ly/CRClimateChange RT @EPSClimate"
    },
    {
      "tweet": "block @justkorwhore . her very existence on twitter will perpetuate global warming and bring the rapture a day closer. youve been forewarned"
    },
    {
      "tweet": "block @justkorwhore . her very existence on twitter will perpetuate global warming and bring the rapture a day closer. youve been foewarned"
    },
    {
      "tweet": "RT @worldnetdaily: U.S. promoting 'North American' climate change plan http://ow.ly/1FM3D #wnd #climatechange #nafta"
    },
    {
      "tweet": "Why does former VP Al Gore continue to perpetuate the fantasy of 'Man-Caused Global Warming'? ' No Political Lemmings  http://shar.es/mcivT"
    },
    {
      "tweet": "Post: How to Stop Global Warming climate change, global warming http://cli.gs/U5Mre"
    },
    {
      "tweet": "Happy birthday D'Arcy Wretzky, wherever you are. I wonder if she believes in climate change."
    },
    {
      "tweet": "Stone Soup The Importance of Trees in Halting Global Warming: Most people have heard that planting... http://bit.ly/b7l6Pn #stonesoupdayton"
    },
    {
      "tweet": "(Indigenist-News) Live from the World People's Conference on Climatference on Climate Change and the Rights e Chang... http://ow.ly/177RnT"
    },
    {
      "tweet": "Climate Change Freak http://trim.li/nk/1H8R via @WiretapMagazine"
    },
    {
      "tweet": "Still think global warming is cool?"
    },
    {
      "tweet": "Global warming is a plot by Coloradoans to get oceanfront property without moving."
    },
    {
      "tweet": "Virginia to Investigate Global Warming Scientist Mann http://tinyurl.com/24psxod"
    },
    {
      "tweet": "Post: I would like to set up some scientific test that will prove man is causing global warming? http://cli.gs/Bzm9Y"
    },
    {
      "tweet": "Laying out on May 1 - thx Global climate change (@ Prospect Park w/ 10 others) http://4sq.com/4wbhov"
    },
    {
      "tweet": "#Obama cites #terrorism, #climate change etc. as the shape of the brave, new world that creates tensions in body #politic."
    },
    {
      "tweet": "The global warming/climate change folks should switch their message to fighting pollution. http://bit.ly/aJVPvq"
    },
    {
      "tweet": "Stop Global Warming!' 100% recycled paper pencils with soy-based ink used on the packaging. http://is.gd/bPW5x"
    },
    {
      "tweet": "RT @inthecampaign: Why @FrannyArmstrong (Director @AgeofStupid) is backing Labour to continue the fight against climate change http://bi ..."
    },
    {
      "tweet": "RT @nauradeem: RT @selemente: #MayWish bisa ngebantu buat ngurangin global warming"
    },
    {
      "tweet": "Global Warming did not eat my homework"
    },
    {
      "tweet": "@MTVIndia to global warming..we are available on Facebook, Twitter, Orkut & LinkedIn..we recently got interviewed by Rohini from 93.5 Red FM"
    },
    {
      "tweet": "RT @lahgbr: If you want serious debate on climate change, not hysteria and attempts to shout people down, vote #UKIP"
    },
    {
      "tweet": "Looking at the facts of climate change, hysteria is a rational response."
    },
    {
      "tweet": "If you want serious debate on climate change, not hysteria and attempts to shout people down, vote #UKIP"
    },
    {
      "tweet": "Nick griffin calls climate change fradulent science, then calls CO2 a fertilizer, how did the man go to Cambridge"
    },
    {
      "tweet": "Now to send an email to a climate change denier. goody"
    },
    {
      "tweet": "Climate Change Aids Invasive Mosquitofish|The warmer temperatures associated with climate change could speed the .. http://oohja.com/xc60u"
    },
    {
      "tweet": "Global Warming Scientist Under Two Investigations - http://satelec2003.com/X7p"
    },
    {
      "tweet": "RT @LATimesgreen: A religious take on climate change http://goo.gl/fb/sLoJR"
    },
    {
      "tweet": "But the weather is fucking hot. Screw global warming."
    },
    {
      "tweet": "@smellydevil global warming"
    },
    {
      "tweet": "http://tinyurl.com/2968le4 30,000 Anti-Global Warming Scientists Can't Be Wrong"
    },
    {
      "tweet": "Mungkin RT @superliaa: global warming effect RT @dineek: Padahal AC rumah nyala,knp masih gerah ya?"
    },
    {
      "tweet": "Chaotic climate threatens food security|VietNamNet Bridge ? Worsening impacts of climate change including intense .. http://oohja.com/xc5vR"
    },
    {
      "tweet": "A religious spin on climate change http://bit.ly/94ou0k"
    },
    {
      "tweet": ".whaah! i hate you global warming.. leave me alone!"
    },
    {
      "tweet": "Global Warming : Science Or Hysteria? - Find Answers to this Question http://bit.ly/c5UgPk"
    },
    {
      "tweet": "#enviroment: Global warming conference set Sunday http://allconcern.com/global-warming-conference-set-sunday/"
    },
    {
      "tweet": "The average american does more to reduce global warming emissions by not eating meat, eggs, and dairy than by switching to a hybrid car"
    },
    {
      "tweet": "RT @GoingGreenGone: Nine Awesome Ways to Have Fun While Going Green: Cooler PlanetSure, global warming is an alarming and serious con.. ..."
    },
    {
      "tweet": "its nearly 37 degrees hot in here. oh global warming. im in a bath of sweat. ewww."
    },
    {
      "tweet": "@gavatron rain in the north pole! Is that, do you think, another sign of global warming?"
    },
    {
      "tweet": "had to switch on AC. it was too hot. GLOBAL WARMING ;( #weloveBLG"
    },
    {
      "tweet": "Guest column, Elliott Denniston: What can we do about climate change? - Joplin Globe -&gt; http://bit.ly/a5fsPi"
    },
    {
      "tweet": "Guest column, Elliott Denniston: What can we do about climate change? http://cli.gs/4t81q"
    },
    {
      "tweet": "FOXNews.com - State of Virginia to Investigate Global Warming Scientist Mann http://j.mp/dxyJH6- #climategate #climaterealists #climatedepot"
    },
    {
      "tweet": "Global warming is soo bad that i had the coolest summer ever.."
    },
    {
      "tweet": "@Algore, what do you think of this--&gt; 55% agree with the statement''Global Warming is a Scam!' http://ht.ly/1Frxf #tcot #p2 #teaparty #ocra"
    },
    {
      "tweet": "@latikambourke   Did Turnbull really say that?  The coalition's climate change policy is a stupid carbon abatement scheme!"
    },
    {
      "tweet": "Will Global Warming Make Iceland's Volcanoes Angry? http://bit.ly/biMjco (Discovery Earth)"
    },
    {
      "tweet": "CO2 not the main cause of global warming, according to Swedish expert http://bit.ly/dnQx0Y"
    },
    {
      "tweet": "Climate Denial Crock of the Week: \"It's cold. So there's no Climate Change\" | WWF Climate Blog http://retwt.me/1LYKq (via @WWFUS)"
    },
    {
      "tweet": "Utah House Passes Resolution Implying Climate Change Conspiracy | SolveClimate.com http://retwt.me/1LYGJ (via @Jercope)"
    },
    {
      "tweet": "@tamij Morning Glory Tami.  Morning Glory tribbles!   Unbelievable now liberals are blaming blizzard on global warming...idiots!  #hhrs"
    },
    {
      "tweet": "@DylanRatigan When there's a hot day in Aug. and all the Global Warming loons are screaming, \"see!, I told you!\".You'll call them ignorant?"
    },
    {
      "tweet": "Scientists seek reform on U.N. climate reports - Climate Change- msnbc.com http://retwt.me/1LYFz (via @msnbc_us)"
    },
    {
      "tweet": "Gotta love that global warming.  There is sleet in Houston today."
    },
    {
      "tweet": "Global warming my ass."
    },
    {
      "tweet": "Calling Al Gore DC needs some global warming please respond asap"
    },
    {
      "tweet": "RT @CorruptionSucks: Democrats say the blizzards are making global warming a hard sell' ya think? #tlot"
    },
    {
      "tweet": "Digg: Sean Hannity: Snow Storms Contradict Climate Change http://bit.ly/bP96hd"
    },
    {
      "tweet": "Climate Denial Crock of the Week: \"It's cold. So there's no Climate Change\" | Humanitarian News http://retwt.me/1LYDc (via @HumanityNews)"
    },
    {
      "tweet": "it is sleeting outside.  what!!!!!  global warming my....."
    },
    {
      "tweet": "How to Reform the Intergovernmental Panel on Climate Change: Scientific American http://retwt.me/1LYAZ (via @bemusedsamadhi)"
    },
    {
      "tweet": "Candidate for Mass. Governor \"Not Smart Enough\" to Know Whether or Not Climate Change is Real : Tr... http://ow.ly/1oqunb (via @moneyflower)"
    },
    {
      "tweet": "global warming verified:  http://www.wunderground.com/blog/JeffMasters/comment.html?entrynum=1427"
    },
    {
      "tweet": "expect more #snowpocalypse due to GLOBAL WARMING"
    },
    {
      "tweet": "MSNBC's Contessa Brewer Pretty Sure DC Snowstorms Caused by Global Warming... http://bit.ly/93QaDO #tcot"
    },
    {
      "tweet": "Schwarzenegger carries torch for tough auto emissions standards | Climate Change | Pembina Institute http://retwt.me/1LYxg (via @DanWoy)"
    },
    {
      "tweet": "Unreal: Top Yahoo Headline- 'Analysis: How Global Warming Makes Blizzards Worse' http://bit.ly/aiiJ35 #tcot IDIOTS"
    },
    {
      "tweet": "Climate change set to reduce crop production in Africa - environmentalresearchweb http://retwt.me/1LYtc (via @kaskadia)"
    },
    {
      "tweet": "Global warming is POUNDING the East coast with snow. Don't ask me how it works, I'm just reporting. #tcot, #right, #rightblogs, #teaparty"
    },
    {
      "tweet": "Lights, Camera, Action: Take the Living Climate Change Challenge | Designerati | Fast Company http://retwt.me/1LYqq (via @ajitacreative)"
    },
    {
      "tweet": "Vancouver Winter Olympics pinched by climate change | Humanitarian News http://retwt.me/1LYoH (via @NewsOnGreen)"
    },
    {
      "tweet": "Globe columnist exaggerates significance of errors by climate scientists | Climate Change | Pe... http://tinyurl.com/y9ws7by (via @ZoeCaron)"
    },
    {
      "tweet": "AMERICAblog News: Right-wingers already claiming that the blizzard proves climate change doesn'... http://bit.ly/9IpvQm (via @thejoshuablog)"
    },
    {
      "tweet": "Globe columnist exaggerates significance of errors by climate scientists | Climate Change | Pembina ... http://bit.ly/bZTYjC (via @ZoeCaron)"
    },
    {
      "tweet": "AMERICAblog News: Right-wingers already claiming that the blizzard proves climate change ... http://tinyurl.com/ycatc7z (via @thejoshuablog)"
    },
    {
      "tweet": "Globe columnist exaggerates significance of errors by climate scientists | Climate Change | Pembina I... http://ow.ly/1opTCs (via @ZoeCaron)"
    },
    {
      "tweet": "AMERICAblog News: Right-wingers already claiming that the blizzard proves climate change doesn't ... http://is.gd/85ToG (via @thejoshuablog)"
    },
    {
      "tweet": "BBC Worldnews 8-part series on cities and climate change http://ow.ly/1AXou (via @stephhicks @kaskadia @sejorg @ClimateCentral)"
    },
    {
      "tweet": "Understanding climate change: There's an ap for that Boing Boing http://retwt.me/1LYne (via @AlanMullally)"
    },
    {
      "tweet": "Carbon/Environmental Footprint Calculators | Teaching Climate Change Law & Policy http://retwt.me/1LYlo (via @wil_burns)"
    },
    {
      "tweet": "New federal climate change agency proposed http://retwt.me/1LYln (via @KansasAgland)"
    },
    {
      "tweet": "The Robin Hood Tax ' Home - a tiny tax on finacial transaction to tackle poverty and climate change h... http://ow.ly/1opQj2 (via @nickyorr)"
    },
    {
      "tweet": "Snowstorms Do Not Disprove Climate Change | Media Matters Action Network http://retwt.me/1LYlk (via @mmaction)"
    },
    {
      "tweet": "Another Snowstorm: what happened to global warming? http://bit.ly/9M6Pk6 #climate"
    },
    {
      "tweet": "climate change | glaciers | acrtic | melting http://retwt.me/1LYil (via @EarthBlog)"
    },
    {
      "tweet": "Help us to tackle poverty and climate change: Support the Robin Hood Tax | FabianPattberg.com http://retwt.me/1LYik (via @honorthysowbug)"
    },
    {
      "tweet": "The Dept of Energy & Climate Change; Roadmap project re decarbonising & securing energy supplies by 2050; http://bit.ly/cqpvwO"
    },
    {
      "tweet": "RT @spellboundblog New NOAA Climate Portal shares climate change data w/public http://bit.ly/bVWi2O http://tinyurl.com/yjuj5a5"
    },
    {
      "tweet": "Books and Books Duchess in Montreal to fight climate change: CBC.ca Along with being the public fac... http://bit.ly/aVWTpN mybookstop.info"
    },
    {
      "tweet": "@CrabLover7 According to Time Mag these blizzards are a result of man made global \"warming\"  - gotta love it"
    },
    {
      "tweet": "Sean Hannity: Snow Storms Contradict Climate Change http://retwt.me/1LYeH (via @HeavyDigga)"
    },
    {
      "tweet": "Missed the climate change series at RICS HQ? Check out the videos on http://bit.ly/a5qYDE #sustainability (via @RICSsurveyors)"
    },
    {
      "tweet": "2nd major storm in less than a wk from Washington to New York  - forces federal gov't & the UN to close (The bright side of global warming?)"
    },
    {
      "tweet": "Climate change mitigation in German agriculture | Ecologic Institute http://retwt.me/1LYa9 (via @EcologicBerlin)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Reuters AlertNet - Accelerated migration and climate change a 'recipe for social disaster'-UN http://retwt.me/1LY7U (via @alertnetclimate)"
    },
    {
      "tweet": "#insurance #insure US Climate Envoy Says China Tepid on Climate Change Agreement http://bit.ly/akodYs"
    },
    {
      "tweet": "A complete list of things caused by global warming | The SPPI Blog http://retwt.me/1LY4E (via @atomitron)"
    },
    {
      "tweet": "Lords fear public is losing confidence in climate change science - Telegraph http://retwt.me/1LY3b (via @environsecnews)"
    },
    {
      "tweet": "Do We Finally Have Proof that Global Warming by CO2 Emissions is a Hoax?, FamilySecurityMatter... http://ow.ly/1ooD9X (via @climaterealists)"
    },
    {
      "tweet": "Climate Change Policy & Projects Officer jobs, Bristol, •_£35,062 and benefits | Guardian Jobs http://retwt.me/1LXWI (via @greenenergyjobs)"
    },
    {
      "tweet": "Fabricated quote used to discredit climate scientist - Climate Change, Environment - The Independent http://retwt.me/1LXT2 (via @i_buy_eco)"
    },
    {
      "tweet": "Current Politics of Climate Change - A Toothless IPCC http://bit.ly/cvQBj9"
    },
    {
      "tweet": "no one is dying because of health care or al gore's climate change. there is no rush, all these con artists are doing is stealing money."
    },
    {
      "tweet": "Al Gore is the human ground hog. Whenever he makes a public statement on global warming, there is six more weeks of winter."
    },
    {
      "tweet": "Global Warming, where are you? PLEASE COME BACK!!! #tcot"
    },
    {
      "tweet": "RT @EJM421: Drudge Report: Senate global warming hearing canceled due to snow... http://tinyurl.com/yjpzt8l (cont) http://tl.gd/82ajf"
    },
    {
      "tweet": "Neighbors inspiring each other to action on climate change at Ghost of Midnight http://retwt.me/1LXOb (via @frontporchforum)"
    },
    {
      "tweet": "Never stops being funny. RT @Drudge_Report: Senate global warming hearing canceled... http://is.gd/834gK"
    },
    {
      "tweet": "Climate Change Freak http://bit.ly/9wDYhe (Youth Climate Mvmt)"
    },
    {
      "tweet": "Palin Dismisses Climate Change as 'Snake Oil Science' ' Agree to Disagree http://retwt.me/1LXNi (via @masonry)"
    },
    {
      "tweet": "RT @MarkKrajnak: Annnnd....we have snow.. (Annnnd more snow, and more snow and even more snow - must be global warming)"
    },
    {
      "tweet": "RT @Drudge_Report: Senate global warming hearing cancelled... http://drudge.tw/dyAWzC ~ Oh, the irony!  :-)"
    },
    {
      "tweet": "All this cold a weather I guess global warming is on vacation right now"
    },
    {
      "tweet": "Q&A: Carol Browner, Director of the White House Office of Energy and Climate Change Policy - OnEart... http://ow.ly/1on8jD (via @OnEarthMag)"
    },
    {
      "tweet": "Never mind McCain supports global warming legislation. Progressives are too blind to own ideologue talking points for their own arguments."
    },
    {
      "tweet": "Even McCain supporters\" support global warming legislation. That said 'progressive' nerd. Cuz, ya know, McCain supporters are stupid."
    },
    {
      "tweet": "RT @Demre: Party of No-Yup! #PON #GOP #M4TX No, I don't want government. regulating something as vague as \"climate change,\" !"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Those who demand you believe that Islam is a Religion of Peace also demand you believe in Anthropagenic  Global Warming."
    },
    {
      "tweet": "BBC News - Time to think small on climate change http://retwt.me/1LXrL (via @terriferic)"
    },
    {
      "tweet": "Party of No-Yup! #PON #GOP #M4TX No, I don't want government. regulating something as vague as \"climate change,\" !"
    },
    {
      "tweet": "http://www.spectator.co.uk/print/politics/all/5749853/the-global-warming-guerrillas.thtml The global warming guerrillas"
    },
    {
      "tweet": "Global Warming video. http://www.youtube.com/watch?v=EMhUZAq5IxQ"
    },
    {
      "tweet": "RT @EYnews: Being #carbon market ready is logical business says Climate Change & Sustainability leader, Steve Starbuck: http://bit.ly/bEhJge"
    },
    {
      "tweet": "Federal Government Proposes Climate Change Agency ' Environmental Leader ' Green Business, Sustainable ... http://is.gd/81t1t (via @ELDaily)"
    },
    {
      "tweet": "@pir8gold -I'd spend money on moving the over heated polar bears to east coast. Would be cheaper that FUNDING GLOBAL WARMING"
    },
    {
      "tweet": ". Global Warming: Melting Away! | The Doc Is In effects of global warming http://bit.ly/9e5vFk"
    },
    {
      "tweet": "Climate Change warning 1953 style http://bit.ly/bb8iyH"
    },
    {
      "tweet": "USA: Does Climate Change Affect Your Business? SEC Issues Interpretive Guidance On Disclosure For Public... http://tinyurl.com/yetokt4"
    },
    {
      "tweet": "Knee-Jerk No Fly Ban Discredits Global Warming Alarmists:  http://bit.ly/dabV1N (FTSN Social)"
    },
    {
      "tweet": "@PubliusTX So Exxon falsified the climate change data?"
    },
    {
      "tweet": "RT @Global_Witness: Vacancy: Senior Climate Change Campaigner http://bit.ly/aoJxNT #climate #energy #humanrights #... http://bit.ly/c9vB5v"
    },
    {
      "tweet": "Palin likens global warming studies to 'snake oil'  http://bit.ly/bvfjK3 #climate"
    },
    {
      "tweet": "What do you think causes global warming? causes of global warming ;O http://bit.ly/cl0a5P"
    },
    {
      "tweet": "The World Bank's climate change site using Drupal | Dries Buytaert http://retwt.me/1LX2W (via @Dries)"
    },
    {
      "tweet": "Tuesday Open Thread: Climate Change Edition - Big Government http://retwt.me/1LX2g (via @BrianMoonan)"
    },
    {
      "tweet": "Is Climate Change Legislation Dead in 2010? http://bit.ly/9R6vdm #susty"
    },
    {
      "tweet": "USA: SEC Adopts Guidance On Climate Change Disclosures http://tinyurl.com/y9v2j3o"
    },
    {
      "tweet": "Mayor calls for Londoners' ideas to help tackle climate change http://retwt.me/1LWVs (via @MayorOfLondon)"
    },
    {
      "tweet": "BBC - Earth News - Climate change will make world more 'fragrant' http://retwt.me/1LWU2 (via @bbcscitech)"
    },
    {
      "tweet": "Salt. It's almost as dangerous as global warming\" #potentialsaltwarslogans #tcot@menardsguy"
    },
    {
      "tweet": "Climate Change Adaptation Strategy http://retwt.me/1LWTS (via @TheABD)"
    },
    {
      "tweet": "Only 2 Tory MPs sign EDM accepting climate change http://retwt.me/1LWSc (via @libcon)"
    },
    {
      "tweet": "Palin Likens Global Warming Studies To 'Snake Oil' At Redding ... - BayInsider http://bit.ly/9Nk1Ca - #copenhagenR... http://bit.ly/ajYACz"
    },
    {
      "tweet": "Axelrod: Climate change needs GOP - The Hill's E2-Wire http://retwt.me/1LWKh (via @E2Wire)"
    },
    {
      "tweet": "Obama proposes federal climate change agency: WASHINGTON - The Obama administration proposed a new climate change ... http://bit.ly/bc7eYc"
    },
    {
      "tweet": "Climate change impact of soil underestimated: study - Yahoo! News http://retwt.me/1LWHQ (via @RarePlanet)"
    },
    {
      "tweet": "Something must be done right now about global warming so our children can live in a better world where the weather is good"
    },
    {
      "tweet": "Global warming is truly affecting the weather patterns of this planet negatively and causing destructive weather all over this world."
    },
    {
      "tweet": "The issue of global warming must be dealt with it's time for alternative energy sources which won't harm out planet."
    },
    {
      "tweet": "It's time to do something about global warming issue in this world before in gets out of control and causes more violent weather"
    },
    {
      "tweet": "Government run climate-change: http://bit.ly/cX1XGw There is no global warming, the sky is not falling! Get a grip you tree hugging wackos!"
    },
    {
      "tweet": ":) Go Green Toolshed ' Blog Archive ' Global Warming Myths and Facts http://bit.ly/9U3wJH causes of global warming"
    },
    {
      "tweet": "@pdigaudio That darn Global Warming!"
    },
    {
      "tweet": "What you need to know about: Climate Change http://retwt.me/1LWE8 (via @ArchwoFrontiers)"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming - Big Government http://retwt.me/1LWCn (via @Erudite_Enigma)"
    },
    {
      "tweet": "solar thermal application  The Solar Power Home And Effects On Global Warming"
    },
    {
      "tweet": ":P Fundamental Ways That Could Stop Global Warming medicine"
    },
    {
      "tweet": "http://www.foxnews.com/politics/2010/02/08/administration-proposes-new-agency-study-climate-change/ New Agency to Study Climate Change"
    },
    {
      "tweet": "There is No Man Made Climate Crisis (Global Warming is a Hoax) http://bit.ly/auUPBL global warming :O"
    },
    {
      "tweet": "The U.S. is forming new climate change agency | Oregon Local News - OregonLive.com http://retwt.me/1LWmF (via @OregonianEnviro)"
    },
    {
      "tweet": "global warming swindle http://bit.ly/aNW5SC Why do you think the UK channel 4 show: The Great Global Warming Swindle will not get aire... ;)"
    },
    {
      "tweet": "FOXNews.com - Administration Proposes New Agency to Study Climate Change http://retwt.me/1LWlE (via @spindvorin)"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming http://bit.ly/dmOGrA ;O national ocean service"
    },
    {
      "tweet": "@ewerickson That would be climate change."
    },
    {
      "tweet": "Obama starts agency on climate change | National | Chron.com - Houston Chronicle http://retwt.me/1LWjL (via @carmenhopeless)"
    },
    {
      "tweet": "U.S. creating climate change agency - Climate Change- msnbc.com http://retwt.me/1LWbe (via @patboyle60)"
    },
    {
      "tweet": "RT @Doc_0: If the purpose of int'l courts is 2 prosecute crimes against humanity, everyone behind the global warming fraud belongs in court."
    },
    {
      "tweet": "Diigo: Obama starts agency on climate change | National | Chron.com - Houston Chronicle: In many ways Obama is wor... http://bit.ly/94h14T"
    },
    {
      "tweet": "EnCana's $31-million free pass: why we need to put a price on pollution | Climate Change | Pemb... http://tinyurl.com/yatgg8p (via @pembina)"
    },
    {
      "tweet": "New federal climate change agency forming | D.C. Now | Los Angeles Times http://retwt.me/1LW7w (via @washdcnews)"
    },
    {
      "tweet": "Tristan Jones previews this Thursday's event @EarthInstitute Illuminating the Science: Art and Climate Change: http://bit.ly/aiDGwt"
    },
    {
      "tweet": "Climate Service,' New Federal Climate Change Agency, Is Forming http://retwt.me/1LW7a (via @ClimaTweets)"
    },
    {
      "tweet": "RT @VinsonandElkins: SEC Issues Guidance on Disclosure Related to Climate Change http://bit.ly/bmFnfI #energy"
    },
    {
      "tweet": "Obama starts agency on climate change http://bit.ly/c4x0zB"
    },
    {
      "tweet": ":O YouTube - Thomas Sowell: Global Warming Manufactured by Intellectuals? http://bit.ly/9mJLOt commentator"
    },
    {
      "tweet": "Don't Neglect Natural Solutions To Climate Change Crisis, Experts Tell Canada :: Northumberland... http://tinyurl.com/y8lgvk8 (via @nfoldca)"
    },
    {
      "tweet": "Chron Energy: China's climate change quandry: http://bit.ly/ciiKHF"
    },
    {
      "tweet": "RMetS meeting: Adapting our cities for future climate change 17/02/2010, 2pm, Imperial College, London, http://bit.ly/cEV0OE"
    },
    {
      "tweet": "Is climate change skepticism good for climate science? | Humanitarian News http://retwt.me/1LW0X (via @NewsOnGreen)"
    },
    {
      "tweet": "Pentagon Considers Climate Change a National Security Threat | UN Dispatch http://retwt.me/1LVY6 (via @peterdaou)"
    },
    {
      "tweet": "@xyrotr1 Enjoying the Global Warming, are we?"
    },
    {
      "tweet": "RT @ANGAus: WH Director of Energy & Climate Change Browner: 'We think there are tremendous opportunities with #natgas' http://bit.ly/d3CAKq"
    },
    {
      "tweet": "Stop Global Warming; Stop Cutting Down the Trees and Plant More ... ! http://bit.ly/chYuwU climate change"
    },
    {
      "tweet": "Environmental Economics: Is climate change skepticism good for climate science? http://retwt.me/1LVWp (via @tim_env_econ)"
    },
    {
      "tweet": ";O Winter Arctic Blast Proves Climate Change is Real http://bit.ly/98WI1L al gore global warming"
    },
    {
      "tweet": "Push to change embattled climate panel: A prominent scientist has joined sceptics in calling for the UN authority ... http://bit.ly/9t3Pnr"
    },
    {
      "tweet": "The great global warming collapse http://tgam.ca/Hrh (via @globeandmail)"
    },
    {
      "tweet": "Top UN environment official defends conclusions of landmark climate change report http://retwt.me/1LVTf (via @onenergy)"
    },
    {
      "tweet": "Disclosing the Real Risks on Climate Change by Paul Driessen, TownHall.com | Climate Realists http://retwt.me/1LVSJ (via @climaterealists)"
    },
    {
      "tweet": "Business Energy Adviser x2 (Climate Change / Energy / Carbon Emissions) jobs, Thundersley... http://tinyurl.com/yd3jl3d (via @GJenvironment)"
    },
    {
      "tweet": "Species vulnerability to climate change: sharks and sting rays in the Great BarrierReef - Front ... http://ow.ly/1oipjF (via @ResearchBlogs)"
    },
    {
      "tweet": "Despite the sceptics, climate change must remain a priority | Editorial | Comment is free | The Ob... http://ow.ly/1oikU5 (via @guardianeco)"
    },
    {
      "tweet": "Would selling flood insurance to eskimos be as grimey as Goldman and Sachs? I mean global warming could damage their igloos."
    },
    {
      "tweet": "Thoughts on Marketing the Climate Change Issue http://retwt.me/1LVPe (via @ecoelectrons)"
    },
    {
      "tweet": "Epoch Times - 'One Million Women' a Starting Point on Climate Change http://retwt.me/1LVNt (via @seekoeur)"
    },
    {
      "tweet": "Climate change deniers gain momentum ' Mac Uaid http://retwt.me/1LVKZ (via @LiamMacUaid)"
    },
    {
      "tweet": "India needs more research on climate change: Shyam Saran | CalcuttaTube http://retwt.me/1LVKY (via @calcuttatube)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Climate change plan reckless, says Malcolm Turnbull http://retwt.me/1LVI5 (via @_steve_nash)"
    },
    {
      "tweet": "How can ethical analysis make a contribution to climate policy? Read the review in WIREs Climate Change http://bit.ly/bR24mX"
    },
    {
      "tweet": "Australia's PM losing ground over climate change as election nears - Vancouver Sun http://bit.ly/d2PJrK - #copenha... http://bit.ly/cY4yKK"
    },
    {
      "tweet": "Thoughts on Marketing the Climate Change Issue http://bit.ly/aUatfh #susty"
    },
    {
      "tweet": "Need for precise information on climate change: Shyam Saran - dnaindia.com http://retwt.me/1LVCt (via @tnewsindia)"
    },
    {
      "tweet": "James J. McCarthy, Ph.D.: It's Time for President Obama to Set the Record Straight on Climate Change: In recent m... http://huff.to/dii61M"
    },
    {
      "tweet": "Behind the BBC poll on climate change http://retwt.me/1LVBy (via @libcon)"
    },
    {
      "tweet": "Water at core of climate change impacts - U.N. experts - Yahoo! News http://retwt.me/1LVBf (via @climatenews)"
    },
    {
      "tweet": "India needs more research on climate change: Shyam Saran http://retwt.me/1LVzz (via @India_Headlines)"
    },
    {
      "tweet": "India needs more research on climate change: Shyam Saran http://retwt.me/1LVzk (via @HeadlinesIndia)"
    },
    {
      "tweet": "Climate change helps invasive plants become more destructive- Hindustan Times http://retwt.me/1LVx7 (via @Indiaclimate)"
    },
    {
      "tweet": "UK panel ropes in India to fight climate change http://retwt.me/1LVwQ (via @Indiaclimate)"
    },
    {
      "tweet": "Scientists develop crops to endure climate change | Manila Bulletin http://retwt.me/1LVwp (via @manila_bulletin)"
    },
    {
      "tweet": "IndiaVision News - Use religious leaders for climate change awareness: Nobel laureate http://retwt.me/1LVvX (via @indiavisioncom)"
    },
    {
      "tweet": "Climate change plan reckless, says Malcolm Turnbull http://retwt.me/1LVvh (via @new_headline)"
    },
    {
      "tweet": "Rudd versus Abbott on climate change: what's the difference? ' Crikey http://retwt.me/1LVuR (via @NecoMovement)"
    },
    {
      "tweet": "The Minister for coal out of step with climate change action http://bit.ly/cbrpKb"
    },
    {
      "tweet": "The great global warming collapse http://tgam.ca/Hrh (via @globeandmail) What a HOT MESS!!! #climategate"
    },
    {
      "tweet": "The Space-Age Disco Ball For Combating Climate Change http://retwt.me/1LVtB (via @frommoneyorg)"
    },
    {
      "tweet": "Emissions trading failing to combat climate change | Humanitarian News http://retwt.me/1LVtA (via @NewsOnGreen)"
    },
    {
      "tweet": "@Hoptoad4  This #HCR Bill, Cap & Tax, Climate Change, Stimulus, Cash for Clunker, prosecuting Terrorist........ just a few!"
    },
    {
      "tweet": "Empowering a Climate Change Movement -- Part 3: Instead of Cursing the Dark ... - Huffington Post... http://ow.ly/1ogZUK (via @HumanityNews)"
    },
    {
      "tweet": "A Note About Climate Change, Politics, Exhaustion http://retwt.me/1LVjl (via @vermontaigne)"
    },
    {
      "tweet": "Carbon-Based: Western Australia drought is 'proof of climate change' | Study Abroad Education Links http://retwt.me/1LVj9 (via @myEduLinks)"
    },
    {
      "tweet": "Effort underway to suspend California\\'s global-warming law greenhouse gas emissions  :O"
    },
    {
      "tweet": ":) greenhouse gas emissions Effort underway to suspend California\\'s global-warming law"
    },
    {
      "tweet": "YID With LID: The IPCC's Latest Climate Change Blunder...To Boldly Go Where No Stupidity Has Gone Before. http://bit.ly/dylG45 (via @CO2HOG)"
    },
    {
      "tweet": "The Minister for coal out of step with climate change action http://bit.ly/cbrpKb"
    },
    {
      "tweet": "WA drought is 'proof of climate change' - The West Australian http://retwt.me/1LVfJ (via @thewest_com_au)"
    },
    {
      "tweet": "RT @RightNowLady: RT @DefendGlenn \"SCAM, SCAM, SCAM!\" EU Parliament Member Rips global Warming Hysteria http://is.gd/7Mkw4 #tcot  #hhrs"
    },
    {
      "tweet": "Global warming to hit rice production: Report: At the university's 48th annual conference, he cited another study ... http://bit.ly/cR4mNF"
    },
    {
      "tweet": "Al Gore, where are you? Can you get back to your 1st invention, the internet and leave global warming to nature? What a disgrace. #tcot"
    },
    {
      "tweet": "You and Us and Me - Glacier Responses to Climate Change are Complex, as are the Impacts http://retwt.me/1LVbB (via @NewsOnGreen)"
    },
    {
      "tweet": "Conservationist: Colo. sees climate change effects - The Denver Post http://retwt.me/1LVbA (via @denverpost)"
    },
    {
      "tweet": "http://www.documentarywire.com/great-global-warming-swindle Great Global Warming Swindle"
    },
    {
      "tweet": "Aid News - Water at core of climate change impacts-UN experts http://retwt.me/1LVaK (via @AidNews)"
    },
    {
      "tweet": "WA drought is 'proof of climate change' (AAP) | Humanitarian News http://retwt.me/1LVat (via @NewsOnGreen)"
    },
    {
      "tweet": "Public loses faith in climate change science after leaked emails scandal | Environment | The Guardian http://retwt.me/1LV9W (via @buyeco)"
    },
    {
      "tweet": "Raj Pachauri's Fall From Grace: India forms new climate change body (they no longer trust ... http://tinyurl.com/ykrh9vx (via @TheDailyBail)"
    },
    {
      "tweet": "Only two of 10 climate reduction proposals from developed world to #Copenhagen would keep global warming below 2•_ÁC... http://bit.ly/bY5fPN"
    },
    {
      "tweet": "Climate change report errors http://retwt.me/1LV8B (via @MTJudd)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Because 'man-made global warming' skeptics in Alaska rock and  http://bit.ly/aEAwKV :) global warming skeptics"
    },
    {
      "tweet": "Water at core of climate change impacts-UN experts| Reuters http://retwt.me/1LV2v (via @Reconsider)"
    },
    {
      "tweet": "Water at core of climate change impacts - U.N. experts (Reuters) | Humanitarian News http://retwt.me/1LUZA (via @NewsOnGreen)"
    },
    {
      "tweet": "Water at core of climate change impacts: experts | Humanitarian News http://retwt.me/1LUZz (via @NewsOnGreen)"
    },
    {
      "tweet": "Climate change, pollution are suspects in rusty blackbirds' plummeting numbers ' Dallas Morning Ne... http://ow.ly/1ofJJ1 (via @SwampSchool)"
    },
    {
      "tweet": "There must be some alternative energy resources to prevent global warming affects from increasing and impacting this planet negatively"
    },
    {
      "tweet": "Collaborative coverage of climate change: Mother Jones and six other news organizations are trying it http://jr.ly/yphe"
    },
    {
      "tweet": "Something must be done to prevent global warming from increasing this planet's temperatures and affecting this planet even more."
    },
    {
      "tweet": "The global warming is totally messing up the weather patterns in this world and is causing violent weather storms worldwide very hurtful"
    },
    {
      "tweet": "The massive rainstorms and lots of terrible weather is affecting our planet something must be done about global warming soon"
    },
    {
      "tweet": "The Great Global Warming Collapse #copenhagen http://bit.ly/b4VuvpRT @/greenconscience: The Great Global Warming C... http://bit.ly/bnaxXk"
    },
    {
      "tweet": "RT @americanthinker: Global Warming and the Science Fair Test  http://bit.ly/8cYHZw"
    },
    {
      "tweet": "New errors in IPCC climate change report http://retwt.me/1LUTW (via @theopolitico)"
    },
    {
      "tweet": "Will the sheeple in Philly finally understand who has been brainwashing them about global warming and why? #tcot Naaahhhaaaa. #gop"
    },
    {
      "tweet": "Glacier Responses to Climate Change are Complex, as are the Impacts | Humanitarian News http://retwt.me/1LUQA (via @HumanityNews)"
    },
    {
      "tweet": "India seeks clarity on equity of climate change flow | CalcuttaTube http://retwt.me/1LUQa (via @calcuttatube)"
    },
    {
      "tweet": "You and Us and Me - Olympics organisers desperate for climate change http://retwt.me/1LUOV (via @NewsOnGreen)"
    },
    {
      "tweet": "via @Drudge_Report RFK, Jr. 15 months ago: Global warming means no snow or cold in DC... http://bit.ly/a13OjC #tcot (via @CO2HOG)"
    },
    {
      "tweet": "J&K governor warns of the dangers of climate change - dnaindia.com http://retwt.me/1LUO3 (via @asim7asim)"
    },
    {
      "tweet": "India seeks clarity on equity of climate change flow http://retwt.me/1LULK (via @HeadlinesIndia)"
    },
    {
      "tweet": "You and Us and Me - Olympics organisers desperate for climate change http://retwt.me/1LUK2 (via @NewsOnGreen)"
    },
    {
      "tweet": "Olympics organisers desperate for climate change | Humanitarian News http://retwt.me/1LUJx (via @NewsOnGreen)"
    },
    {
      "tweet": "http://bit.ly/cW9vRo How can we stop global warming in small ways? ;O stop global warming"
    },
    {
      "tweet": "baby steps ;) How can we stop global warming in small ways?"
    },
    {
      "tweet": "Obama: Id Hire Gore  climate change ;P"
    },
    {
      "tweet": "CENSORED NEWS: Cochabama: Peoples World Conference on Climate Change and Mother Earth's Rights http://retwt.me/1LUDG (via @RaysFreedomHash)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "RT @Qorianka: LINKS 4 World People's Conference on Climate Change and the Rights of Mother Earth - WPCCC http://bit.ly/bOGCzx"
    },
    {
      "tweet": "The great global warming collapse http://su.pr/AKJJ3Y #tcot #climatechange"
    },
    {
      "tweet": "Olympic Organisers desperate for climate change | Humanitarian News http://retwt.me/1LUzL (via @NewsOnGreen)"
    },
    {
      "tweet": "i hope obama and the rest of the DNC idiots who gathered in DC today enjoyed the blizzard - wonder if global warming was discussed"
    },
    {
      "tweet": "Despite the sceptics, climate change must remain a priority | Editorial | Comment is free | ... http://tinyurl.com/ykt38vd (via @Earth_News)"
    },
    {
      "tweet": "Think-tanks take oil money and use it to fund climate deniers - Climate Change, Environment - The I... http://ow.ly/1oe5CH (via @terriferic)"
    },
    {
      "tweet": "Climate change scientist: I considered suicide | Mail Online http://retwt.me/1LUxE (via @MailOnline)"
    },
    {
      "tweet": "Climate change research bungle - Telegraph http://retwt.me/1LUxD (via @TelegraphNews)"
    },
    {
      "tweet": "China announces pledge to curb carbon emissions | Climate Change http://retwt.me/1LUxC (via @ecoactions)"
    },
    {
      "tweet": "New errors in IPCC climate change report - Telegraph http://retwt.me/1LUwA (via @StopTheTakeover)"
    },
    {
      "tweet": "HOW ABOUT ALL THAT SNOW IN THE WASHINGTON AREA ? HOW'S THAT \"GLOBAL WARMING\" WORKING OUT FOR YOU MR. AL GORE ?"
    },
    {
      "tweet": "Climate Change Impacts And Vulnerability In The Eastern Himalayas - Indigenous Peoples Issues ... http://ow.ly/1odXhP (via @RaysFreedomHash)"
    },
    {
      "tweet": "Pretty cool picture of the West Wing of the White House tonight.   Dang Global warming... http://twitpic.com/11ssdd"
    },
    {
      "tweet": "Twitlonger: RT @infowarsstories: Phony Climate Change Agenda Used In Australia to Force Expen... http://tinyurl.com/ycgoz8q (via @ihatematt)"
    },
    {
      "tweet": "Phony Climate Change Agenda Used In Australia to Force Expensive Home Inspections http://retwt.me/1LUui (via @sminfowars)"
    },
    {
      "tweet": "Lawmaker: Climate change just ruse to control population http://retwt.me/1LUsX (via @sminfowars)"
    },
    {
      "tweet": "Climate change scepticism on rise - UK - World - The Times of India http://retwt.me/1LUst (via @TOIWorldNews)"
    },
    {
      "tweet": "Is Global Warming a \"Crock of S*%t?\" http://www.businessweek.com/lifestyle/content/jan2010/bw20100128_152091.htm"
    },
    {
      "tweet": "Is climate change hiding the decline of maple syrup? http://retwt.me/1LUqS (via @digg_sciences)"
    },
    {
      "tweet": "PM's stand on Copenhagen a snub to UN climate change secretariat - India - The Times of India http://retwt.me/1LUqH (via @Newsquicki)"
    },
    {
      "tweet": "African Youth Initiative on Climate Change | African Youth Initiative on Climate Change http://retwt.me/1LUpO (via @benkamorvan)"
    },
    {
      "tweet": "RT @Qorianka So excited. In Cochabamba 4 the World ppl's Conference on Climate Change & the Rights of Mother Earth, !!! http://bit.ly/dC1Z7S"
    },
    {
      "tweet": "Think Progress ' Utah state representative claims climate change is a 'conspiracy' aimed at popula... http://bit.ly/b8a5rM (via @washdcnews)"
    },
    {
      "tweet": "compliment ! Go Green Toolshed ' Blog Archive ' NASA Global Warming Alarmist ..."
    },
    {
      "tweet": "Consensus needed for climate change accord in Mexico' http://retwt.me/1LUob (via @tinewsalert)"
    },
    {
      "tweet": "Rajendra Pachauri: head of UN climate change panel clocks up half a million miles of air travel http://retwt.me/1LUoa (via @VectorBreak)"
    },
    {
      "tweet": "Fuel-less, battery-less auto engine displayed in the UN-Climate Change ' http://retwt.me/1LUnJ (via @Egilacbr9)"
    },
    {
      "tweet": "RT @TM_Climate: Climate Interactive Scorecard on the Copenhagen Accord | Teaching Climate Change Law & Policy http://retwt.me/1LUnq (via @wil_burns)"
    },
    {
      "tweet": "Climate Interactive Scorecard on the Copenhagen Accord | Teaching Climate Change Law & Policy http://retwt.me/1LUnq (via @wil_burns)"
    },
    {
      "tweet": "Cyberspace climate change | Permaculture.TV free video cooperative http://retwt.me/1LUmN (via @permaculturetv)"
    },
    {
      "tweet": "RT @VRWCTexan: The great global warming collapse http://tgam.ca/Hrh (via @globeandmail)"
    },
    {
      "tweet": "The great global warming collapse http://tgam.ca/Hrh (via @globeandmail)"
    },
    {
      "tweet": "RT @Qorianka: In Cochabamba for the World People's Conference on Climate Change and the Rights of Mother Earth http://bit.ly/Anhhb"
    },
    {
      "tweet": "IndiaVision News - 'Consensus needed for climate change accord in Mexico' http://retwt.me/1LUiC (via @indiavisioncom)"
    },
    {
      "tweet": "Consensus needed for climate change accord in Mexico' http://retwt.me/1LUf6 (via @India_Headlines)"
    },
    {
      "tweet": "CentreRight: Al Gore and his followers are losing the climate change debate http://retwt.me/1LUey (via @TimMontgomerie)"
    },
    {
      "tweet": "Consensus needed for climate change accord in Mexico http://retwt.me/1LUex (via @HeadlinesIndia)"
    },
    {
      "tweet": "Are we all climate change denialists? - The Division of Needs - Jim Richardson http://retwt.me/1LUdv (via @jimrhiz)"
    },
    {
      "tweet": "RT @fredthompson DHS cites global warming as security threat. Um. worry less about temp of planet, more about temp of terrorist undies #tcot"
    },
    {
      "tweet": "Digg: Is climate change hiding the decline of maple syrup? http://bit.ly/cXAjme"
    },
    {
      "tweet": "RT @joelcomm: The Great Global-Warming Collapse - http://TwitPWR.com/Dev/  (good.. can we now get back to reality?) &lt;&lt; The \"settled science"
    },
    {
      "tweet": "RT @fredthompson: DHS cites global warming as security threat. Um... worry less about temp of planet, more about temp of terrorist undies."
    },
    {
      "tweet": "Rajendra Pachauri: head of UN climate change panel clocks up half a million miles of air travel - T... http://is.gd/7Pxrw (via @csringo2138)"
    },
    {
      "tweet": "@pdigaudio Global warming kills."
    },
    {
      "tweet": "Global Warming Wont Melt Ignorance stake  :)"
    },
    {
      "tweet": "Global Warming Wont Melt Ignorance stake"
    },
    {
      "tweet": "PM's stand on Copenhagen a snub to UN climate change secretariat http://bit.ly/b2XMJf"
    },
    {
      "tweet": "Is climate change the new faith? | Simon Hoggart's week | From the Guardian | The Guardian http://retwt.me/1LU7M (via @Earth_News)"
    },
    {
      "tweet": "YouTube - Climate change sceptic in Australia - Lord Christopher Monckton http://retwt.me/1LU5N (via @AlterXMedia)"
    },
    {
      "tweet": "Detectives question climate change scientist over email leaks : Federal Jack http://retwt.me/1LU5A (via @FederalJack)"
    },
    {
      "tweet": "@mkhammer Its surprising there is no global warming conference in Wash, D.C. this week. Usually when they talk, God answers. #tcot"
    },
    {
      "tweet": "Sea Turtle Restoration Project:Leatherback on International Climate Change Hit List http://retwt.me/1LU2D (via @geographile)"
    },
    {
      "tweet": "Living Outside the Dialectic: UN climate change panel based claims ' http://retwt.me/1LU2e (via @Moon4ljy)"
    },
    {
      "tweet": "RT @rhonyk: @Qorianka Many thx 2 U Sister,for yr partcipation in the World Peoples Summit 4 Climate Change. #Indigenous #EarthRights #Global"
    },
    {
      "tweet": "The global warming guerrillas' by MATT RIDLEY @The_Spectator: http://bit.ly/aTO0SY #JustWrong #Climategate #glaciergate #tcot #IPCC"
    },
    {
      "tweet": "RT @EdMorrissey: Suddenly, the British have become a lot more skeptical about global warming #tcot http://is.gd/7OQp0"
    },
    {
      "tweet": "About Omniclimate ' The Unbearable Nakedness of CLIMATE CHANGE http://retwt.me/1LTZC (via @afashionfan)"
    },
    {
      "tweet": "YouTube - Lord Monckton on Climate Change - Melbourne Highlights clip (2 of 2) http://retwt.me/1LTZk (via @walterray)"
    },
    {
      "tweet": "How our belief in climate change is draining away as number of doubters rises by 10% in three months ... http://is.gd/7OGi4 (via @LaneLaura)"
    },
    {
      "tweet": "Global Warming, Global Warning, Global Microwaving, Global Something, thats for sure, maybe. http://shar.es/aN81x via @sharethis"
    },
    {
      "tweet": "New Facility Expected to Clarify Ecosystem Responses to Climate Change | The X-Journals http://retwt.me/1LTW7 (via @xjournals)"
    },
    {
      "tweet": "Billions more wasted chasing the phantom menace at Heliogenic Climate Change http://retwt.me/1LTVn (via @FoxNewsMom)"
    },
    {
      "tweet": "Feds Won't Protect Pika From Climate Change | unEARTHED, the Earthjustice blog http://retwt.me/1LTRB (via @Earthjustice)"
    },
    {
      "tweet": "Climate Change Scepticism On The Rise? | Skip To The End http://retwt.me/1LTQm (via @Global_Changes)"
    },
    {
      "tweet": "RT @Qorianka Actress Q'orianka Kilcher on Climate Change Act... http://bit.ly/9Wiyhz"
    },
    {
      "tweet": "Perkins Coie - News / Publications - Updates DetailDoes Climate Change Affect Your Busin... http://tinyurl.com/yhlbk3w (via @PerkinsCoieLLP)"
    },
    {
      "tweet": "The International Law Firm of Fulbright & Jaworski - \"Climate Change Post-Copenhagen: Where Do We Go ... http://is.gd/7O6I2 (via @Fulbright)"
    },
    {
      "tweet": "Climate Change Should Not Be the Focus of Homeland Security | The Foundry: Conservative Policy News. http://retwt.me/1LTP6 (via @scullifer)"
    },
    {
      "tweet": "Videos: How we know humans are changing the climate and climate change is a clear and present danger http://retwt.me/1LTL9 (via @350dotorg)"
    },
    {
      "tweet": "Climate change to have dramatic impact on hydropower | Technology Solutions for Home - Smart... http://tinyurl.com/yama46k (via @itsforhome)"
    },
    {
      "tweet": "Implications of incorporating air-quality co-benefits into climate change policymaking http://retwt.me/1LTKo (via @drgrist)"
    },
    {
      "tweet": "Is climate change hiding the decline of maple syrup? : Nature News http://retwt.me/1LTK1 (via @NatureNews)"
    },
    {
      "tweet": "Accenture at UN Climate Change Conference http://retwt.me/1LTHj (via @Accenture)"
    },
    {
      "tweet": "I predict after a few more years of 10% unemployment, the people will jail many of the Democrats behind \"Global Warming\" #teaparty"
    },
    {
      "tweet": "http://bit.ly/czJOXE ;P Global warming??? global warming"
    },
    {
      "tweet": "globalwarming Global warming???"
    },
    {
      "tweet": "Oh My! 30\" of snow for D.C area! http://bit.ly/bktjuE Look out Virginia it's Global Warming! :) Go hug a tree and buy a Toyota Prius!"
    },
    {
      "tweet": "#tcot #news : Majority Now Disbelieve Man-Made Global Warming Propaganda http://bit.ly/c9nvkK (via @survivalstation)"
    },
    {
      "tweet": "OMG!  Al Gore forgot to tell Mother Nature that she can't have a Blizzard when Global Warming is occurring!!!"
    },
    {
      "tweet": ";P Study Says Arctic Ice Melt to Cost Global Economy $2.4 Trillion global warming http://bit.ly/dxIaFb"
    },
    {
      "tweet": "RT @MikeLowthorp: @JuliaChicken  Climate Change is the New Phrase. Global Warming was last month"
    },
    {
      "tweet": "global warming solutions Global warnings http://bit.ly/bMkeUV"
    },
    {
      "tweet": "@JuliaChicken  Climate Change is the New Phrase. Global Warming was last month"
    },
    {
      "tweet": "How much $ have we saved due to todays snow storm in DC.  Isn't global warming a wonderful thing? #tcot #rnc"
    },
    {
      "tweet": "Sec Clinton admitted that US funding for #climate change may not be additional, said it's up to Congress: http://is.gd/7LY8L (skip to 54:00)"
    },
    {
      "tweet": "[our @Qorianka ] @boliviaun Watch Pocahontas Star Interviewed at Climate Change Conference in Bolivia  http://bit.ly/bkaByk #cmpcc"
    },
    {
      "tweet": "Is climate change hiding the decline of maple syrup? : Nature News http://retwt.me/1LTpM (via @NatureNews)"
    },
    {
      "tweet": "New #bookmark Study Climate Change http://bit.ly/dpBNAl"
    },
    {
      "tweet": "@oddruneh #Climategate is what they R calling #Global #Warming in the #UK - just saw it #online....LOL  I didN'T coin that term... #weather"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "RMetS meeting: Some new perspectives on climate change   13th Feb  http://www.rmets.org/events/detail.php?ID=4411"
    },
    {
      "tweet": "India forms new climate change body because it 'cannot rely' on the IPCC...so who can? @TelegraphNews: http://bit.ly/anxYbU #JustWrong"
    },
    {
      "tweet": "RT @EnergyCollectiv Beyond Brokenhagen: Business and Climate Change in the Post-Copenhagen Era http://is.gd/7u6yW"
    },
    {
      "tweet": "Explore the relationship between climate change messages and the behaviour of readers in WIREs Climate Change http://bit.ly/akzLwn"
    },
    {
      "tweet": "Astronaught posts beautiful pic of the Maldives from space http://twitpic.com/115sjc - islands set to sink due to impacts of #climate change"
    },
    {
      "tweet": "global warming http://bit.ly/dwthqd :O Bill Blocking EPA Authority to Curb Global Warming Pollution an"
    },
    {
      "tweet": "Just How Entertaining Can Climate Change Really Be? : TreeHugger http://retwt.me/1LT4c (via @moneyflower)"
    },
    {
      "tweet": "http://bit.ly/aSfWMt Do you believe in Global Warming  Al Gore  Democratic Ideas is it influencing how you will... al gore global warming :O"
    },
    {
      "tweet": "Just How Entertaining Can Climate Change Really Be? | Humanitarian News http://retwt.me/1LSZy (via @NewsOnGreen)"
    },
    {
      "tweet": "How Is Denying New Info on Abstinence Any Different from Denying Climate Change?: It's been a bloody week in the c... http://bit.ly/blCOCs"
    },
    {
      "tweet": "Head of IPCC insists science behind climate change remains valid - Telegraph http://retwt.me/1LSWM (via @TelegraphWorld)"
    },
    {
      "tweet": "What does Climate Change mean for Arab countries? - Arab Environment Watch http://retwt.me/1LSTU (via @batirw)"
    },
    {
      "tweet": "Climate change is not an environmental issue - SWEDEN.SE http://retwt.me/1LSSl (via @swedensustblog)"
    },
    {
      "tweet": "India pulls out of UN climate change body and forms its own http://su.pr/2WRLC7 #tcot #climatechange"
    },
    {
      "tweet": "http://bit.ly/bxMwb8 :) What can our families do to help stop global warming? stop global warming"
    },
    {
      "tweet": "stop global warming http://bit.ly/bxMwb8 What can our families do to help stop global warming? ;O"
    },
    {
      "tweet": "Mistakes in Climate Report Fuel Skepticism: Scientists Say Small Errors Do Not Change the Reality of Global Warmin... http://bit.ly/cKkbrL"
    },
    {
      "tweet": "Video: Fuel for Climate Change Skeptics: The UN's climate chief admitted scientists made mistakes in a major study... http://bit.ly/cRCYoW"
    },
    {
      "tweet": "India to have own panel on climate change: Jairam Ramesh- Hindustan Times http://retwt.me/1LSPE (via @Indiaclimate)"
    },
    {
      "tweet": "@bdgrlaw  Global warming -- MOL"
    },
    {
      "tweet": "logical analysis :P Niche Modeling ' Disproving Global Warming II"
    },
    {
      "tweet": "The Global Climate: Yes, Its Still Warming stop global warming :) http://bit.ly/b2du4M"
    },
    {
      "tweet": "TelegraphNews India forms new climate change body  http://ow.ly/1o7IZC  (India says 'cannot rely' on UN IPCC panel)"
    },
    {
      "tweet": "India forms new climate change body - Telegraph http://retwt.me/1LSIi (via @mijadedios)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Want to play golf tomorrow, but think \"Global Warming\" won't let me. Remains very cold for Houston. #tcot, #right, #rightblogs, #teaparty"
    },
    {
      "tweet": "GeoEngineering as a Potential Part of the Climate Change Solution http://bit.ly/csy3ih #susty"
    },
    {
      "tweet": "California Climate change law takes potential whack http://bit.ly/coIh14"
    },
    {
      "tweet": "Climate change has high costs and very distributed benefits"
    },
    {
      "tweet": "Saving endangered species: it\\'s the economy global warming"
    },
    {
      "tweet": "Another DC blizzard?! Yet another consequence of global warming."
    },
    {
      "tweet": "Predicting future climate change via 4000 year old sediments http://retwt.me/1LSuN (via @AngelWardriver)"
    },
    {
      "tweet": "U.N. climate change body blasted -- by Greenpeace? | Washington Examiner http://retwt.me/1LSuM (via @examinerpolitic)"
    },
    {
      "tweet": "Climate Change Scientific Consensus Cloudy as Ever | The Foundry: Conservative Policy News. http://retwt.me/1LSrQ (via @scullifer)"
    },
    {
      "tweet": "EU Referendum: British Council spends •_£3.5 million on climate change propaganda http://retwt.me/1LSjS (via @afashionfan)"
    },
    {
      "tweet": "Climate change alternative - see video - http://www.youtube.com/watch?v=dKoUwttE0BA"
    },
    {
      "tweet": "Diigo link: How climate-change fanatics corrupted science (Michael Barone, RCP) http://bit.ly/deXp1u"
    },
    {
      "tweet": "India to have own panel on climate change: Jairam Ramesh - India - The Times of India http://retwt.me/1LShz (via @news_in)"
    },
    {
      "tweet": ";O One of the proposed solutions to global warming is to grow a large number of trees. This... global warming solutions http://bit.ly/9m2Qfp"
    },
    {
      "tweet": "NASA Extends Cassini's Fly-bys of Saturn to Focus on Seasons & Climate Change http://tinyurl.com/ydqh4nl (via @new_headline)"
    },
    {
      "tweet": "India to have own panel on climate change: Jairam Ramesh- Hindustan Times http://retwt.me/1LSeg (via @htTweets)"
    },
    {
      "tweet": "Diigo: RealClearPolitics - How Climate-Change Fanatics Corrupted Science: Tags: Ecomental Posted by: loseaneye http://bit.ly/dCqOnS"
    },
    {
      "tweet": "Profession must lead the way on climate change - Accountancy Age http://retwt.me/1LScQ (via @IFRSAdvantage)"
    },
    {
      "tweet": "Canada's Wolverine Population Declines As Result Of Climate Change http://retwt.me/1LSct (via @ebelgreen)"
    },
    {
      "tweet": "fossile Debunking the Deniers of Global Warming, page 1"
    },
    {
      "tweet": "BETA: Labor Connect: Libs policy does not address climate change | Labor Connect http://retwt.me/1LS6V (via @politicalfiend)"
    },
    {
      "tweet": "RT @democracy_now: Actress Q'orianka Kilcher on Climate Change Activism: Public Figures and Celebrities \"Have a Responsibility to Help ' http://bit.ly/cY41H2"
    },
    {
      "tweet": "Climate change benefits | Humanitarian News http://retwt.me/1LS4A (via @NewsOnGreen)"
    },
    {
      "tweet": "The politics of climate change | Magazine | Progress http://retwt.me/1LS3A (via @Progressonline)"
    },
    {
      "tweet": "India to have own panel on climate change: Jairam Ramesh http://retwt.me/1LS3e (via @HeadlinesIndia)"
    },
    {
      "tweet": "How the media is tricked into 'balance' on climate change http://retwt.me/1LS2h (via @libcon)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "energy absorption   Innovation has climate change in hand | COSMOS magazine"
    },
    {
      "tweet": "How to Shape a Global Approach to Climate Change: More Davos, Less Denmark | Humanitarian News http://retwt.me/1LRXI (via @NewsOnGreen)"
    },
    {
      "tweet": "India asks G-77 to stay united over climate change talks- International Business-News-The Econ... http://bit.ly/b9nfkH (via @ETIntlBusiness)"
    },
    {
      "tweet": "RT @TM_Climate: Climate Change and the Amazon Rainforest http://retwt.me/1LRVk (via @mongabay)"
    },
    {
      "tweet": "Climate Change and the Amazon Rainforest http://retwt.me/1LRVk (via @mongabay)"
    },
    {
      "tweet": "YouTube - Defense department has global warming funds\" ( http://bit.ly/dq937Z )"
    },
    {
      "tweet": ":O  do you know any ways we can help stop global warming? global warming"
    },
    {
      "tweet": "Forests are growing faster, ecologists discover; Climate change appears to be driving accelerated growth\" ( http://bit.ly/afk8yz )"
    },
    {
      "tweet": "#snOMG has no more link to #climate change than did those 100s of stories about warm weather. Where were whiners then? #TCOT #TLOT"
    },
    {
      "tweet": "Hill devotes article to baseless global warming attacks, Gore bashing http://dlvr.it/1gGj"
    },
    {
      "tweet": "RT @washdcnews: Sarah Palin calls global warming studies 'snake oil science.' http://dlvr.it/1gFF"
    },
    {
      "tweet": "Hill devotes article to baseless global warming attacks, Gore bashing: http://bit.ly/arGDYw #p2 #noisemachine #climate"
    },
    {
      "tweet": "Sarah Palin calls global warming studies 'snake oil science.' http://dlvr.it/1gFF"
    },
    {
      "tweet": "Good item by The Hill's Ben Geman on arguments about D.C. snow and climate change (http://is.gd/87hnh)"
    },
    {
      "tweet": "Does snow mean global warming's over?: By Juliet Eilperin With all this snow, people are yet again wondering what ... http://bit.ly/9aTp4x"
    },
    {
      "tweet": "Will the Iceland Volcano Impact Global Warming? http://goo.gl/fb/xPE2E  #urbanism"
    },
    {
      "tweet": "added Patrick Parenteau (Vermont Law School) to our Feb. 22 webinar on disclosing climate change business impacts - http://bit.ly/aRb8gc"
    },
    {
      "tweet": "Flashback global warming leads to lack of snow http://www.breitbart.tv/flashback-clips-snow-levels-cause-democrats-to-demand-urgent-action/"
    },
    {
      "tweet": "RT @Heritage new Foundry post: The DC Blizzard:  More proof of Global Warming! http://bit.ly/alKBnE #snomas #snoverit #snomg #snotorious"
    },
    {
      "tweet": "RT @acarvin: RT @BorowitzReport: FUN GAME: Next time someone says \"So much for global warming,\" push them into a snowdrift and run away."
    },
    {
      "tweet": "Interesting... RT @Heritage The DC Blizzard:  More proof of Global Warming! http://bit.ly/alKBnE"
    },
    {
      "tweet": "The DC Blizzard: More proof of Global Warming! | The Foundry ...: The Foundry promotes  conservative policies and ... http://bit.ly/alKBnE"
    },
    {
      "tweet": "@Adam4004 That's sort of beside the point. People are acting like a winter storm in the mid-Atlantic disproves global warming. It doesn't."
    },
    {
      "tweet": "RT @TreeHugger: Worth reminding people: Al Gore •__ Global Warming http://bit.ly/9hFowz #climate"
    },
    {
      "tweet": "@AudreyJones when it gets cold its global warming, when it gets hot its global warming, when its warm its global warming what am i missing?"
    },
    {
      "tweet": "RT @Heritage: new Foundry post: The DC Blizzard:  More proof of Global Warming! http://bit.ly/alKBnE"
    },
    {
      "tweet": "RT @democracy_now: Amy Goodman and Dem Now is heading to Bolivia for World People's Conference on Climate Change. Tune in #WPCCC #Cochabamba"
    },
    {
      "tweet": "@radishthegreat uh. sun rise in east. global warming ugh. global warming make sky blue. uh. we make sacrifice to great god of global warming"
    },
    {
      "tweet": "Post Carbon: Does all this snow mean that global warming is over? http://bit.ly/9EhObE #snowverkill #snowpocalypse"
    },
    {
      "tweet": "Flashback:  Dems blame *lack* of snow on global warming #tcot http://is.gd/873De (via @EdMorrissey)"
    },
    {
      "tweet": "RT @OakRidgeLabNews Global Warming: Survival Of The Fittest #climate #CO2 http://bit.ly/aGYsX0 // Awesome. Evidence = good"
    },
    {
      "tweet": "I think we should all contact the Senate and complain because they cancelled the Global Warming hearing.  Pisses me off :-)"
    },
    {
      "tweet": "@discogryphon This seems to be our year for snow. I'm sure global warming is involved. It is with everything you know."
    },
    {
      "tweet": "RT @Heritage The DC Blizzard:  More proof of Global Warming!: We knew this was coming eventually.  It came from Br... http://bit.ly/dkV3Gk"
    },
    {
      "tweet": "new Foundry post: The DC Blizzard:  More proof of Global Warming! http://bit.ly/alKBnE"
    },
    {
      "tweet": "RT @time D.C. Snowstorm: How Global Warming Makes Blizzards Worse - TIME http://bit.ly/afRApN #green #climate #smh"
    },
    {
      "tweet": "Physicist destroys Time mags Global warming causes snowstorms story http://bit.ly/9e5tsE /great catch! Brrr. (RT @redostoneage) #tcot #tpn"
    },
    {
      "tweet": "Actress Q'orianka Kilcher on Climate Change Activism: Public Figures and Celebrities \"Have a Responsibility to Help ' http://bit.ly/cY41H2"
    },
    {
      "tweet": "@glennbeck trying to make a bs point about the snow/global warming http://bit.ly/d0PfAH"
    },
    {
      "tweet": "@Mac80537 Climate change theory never predicted that winter would go away. #climate #p2"
    },
    {
      "tweet": "RT @seei: Snowstorm: E Coast Blizzard Tied to Climate Change - @TIME http://bit.ly/9TRnGU"
    },
    {
      "tweet": "@Mac80537 Climate change theory has long predicted increased ocean temp would lead to more sever storms."
    },
    {
      "tweet": "No Chicken Little, the sky is not falling. That's just more global warming falling in DC. Brrr! @greggutfeld #redeye @andylevy @billschulz"
    },
    {
      "tweet": "Fighting Climate Change is a Business Model Cool Green Science The Conservation Blog of The Nature Conservancy http://shar.es/aLMd7"
    },
    {
      "tweet": "Man! I wish there was such a thing as global warming! #snowpocalypse #snowmaggedon"
    },
    {
      "tweet": "RT @tracytran: 2010 East Coast Snowfall Blamed on Global Warming? http://goo.gl/jlUo"
    },
    {
      "tweet": "Helping D.C. dig out from all the snow- I mean global warming we've got? RT @PepperScottie Where is Al Gore anyway? No where to be seen."
    },
    {
      "tweet": "RT @WWFUS Climate Denial Crock of the Week: \"It's cold. So there's no Climate Change\" http://bit.ly/9K0yih #climate"
    },
    {
      "tweet": "Checking in on Bolivia Climate Change Summit streamed in Second Life http://maps.secondlife.com/secondlife/OneClimate/10/250/23"
    },
    {
      "tweet": "Fox News has Al Gore's book on global warming in the snow during one of their \"straight news\" shows."
    },
    {
      "tweet": "Climate Denial Crock of the Week: \"It's cold. So there's no Climate Change\": With Washington, ... http://bit.ly/9K0yih #climate #WWFUS #WWF"
    },
    {
      "tweet": "Climate Denial Crock of the Week: \"It's cold. So there's no Climate Change\" http://bit.ly/9K0yih #WWFUS #WWF #climate"
    },
    {
      "tweet": "2010 East Coast Snowfall Blamed on Global Warming? http://goo.gl/jlUo"
    },
    {
      "tweet": "Cant wait to see Dr Keyes again, Stan! @stansolomon DC SNOWS OBAMA & GLOBAL WARMING ACTIVIST http://bit.ly/9ayycQ #tpn"
    },
    {
      "tweet": "2:30 min Vid: DC SNOWS OBAMA & GLOBAL WARMING ACTIVIST http://www.youtube.com/watch?v=FMciNEcHTBY #tcot #teaparty #sgp #gop @glennbeck"
    },
    {
      "tweet": "FOX  \"You can't make this stuff up\": Senate Hearing on Global Warming Cancelled due 2 weather. It ain't warm weather either lemme tell U."
    },
    {
      "tweet": "From Timeswatch.org: Editorial Page That Harps on 'Grave Threat' of Climate Change Accuses GOP of Fearmongering Ter... http://ow.ly/16xYOV"
    },
    {
      "tweet": "New on http://ekwire.com -- Heavy Snow Events:  Not a Contradiction to Global Warming Theory  -- http://ow.ly/15Ytv"
    },
    {
      "tweet": "New Federal Climate Change Agency Announced HuffPost - http://bit.ly/aU458Z"
    },
    {
      "tweet": "RT @wwwfoecouk: Tackling climate change must be achieved through bold strategies. ......Yeah.  Let's cut off part of the sun!"
    },
    {
      "tweet": "It's official: This is snowiest winter on record for DC. But hey, climate change is probably fake, right... http://is.gd/86P86"
    },
    {
      "tweet": "Snowstorm: E Coast Blizzard Tied to Climate Change - @TIME http://bit.ly/9TRnGU"
    },
    {
      "tweet": "These people who say a huge snow storm mean climate change isn't real need to look up climate change.  Seriously, what idiots."
    },
    {
      "tweet": "RT @uscan: D.C. snowstorm: How global warming makes blizzards worse (@TIME) #climate #snowmageddon http://bit.ly/aOTK6S"
    },
    {
      "tweet": "So much for global warming... RT @mmorg9yd: snowiest winter ever in dc.  broke a 110 year old record."
    },
    {
      "tweet": "Short Vid, 2010 Snowmageddon: DC Snows Obama & Global Warming Activist http://bit.ly/9pYsgf #openDC"
    },
    {
      "tweet": "Article: If #climate change researchers sound alarmist, it's b/c they're alarmed (The Globe and Mail) http://tr.im/NEEO"
    },
    {
      "tweet": "THANKS! Its not global warming! RT @RosanneMF: Snowstorm: E Coast Blizzard Tied to Climate Change - @TIME http://bit.ly/9TRnGU (via @emmzee)"
    },
    {
      "tweet": "RT @gemswinc: RT @Milieunet: D.C. Snowstorm: How Global Warming Makes Blizzards Worse - Yahoo! News http://goo.gl/z8ka"
    },
    {
      "tweet": "Obama's Defense Strategy Includes Climate Change http://bit.ly/dzSxHk #fb"
    },
    {
      "tweet": "The Minister for coal out of step with climate change action http://url4.eu/2nB3v"
    },
    {
      "tweet": "RT @KEder: RT @glynnu: Senate global warming hearing cancelled due to weather. (Yes you can laugh out loud)  http://bit.ly/9iHiVZ #tcot"
    },
    {
      "tweet": "RT @contessabrewer: @newsbusters That's not what I said.  I said that snowstorms don't refute global warming. (RE: http://ow.ly/162Vy)"
    },
    {
      "tweet": "RT @contessabrewer: @newsbusters That's not what I said.  I said that snowstorms don't refute global warming. (RE: http://ow.ly/162Vy)"
    },
    {
      "tweet": "Short Vid, 2010 Snowmageddon: DC Snows Obama & Global Warming Activist http://bit.ly/9pYsgf #tcot #teaparty @senjohnmccain"
    },
    {
      "tweet": "2010 East Coast Snowfall Blamed on Global Warming? http://ow.ly/162Gl"
    },
    {
      "tweet": "Global Warming Activist \"Snowmageddon is result of warming+moisture\" Asked why Snow King Syracuse NY has no snow, they reply \"Uh\" #tcot #gop"
    },
    {
      "tweet": "RT @glynnu: Senate global warming hearing cancelled due to weather. (Yes you can laugh out loud)  http://bit.ly/9iHiVZ #tcot"
    },
    {
      "tweet": "RT @linkspolitik: RT @StopBeck: So #tcot, if snow during the winter disproves global warming, does a hot day during summer prove it? #p2"
    },
    {
      "tweet": "Short Vid, 2010 Snowmageddon: DC Snows Obama & Global Warming activist http://bit.ly/9pYsgf #tcot #teaparty @majoratwh"
    },
    {
      "tweet": "@hippojuicefilm If this is global warming I'm venting all the refrigerants from my AC units to increase greenhouse gasses NOW!"
    },
    {
      "tweet": "The Minister for coal out of step with climate change action http://url4.eu/2nB44"
    },
    {
      "tweet": "New on http://ekwire.com -- Senate Offers Some Hope for Legislation to Address Climate Change -- http://ow.ly/15YqI"
    },
    {
      "tweet": "I think I understand why climate change causes more snow, but try selling it to people by calling it global \"warming?\" yea, GOOD LUCK!!!!"
    },
    {
      "tweet": "@theaarondouglas Don't forget that a few years ago, people were claiming a lack of snow in DC was due to Global Warming. Fix your message."
    },
    {
      "tweet": "The Great Thing About Global Warming http://dlvr.it/1fh1"
    },
    {
      "tweet": "Short Global Warming VID: DC SNOWS OBAMA.. http://www.youtube.com/watch?v=FDNWoZecHjg @seanhannity @glennbeck @specialreport #climatechange"
    },
    {
      "tweet": "Short Vid, 2010 Snowmageddon, DC Snows Obama & Global Warming activist http://www.youtube.com/watch?v=FDNWoZecHjg #tcot #teaparty @foxnews"
    },
    {
      "tweet": "@larry411 TY for making it clear it's global climate change-- big storms like this part of package. Although this is prob. just el nino yr."
    },
    {
      "tweet": "35\" of Global Warming knocks down a 50 year old tree! #capandtrade @andylevy @greggutfeld #redeye #msnbc #fox http://tweetphoto.com/10972001"
    },
    {
      "tweet": "35\" of Global Warming knocks down 50 yr old tree in DC #tcot #tlot @gopwhip @specialreport @gretawire @senate http://tweetphoto.com/10972215"
    },
    {
      "tweet": "35\" of Global Warming knocks down a 50 year old tree! @seanhannity #tcot #teaparty #sgp @glennbeck @foxnews @ http://tweetphoto.com/10972001"
    },
    {
      "tweet": "CLIMATE CHANGE: Voice of Civil Society Loud and Clear in Cochabamba: SANTIAGO, Apr 19 (Tierram•__rica) - The success... http://bit.ly/9ZYcgQ"
    },
    {
      "tweet": "Hot Air Video: MS-NBC's Brewer claims heavy snowfall proves global warming: Give credit to MS-NBC's meteorologist,... http://bit.ly/bT3uWd"
    },
    {
      "tweet": "@gounian Thanks I agree! It is sad that many are unwilling to accept the truth of climate change."
    },
    {
      "tweet": "RT @spcghst440: @MSNBC's @ContessaBrewer Pretty Sure DC Snowstorms Caused by Global Warming... http://bit.ly/93QaDO #tcot"
    },
    {
      "tweet": "I wish I could've bet money today on @Politico having a \"it's cold here so there's no global warming\" story in its front page. #climate"
    },
    {
      "tweet": "How R U working 2 reduce UR carbon footprint?We'd love 2 hear from U.Demand action against climate change by signing up @ www.EarthHour.org"
    },
    {
      "tweet": "@zrecsmom That's why it's called climate change, not global warming!  :) Turn on jazz...."
    },
    {
      "tweet": "news:Global deal on climate change in 2010 'all but impossible' http://bit.ly/9IVVdY"
    },
    {
      "tweet": "Damn global warming-melting the ice caps, turning DC into the tundra. This winter is DONE! Please don't mess my summer...please."
    },
    {
      "tweet": "Scientists seek better climate report http://is.gd/86vk0 RT @howardweaver \"How 'Global Warming' Makes Blizzards Worse\" http://bit.ly/b5ymOf"
    },
    {
      "tweet": "RT @digg_sciences: \"D.C. Snowstorm: How Global Warming Makes Blizzards Worse\" - http://digg.com/d21IMto?t10"
    },
    {
      "tweet": "Bolivia hosts 'people's' climate change event (AFP) http://nxy.in/sv7r1"
    },
    {
      "tweet": "Top 10 bad ideas #2 John Brennan writing oped for USA Today on global warming"
    },
    {
      "tweet": "MSNBC's Ratigan takes on the \"snow means no global warming\" nonsense of climate deniers http://bit.ly/9bxzdz (via @TreeHugger)"
    },
    {
      "tweet": "Top 10 bad ideas #4 al gore global warming book event in DC tomorrow"
    },
    {
      "tweet": "RT @Noreen1 Does #GOP really think snowstorms disprove #climate change? Yup. @bradplumer shows how idiotic that is http://bit.ly/bzv5iS"
    },
    {
      "tweet": "Top 10 bad ideas #8 have NBC late nite executives supervise toyoto engineers and UN global climate change scientists"
    },
    {
      "tweet": "Top 10 bad ideas #9 have toyoto safety engineers work on climate change at UN"
    },
    {
      "tweet": "RT @Noreen1 Does #GOP really think snowstorms disprove #climate change? Yup. @bradplumer shows how idiotic that is http://bit.ly/bzv5iS"
    },
    {
      "tweet": "RT @The_Producer14: Climate-change legislation buried under record snowfall in capital - TheHill.com http://bit.ly/bFx6yi"
    },
    {
      "tweet": "DC: \"OK already, we believe in Climate Change!\" http://bit.ly/bxOguT Snow continues to pile up. What's the reason?"
    },
    {
      "tweet": "Flakes: Global Warming Deniers Use Massive Snowstorm as Ammo http://ow.ly/16xWC8"
    },
    {
      "tweet": "Global Warming: Climate Scientists Investigate Lost Heat|A new article in 'Science' explores the mystery of the .. http://oohja.com/xbdHV"
    },
    {
      "tweet": "RT @keder    RT @bglscout: Climate change, weather, what's the difference? #tcot #teaparty #glennbeck"
    },
    {
      "tweet": "RT @bglscout: Climate change, weather, what's the difference? #tcot #teaparty #glennbeck"
    },
    {
      "tweet": "RT @lauraolin: Why #snowverkill is evidence for - not against - global warming: http://bit.ly/cEMCAi"
    },
    {
      "tweet": "Alternative futures of a warming world: Potential human responses to climate change will be integrated into future... http://bit.ly/b8o5m0"
    },
    {
      "tweet": "Global warming resp. for massive blizzards (Time) http://bit.ly/cgQGIv"
    },
    {
      "tweet": "The Hill Online yesterday: Record snowfall has buried Washington & along w/ it buried chances of passing global warming legislation this yr"
    },
    {
      "tweet": "What The #Snowpocalypse Tells Us About Global Warming | The New Republic: http://bit.ly/bzv5iS #DC #NOVA #ClimateChange"
    },
    {
      "tweet": "3' of snow fell in DC in 1772 & the govt didn't enact federal programs to combat 'climate change\" #climategate #tcot http://j.mp/cmKXTB"
    },
    {
      "tweet": "Hunger in the News: Climate change causes wolverine decline across Canada http://bit.ly/cZbfqn"
    },
    {
      "tweet": "Snowmaggedon shuts down Federal Government - @algore reassess his Global Warming hoax. #snowpocalypse #tcot #p2 http://tinyurl.com/ygws7ne"
    },
    {
      "tweet": "Global Warming: Climate Scientists Investigate Lost Heat|A new article in 'Science' explores the mystery of the .. http://oohja.com/xbdCG"
    },
    {
      "tweet": "@TeriChristoph Don't be cruel - it's the effects of Al Gore's Global Warming! @MelissaTweets #snowpocalypse"
    },
    {
      "tweet": "White House Responds to L.A. Times Backing Off on Climate Change' Editorial http://ow.ly/16xTqJ"
    },
    {
      "tweet": "RT @benbalter - So the #snowpocalypse debunks the global warming myth? WRONG. Global Warming makes blizzards worse: http://bit.ly/ali6mD"
    },
    {
      "tweet": "The effects of Al Gore's 'global warming' http://twitpic.com/12fel9 #tcot #climategate @algore #snowpocalypse #dc #va"
    },
    {
      "tweet": "Do we need more snowstorms to convince skeptics that global warming is for real!  #global-warming http://icio.us/oxo4mw"
    },
    {
      "tweet": "But wait, I thought no snowstorms in DC were a sign of global warming? Will you guys make up your minds? http://is.gd/86aXa"
    },
    {
      "tweet": "kudos to Lindsay Graham on being so strong on climate change.  http://bit.ly/dbMjMa"
    },
    {
      "tweet": "Finally, Rebuttal to Snow Means No Global Warming Nonsense : http://digg.com/d31INSU?t"
    },
    {
      "tweet": "RT @mattyglesias: Freak weather events causing massive disruption convince congress that climate change can't be a problem: http://bit.ly/9ifxtg"
    },
    {
      "tweet": "@MichelleinCal  no, no.. you have to call it ' climate change'. Snow is because of global warm- I mean climate change too."
    },
    {
      "tweet": "#snow #blizzard #climate-change Join our discussion forum on climate change on facebook: http://bit.ly/cNG2GK"
    },
    {
      "tweet": "#snow #blizzard In the middle of the snowpocalypse, wondering what publics think of climate change? Check it out: http://bit.ly/3noViz"
    },
    {
      "tweet": "RT @boblatta: DC-area Paralyzed By Snow, Puts Global Warming Bill On Ice  http://amplify.com/u/1ty9"
    },
    {
      "tweet": "#journalist In the middle of the snowpocalypse, wondering what publics think of climate change? Check it out: http://bit.ly/3noViz"
    },
    {
      "tweet": "RT @TIME: Another blizzard: What happened to global warming? | http://su.pr/1pjKIT &gt; LOL! Ask Al Gore!!"
    },
    {
      "tweet": "#climate-change In the middle of the snowpocalypse, wondering what publics think of climate change? Check it out: http://bit.ly/3noViz"
    },
    {
      "tweet": "In his latest blog, Nick Bridge wonders how a major weather event affects perceptions about climate change. #snoverkill http://ow.ly/15Xyf"
    },
    {
      "tweet": "@phraim definitely white picket, lol. man, this apocolyptic weather is not to be effed with. global warming? el ni•_Ðo?"
    },
    {
      "tweet": "Time magazine claims 'Global Warming Makes Blizzards Worse': http://bit.ly/bnapE2"
    },
    {
      "tweet": "Big surprise, the GOP is wrong on global warming - it may actually intensify snow storms and hurricanes http://bit.ly/cLl6li (h/t @kombiz )"
    },
    {
      "tweet": "Climate change and our identity http://url4.eu/2mhrO"
    },
    {
      "tweet": "RT @CBSTopNewsRSS: Snow Storm Fuels Conservatives' Global Warming Mockery http://bit.ly/bqh9ML (via @TheNewsBlotter)"
    },
    {
      "tweet": "RT @JMAlderete: TreeHugger: Finally, Rebuttal to 'Snow Means No Global Warming' Nonsense Aired in Mainstream Media http://bit.ly/bimHCU"
    },
    {
      "tweet": "RT @MulchTMC: Confused about climate change? There's an app for that. http://bit.ly/cEFQOF"
    },
    {
      "tweet": "RT @mmaction RT @aravosis Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x #p2"
    },
    {
      "tweet": "MSNBC's Ratigan Claims Global Warming Caused 'Snowpocalypse': MSNBC's Dylab Ratigan who hosts his own show on the ... http://bit.ly/bGSlzJ"
    },
    {
      "tweet": "#accuracy #tcot MSNBC's Ratigan Claims Global Warming Caused 'Snowpocalypse': MSNBC's Dylab Ratigan who hosts his ... http://bit.ly/bGSlzJ"
    },
    {
      "tweet": "RT @EmpressCGC: Finally, Rebuttal to 'Snow Means No Global Warming' Nonsense Aired in Mainstream Media (Video) http://bit.ly/9LyKDH (via @TreeHugger)"
    },
    {
      "tweet": "Conservatives Use \"Snowmageddon\" to Mock Global Warming http://bit.ly/b7h1p8"
    },
    {
      "tweet": "RT @JasonMattera    another day of shoveling my car out of snow, another day of global warming"
    },
    {
      "tweet": "Inhofe getting last laugh on global warming, IPCC: http://bit.ly/b1A5Nz"
    },
    {
      "tweet": "Tory candidates trained by rightwing group that bad mouths NHS, dismisses global warming & backs waterboarding http://bit.ly/9xKLkd"
    },
    {
      "tweet": "Inhofe getting last laugh on global warming, IPCC: http://bit.ly/b1A5Nz"
    },
    {
      "tweet": "another day of shoveling my car out of snow, another day of global warming"
    },
    {
      "tweet": "You can argue that climate change activists shot their credibility in their rush to make their case and set themselves back"
    },
    {
      "tweet": "RT @aravosis Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x #p2"
    },
    {
      "tweet": "RT @boblatta    DC-area Paralyzed By Snow, Puts Global Warming Bill On Ice http://amplify.com/u/1ty9"
    },
    {
      "tweet": "RT @aravosis Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x"
    },
    {
      "tweet": "Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x"
    },
    {
      "tweet": "Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x"
    },
    {
      "tweet": "Global climate change makes blizzards *more* likely -- for now: http://www.time.com/time/health/article/0,8599,1962294,00.html"
    },
    {
      "tweet": "How Global Warming Makes Blizzards Worse http://goo.gl/5UL1"
    },
    {
      "tweet": "Global Warming: Climate Scientists Investigate Lost Heat: A new article in 'Science' explores the mystery of the g... http://bit.ly/b7cAt9"
    },
    {
      "tweet": "RT @mattizcoop: A branding point: if they'd called it Climate Chaos instead of Climate Change or Global Warming it mighta been better. #sNoMas"
    },
    {
      "tweet": "New on http://ekwire.com -- Hannity: Snow Storms 'Contradict Gore's Global Warming Theories' -- http://ow.ly/15SFQ"
    },
    {
      "tweet": "RT @mattizcoop: A branding point: if they'd called it Climate Chaos instead of Climate Change or Global Warming it mighta been better. #sNoMas"
    },
    {
      "tweet": "A branding point: if they'd called it Climate Chaos instead of Climate Change or Global Warming it mighta been better. #sNoMas"
    },
    {
      "tweet": "How climate change = more snowstorms: http://j.mp/cEMCAi"
    },
    {
      "tweet": "RT @time D.C. Snowstorm: How Global Warming Makes Blizzards Worse - TIME http://bit.ly/afRApN"
    },
    {
      "tweet": "RT @time D.C. Snowstorm: How Global Warming Makes Blizzards Worse - TIME http://bit.ly/afRApN"
    },
    {
      "tweet": "RT @mmaction Snowstorms Do Not Disprove #Climate Change http://bit.ly/d2ohLB #snowmageddon"
    },
    {
      "tweet": "More snow in DC.  The whole area has been buried in what appears to be a case of global warming."
    },
    {
      "tweet": "@Noreen1 Can u use that excuse for everything? Global Warming gave me a parking ticket. Global Warming caused me to be late for work."
    },
    {
      "tweet": "Opponents of state's global warming law get boost from Adam Smith|Lance Williams The great Adam Smith was a .. http://oohja.com/xbdts"
    },
    {
      "tweet": "RT @JamesAllenShow According to MSNBC, Global Warming causes blizzards http://bit.ly/cfn8jl"
    },
    {
      "tweet": "RT @ChrisHarrisKS RT @mmaction Snowstorms Do Not Disprove Climate Change http://bit.ly/dfi3es #p2 #tcot"
    },
    {
      "tweet": "@mmfa  not honest? Shocking! RT @keder    Media Matters still using junk science 2007 IPCC report on global warming... http://ow.ly/15UdJ"
    },
    {
      "tweet": "Media Matters still using junk science 2007 IPCC report on global warming... http://ow.ly/15UdJ"
    },
    {
      "tweet": "I specifically learned in school, winter disproves summer RT @ChrisHarrisKS Snowstorms dont disprove Climate Change http://bit.ly/dfi3es #p2"
    },
    {
      "tweet": "RT @kathrynlopez    a climate change on climate change http://tinyurl.com/yeyljlc"
    },
    {
      "tweet": "RT @mmaction Snowstorms Do Not Disprove Climate Change http://bit.ly/dfi3es #p2 #tcot"
    },
    {
      "tweet": "Um, how 'bout global warming...RT @FamousDC: Who To Blame for All This Snow? http://bit.ly/9Vvimp"
    },
    {
      "tweet": "RT @mmaction: Snowstorms Do Not Disprove Climate Change http://bit.ly/dfi3es #p2 #tcot"
    },
    {
      "tweet": "Snowstorms Do Not Disprove Climate Change http://bit.ly/dfi3es #p2 #tcot"
    },
    {
      "tweet": "Opponents of state's global warming law get boost from Adam Smith|Lance Williams The great Adam Smith was a .. http://oohja.com/xbdp2"
    },
    {
      "tweet": "Sign up for the next Earthscan Earthcast: Climate Change and Business Success, 2/23/2010, 12:00 (EST) http://ow.ly/15TZB"
    },
    {
      "tweet": "Ratigan: Climate scientists predictions right... These #snowpocalypses are bc of global warming. http://bit.ly/acIIGz"
    },
    {
      "tweet": "RT @timrote @kate_sheppard @worldresources: Reading - D.C. snowstorm: How #global warming makes blizzards worse (@TIME) http://bit.ly/aOTK6S"
    },
    {
      "tweet": "How global warming makes bizzards WORSE! http://bit.ly/cLl6li #snowtorious #snowmageddon /via @Noreen1"
    },
    {
      "tweet": "WaPo: Senate offers some hope for legislation to combat climate change http://is.gd/83eKc"
    },
    {
      "tweet": "How global warming makes bizzards WORSE! http://bit.ly/cLl6li #snowtorious #snowmageddon"
    },
    {
      "tweet": "RT @mattyglesias: Freak weather events causing massive disruption convince congress that climate change can't be a problem: http://bit.ly/9ifxtg"
    },
    {
      "tweet": "RT @MilesGrant: RT @EricBoehlert Why won't Drudge acknowledge snow-less 'Global Warming Games' in Vancouver? http://ow.ly/15S0O #climate"
    },
    {
      "tweet": "RT @mattyglesias: Freak weather events causing massive disruption convince congress that climate change can't be a problem: http://bit.ly/9ifxtg"
    },
    {
      "tweet": "RT @newsbusters: RT @coffeeman3lb: @newsbusters good morning obama is buying snow shovels for shovel ready global warming around the white house"
    },
    {
      "tweet": "Earth Day 2010 looks beyond climate change|Oftentimes, Earth Day goes largely unnoticed. But this year, there has .. http://oohja.com/xbdoO"
    },
    {
      "tweet": "RT @mattyglesias Freak weather events causing massive disruption convince congress that climate change isn't a problem: http://bit.ly/9ifxtg"
    },
    {
      "tweet": "@washingtonpost Editorial: \"Senate Offers Some Hope for Legislation to Combat Climate Change\" http://is.gd/85qr9 #cejapa #clear"
    },
    {
      "tweet": "RT @coffeeman3lb: @newsbusters good morning obama is buying snow shovels for shovel ready global warming around the white house"
    },
    {
      "tweet": "Need a cozy place to survive the #snomegeddon? FOR RENT: Snowfort in #DC http://bit.ly/bHQa2J #snoverkill (but beware #climate change)"
    },
    {
      "tweet": "@JNIX_LA This is why as soon as they patented HAARP, the \"global-warming\" conspiracy started. Plus, I saw our NAVY talking about it on paper"
    },
    {
      "tweet": "Irony alert: Senate cancels hearing on \"Global Warming Impacts, Including Public Health, in the U.S.\" due to blizzard http://bit.ly/9nzHsE"
    },
    {
      "tweet": "RT @EricBoehlert Why won't Drudge acknowledge snow-less 'Global Warming Games' about to kick off in Vancouver? http://ow.ly/15S0O #climate"
    },
    {
      "tweet": "@welovedc Sadly, Chuck Norris might also use this blizzard to deny climate change and even push NWO conspiracies: http://is.gd/85go2"
    },
    {
      "tweet": "RT @ClarksonUniv: NASA Grant will enable Clarkson & NYSERDA to Improve Climate Change Education in New York State http://bit.ly/9M4Hji"
    },
    {
      "tweet": "Well that takes care of the global warming agenda for the year. They'll have to hire some new guys to go back and rewrite the record books."
    },
    {
      "tweet": "RT @redostoneage The Missing Heat #global warming #climate change #green #eco http://bit.ly/9ZNyEt #tcot #p2 #climategate"
    },
    {
      "tweet": "@1kevgriff it's nature's way os saying \"Global warming my a$$!"
    },
    {
      "tweet": "I already knew this (as I'm sure most of my FB buds out there do too), but newsflash to all #climate #change doubters: http://trunc.it/5d2f0"
    },
    {
      "tweet": "RT @rorycooper  Seriously? Reaching. RT @Drudge_Report TIME MAG: How Global Warming Makes Blizzards Worse http://drudge.tw/9oXiLZ"
    },
    {
      "tweet": "Cost of global warming shutting down the federal government in DC for #snOMG2 per day- $100 million. Sounds like an argument for cap & trade"
    },
    {
      "tweet": "Seriously? Libs really reaching. Ha! RT @Drudge_Report TIME MAG:  How Global Warming Makes Blizzards Worse... http://drudge.tw/9oXiLZ"
    },
    {
      "tweet": "Wash Post editorial: Senate offers some hope for legislation to combat #climate change http://bit.ly/afXhpx"
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse - TIME\" ( http://bit.ly/9sMGXj ) It's snowing because it's so warm? Cahmaaahn."
    },
    {
      "tweet": "This is a talk that needs to happen! RT @Drudge_Report: TIME MAG:  How Global Warming Makes Blizzards Worse... http://drudge.tw/9oXiLZ"
    },
    {
      "tweet": "RT @robport: Time to admit it. Climate change is a conservative conspiracy to keep enough snow falling on DC to keep Congress in recess."
    },
    {
      "tweet": "@nikkibama This global warming will be on the ground until March"
    },
    {
      "tweet": "RT @NWF: BudBurst volunteers needed: to look for \"ten most wanted\" plants to assess clues to climate change: http://bit.ly/bdlpVW"
    },
    {
      "tweet": "Climate-change legislation buried under record snowfall in capital - TheHill: http://bit.ly/acTaix via @addthis"
    },
    {
      "tweet": "Climate-change legislation dying under record DC snowfall http://bit.ly/9ifxtg"
    },
    {
      "tweet": "Watch: Inhofe Decries Creation of Obama's New Global Warming Bureaucracy, Seeks Accountability  http://bit.ly/aRYZwm #fb"
    },
    {
      "tweet": "crisis of confidence in IPCC, and Obama is turning a blind eye by creating global warming bureaucracy  http://bit.ly/aRYZwm #climategate"
    },
    {
      "tweet": "@nikkibama Mobile to get some global warming"
    },
    {
      "tweet": "The List: Who's Willing to Act on Climate Change - What's the most-watched web page by the international climate ch... http://ow.ly/16xLy3"
    },
    {
      "tweet": "Crippled By Blizzard, DC Announces New Global Warming Agency by Phone: http://bit.ly/df6Iag"
    },
    {
      "tweet": "Are you engaging climate change sceptics in rational discussion - which is what science is about? Or giving fruitcakes a field-day?"
    },
    {
      "tweet": "Energy and Global Warming News for February 9: Ford to unveil electric Transit Connect van today http://bit.ly/c6CkhC"
    },
    {
      "tweet": "Do We Finally Have Proof that Global Warming by CO2 Emissions is a Hoax?, FamilySecurityMatters.org http://bit.ly/9PbE20 #climategate"
    },
    {
      "tweet": "Climate change guru packs CU auditorium|For Abraham Lincoln, it was slavery, and for Winston Churchill it was .. http://oohja.com/xbbVp"
    },
    {
      "tweet": "NOAA Releases Wealth of Climate Change Data to Public (via my6sense) http://tinyurl.com/yjuj5a5"
    },
    {
      "tweet": "Food Research International: The food cold-chain and climate change http://bit.ly/8YEMsH (abstract)"
    },
    {
      "tweet": "Those distinctions make it a fundamentally different issue to deal with than climate change itself. Much more research is needed, ASAP."
    },
    {
      "tweet": "Like climate change, the risks/rewards of geoeng are unequally distributed, but geoeng can be done relatively easily, cheaply, and quickly."
    },
    {
      "tweet": "The question isn't whether a country will think the risks of geoeng (to them) are outweighed by global warming, but when and how we respond."
    },
    {
      "tweet": "EdDriscoll: RT @robport: Time to admit it. Climate change is a conservative conspiracy to keep' http://goo.gl/fb/YTii"
    },
    {
      "tweet": "17. Moral authority - do we have the rt. to do this? Takeaway: geo-eng has a LOT OF RISKS (then again, so does runaway climate change). :("
    },
    {
      "tweet": "RT @newsbusters: Brilliant: 'Vagina Monologues' Creator Tells Palin to Look at 'Earthquakes and Tsunamis' for Global Warming Proof http://ow.ly/16xANa"
    },
    {
      "tweet": "Brilliant: 'Vagina Monologues' Creator Tells Palin to Look at 'Earthquakes and Tsunamis' for Global Warming Proof http://ow.ly/16xANa"
    },
    {
      "tweet": "RT @Mommy4Cocktails:RT @JimDeMint:going 2 keep snowing in DC til Al Gore cries uncle/Weather Channel says freaky snow IS b/c global warming"
    },
    {
      "tweet": "Betting on Climate Change: Corporations Stand to Make or Lose Billions|Is the planet really warming up? Just ask .. http://oohja.com/xbbEA"
    },
    {
      "tweet": "Brilliant: Vagina Monologues Creator Tells Palin to Look at 'Earthquakes & Tsunamis' for Global Warming Proof http://is.gd/83mbc #fail #tcot"
    },
    {
      "tweet": "RT @balmeras  RT @LoveEarthAlways Our Extreme Weather Predicted By Global Warming Models 20 Years Ago http://is.gd/83elN"
    },
    {
      "tweet": "$$ Climate change movement dead?: The other big government solutions have damaged the economy so greatly that Joe ... http://bit.ly/d2L1tV"
    },
    {
      "tweet": "Sarah Palin calls global warming studies \"snake oil\"  http://bit.ly/bA4jeQ"
    },
    {
      "tweet": "RT @LoveEarthAlways Our Extreme Weather Predicted By Global Warming Models 20 Years Ago http://is.gd/83elN"
    },
    {
      "tweet": "Climate change and acidification threaten 82 types of coral: http://bit.ly/bXfTxZ"
    },
    {
      "tweet": "Climate change and acidification threaten 82 types of coral: http://bit.ly/bXfTxZ"
    },
    {
      "tweet": "Shannon L. Goessling: Taking EPA global warming rules to court http://goo.gl/fb/ydjZ"
    },
    {
      "tweet": "Shannon L. Goessling: Taking EPA global warming rules to court: http://bit.ly/bDDhHk"
    },
    {
      "tweet": "RT @dailykos: Climate Change Skeptics Discredited http://bit.ly/bWsUBZ"
    },
    {
      "tweet": "Betting on Climate Change: Corporations Stand to Make or Lose Billions|Is the planet really warming up? Just ask .. http://oohja.com/xbbAz"
    },
    {
      "tweet": "RT @washdcnews: Hannity: Snow Storms 'Seem To Contradict Al Gore's Hysterical Global Warming Theories' http://dlvr.it/1c2p"
    },
    {
      "tweet": "Hannity: Snow Storms 'Seem To Contradict Al Gore's Hysterical Global Warming Theories' http://dlvr.it/1c2p"
    },
    {
      "tweet": "Senate hearing \"Global Warming Impacts, Including Health... \" is canceled due to freezing temperatures and 4 feet of snow in the nat's cap."
    },
    {
      "tweet": "RT @SportsCenter: Vancouver's airlifting in snow for Olympic Training. Global Warming - 1 Winter Sports - 0."
    },
    {
      "tweet": "RT @TheMRC: @MSNBC's @DylanRatigan Blames 'Snowpocalypse' on Global Warming http://ow.ly/16xgjl"
    },
    {
      "tweet": "Fed gov't closed for 3 days in a row. That's 3 days of them not messing with our freedom. Thank you, global warming!"
    },
    {
      "tweet": "My love burns hotter for your than the global warming that is killing the earth. #DemVDaycards"
    },
    {
      "tweet": "[@ClimateProgress] Energy and Global Warming News for February 9: Ford to unveil electric Transit Connect van today http://ow.ly/16xv8a"
    },
    {
      "tweet": "BusinessWeek: Is Global Warming a \"Crock of S*%t?\" http://bit.ly/czm7TD @BW #agw #skeptic"
    },
    {
      "tweet": "#Climate change = mother of all financial risks. So why are coal co's still not paying the true costs of their business? http://ow.ly/1onySr"
    },
    {
      "tweet": "Schwarzenegger urges valley CEOs to defend global warming act|California Gov. Arnold Schwarzenegger blasted .. http://oohja.com/xbbAt"
    },
    {
      "tweet": "Irony?  Headline on Drudge - Senate global warming hearing cancelled... http://bit.ly/9iHiVZ #tcot"
    },
    {
      "tweet": "RT @mmfa: Brain Freeze: Conservative media still using winter weather to attack global warming: http://bit.ly/9nKEcc #p2 #noisemachine #climate"
    },
    {
      "tweet": "RT @mmfa Brain Freeze: Conservative media still using winter weather to attack global warming: http://bit.ly/9nKEcc #p2 #climate #green"
    },
    {
      "tweet": "@owillis Problem is, somebody called it global warming instead if what it is, climate change. Of course, the (cont) http://tl.gd/81kse"
    },
    {
      "tweet": "RT @wonkroom: RT @owillis: RT @tlw3 Snow is consistent w/ global warming, say scientists - Telegraph http://bit.ly/bDdtsB"
    },
    {
      "tweet": "Global Warming and Fat Trees http://bit.ly/cwOC5F"
    },
    {
      "tweet": "RT @owillis: RT @tlw3 Snow is consistent w/ global warming, say scientists - Telegraph http://bit.ly/bDdtsB"
    },
    {
      "tweet": "RT @owillis: RT @tlw3 Snow is consistent w/ global warming, say scientists - Telegraph http://bit.ly/bDdtsB"
    },
    {
      "tweet": "RT @tlw3 Snow is consistent w/ global warming, say scientists - Telegraph http://bit.ly/bDdtsB"
    },
    {
      "tweet": "This reads like an Onion Headline -- Scientists: Global Warming Real Despite Harsh Winter -- http://bit.ly/ax892N"
    },
    {
      "tweet": "Brain Freeze: Conservative media still using winter weather to attack  global warming http://dlvr.it/1bfT"
    },
    {
      "tweet": "RT @owillis: RT @mmfa Brain Freeze: Conservative media still using winter weather 2 attack global warming http://bit.ly/9nKEcc #p2"
    },
    {
      "tweet": "RT @mmfa Brain Freeze: Conservative media still using winter weather 2 attack global warming http://bit.ly/9nKEcc #p2 #noisemachine #climate"
    },
    {
      "tweet": "RT @mmfa: Brain Freeze: Conservative media still using winter weather to attack global warming: http://bit.ly/9nKEcc #p2 #noisemachine #climate"
    },
    {
      "tweet": "Brain Freeze: Conservative media still using winter weather to attack global warming: http://bit.ly/9nKEcc #p2 #noisemachine #climate"
    },
    {
      "tweet": "RT @myfoxnation: @SarahPalinUSA Calls Global Warming Studies 'Snake Oil' http://fxn.ws/93AH7g"
    },
    {
      "tweet": "@elevenisacharm Haha indeed. I remember a few years ago, Al Gore spoke at a Global Warming event in NYC. It was 8 degrees (F) that day."
    },
    {
      "tweet": "RT @JosieDC Due to snow of course RT @Drudge_Report Senate global warming hearing cancelled http://drudge.tw/dyAWzC //that's horrible! lmao"
    },
    {
      "tweet": "RT @jmac82 Due to snow of course RT @Drudge_Report    Senate global warming hearing cancelled... http://drudge.tw/dyAWzC // lol"
    },
    {
      "tweet": "Due to snow of course RT @Drudge_Report    Senate global warming hearing cancelled... http://drudge.tw/dyAWzC"
    },
    {
      "tweet": "so, is it human abuse that results in another horror story like #ashtag..(hello, global warming!?...and will we ever stop?) what do u think?"
    },
    {
      "tweet": "Media Matters Minute: DC Snowpocalypse Sends Conservative Media Into Climate Change Frenzy: http://bit.ly/bU2I3r #p2 #snowpocalypse"
    },
    {
      "tweet": "Come to \"Disclosures of Climate Change Impacts\" Monday, February 22 from 12:00 pm to 1:30 pm. Over the past 10... http://bit.ly/aXyu7x"
    },
    {
      "tweet": "just posted our upcoming 2/22 webinar on SEC's recent hearing regarding disclosure of climate change business impacts - http://bit.ly/aRb8gc"
    },
    {
      "tweet": "In the middle of day at least 8 days of Snowmageddon, Obama Administration pushing new agency to study Global Warming. Seriously."
    },
    {
      "tweet": "Irony on line 1: DC blizzards forces change in government climate change announcement.  http://bit.ly/cUoJdY"
    },
    {
      "tweet": "Todays sci lesson: Warm air holds more moisture, hits cold air == #snowmageddon. So yes, blizzards are sign of global warming."
    },
    {
      "tweet": "RT @kombiz MO GOP / Blunt Attack Vote vets for climate change ads while wingers question vets service - http://bit.ly/auJCtO"
    },
    {
      "tweet": "MO GOP / Blunt Attack Vote vets for climate change ads while wingers question vets service -  http://bit.ly/auJCtO"
    },
    {
      "tweet": "Our 'watchdog press' enabled the global warming hoax: http://bit.ly/b6LKba"
    },
    {
      "tweet": "Night of the Living Dead Idea--Climate Change and Homeland Security? |Conservative Policy News.: http://bit.ly/bm1a3i via @addthis #tcot"
    },
    {
      "tweet": "TQM, anthropogenic global warming, and some terrific and informative resources on the topic combine for a... http://bit.ly/bsTYFN"
    },
    {
      "tweet": "Great analysis of climate change policy by Harvard Prof. Robert Stavins http://bit.ly/brgGmF"
    },
    {
      "tweet": "Climate change movement dead? http://bit.ly/bhx3PG"
    },
    {
      "tweet": "Ever the comedian, Oberstar said Washingtonians are \"counting on global climate change\" to melt the snow"
    },
    {
      "tweet": "http://bit.ly/9rtbvm Huffpost - Wash Times owned&operated by morons--global climate change is based fact-detracters claim snow undemines it"
    },
    {
      "tweet": "@collegepolitico They like to have it both ways. If it were sunny and 70 now, they'd blame it on global warming."
    },
    {
      "tweet": "Sen. Inhofe's Family Builds Igloo for Global Warming Spokesman Al Gore in Snow-laden D.C. http://ow.ly/16xlOZ"
    },
    {
      "tweet": "New and improved site: http://www.adventures-in-climate-change.com/ Check it out!!"
    },
    {
      "tweet": "LOL! &gt; RT @BowlMeOverVa Sen. Inhofe's Family Builds Igloo 4 Global Warming guy Al Gore in Snow-laden D.C. - http://tinyurl.com/ydjmzd3 #tcot"
    },
    {
      "tweet": "RT @washdcnews: GOP senator's family builds igloo to mock global warming http://dlvr.it/1Zxn"
    },
    {
      "tweet": "What does disprove it is dishonest scientists -&gt; RT @briandevine @andrewbreitbart I bet you think snow disproves climate change. Idiot"
    },
    {
      "tweet": "Indigenous People take over mining firm in the wake of Climate Change conference http://bit.ly/9io10Y by @indigenous_news"
    },
    {
      "tweet": "GOP senator's family builds igloo to mock global warming http://dlvr.it/1Zxn"
    },
    {
      "tweet": "@andrewbreitbart I bet you think snow disproves climate change. Idiot"
    },
    {
      "tweet": "Now is the time to attack the soft underbelly of unsubstantiated global warming alarmism: http://bit.ly/agVviO #agw @amspec"
    },
    {
      "tweet": "@DylanRatigan You should have just let it go with the snowstorm/global warming stuff.  You're better than that, IMO"
    },
    {
      "tweet": "Seriously, how is this helping to get people to work against climate change? http://bit.ly/bdEr0I"
    },
    {
      "tweet": "Where are the global warming nutjobs with their signs??? RT @JimDeMint: It's going to keep snowing in DC until Al Gore cries \"uncle"
    },
    {
      "tweet": "NOAA Climate Change Announcement cancelled for today. http://bit.ly/9LR4N6"
    },
    {
      "tweet": "RT @MikeRwithCRC: Climate change activist proponent Ian Katz complains that global warming debate has fallen apart.  http://bit.ly/bcEzBs"
    },
    {
      "tweet": "Snowmageddon' in DC and we still can't see global warming/weirding at work. Theologians call it 'willful blindness.' http://bit.ly/aK8oAG"
    },
    {
      "tweet": "Clearly the #snowmageddon is disproving global warming RT @JimDeMint It's going to keep snowing in DC until Al Gore cries \"uncle"
    },
    {
      "tweet": "Betting on Climate Change: Corporations Stand to Make or Lose Billions http://viigo.im/3dtg"
    },
    {
      "tweet": "I foresee a 1st Helpful Manual from new Obama Global Warming Agency:  How to prevent Spontaneous Human Combustion [SHC] in your home."
    },
    {
      "tweet": "Obama should appoint himself director of new Global Warming Agency--he would be pre-eminently qualified, he blows a lot of hot teleprompter."
    },
    {
      "tweet": "How much time before a clever politician will claim this cold weather proves there•_Çs no global warming? Tip: ask your science advisor first."
    },
    {
      "tweet": "U.S. Climate Change Portal Could Birth Entirely New Industries:  At long last, we can access the government's clim... http://bit.ly/ckuIf8"
    },
    {
      "tweet": "One Million Women' a Starting Point on #Climate Change http://bit.ly/cBcsCa"
    },
    {
      "tweet": "Spontaneous Human Combustion [SHC]:Since every human body has electrical field & flammable gases, global warming cud ignite these gases."
    },
    {
      "tweet": "African Farmers Urged to Innovate to Offset Climate Change: Source: Bloomberg - Africa's failure to embrace modern... http://bit.ly/aym1Uc"
    },
    {
      "tweet": "#fb Goddammit, folks, blizzards don't negate climate change. The science isn't debating this. Climate change is real. End of story."
    },
    {
      "tweet": "@ClaireForman Climate change is still real. I can't believe people still debate this. Scientists don't."
    },
    {
      "tweet": "Transit bills fight climate change http://bit.ly/99fGgK"
    },
    {
      "tweet": "Geoengineering is a diplomatic nightmare for the same basic reasons that climate change is a diplomatic nightmare, but worse. Why? (cont'd)"
    },
    {
      "tweet": "WSJ Econ roundup. // http://on.wsj.com/9JViRX Secondary Sources: Consumer Agency, Euro Crisis, Climate Change  via @tweetmeme"
    },
    {
      "tweet": "MSNBC's Ratigan Blames 'Snowpocalypse' on Global Warming http://ow.ly/16xgjl"
    },
    {
      "tweet": "MSNBC's Ratigan Blames 'Snowpocalypse' on Global Warming http://ow.ly/16xgTm"
    },
    {
      "tweet": "Interested in how the US Fish and Wildlife Service (@USFWSHQ) is addressing #climate change and fish/wildlife? http://bit.ly/imALM #science"
    },
    {
      "tweet": "MSNBC's Ratigan Blames 'Snowpocalypse' on Global Warming (Video) http://is.gd/818dp #tcot #snOMG"
    },
    {
      "tweet": "Researchers study how #climate change chases #fish from streams | Great Lakes Echo http://bit.ly/bRVMlT #habitat #science"
    },
    {
      "tweet": "Is Climate Change Legislation Dead in 2010? | http://bit.ly/aTeIsq"
    },
    {
      "tweet": "U.S. Climate Change Portal Could Birth Entirely New Industries | http://bit.ly/b7lBwM"
    },
    {
      "tweet": "MSNBC's Ratigan Blames 'Snowpocalypse' on Global Warming http://bit.ly/943TCj"
    },
    {
      "tweet": "NOAA to create new #climate change office to provide data to govts, industry, academia http://nyti.ms/ar34Mw"
    },
    {
      "tweet": "RT @ecopolitologist: Communicating #Climate Change: Kate Sheppard on the Politics Beat http://bit.ly/drvGoh"
    },
    {
      "tweet": "Obama administration creates climate change agency, IPCC chief under scrutiny & more. Tuesday's Reads | http://bit.ly/anQG5G"
    },
    {
      "tweet": "RT @mattyglesias: Wish it were possible to make the obvious global warming jokes w/o giving aid and comfort to crazy people"
    },
    {
      "tweet": "RT @climatedebate: Climate change aids invasive plants:  http://bit.ly/bbH0U7"
    },
    {
      "tweet": "RT @OneClimate: Palin likens global warming studies to 'snake oil'  http://bit.ly/bvfjK3 #climate"
    },
    {
      "tweet": "New federal #climate change agency forming: http://ow.ly/15rAF"
    },
    {
      "tweet": "Invasive News: Climate change aids invasive plants - UPI.com: UPI.comClimate change aids invasive plantsUPI.com\"Ou... http://bit.ly/b9H1T8"
    },
    {
      "tweet": "@Steve_Trotto Noooo don't get @Physboy and @Alli_Flowers started on global warming!"
    },
    {
      "tweet": "RT @mattyglesias Wish it were possible to make the obvious global warming jokes w/o giving aid and comfort to crazy people"
    },
    {
      "tweet": "RT @mattyglesias: Wish it were possible to make the obvious global warming jokes w/o giving aid and comfort to crazy people"
    },
    {
      "tweet": "I am amused that NOAA has created an office on global warming & the announcement set for yesterday was disrupted due to, uh, blizzards."
    },
    {
      "tweet": "Climate change movement dead? http://bit.ly/9clxKG"
    },
    {
      "tweet": "Hot Air Obamateurism of the Day: Maybe Barack Obama hasn't read the memo yet, but anthropogenic global warming has... http://bit.ly/cDoUf1"
    },
    {
      "tweet": "Ten reasons why examining climate change policy through an ethical lens is a practical imperative http://bit.ly/bDd1pp"
    },
    {
      "tweet": "Pres Obama wants to create a new federal office for global warming. // How do we stop this before it's started?? #tcot"
    },
    {
      "tweet": "And the hits keep on coming. RT @foxandfriends Pres Obama wants to create a new federal office for global warming ... good or bad thing?"
    },
    {
      "tweet": "Climate change will mk the world more fragrant, as warming temperatures mk plants release more chems http://bit.ly/dw6wQq (via @bbcscitech)"
    },
    {
      "tweet": "New federal office for global warming by Jennifer Haberkorn, Washington Times http://bit.ly/98vxAB"
    },
    {
      "tweet": "New federal office for global warming by Jennifer Haberkorn, Washington Times http://bit.ly/bOOrLk #climategate"
    },
    {
      "tweet": "NOAA - Blizzard Rearranges Climate Change Announcement: http://bit.ly/bTKA9x #agw #wsj #snowmageddon"
    },
    {
      "tweet": "Sir David King: Half Right on the IPCC and Global Warming Policies, Despite Bad Logic http://bit.ly/blSiI2"
    },
    {
      "tweet": "RT @justkarl: Obligatory: Blizzard Rearranges NOAA Climate Change Announcement http://is.gd/7Z68T"
    },
    {
      "tweet": "RT @milrey76 wait, how did the Commerce Sec. announce a new climate change tracking system today? Wasn't the govt shut down due to snow?"
    },
    {
      "tweet": "Snow means that global warming isn't real\" -- how to respond:  http://post.ly/MtI0"
    },
    {
      "tweet": "And Mother Nature reinforces the fact that global warming is but a left-wing conspiracy by bringing yet MORE SNOW. http://bit.ly/cn8jen"
    },
    {
      "tweet": "RT @sbthistle: More snow 4 DC. Hope anti-climate change members of Congress & lobbyists, r paying attention. http://tinyurl.com/yedwvex #co2"
    },
    {
      "tweet": "Weather apparently only relevant when global warming is supported. http://bit.ly/bmnKp6"
    },
    {
      "tweet": "RT @FederalLobbyist: CLIMATE CHANGE? Blizzrd Rearranges Announcement of Feds New Global Warming Office! http://bit.ly/cjiqDh Have to grin!"
    },
    {
      "tweet": "No weather event can be attributed exclusively to climate change, but heavier precipitation is consistent w/ climate scientists' theories."
    },
    {
      "tweet": "RT @usnoaagov: Com. Sec. Locke: \"NOAA Climate Service will help tackle head-on the challenges of mitigating and adapting to climate change."
    },
    {
      "tweet": "RT @ClimateScam: #climategate : Weather apparently only relevant when global warming is supported. http://bit.ly/dfxl79"
    },
    {
      "tweet": "#climategate : Weather apparently only relevant when global warming is supported. http://bit.ly/dfxl79"
    },
    {
      "tweet": "RT @jeffreydmorgan: Good info-easy read. IR pros should read! SEC \"Climate Change Disclosure Release Guidance\"  http://sec.gov/rules/interp/2010/33-9106.pdf"
    },
    {
      "tweet": "10 to 20 inches for D.C. region Tuesday into Wednesday? Stop the global warming! http://ow.ly/15hyn #Snowpocalypse @KEder @wikipublius"
    },
    {
      "tweet": "GLOBAL WARMING: NOAA Proposes New Climate Service - http://bit.ly/codcdY"
    },
    {
      "tweet": "Hah hah! RT @mvaughn25: Too funny, govt had to delay announcing new \"Global Warming Office\" due to DC blizzard http://bit.ly/bTKA9x"
    },
    {
      "tweet": "When I see a warning for ANOTHER 10-20\" of snow I wish girls still used 3 cans of AquaNet per day to speed up the global warming process"
    },
    {
      "tweet": "RT @ClimateScam: Busted! Rajendra Pachauri: head of UN climate change panel clocks up half a million miles of air travel http://bit.ly/d6mlhN"
    },
    {
      "tweet": "Another 20 in. of snow possible. Who Dat say there's global warming? http://bit.ly/baPDnN #tcot  #globalwarming"
    },
    {
      "tweet": "RT @boliviaun 6:30 pm Live, Ivan Canelas, spokesperson of Bolivian presidency, at climate change conf #cochabamba! http://is.gd/bzLVM #cmpcc"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC | Washington Examiner: http://bit.ly/cXYmem #tcot"
    },
    {
      "tweet": "RT @NASA: Our colleagues at NOAA have launched a special climate service to track climate change trends at Climate.gov"
    },
    {
      "tweet": "RT @txvoodoo: Dr Jeff Masters of @wunderground has a great blog about storms & global warming: http://is.gd/7YoX4"
    },
    {
      "tweet": "Water at core of climate change impacts: experts http://bit.ly/9lFhiP ..."
    },
    {
      "tweet": "@notlarrysabato and RFK Jr was tlkibg last yr about how global warming has made DC metro snowless."
    },
    {
      "tweet": "RT @WeCanLead Odds schmodds. RT @senatus: Despite long odds, groups continuing to push Senate on #climate change bill - http://is.gd/7XYkr"
    },
    {
      "tweet": "Exxon Still Orchestrating Campaign to \"Undermine Public Acceptance of Global Warming\" http://bit.ly/ceX6Hi (via @treehugger + @NatalieLin)"
    },
    {
      "tweet": "Laughable. // NOAA: Blizzard Rearranges Climate Change Announcement    http://on.wsj.com/cZAaP0  via @tweetmeme"
    },
    {
      "tweet": "I don't know about global warming, but I'm ready to sign-up on the Global Cooling bandwagon. #globalcooling #snowpocalypse 10-20"
    },
    {
      "tweet": "RT @washdcnews: NOAA: Blizzard Rearranges Climate Change Announcement http://dlvr.it/1XLW"
    },
    {
      "tweet": "Ask Pablo: What Impact Will The Volcano In Iceland Have On Climate Change? http://bit.ly/bZ4FQJ"
    },
    {
      "tweet": "Post: \"Smart electric meters may be delayed in face of cooling concerns about climate change\" http://tinyurl.com/yfabxr9"
    },
    {
      "tweet": "NOAA: Blizzard Rearranges Climate Change Announcement http://dlvr.it/1XLW"
    },
    {
      "tweet": "RT @WSJWashington: NOAA: Blizzard Rearranges Climate Change Announcement http://on.wsj.com/ayzhTE"
    },
    {
      "tweet": "NOAA: Blizzard Rearranges Climate Change Announcement http://on.wsj.com/ayzhTE"
    },
    {
      "tweet": "True, but EPA is less susceptible here than Congress. RT @drgrist \"Lobbyists rush to block EPA action on climate change http://is.gd/7Y8K3"
    },
    {
      "tweet": "Global warming deniers need to STFU. Climate change causes an increase in GLOBAL (not necessarily local) temps & larger storms. And oh look!"
    },
    {
      "tweet": "US Fish and Wildlife Service Says Pika Not Imperiled by Climate Change: New York Times (blog) The Obama administr... http://nyti.ms/ae6mk0"
    },
    {
      "tweet": "The great global warming alarmist meltdown continues: http://bit.ly/92VvOv #ipcc #tcot #climate"
    },
    {
      "tweet": "[...] and Reduce Greenhouse Gas Emissions  That Cause Global Warming Until Unemployment Drops Below Specified Level for Full Year"
    },
    {
      "tweet": "RT @Dofang Batman said it best on global warming: http://twitpic.com/11rlcm"
    },
    {
      "tweet": "Ask Pablo: What Impact Will The Volcano In Iceland Have On Climate Change? http://bit.ly/bZ4FQJ"
    },
    {
      "tweet": "2 ft of snow on the ground and Obama administration has press conference to announce global warming tracker. Clueless. http://tr.im/Nn7P"
    },
    {
      "tweet": "Here we go again. Thank G#d for global warming? Another big snowstorm forecast for U.S. East Coast. http://bit.ly/cseILR"
    },
    {
      "tweet": "RT @DougBenson: Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC: Robert F. Kennedy Jr., who flies around on pri... http://bit.ly/de9g7L"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC http://goo.gl/fb/0ugJ"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC http://goo.gl/fb/Y4pz"
    },
    {
      "tweet": "RT @senatus: Despite long odds, outside groups are continuing to push the Senate on a climate change bill - http://is.gd/7XYkr"
    },
    {
      "tweet": "UN Environment Programme head defends conclusions of landmark climate change report: http://is.gd/7WkIo (via @UN)"
    },
    {
      "tweet": "RT @redostoneage Two physicists scientific paper debunking global warming & how it violates basic laws of physics http://bit.ly/amRmtg"
    },
    {
      "tweet": "Oceans reveal further impacts of climate change, says UAB expert http://bit.ly/OceanImpacts (via @EcoInteractive)"
    },
    {
      "tweet": "Heading to Clarendon in global warming shirt. Will it get me laughs or get me shanked? We'll find out! #snowpocalypse"
    },
    {
      "tweet": "And again I say: drop global warming, enviros. The issue is not PREDICTABLY rising temps but UNPREDICTABLE climate change. #snom!@#$g"
    },
    {
      "tweet": "@raygrantdotcom You know, a theory of global warming effect is that North Atlantic actually cools as polar ice melts, cutting of Gulf Stream"
    },
    {
      "tweet": "Due to the snow (aka, global warming), Starbucks near me ran out of coffee!! What?!?"
    },
    {
      "tweet": "NOAA announces new climate change \"portal\" www.climate.gov and plans for a Climate Service to provide data http://www.noaa.gov/climate.html"
    },
    {
      "tweet": "Effort underway to suspend California's global-warming law: http://bit.ly/cf8sO1 #climatechange #capandtrade"
    },
    {
      "tweet": "@brytupper And we have another 10-20 inches of it on the way. We are running out of room to put our global warming!"
    },
    {
      "tweet": "Really more snow?! Damn global warming - the pandas! what about the pandas!"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global Warming means no snow or cold for DC http://tinyurl.com/yfeoz82 || Judge intentions, not results #manbearpig"
    },
    {
      "tweet": "@freddoso - great piece - RFK, Jr. 15 months ago: Global warming means no snow or cold in DC  http://bit.ly/aeTiCg #tcot #teaparty #sgp"
    },
    {
      "tweet": "Numb fingers limited my Tweetability after shoveling 27\" of global warming. DC forecast Tues: 10+ inches-Hell has indeed frozen over! #tcot"
    },
    {
      "tweet": "US Fish and Wildlife Service Says Pika Not Imperiled by Climate Change - New York Times (blog).. http://bit.ly/cxHD7l #obama'"
    },
    {
      "tweet": "@syancyfox5  now its 14\"-20 FML i sorry but I htink im going team Plain global warming does not exist"
    },
    {
      "tweet": "@_Kaitie_  Team Paling GLOBAL WARMInG DOES NOT EXIST"
    },
    {
      "tweet": "#Commerce @SecLocke on #WhiteHouse #Climate Service proposal: \"Whether we like it or not, climate change represents a real threat."
    },
    {
      "tweet": "NOAA has unveiled a clearinghouse of NOAA climate change info, products & svcs at www.climate.gov"
    },
    {
      "tweet": "@ewerickson FWIW the idea of a national climate service started under Bush and it has nothing to do with global warming."
    },
    {
      "tweet": "RT @Earthscan: There are a few well-worn arguments that people who do not want to believe that climate change is a reality......"
    },
    {
      "tweet": "How does the politicization of climate change affect public opinion? http://bit.ly/9lJKg5"
    },
    {
      "tweet": "@washpost NOAA reorganization would provide more info on global warming: http://bit.ly/agqiIf #ocean #climate #acidification"
    },
    {
      "tweet": "@mlmoore2 I love how they act like they never said it either. They will remind us again in July about global warming."
    },
    {
      "tweet": "Time Warp! 15 months ago RFK Jr. said Global warming means no cold or snow in DC.  http://bit.ly/bfq8s8 Suck it Bobby."
    },
    {
      "tweet": "Busted! Rajendra Pachauri: head of UN climate change panel clocks up half a million miles of air travel http://bit.ly/d6mlhN"
    },
    {
      "tweet": "RT @davidcorndc: Can someone please explain to conservatives that with climate change, some areas will get colder and weather patterns will shift."
    },
    {
      "tweet": "I hate when morons think that when we get snow it means there's no global warming. It is called CLIMATE CHANGE! Wake the F up!"
    },
    {
      "tweet": "RT @MISSMYA: \"Many believe global warming's from man made pollution, but planetary alignments hv a big influence on weather&all aspects of life on Earth"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming: By RANDOLPH E. SCHMID AP Science Writer AP The Obama administration on ... http://bit.ly/aXswH4"
    },
    {
      "tweet": "U.S. to Form Climate-Change Agency: The Obama administration proposed a new agency to study and report on the changing  http://url4.eu/1LSoP"
    },
    {
      "tweet": "RT @fredthompson UN Global Warming chair says skeptics can't tell asbestos from talcum pwdr. At least they can tell science from a snow job."
    },
    {
      "tweet": "@dcseth my \"side\" is science, & it's well-founded. Politics involved, but only b/c we have to deal w/ your climate change denying nonsense."
    },
    {
      "tweet": "To clarify, here: I am an environmentalist. @dcseth is a climate change denier. You are witnessing an argument."
    },
    {
      "tweet": "@dcseth I'm sure you're a decent human, but if youre trying to make climate change political, hard for me to respect any of your opinions."
    },
    {
      "tweet": "RT @davidcorndc: Can someone please explain to conservatives that with climate change, some areas will get colder and weather patterns will shift."
    },
    {
      "tweet": "RT @davidcorndc: Can someone please explain to conservatives that with climate change, some areas will get colder and weather patterns will shift."
    },
    {
      "tweet": "Can someone please explain to conservatives that with climate change, some areas will get colder and weather patterns will shift."
    },
    {
      "tweet": "@DavidCornDC Another DC snowstorm? Where's the global warming?"
    },
    {
      "tweet": "Woot! RT @alexpriest: RT @HuffPostGreen: hey! wow!  New Federal Climate Change Agency Announced http://bit.ly/aybO8Z - cool!"
    },
    {
      "tweet": "RT @usnews: New Federal Climate Change Agency Forming http://bit.ly/a8lfPz"
    },
    {
      "tweet": "RT @bradplumer Tea-party gang now focused on scuttling California's global-warming law: http://bit.ly/dB1PYw"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming http://bit.ly/a8lfPz"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming http://bit.ly/a8lfPz"
    },
    {
      "tweet": "@dcseth oh good god don't tell me you're a climate change denier too"
    },
    {
      "tweet": "New federal climate change agency forming http://dlvr.it/1WPN"
    },
    {
      "tweet": "Tea-party gang now focused on scuttling California's global-warming law: http://bit.ly/dB1PYw"
    },
    {
      "tweet": "Ok... @Slate just sent me my mid-day update, linking a story on climate change to the AP...but the link takes me to TPM. #msmbias"
    },
    {
      "tweet": "RT @HuffPostGreen: hey! wow!  New Federal Climate Change Agency Announced http://bit.ly/aybO8Z - cool!"
    },
    {
      "tweet": "RT @eDevelopment: Two vacancies open at the World Bank: Senior Specialists on ICT for Agriculture and Climate Change and e-Health http://bit.ly/91JGji"
    },
    {
      "tweet": "Making Ripples: post-corporate adventures in Floyd County Virginia: Is this a preview of the climate change to come? http://j.mp/cTBnzw"
    },
    {
      "tweet": "Across the Nation... NOAA reorganizes to provide more info on global warming: The Obama administration launched a ... http://bit.ly/cIPdtR"
    },
    {
      "tweet": "Business Section... NOAA reorganizes to provide more info on global warming: The Obama administration launched a n... http://bit.ly/9c2kEc"
    },
    {
      "tweet": "Lobbyists rush to block EPA action on #climate change http://bit.ly/d5lq3G"
    },
    {
      "tweet": "With climate change, birds are taking off for migration sooner ...: Migrating birds can and do keep their travel d... http://bit.ly/90jgQn"
    },
    {
      "tweet": "Just in time for #snomg! RT @BreakingNews: Obama admin forms Climate Service, a new agency to study and report on global warming -AP #tcot"
    },
    {
      "tweet": "Green Police! RT @peterdaou: Department of Defense states that climate change is a national security threat http://bit.ly/cIN1aK"
    },
    {
      "tweet": "RT @BreakingNews: Obama administration forms Climate Service, a new agency to study and report on global warming -AP"
    },
    {
      "tweet": "Disclosing the Real Risks on Climate Change by Paul Driessen, TownHall.com http://bit.ly/8YJBQ7"
    },
    {
      "tweet": "China Daily: The rich world will never accept the findings of #climate change till there is money to be made http://icio.us/bl2v3j"
    },
    {
      "tweet": "Part of the problem with state/county \"Balanced Budget\" laws are storms like this. With Global Warming, emergencies like this will increase."
    },
    {
      "tweet": "RFK, Jr., not too long ago: Global warming means no snow in D.C. http://bit.ly/4x6PvE #shovelready"
    },
    {
      "tweet": "Lobbyists Rush to Block EPA Action on Climate Change http://ow.ly/16wIEJ"
    },
    {
      "tweet": "Tell Toyota COO to put the brakes on climate change & US CoC - Digg up this Q! http://ow.ly/14BdQ #climate #green #toyota #prius"
    },
    {
      "tweet": "A lot of NJ's blocked me, but you're fine :) RT @teh_Dede: @keder I'm sorry the Global Warming got ya...and I hope we're still friends.  :)"
    },
    {
      "tweet": "@bmorehousehoney that's why the science community has pushed so hard for the term \"Climate Change\" - warming is misleading..."
    },
    {
      "tweet": "Report: open green tech and open business models for climate-change oriented technology transfer http://bit.ly/biHivG"
    },
    {
      "tweet": "@algore How is your global warming going there in your DC office? Hope you're nice and toasty...oh wait, #climategate is a scam. thnx #fail"
    },
    {
      "tweet": "@jmac82 Exactly, Justin. Just saw Fox 5 say we'll be getting up to 10 inches of global warming on Tuesday. Damn it!"
    },
    {
      "tweet": "Climate change is transforming the Arctic environment faster than expected (ENN.com) http://www.enn.com/ecosystems/article/40994"
    },
    {
      "tweet": "Okay, back to buz and no more complaining about snow...until Tuesday when another 6 inches comes.  Notice no talk of global warming lately?!"
    },
    {
      "tweet": "Fighting Climate Change is a Business Model - As governments struggle to solve the climate change crisis, who's ste... http://ow.ly/16wGC9"
    },
    {
      "tweet": "@TraciKnoppe After 27\" on Saturday, we're supposed to get 10 more tomorrow into Wednesday. Must be global warming!"
    },
    {
      "tweet": "just saw someone post on FB that #snowpocalypse must be proof that global warming is a myth. calling him a moron probably isn't productive."
    },
    {
      "tweet": "More mistakes found in climate change report? http://bit.ly/bKqwg6 #tcot #tlot"
    },
    {
      "tweet": "@ScottJW Where is that global warming when we need it?"
    },
    {
      "tweet": "Where Is Global Warming? by Rebecca Terrell, NewAmerican.com http://bit.ly/9RPSIZ"
    },
    {
      "tweet": "The great global warming collapse http://tgam.ca/Hrh (via @globeandmail)"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC (Examiner): http://bit.ly/76Gtnu #tcot"
    },
    {
      "tweet": "Global warming strikes DC! I present to u, my car:  http://tweetphoto.com/10721938"
    },
    {
      "tweet": "Today's @newtgingrich: snow = no #climate change. Yesterday's Newt: #capandtrade good.  http://post.ly/MgbZ"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "Post: \"Believers in man-made global warming rapidly dwindling\" http://tinyurl.com/yk66f9g"
    },
    {
      "tweet": "RT @WiserEarth: Follow events live from #bolivia for #cochabamba: World People's Conference on Climate Change  http://bit.ly/aldPym"
    },
    {
      "tweet": "Naomi Klein on CSPAN: Climate change causing island extinction within 50 years."
    },
    {
      "tweet": "Restoration of Australian landscape enhances adaptability to climate change: http://bit.ly/9UUIi9"
    },
    {
      "tweet": "Climate change is transforming the Arctic environment faster than expected & accelerating the disappearance of sea ice: http://bit.ly/afeLtO"
    },
    {
      "tweet": "The video contest @lovisatalk mentioned about Climate Change is on the ning-built Exchanges Connect http://bit.ly/4oLB7G #gov20LA"
    },
    {
      "tweet": "The video contest @lovisatalk mentioned about Climate Change is on the ning-built Exchanges Connect  http://bit.ly/4oLB7G"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC: Robert F. Kennedy Jr., who flies around on pri... http://bit.ly/dmzEa2"
    },
    {
      "tweet": "Mark Steyn: \"climate change is not only a scientific scandal but also a massive journalistic failure.\" http://tinyurl.com/yzxap7c"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC: ' Robert F. Kennedy Jr., who flies around on p... http://bit.ly/bhvc1D"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC http://dlvr.it/1SpZ #snowpocalypse"
    },
    {
      "tweet": "RT @joshtpm global warming prolly real in New York, but big scam in DC"
    },
    {
      "tweet": "RT @Hesperian: World People's Conference on Climate Change starts today in Bolivia! #cochabamba @boliviaun http://ow.ly/1AoQX"
    },
    {
      "tweet": "RT @joshtpm global warming prolly real in New York, but big scam in DC"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC http://goo.gl/fb/xx8y"
    },
    {
      "tweet": "RFK, Jr. 15 months ago - Global warming means no snow or cold in DC: http://bit.ly/aeTiCg @freddoso via Drudge"
    },
    {
      "tweet": "Snowmageddon ' More Global Warming from Washington, DC and Mid ...: I wonder what Robert F. Kennedy Jr. would have... http://bit.ly/904bCz"
    },
    {
      "tweet": "On my way to Italy  - if I can figure out how to get to Dulles. Battling the climate in the fight to end climate change!"
    },
    {
      "tweet": "...The facts Are In: Global Warming Caused AIDS!... #reagan #pope #tcot #teaparty #gop #dem #palin #sgp #tlot #p2"
    },
    {
      "tweet": "new: Global Warming Incoherence http://strata-sphere.com/blog/index.php/archives/12671"
    },
    {
      "tweet": "RT @janehenrici: CFP for conference on #indigenous approaches to #environment & #climate change http://bit.ly/dja0A4"
    },
    {
      "tweet": "RT @s_dog: Oops. #snOMG  RT @Drudge_Report: RFK, Jr. 15 months ago: Global warming means no snow or cold in DC... http://j.mp/bZ68xB #agw"
    },
    {
      "tweet": "CFP for conference on #indigenous approaches to #environment & #climate change http://bit.ly/dja0A4"
    },
    {
      "tweet": "RT @HitTheRoadCa: Join the Peoples Conference on Climate Change live at http://envivocmpcc.org.bo #ecomonday #cmpcc #wpccc #cochabamba"
    },
    {
      "tweet": "On global warming, \"the scientific 'consensus' is melting way faster than the glaciers.\" http://bit.ly/cNz3gV #tcot #climate"
    },
    {
      "tweet": "The great global warming collapse'... http://bit.ly/drrEIN"
    },
    {
      "tweet": "RT @Drudge_Report: RFK, Jr. 15 months ago: Global warming means no snow or cold in DC... http://drudge.tw/bUA5f0"
    },
    {
      "tweet": "27\" of global warming fell at my home 8 miles south of Washington, DC.  Arms & hands so sore from shoveling ... Hurts to Tweet :-("
    },
    {
      "tweet": "Global warming lights a fire under beer prices: http://bit.ly/c6UVOu"
    },
    {
      "tweet": "@petersays RFK, Jr. 15 months ago: Global warming means no snow or cold in DC | Washington Examiner: http://bit.ly/76Gtnu"
    },
    {
      "tweet": "British Conservatives move away from climate change as election nears http://bit.ly/9UqN5F"
    },
    {
      "tweet": "Pollster on rapidly collapsing public belief in man-made global warming:  'It is very unusual indeed to see such a... http://bit.ly/aRiBOZ"
    },
    {
      "tweet": "Pollster on rapidly collapsing public belief in man-made global warming:  'It is very unusual indeed t... http://bit.ly/bVM4zN #climategate"
    },
    {
      "tweet": "RT @taffastrophe: It's really amazing how sore you feel after shoveling 28\" of global warming off of your sidewalk & driveway.  #AlGoreLied #snomg"
    },
    {
      "tweet": "RT @Qorianka World People's Conference on Climate Change and the Rights of Mother Earth: http://is.gd/bzHOa  #cochabamba"
    },
    {
      "tweet": "Invasive News: Invasive Species Thriving in Period of Climate Change - World Sentinel: Invasive Species Thriving i... http://bit.ly/dmimzF"
    },
    {
      "tweet": "@lowkell lies? Who could seriouly believe in global warming after this?"
    },
    {
      "tweet": "Bwaahaa! \"GIVE THEM THE WEALTH!\" #PresidentPalin! #SNOBAMA: DC's 2010 SNOW, BLASTS OBAMA, IPCC & GLOBAL WARMING http://youtu.be/FDNWoZecHjg"
    },
    {
      "tweet": "#messageto #PresidentPalin! SNOBAMA: DC's 2010 SNOWFALL, BLASTS #OBAMA, #IPCC & #GLOBAL WARMING TAX Short VID http://youtu.be/FDNWoZecHjg"
    },
    {
      "tweet": "VID #messageto #PresidentPalin! @sarahpalinusa #SNOBAMA: DC's 2010 SNOW, BLASTS OBAMA, IPCC & GLOBAL WARMING TAX http://youtu.be/FDNWoZecHjg"
    },
    {
      "tweet": "Climate Change and planet Earth ' Learnthebibleca's Blog http://bit.ly/duUgEL"
    },
    {
      "tweet": "SNOBAMA: DC's 2010 SNOW, BLASTS OBAMA, THE IPCC & GLOBAL WARMING http://youtu.be/FDNWoZecHjg #teaparty #tcot #GOP @glennbeck #fox #sgp #ocra"
    },
    {
      "tweet": "New college course will foster cross-cultural understanding of climate change: http://bit.ly/difW0F"
    },
    {
      "tweet": "New college course will foster cross-cultural understanding of climate change: http://bit.ly/difW0F"
    },
    {
      "tweet": "Report: Climate change indicates need for Scots to consider new species in reforestation:  http://bit.ly/bn0SJd"
    },
    {
      "tweet": "Report: Climate change indicates need for Scots to consider new species in reforestation:  http://bit.ly/bn0SJd"
    },
    {
      "tweet": "The ONLY climate change that exists is Summer, Fall, Winter, & Spring.  #justsaying"
    },
    {
      "tweet": "At this point, everyone in Washington DC area hates Al Gore. He should stand in waist deep snow butt naked and preach global warming."
    },
    {
      "tweet": "I rated a YouTube video (5 out of 5 stars) -- SNOBAMA: DC's 2010 SNOW BLASTS OBAMA, THE IPCC & GLOBAL WARMING http://youtu.be/FDNWoZecHjg?a"
    },
    {
      "tweet": "What's Hot: Seattle Takes on the Junk Mail Industry: When it comes to curbing climate change, some things are easi... http://bit.ly/buTsNb"
    },
    {
      "tweet": "Inhofe family in DC as the blizzard hit - had a little fun at the expense of Al Gore and global warming.  http://bit.ly/aPnPlV #TCOT"
    },
    {
      "tweet": "RT @brandonlk: The great global warming collapse'... http://tinyurl.com/yf34stp #tcot"
    },
    {
      "tweet": "@TxJogger12 LOL, yeah I really want some global warming now....must increase carbon footprint! :-)"
    },
    {
      "tweet": "@brandonlk I'm feeling global warming here as I'm sore from digging out over 2 feet of snow :-)"
    },
    {
      "tweet": "@IsaacSalazar: Here's your climate change RT @mtapscott More on why bogus \"global warming consensus\" is fading fast: http://bit.ly/cDJyLG"
    },
    {
      "tweet": "@TerriSueWho And EXACTLY why we say \"global warming schmorming!"
    },
    {
      "tweet": "RT @lward99: Snow covers Washington DC - Must hand it to Obama he promised to end Global Warming, and did so in one year. #climategate #tcot #fb"
    },
    {
      "tweet": "Global Warming Hysteria: Another False Claim Exposed in IPCC Report http://bit.ly/9xlMWu"
    },
    {
      "tweet": "Bonsai from the Right: Quick Question On Global Warming: My Photo. Chris: Clinton Twp, Mi, United States: I like t... http://bit.ly/dCrz7m"
    },
    {
      "tweet": "The power is out. This is fun. At least I have beer. Global warming=fail."
    },
    {
      "tweet": "Least favorite aspect of a snowstorm: encourages the rightwing nutcases inveighing global warming as a hoax."
    },
    {
      "tweet": "@justinlee76 Well, this type of storm is always fleeting in people's minds, but it certaintly doesn't help the climate change people."
    },
    {
      "tweet": "Rather amused at climate change deniers who wryly refer to snow as 'global warming' -- they're a bit closer to the mark than they think."
    },
    {
      "tweet": "@justinlee76 Well, it sounds nicer thatn what we've got. D.C. is in the middle of our third snowiest winter ever. Damn global warming!"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "Betting on Climate Change: Corporations Stand to Make or Lose Billions: Is the planet really warming up? Just ask ... http://bit.ly/aqTRqc"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "What's Hot: Tell Toyota COO to Put the Brakes on Climate Change & the US Chamber:  You've probably heard about the... http://bit.ly/9Eiqz4"
    },
    {
      "tweet": "Digg up our question to Toyota COO to Put the Brakes on Climate Change! http://bit.ly/9jFhyk We can win this like we won @citizentube!"
    },
    {
      "tweet": "RT @DougHammett: Global warming at its best! DC nearly shut down, some areas got 44 inches!"
    },
    {
      "tweet": "More Scorn, Ridicule for UN Global Warming Body http://bit.ly/dpLoX4"
    },
    {
      "tweet": "RT @dcexaminer: More on why bogus \"global warming consensus\" is fading fast http://goo.gl/fb/TOWc"
    },
    {
      "tweet": "#home OT - Can I reschedule my global warming pitch?: Just think if you finally got on the schedule to do a pitch ... http://bit.ly/daukSy"
    },
    {
      "tweet": "Absent from Obama's address: Global Warming. //  http://on.wsj.com/92LLCt Obama's Address to DNC's Winter Meeting via @tweetmeme"
    },
    {
      "tweet": "More on why bogus \"global warming consensus\" is fading fast: http://bit.ly/9fUavY"
    },
    {
      "tweet": "More on why bogus \"global warming consensus\" is fading fast: Margaret Wente of Toronto's Globe and Mail explains w... http://bit.ly/bClZes"
    },
    {
      "tweet": "Betting on Climate Change: Corporations Stand to Make or Lose Billions: Is the planet really warming up? Just ask ... http://bit.ly/aqTRqc"
    },
    {
      "tweet": "I can practically hear all of the #climate change deniers frothing at the mouth over this snowstorm. So sad they confuse weather & climate."
    },
    {
      "tweet": "More on why bogus \"global warming consensus\" is fading fast http://goo.gl/fb/a1rD"
    },
    {
      "tweet": "More on why bogus \"global warming consensus\" is fading fast http://goo.gl/fb/EVtR"
    },
    {
      "tweet": "More on why bogus \"global warming consensus\" is fading fast: Margaret Wente of Toronto's Globe and Mail explains w... http://bit.ly/d2510L"
    },
    {
      "tweet": "More on why bogus \"global warming consensus\" is fading fast http://goo.gl/fb/4Z0n"
    },
    {
      "tweet": "RT for those that didn't see it this morning @GBDave If you think global warming is a bad thing... http://tiny12.tv/YIE0Y"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "@JustPlainBill Global Warming is not the established reality. Credible news sources the world over are debunking it. Esp. in UK."
    },
    {
      "tweet": "UN chief climate change mongerer who wants iced water banned & aviation taxes clocked 120 long-haul flights &d 43 short-haul trips in 18 mth"
    },
    {
      "tweet": "India abandons UN's Intergovernmental Panel on Climate Change (IPCC) as untrustworthy http://bit.ly/abMsJt"
    },
    {
      "tweet": "@twinelm Not at all.  If that were the case, I'd believe in the stimulus, global warming, and national health care. #idont"
    },
    {
      "tweet": "RT @proenergy: Oceans reveal further impacts of climate change http://bit.ly/9PlqYk"
    },
    {
      "tweet": "Tell Toyota COO to put the brakes on climate change & US CoC - Digg up this Q! http://ow.ly/14BdQ #climate #green #toyota #prius"
    },
    {
      "tweet": "RT @wonkroom: RT @GottaLaff: Conservatives try to suspend California's global-warming law http://bit.ly/9RDljF"
    },
    {
      "tweet": "a great article explaining reasons why people are not convinced by the IPCCs man-made global warming claims http://tinyurl.com/yf34stp"
    },
    {
      "tweet": "RT @GottaLaff: Conservatives try to suspend California's global-warming law http://bit.ly/9RDljF"
    },
    {
      "tweet": "RT @glbarry: Michael Scott, Dunder Mifflin/Sabre: \"Change really isn't a good thing. Just ask the climate."
    },
    {
      "tweet": "Dear Global Warming, Having a frozen hell of a time, wish you were here. Love, The East Coast"
    },
    {
      "tweet": "RT @ivangosorio @Drudge_Report PAPER: The Great Global Warming Collapse: http://bit.ly/drrEIN #agw"
    },
    {
      "tweet": "Global warming is kinda blizzardy."
    },
    {
      "tweet": "Robert S. Eshelman: World People's Conference on Climate Change and the Rights of Mother Earth kicks off in Boliv... http://huff.to/cWnaC8"
    },
    {
      "tweet": "RT @lward99: Snow covers Washington DC - Must hand it to Obama he promised to end Global Warming, and did so in one year. #climategate #tcot #fb"
    },
    {
      "tweet": "Utah state representative claims climate change is a 'conspiracy' aimed at population control. http://tr.im/N5Tx"
    },
    {
      "tweet": "Malthusian collapse. // RT @Drudge_Report   PAPER: The great global warming collapse... http://drudge.tw/97RNpE"
    },
    {
      "tweet": "Harsh Winter Caused by Climate Change: http://www.mnn.com/earth-matters/climate-change/stories/harsh-winter-caused-by-climate-change"
    },
    {
      "tweet": "Effort underway to suspend California's global-warming law by Margot Roosevelt, LA Times http://bit.ly/cc9TVV"
    },
    {
      "tweet": "[@climatebrad] At Behest Of King Coal And Big Ag, Ike Skelton And Collin Peterson Try To Outlaw Global Warming http://ow.ly/16vYfp"
    },
    {
      "tweet": "RT @BarackBorat: Can someone call the Al Gore and ask him for make turn the Global Warming back on?"
    },
    {
      "tweet": "Michael Scott, Dunder Mifflin/Sabre: \"Change really isn't a good thing. Just ask the climate."
    },
    {
      "tweet": "If global warming gets any worse I am going to have to buy a snow blower"
    },
    {
      "tweet": "If you think global warming is a bad thing... http://tiny12.tv/YIE0Y"
    },
    {
      "tweet": "RT @dilemmie: Welcome to twitter @MaryTharin - my roommate and climate change blogger. follow her so she'll stop making fun of me."
    },
    {
      "tweet": "Utah state representative claims climate change is a 'conspiracy' aimed at population control. http://dlvr.it/1QqW"
    },
    {
      "tweet": "Most snow we've had in years...if you believe in Global Warming...please check into an institution because you've been brain washed"
    },
    {
      "tweet": "Climate Change and Invasive Species http://bit.ly/dbH9lu via #climatechange #wildlife #invasive"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "Snow covers Washington DC - Must hand it to Obama he promised to end Global Warming, and did so in one year. #climategate #tcot #fb"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "RT @climatedebate: BYU scientists refute Utah committee's global warming assertations:  http://bit.ly/b4TVtx"
    },
    {
      "tweet": "This #snowpocalypse reminds me we need to redouble our efforts to fight anthropogenic global warming."
    },
    {
      "tweet": "Knee-Jerk No Fly Ban Discredits Global Warming Alarmists: With European governments coming under increa... http://bit.ly/duBji9 (FTSN News)"
    },
    {
      "tweet": "RT @GoodClimateJM: Part 1 of a three part series about the challenges of communicating climate change. http://jm.ly/fh5UVC"
    },
    {
      "tweet": "Trapped indoors by \"global warming\"? While away the time with the \"I Love Obama\" jigsaw puzzle from the NYT Store. http://is.gd/7Orq2 #tcot"
    },
    {
      "tweet": "RT @climatedebate: The great global warming collapse:  http://bit.ly/9vQ30k"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "RT @newtgingrich: Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "Historic snow storm in washington-third this year-where is al gore to explain it snows this heavily as a sign global warming is imminent"
    },
    {
      "tweet": "@tatiposada Just shoveled for over an hour. Oy. According to Maddow, cold weather and snow is proof of global warming..."
    },
    {
      "tweet": "4-5 foot snow drifts in VA. Good job Global Warming. YOUR FIRED!"
    },
    {
      "tweet": "The Great Global Warming Collapse http://bit.ly/9VeLfD"
    },
    {
      "tweet": "Trying to get motivated to scoop more than a foot of global warming off my Loooooooooooooooooooooong driveway."
    },
    {
      "tweet": "RT @gaiksuan RT @WiserEarth: World People's Conference on Climate Change: videos fr #cochabamba http://bit.ly/aldPym"
    },
    {
      "tweet": "RT @Heritage Climate Change Should Not Be the Focus of Homeland Security | The Foundry: Conservative Policy News. http://bit.ly/bkLwY9"
    },
    {
      "tweet": "hahaha RT @AlGoresBrain Washington DC Raw Temp- 30/Heavy Snow, Adjusted for Global Warming- 76 Sunny."
    },
    {
      "tweet": "RT @NathanWurtzel: I am assured scientists at East Anglia are working hard to show #snOMG was caused by global warming. Numbers almost cooked...er...ready."
    },
    {
      "tweet": "I am assured scientists at East Anglia are working hard to show #snOMG was caused by global warming. Numbers almost cooked...er...ready."
    },
    {
      "tweet": "The Global Warming Guerrillas http://bit.ly/91xRVP"
    },
    {
      "tweet": "@AdrienneRoyer - I'll defer to experts on this. Not sure this season's storms are climate change or El Nino or something else..."
    },
    {
      "tweet": "@mikekruger not saying that climate change isn't possible but man-made is. look at unaltered models. C02 levels higher in ice age"
    },
    {
      "tweet": "OMG Bill O'Reilly this is not fucking up for debate climate change is real and it's manmade aslkdgldkhag;odskjhyagpo #climatechange"
    },
    {
      "tweet": "@AdrienneRoyer - ok, but climate change models say stronger storms. We have stronger storms now. So model is wrong?"
    },
    {
      "tweet": "@mikekruger sigh. not really. earth's magnetic field and solar activity aren't factored into climate change models #mydadisascienceprofessor"
    },
    {
      "tweet": "Climate Change: No Doubt It's Happening For Industries That Stand To Benefit Or Suffer From It: If you looked mer... http://huff.to/cJP4Os"
    },
    {
      "tweet": "@AdrienneRoyer - Huh? Stronger storms are consistent with climate change models."
    },
    {
      "tweet": "@mikekruger those are taxes I don't mind paying. it's the taxes funding climate change research that bother me. that's been really useful"
    },
    {
      "tweet": "I hate winter.  I'm a big fan of global warming. #thatsright"
    },
    {
      "tweet": "@argylestyle I'm prepared to get on a plane & punch my first FB friend who points to this storm as evidence of global warming being a hoax."
    },
    {
      "tweet": "I want my global warming back."
    },
    {
      "tweet": "@MargaretKinney oddball winter weather has been linked to global warming. Check out the story on the @NWF *****homepage: http://www.nwf.org"
    },
    {
      "tweet": "The Overwhelming Evidence of Global Warming falling from the sky in DC!--&gt; (#teaparty #tcot #Beck #GOP #Obama  live at..."
    },
    {
      "tweet": "RT @Kennedy_School: NYTimes' Andrew Revkin, #AmericanU Matthew Nisbet, Urge Better Communication on Climate Change: http://bit.ly/csYeJ3"
    },
    {
      "tweet": "Check out a report from The Overwhelming Evidence of Global Warming in DC! (#teaparty #tcot #Beck #GOP #Obama  live at http://ustre.am/6nIp)"
    },
    {
      "tweet": "tell Al Gore i don't like this global warming! RT @RepublicanCat @imkhris Get the boots out :) monday another storm is behind this bad boy"
    },
    {
      "tweet": "Someone let them know that global warming does not connote higher physical temperatures, please."
    },
    {
      "tweet": "Virginia GOP releases inane video contending that, because of a single snowstorm, global warming must be a farce: http://bit.ly/9xAiH4"
    },
    {
      "tweet": "How come I don't hear the usual suspects today claiming that global warming causes blizzards? #snOMG"
    },
    {
      "tweet": "Invasive News: Invasive Species Thriving in Period of Climate Change - India Business Blog (blog): Invasive Specie... http://bit.ly/aNGpE2"
    },
    {
      "tweet": "New blog post: 12 Inches of Global Warming (Video) http://bit.ly/bAEaJd #tcot"
    },
    {
      "tweet": "The GOP really cannot grasp that snow in one state doesn't refute global climate change. Idiots: http://ow.ly/14oBf"
    },
    {
      "tweet": "Concisely put. RT @lauraolin:A link to send all the idiots who think this year's storms mean global warming is a farce: http://bit.ly/6ocFSK"
    },
    {
      "tweet": "#HouseGOP Wow. There is serious \"overwhelming evidence of global warming\" falling from the sky in DC right now! Up to 30\" of it=RECORD #tcot"
    },
    {
      "tweet": "Well, of course! RT @StephenAtHome: I think we can all agree this Prius disaster proves once and for all that global warming doesn't exist"
    },
    {
      "tweet": "#ANTISCIENCE #GOP #FAIL RT @climatebrad: Seriously, \"12 inches of global warming?\" This is killer stupid. http://bit.ly/cWGVaD #climate"
    },
    {
      "tweet": "@JulieJoyce I studied earth science as an undergrad & grad student, this is proven science fact, not open to debate like global \"warming"
    },
    {
      "tweet": "RT @alexlundry: Tempted to unfollow anyone that conflates #snOMG with global warming skepticism."
    },
    {
      "tweet": "Blizzard in DC called snowpocalypse. Verizon guy told me 30 inches coming out where I live. Huh? Deep fodder for #climate change denialists?"
    },
    {
      "tweet": "Invasive News: Invasive Species Thriving in Period of Climate Change - Einnews Portugal: India TalkiesInvasive Spe... http://bit.ly/a3zJSd"
    },
    {
      "tweet": "Just attended an excellent EDF Board meeting http://bit.ly/61N0U Great eco policy shop. Present challenges on global warming front."
    },
    {
      "tweet": "It's settled: Global warming science is sloppy http://goo.gl/fb/Fxxk"
    },
    {
      "tweet": "It's settled: Global warming science is sloppy http://goo.gl/fb/J0ED"
    },
    {
      "tweet": "It's settled: Global warming science is sloppy: From the Dutch News: According to the last IPCC report, published ... http://bit.ly/aUhPiR"
    },
    {
      "tweet": "What's New: Forests Are Growing Faster, Climate Change Appears To Driving Accelerated Growth (Feb 1, 2010) http://bit.ly/9XHCRB"
    },
    {
      "tweet": "Boy. Global warming is one slick buster."
    },
    {
      "tweet": "Videos:  How we know humans are changing the climate and climate change is a clear and present danger http://bit.ly/biQnl0"
    },
    {
      "tweet": "http://bit.ly/fG3j Farm costs headed up says study of climate-change legislation ... http://bit.ly/bCwVk3"
    },
    {
      "tweet": "CBS: Global Warming Science Sound, ClimateGate Just a PR Problem http://ow.ly/16vzpO"
    },
    {
      "tweet": "RT @StephenAtHome: I think we can all agree this Prius disaster proves once and for all that global warming doesn't exist"
    },
    {
      "tweet": "RT @drgrist: Utah nat. resources committee passes resolution denying the existence of climate change: http://is.gd/7M50p Utah: Still crazy!"
    },
    {
      "tweet": "RT @keder    RT @DaggettBeaver: Washington DC is going to have to shovel up to 2 feet of global warming. #tcot #p2"
    },
    {
      "tweet": "*waiting for Drudge to juxtapose a story about #Snowmageddon with one about climate change, with a corny joke/caption* only a matter of time"
    },
    {
      "tweet": "We're in the Top 10 for .@change 's \"Ideas for Change\" compet. Help us reach the top by voting NOW!: http://bit.ly/aoUjGJ #climate"
    },
    {
      "tweet": "Diplomacy #FAIL RT @OneClimate: Sec Clinton admitted that US funding for #climate change may not be additional: http://is.gd/7LY8L"
    },
    {
      "tweet": "What's New: Does Climate Change Promote Invasive Species? (Feb 3, 2010) http://bit.ly/944Ktr"
    },
    {
      "tweet": "RT @DaggettBeaver: Washington DC is going to have to shovel up to 2 feet of global warming. #tcot #p2"
    },
    {
      "tweet": "Rich Galen: Is global warming another DC snow job? (Blizzard?) http://blogs.chron.com/txpotomac/2010/02/rich_galen_is_global_warming_a.html"
    },
    {
      "tweet": "[@ClimateProgress] Energy and Global Warming News for February 5: How activists took on oil companies; Calif. regul... http://ow.ly/16vxYn"
    },
    {
      "tweet": "Now Tibet takes a hit with global warming as temperatures reach a record high! #green http://icio.us/of2mts"
    },
    {
      "tweet": "CBS: Global Warming Science Sound, ClimateGate Just a PR Problem http://ow.ly/14jVj #tcot #iamthemob"
    },
    {
      "tweet": "Shorter Virginia GOP: It's snowing so global warming is bunk. http://bit.ly/av5d94"
    },
    {
      "tweet": "RT @milesgrant: Virginia Republican Party mocks those who trust science of global warming - like Bob McDonnell: http://ow.ly/14jM0"
    },
    {
      "tweet": "Virginia Republican Party mocks those who trust science of global warming - like Bob McDonnell: http://ow.ly/14jM0"
    },
    {
      "tweet": "To argue IPCC error and \"climategate\" weaken the case humans cause climate change shows--or exploits--ignorance of the scientific method."
    },
    {
      "tweet": "Joe Romm interviews Chris Field http://bit.ly/9dxzGv and Mike MacCracken http://bit.ly/9eUNg6 on the basics of climate change science."
    },
    {
      "tweet": "Homes that are subject to #climate change (pictures): http://ow.ly/14iFF"
    },
    {
      "tweet": "#Climate Change: The SEC Weighs In (Or Not)  http://bit.ly/9EYb5T"
    },
    {
      "tweet": "Bulgaria Antarctic Expedition Partakes in Climate Change Research http://bit.ly/bTvjq1"
    },
    {
      "tweet": "Obama won't protect pika endangered by climate change http://bit.ly/bTyNEH"
    },
    {
      "tweet": "@MatthewJLB Funny RFK Jr. wrote a column last winter that global warming led to rare snow in DC #fail"
    },
    {
      "tweet": "@jmac82 So much for global warming! :-P"
    },
    {
      "tweet": "OL News: Oceans Reveal Further Impacts of Climate Change http://bit.ly/9GQoBz"
    },
    {
      "tweet": "India forms new climate change body http://bit.ly/9NZmoa"
    },
    {
      "tweet": "Committee in Utah Legislature Passes Climate Change Denying Resolution 10-1 http://ow.ly/16vu8F"
    },
    {
      "tweet": "Energy and Global Warming News for February 5: How activists took on oil companies; California regulator limits ca... http://bit.ly/aG0QJN"
    },
    {
      "tweet": "Utah legislative panel OKs resolution on climate-change http://short.to/164zc"
    },
    {
      "tweet": "Another Epic Snowstorm in DC: And Other Climate Change Surprises #climate http://bit.ly/bGUyv0"
    },
    {
      "tweet": "Climategate: SEC Demands U.S. Firms Disclose Global Warming Risks to Shareholders -Really (PJM Exclusive): http://bit.ly/a8FnKP via @addthis"
    },
    {
      "tweet": "RT @sciencedaily: Stratospheric Water Vapor is a Global Warming Wild Card: A 10 percent drop in water vapor ten miles above Earth's ... http://bit.ly/bVEsWa"
    },
    {
      "tweet": "Malthusian failure. // RT @TelegraphNews India forms new climate change body http://bit.ly/dCOe4U"
    },
    {
      "tweet": "RT @VA_GOP - Watch the new RPV Web Ad: \"12 Inches of Global Warming\" http://bit.ly/cUi0LO http://bit.ly/9wJf5u"
    },
    {
      "tweet": "@whpatterson because of climate change, of course. KIDDINGGGGGGGG"
    },
    {
      "tweet": "More climate change duncery in action: http://tinyurl.com/yz7qyn6 (This extra-snowy winter brought to you by warm El Ni•_Ðo moisture, btw)"
    },
    {
      "tweet": "Could #Climate Change be contributing to this ?...#snOMG'#snopocalypse #snowmageddon #snOMGasm http://bit.ly/cSwqMw"
    },
    {
      "tweet": "Backing Down on Climate Change? http://bit.ly/dlz6t9"
    },
    {
      "tweet": "@StndrdBitch The whole northern hemisphere is colder this winter. Record snowfalls in China and Europe. Must be global warming."
    },
    {
      "tweet": "@devhammer unlesss global warming will stop the snow fall ;)"
    },
    {
      "tweet": "While I wait in DC for blizzard, a reminder that waves of weird, wet snowbombs are consistent with global warming. Video: http://j.mp/b4wuRv"
    },
    {
      "tweet": "RT @fdncenter: Global Philanthropy Forum starts today! View FC presentations on Global Health, Climate Change, more http://bit.ly/atqpmt"
    },
    {
      "tweet": "RT @AGUSciPolicy: AGU cosponsoring #climate change & human health briefing today on Capitol Hill. 11A-12:30P 210 House Cannon & 2P-3:30P 406 Senate Dirksen"
    },
    {
      "tweet": "AGU cosponsoring #climate change & human health briefing today on Capitol Hill. 11A-12:30P 210 House Cannon & 2P-3:30P 406 Senate Dirksen"
    },
    {
      "tweet": "Montanans Lobby Delegation on Climate Change http://ow.ly/16vqV4"
    },
    {
      "tweet": "Malthusian prophets. // Backing down on climate change - latimes.com http://shar.es/aN6jZ via @sharethis"
    },
    {
      "tweet": "Climate Change: The SEC Weighs In (Or Not) - Forbes.com http://bit.ly/9iRMQj"
    },
    {
      "tweet": "Utah legislative panel OKs resolution on climate-change | http://bit.ly/aijCP9"
    },
    {
      "tweet": "Dr. Michael Mann cleared of tweaking #climate change data; second inquiry on the way http://bit.ly/dz6vxD"
    },
    {
      "tweet": "Do you agree?  Lawmaker: Climate change just ruse to control population -http://bit.ly/cV92QG"
    },
    {
      "tweet": "best of luck! @alpSCentre: ...if our new \"Centre for Climate Change Adaptation Technologies alpS\" will be funded by Austrian Gov"
    },
    {
      "tweet": "India wants out of global warming saying cannot trust U.N http://ow.ly/14boa #tcot #teaparty #patriot #912 #mob"
    },
    {
      "tweet": "Jobs, jobs, jobs ' uh, climate change? - http://is.gd/bzjI0 - #TCOT"
    },
    {
      "tweet": "@LamontKingtv LOL I'm just making a funny. But YES global warming is REAL."
    },
    {
      "tweet": "Time to hunker down and \"Ride the storm out\". They are calling it historical. So much for global warming."
    },
    {
      "tweet": "How Is Denying New Info on Abstinence Any Different from Denying Climate Change? http://bit.ly/9HVgwX"
    },
    {
      "tweet": "Pachauri faces fresh call to resign: Source: Times of India - The embattled head of UN's climate change panel, R K... http://bit.ly/d0lOMN"
    },
    {
      "tweet": "ABC labels Pachauri \"leading global warming scientist\" http://bit.ly/drIRLy #climategate"
    },
    {
      "tweet": "Hot Air Video: O'Reilly vs. Jon Stewart on foreign policy, global warming, Palin: The exciting conclusion to last ... http://bit.ly/aBP34k"
    },
    {
      "tweet": "ABC labels Pachauri \"leading global warming scientist\" http://bit.ly/cZ56b8"
    },
    {
      "tweet": "US Government Finds that Pika is \"Not at Risk\" from Climate Change http://bit.ly/bMfu80 #WWFUS #WWF #climate"
    },
    {
      "tweet": "US Government Finds that Pika is \"Not at Risk\" from Climate Change: The U.S. Government will p... http://bit.ly/bMfu80 #climate #WWFUS #WWF"
    },
    {
      "tweet": "Too much change is not a good thing. Just ask the climate.\" - Michael Scott #fb"
    },
    {
      "tweet": "Too much change is not a good thing; ask the climate\" - Michael Scott"
    },
    {
      "tweet": "Too much change is not a good thing. Just ask the climate.\" - Michael Scott"
    },
    {
      "tweet": "Too much change is not a good thing.  Ask the climate."
    },
    {
      "tweet": "Pete: \"How do we combat them?\"  Tell them we've got global warming, financial crisis, energy crisis, terrorism ... they'll leave."
    },
    {
      "tweet": "Post: \"Climate Change \"Destabilizing Geopolitical Force\"\" http://tinyurl.com/yjlwvyw"
    },
    {
      "tweet": "CAP's Joe Romm blasts swimsuit models for traveling to beautiful, tropical places & not opining on climate change: http://bit.ly/b6S3kf"
    },
    {
      "tweet": "SFExaminerLocal: Federal agency denies protections for tiny pika: Climate change might be hurting some populations... http://bit.ly/anIpmw"
    },
    {
      "tweet": "Enlisting a drug discovery technique in the battle against global warming: Scientists in Texas are reporting that ... http://bit.ly/bm0k0u"
    },
    {
      "tweet": "Overall, pretty orderly in Target, considering the global warming headed our way...#dc"
    },
    {
      "tweet": "I wonder if the massive snowstorm about to shut down DC is the result of 'global warming'."
    },
    {
      "tweet": "Bolivian UN Ambassador Pablo Solon on the World Peoples' Summit on Climate Change and Rights of Mother Earth. http://bit.ly/8Z2KyL"
    },
    {
      "tweet": "DailyKos on the military leading on climate change. Why won't Republicans listen to military anymore? http://bit.ly/dAwoPy @operationfree"
    },
    {
      "tweet": "RT @BBC_WNA: Why climate change scepticism in Australia has grown from a fringe argument into a mainstream political movement. WNA @ 7pm"
    },
    {
      "tweet": "Global Warming Hysteria: India Threatens to Leave IPCC http://bit.ly/8ZQTo9"
    },
    {
      "tweet": "i'm the fuckin' rumplestiltzkin of climate change. doin' the impossible for last minute meetings, bitches."
    },
    {
      "tweet": "Why climate change scepticism in Australia has grown from a fringe argument into a mainstream political movement. WNA @ 7pm"
    },
    {
      "tweet": "Mann's hockey stick graph that shows humans are causing #climate change is STILL LEGIT after intense scrutiny. http://tinyurl.com/yf9gmoz"
    },
    {
      "tweet": "I don't think there's any Global Warming. Seriously, i think we're headed for an Ice Age."
    },
    {
      "tweet": "RT@rff_org New video: Experts talk climate change, extreme weather, and insuring the next Katrina. http://bit.ly/7Hz0WQ"
    },
    {
      "tweet": "RT @OperationFree Op Free and QDR in sync: climate change threatens national security.  http://bit.ly/aGVNOh"
    },
    {
      "tweet": "would like to thank the #snowpocalypse for ruining his birthday plans. Where is global warming when you need it?"
    },
    {
      "tweet": "RT @sciencedaily: Oceans reveal further impacts of climate change: The increasing acidity of the world's oceans -- and that acidity'... http://bit.ly/9YHS1c"
    },
    {
      "tweet": "Oceans reveal further impacts of climate change: The increasing acidity of the world's oceans -- and that acidity'... http://bit.ly/9YHS1c"
    },
    {
      "tweet": "Environment minister Jairam Ramesh says India supports Pachauri remaining chair of inter-govt climate change panel despite Himalayan blunder"
    },
    {
      "tweet": "RT @seeprogress: Posted 'Climate Change Is a Clear and Present Danger' to blip.tv: http://blip.tv/file/3176067"
    },
    {
      "tweet": "Global Warming Hysteria: IPCC Report Mistake About Elevation of the Netherlands http://bit.ly/aVEWkp"
    },
    {
      "tweet": "Be sure to check out our Top 40 \"Change Your Climate, Change Our World\" contest videos and leave your comments: http://ow.ly/13Riw"
    },
    {
      "tweet": "Michael Barone at @TownhallCom : How Climate-Change Fanatics Corrupted Science http://ow.ly/13PNw"
    },
    {
      "tweet": "YAY another #snowpocalypse is ON. THE. WAY. Dare I say it?... Thanks climate change. And again kicking myself for not bringing my xc skis."
    },
    {
      "tweet": "NOAA: Sea Grant awards mini-grants to help communities adapt to climate change. http://ow.ly/13WXw"
    },
    {
      "tweet": "RT @MilesGrant: I LOVE IT! #Climategate has gone nowhere so global warming deniers have started #Glaciergate! TEH TRUTH IS OUT THERE."
    },
    {
      "tweet": "RT @milesgrant: I LOVE IT! #Climategate has gone nowhere so global warming deniers have started #Glaciergate! TEH TRUTH IS OUT THERE."
    },
    {
      "tweet": "RT @OperationFree: Op Free and QDR in sync: climate change threatens national security. http://bit.ly/aGVNOh"
    },
    {
      "tweet": "Time Magazine has a Problem with the Truth about Global Warming: By Alan Caruba Bryan Walsh has a great career in... http://bit.ly/cLHTrV"
    },
    {
      "tweet": "U.N. climate change body blasted -- by Greenpeace? http://goo.gl/fb/EhOu"
    },
    {
      "tweet": "Enlisting a drug discovery technique in the battle against global warming http://bit.ly/byzkWv #climate"
    },
    {
      "tweet": "Invasive #plants are beneficiaries of #climate change in Thoreau's woods http://bit.ly/dtkeBP"
    },
    {
      "tweet": "Check out philanthropy info on climate change from the Foundation Center. http://bit.ly/cEfOiO #green @fdncenter"
    },
    {
      "tweet": "Invasive plants are beneficiaries of climate change in Thoreau's woods : http://eurekalert.org/e/3Jgg @PLoS #EurekAlert"
    },
    {
      "tweet": "What's Hot: Americans Support Strong Climate & Energy Policies: Today the Yale Project on Climate Change is releas... http://bit.ly/b1wHyX"
    },
    {
      "tweet": "U.N. climate change body blasted -- by Greenpeace?: http://bit.ly/ae8iu6"
    },
    {
      "tweet": "Misreading of polls is playing into the hands of #climate change deniers http://bit.ly/9WdznJ"
    },
    {
      "tweet": "U.N. climate change body blasted -- by Greenpeace? http://goo.gl/fb/2dvN"
    },
    {
      "tweet": "U.N. climate change body blasted -- by Greenpeace? http://goo.gl/fb/cTlF"
    },
    {
      "tweet": "RT @BillWilsonALG: Lindsay Graham getting public love from Obama. Someone needs to tell Graham that climate change is a proven lie. http://bit.ly/9w8RHw #tcot"
    },
    {
      "tweet": "#Wetlands & #prairies more sensitive to #climate change than previously thought http://bit.ly/9k84Qh #waterfowl #potholes"
    },
    {
      "tweet": "Preparing for the Global Warming event this weekend. (@ Costco) http://4sq.com/4qG5cH"
    },
    {
      "tweet": "Methane: The New #Climate Change Indicator? http://bit.ly/cLDQGZ (via @huffingtonpost) #green"
    },
    {
      "tweet": "RT @Heritage Climate Change Scientific Consensus Cloudy as Ever: We're a few days before a massive snowstorm white... http://bit.ly/ai34qi"
    },
    {
      "tweet": "new Foundry post: Climate Change Scientific Consensus Cloudy as Ever http://bit.ly/bXpVUf"
    },
    {
      "tweet": "Now exploring the use of the #iss for climate change exploration. Essentially, the ISS could be used as a lab in the future"
    },
    {
      "tweet": "Bin laden joins global warming doomsayers http://www.fumento.com/weblog/archives/2010/01/bin_laden_joins.html"
    },
    {
      "tweet": "Political talk shows discuss global warming. This is science (fiction)."
    },
    {
      "tweet": "India to set up own panel on climate change amid controversy over UN report on melting of Himalayan glaciers"
    },
    {
      "tweet": "Bin laden joins global warming doomsayers: http://www.fumento.com/weblog/archives/2010/01/bin_laden_joins.html"
    },
    {
      "tweet": ".@LuvableSole 12-20\" what?! effing global warming!  #weallgonnadie"
    },
    {
      "tweet": "So its in the 40s today and tomorrow they're calling for another blizzard. Yes, global warming is real! Lol"
    },
    {
      "tweet": "Ignoring previous  claims by experts, RedState attacks DHS for citing climate change as national  security threat http://dlvr.it/1KBf"
    },
    {
      "tweet": "The Pentagon, a liberal hotbed? \"[Climate change] may spark or exacerbate future conflicts.\" http://bit.ly/cTYV90 (AT)"
    },
    {
      "tweet": "Our team is mapping geopolitics of climate change this morning. Which countries/blocks do you think are most important? why? /RT @350"
    },
    {
      "tweet": "Global Warming Update http://ow.ly/16uUpb"
    },
    {
      "tweet": "RT @huffingtonpostz Canada's Wolverine Population Declines As Result Of Climate Change http://is.gd/7GSpU &lt;- and lack of more X-Men sequels"
    },
    {
      "tweet": "Expecting 1-2 more feet of global warming this weekend."
    },
    {
      "tweet": "Intel Threat Assessments on climate change: I compare '09 to '10. Surprisingly interesting: http://bit.ly/92KXhL"
    },
    {
      "tweet": "Post: \"Drug discovery technique could help in the battle against global warming\" http://tinyurl.com/yjxebsw"
    },
    {
      "tweet": "20\" of snow? Ok that's it, everyone go buy all the aerosols you can, go outside and start spraying. I'm now cheering on global warming."
    },
    {
      "tweet": "Economics and politics align for climate change says pena #RETECH \"energy efficiency in recession requires political will\" #energycollectiv"
    },
    {
      "tweet": "Man I love global warming. #fb"
    },
    {
      "tweet": "I LOVE IT! #Climategate has gone nowhere so global warming deniers have started #Glaciergate! TEH TRUTH IS OUT THERE."
    },
    {
      "tweet": "Former Sen. Warner Ties Climate Change To Security http://ow.ly/16uRDL"
    },
    {
      "tweet": "Coal Caucus At Odds with Mining Industry on Climate Change http://ow.ly/16uRDK"
    },
    {
      "tweet": "RT @climatedebate: UN official says climate change science robust despite errors in panel ...:  http://bit.ly/9cysf9"
    },
    {
      "tweet": "Vice President, Climate Change - World Wildlife Fund: We are seeking a Vice President, Climate Change to provide t... http://bit.ly/a18HvB"
    },
    {
      "tweet": "RT @mcmcvey: 3 approaches that will inspire others to take small steps toward transformative change http://bit.ly/9JEhsM #environment #p2 #climate"
    },
    {
      "tweet": "RT @ihatethemedia IHateTheMedia.com gets a message from global warming scientist Koko Warner | IHatetheMedia http://ow.ly/1o56oK #tcot"
    },
    {
      "tweet": "GLOBAL WARMING BUSTED by the President! - http://tinyurl.com/yjj5ovp"
    },
    {
      "tweet": "RT: @deensharp: RT @NadaNohra: EXECUTIVE: IS Climate change affecting real estate demand in Lebanon's Fakra? http://bit.ly/dz8F5G"
    },
    {
      "tweet": "Pachauri admits damage to UN climate change panel, The Australian http://bit.ly/dlcjXp"
    },
    {
      "tweet": "DHS: Fossil Fuels and Climate Change are  'National Threats' http://bit.ly/bTIImM"
    },
    {
      "tweet": "DHS: Fossil Fuels and Climate Change are 'National Threats' http://bit.ly/dlQgDY #TCOT #RS"
    },
    {
      "tweet": "Lovely . . . another foot of global warming coming our way this weekend . . . http://bit.ly/bb0XQo"
    },
    {
      "tweet": "3 approaches that will inspire others to take small steps toward transformative change http://bit.ly/9JEhsM #environment #p2 #climate"
    },
    {
      "tweet": "So, which global warming conference coincides with #snowcopalypse2?"
    },
    {
      "tweet": "Global Warming \"Gore Hockey Stick\" slammed by top British statistician http://bit.ly/dj1eqW"
    },
    {
      "tweet": "RT @terryacarter For those doubting global warming because of this snow. Vancouver having warmest Winter on record. It's called a trend line"
    },
    {
      "tweet": "RT @climatebiz: Will the Separation of Powers Kill Climate Change Action in the U.S.? http://bit.ly/cHB2XW"
    },
    {
      "tweet": "@thigpensrevenge it's the global warming gods jo. everything's all whacked up and around and inside out and upside down"
    },
    {
      "tweet": "RT @kombiz: pretty big.. Former Senator Warner ties Climate Change to security issues...  http://bit.ly/9a5S0n"
    },
    {
      "tweet": "RT @kombiz: pretty big.. Former Senator Warner ties Climate Change to security issues...  http://bit.ly/9a5S0n"
    },
    {
      "tweet": "RT @kombiz: pretty big.. Former Senator Warner ties Climate Change to security issues...  http://bit.ly/9a5S0n"
    },
    {
      "tweet": "RT @kombiz: pretty big.. Former Senator Warner ties Climate Change to security issues...  http://bit.ly/9a5S0n"
    },
    {
      "tweet": "RT @STXherry: RT @lizarddawg: Ok,so the global warming issue is becoming a heist-who's going 2 jail? #UN #gop  [Barney Frank--he'll like it]"
    },
    {
      "tweet": "California Sets Up Statewide Network to Monitor Global-Warming Gases - http://nyti.ms/cjz9Dg"
    },
    {
      "tweet": "For those of you doubting global warming because of this snow: Vancouver has had it's warmest Winter on record. It's called a trend line."
    },
    {
      "tweet": "For those of you doubting global warming because of this snow. Vancouver has had it's warmest Winter on record. It's called a trend line."
    },
    {
      "tweet": "pretty big.. Former Senator Warner ties Climate Change to security issues...  http://bit.ly/9a5S0n"
    },
    {
      "tweet": "RT @mmfa: Hill devotes article to baseless global warming attacks, Gore bashing: #p2 #noisemachine #climate http://ow.ly/166Bh"
    },
    {
      "tweet": "Libtard Dylan Ratigan explains why massive snow in DC is PROOF of Global Warming http://bit.ly/aLICxl #cbiz #teaparty #tcot #ocra #sgp #912"
    },
    {
      "tweet": "Libtard Dylan Ratigan explains why massive snow in DC is PROOF of Global Warming http://bit.ly/aLICxl #cbiz #teaparty #tcot #ocra #sgp #912"
    },
    {
      "tweet": "MSNBC Reporter Insists Record Snow Out East Is Due to Global Warming http://tinyurl.com/yjzytto #tcot #ocra"
    },
    {
      "tweet": "RT @ebertchicago: Many scientists believe the Snowpocalypse is more evidence of Climate Change, a.k.a. warming."
    },
    {
      "tweet": "RT @OTOOLEFAN I'm embarrassed to live in a country where elected officials cite a snowstorm as proof that global warming is a hoax."
    },
    {
      "tweet": "wow we had a blizzard & an earthquake. Take that you global warming non-believers!"
    },
    {
      "tweet": "What ISN'T evidence of glbl warmg? RT @ebertchicago: Many scientists believe the Snowpocalypse is more evidnce of Climate Change aka warming"
    },
    {
      "tweet": "RT @Uncucumbered: @sarahrosehurt ths Reps R getting 2 me 2day. They have decided that the snow is proof thr is no global warming, & gloat."
    },
    {
      "tweet": "ENOUGH with the \"what global warming?\" idiocy. It's neither funny nor original, and the bizarre snowfall is a SYMPTOM of climate change."
    },
    {
      "tweet": "New Federal Office for Global Warming http://bit.ly/aY8b0M"
    },
    {
      "tweet": "New Federal Office for Global Warming http://bit.ly/c2q54J"
    },
    {
      "tweet": "Yo Al Gore!!  Where's your Global Warming NOW!!!"
    },
    {
      "tweet": "Can't believe that people think excess snow makes global warming a non-reality... wow, read some books!"
    },
    {
      "tweet": "The Dangerous Allure of Global Warming Technofixes from Yale e360 http://e360.yale.edu/content/feature.msp?id=2224"
    },
    {
      "tweet": "@OneFineJay Today's entertainment has been watching hipsters from \"bike culture\" bitch about global warming forcing them onto public trans."
    },
    {
      "tweet": "Unreal: Top Yahoo Headline- 'Analysis: How Global Warming Makes Blizzards Worse' http://tinyurl.com/ykxbolc #tcot #ocra"
    },
    {
      "tweet": "@StopBeck Yeah, that \"what global warming?\" brilliance keeps getting repeated as though it's (a) amusing, (b) even slightly rational."
    },
    {
      "tweet": "RT @boliviaun: Guardian: Bolivia climate change talks to give poor a voice - Groups on frontline of global warming head to #cochabamba http://is.gd/bywgY"
    },
    {
      "tweet": "RT @sciam: How to Reform the Intergovernmental Panel on Climate Change http://bit.ly/ctvuIh [How about ending it?]"
    },
    {
      "tweet": "Time piece on climate change and severe storms in DC (yesterday's foot of snow in chicago - no big deal)  http://tinyurl.com/ycyevcz"
    },
    {
      "tweet": "Moron: Hannity: Snow Storms 'Seem To Contradict Al Gore's Hysterical Global Warming Theories' http://post.ly/NC2w"
    },
    {
      "tweet": "Just like Evolution, Climate Change is Real http://post.ly/NBw8"
    },
    {
      "tweet": "RT @Kalel194: Time magazine claims 'Global Warming Makes Blizzards Worse' http://tinyurl.com/yas7en6"
    },
    {
      "tweet": "Global warming will make world more 'fragrant' http://bit.ly/azMqYJ  #tcot #ocra"
    },
    {
      "tweet": "Global Warming My Ass!!!! Fuck You  AL Gore"
    },
    {
      "tweet": "RT @KamaainaInOC: RT@STXherry: RT@slkbrooke: Obama Wants To Make Global Warming Key Element In US Dfnse Strategy http://bit.ly/9jwD1Q #tcot"
    },
    {
      "tweet": "The Robin Hood tax: A tiny tax on bankers that would give billions to tackle poverty and climate change, here and ... http://bit.ly/9l3zPO"
    },
    {
      "tweet": "@ebertchicago re: that global warming article: indeed, bloggers can definitely make shit up! we didn't need a MSM article to tell us that"
    },
    {
      "tweet": "RT @boliviaun: Guardian: Bolivia climate change talks to give poor a voice - Groups on frontline of global warming head to #cochabamba http://is.gd/bywgY"
    },
    {
      "tweet": "http://bit.ly/auiZPZ -Politics, Science Collide Over Recent Snow Storms-Which is why we need to drop 'warming' word,use climate change."
    },
    {
      "tweet": "RT @solarfeeds: SEC To Provide Guidance on Companies Climate Change Disclosure http://tinyurl.com/yf344ge"
    },
    {
      "tweet": "@carney don't worry with Global warming you will be at the beach swimming in March"
    },
    {
      "tweet": "Understanding climate change: There's an ap for that http://bit.ly/cnFYZP"
    },
    {
      "tweet": "You saying he didn't? RT @DennyLonergan: Rt Gore won't give up on the \"global warming\" gig.  He still thinks he invented the internet"
    },
    {
      "tweet": "Dear people on both sides of the global warming debate: just because it's cold/hot/snowy/dry for \"x days\" doesn't prove/disprove anything."
    },
    {
      "tweet": "Crippled By Blizzard, DC Announces New Global Warming Agency by Phone http://bit.ly/adkfNW  #tcot #ocra"
    },
    {
      "tweet": "Morning everybody. Any of you still skeptical about the effects of global warming?? Or do you think the end is near? #earthquakeinillinois"
    },
    {
      "tweet": "Reading: Global Warming In One State at Power Line http://www.powerlineblog.com/archives/2010/02/025557.php"
    },
    {
      "tweet": "RT @Drudge_Report: TIME MAG:  How Global Warming Makes Blizzards Worse... http://drudge.tw/9oXiLZ = FAIL."
    },
    {
      "tweet": ".@BrazilTour 'political barriers, and lack of good data. Weather modification is not climate change: would like to see, back of envelope,"
    },
    {
      "tweet": "Where's Global Warming when you need it?   http://tweetphoto.com/10941301"
    },
    {
      "tweet": "U.S. Climate Change Portal Could Birth Entirely New Industries http://www.fastcompany.com/15437... Read more at http://bit.ly/9Z5WKf"
    },
    {
      "tweet": "SEC Follows Through with Guidance Regarding Disclosure of Climate Change Risks and Opportunitie... Read more at http://bit.ly/9HQoEQ"
    },
    {
      "tweet": "the snowpocalypse in the jerz is really subpar so far.  i finally believe in global warming."
    },
    {
      "tweet": "Dripping with irony: Senate EPW Committee hearing on \"Global Warming Impacts\" postponed because of snow http://2eyf.sl.pt #warmers #algore"
    },
    {
      "tweet": "I rated a YouTube video (5 out of 5 stars) -- Hitler was behind Global Warming - Climategate http://youtu.be/jGdbHW9Nlds?a"
    },
    {
      "tweet": "Check this video out -- Hitler was behind Global Warming - Climategate http://youtu.be/jGdbHW9Nlds #tweetcongress #michellemalkin #teaparty"
    },
    {
      "tweet": "DC Snowpocalypse Sends Conservative Media Into Climate Change Frenzy http://bit.ly/bgSSCM #News"
    },
    {
      "tweet": "RT @LucianT: 73% of young people today feel climate change is a greater threat to us than war and terrorism. #OYW"
    },
    {
      "tweet": "Global Warming Conference Postponed Due to Snow: http://tinyurl.com/yhgfvfq.  Men plan.  God laughs."
    },
    {
      "tweet": "Palin on global warming: 'bunch of snake oil science' http://newser.me/94tFLo"
    },
    {
      "tweet": "Snowmageddon Rearranges Climate Change Announcement http://bit.ly/biv3Yk &lt;- Love the irony."
    },
    {
      "tweet": "Belief in human role in global warming is down, but green purchasing is up. #sogb"
    },
    {
      "tweet": "What do the proponents of global warming consider normal climate change? global warming http://bit.ly/c6l90x"
    },
    {
      "tweet": "@CalebHowe So in other words, \"Global Climate Change\" has its benefits. I could live with this."
    },
    {
      "tweet": "Climate change: heading to cliff do you step on gas or act with prudence? Even if doubts, act with caution  #catholicsmg10"
    },
    {
      "tweet": "DoD's QDR says Climate change (may accelerate instability or conflict, etc.) and energy are two key security issues. http://u.nu/5x935"
    },
    {
      "tweet": "@FrostyJane No, but sometimes I think the #Mythbusters should do an episode on this whole global warming thing. CONFIRMED!"
    },
    {
      "tweet": "! crop production Global Warming: Melting Away! | The Doc Is In"
    },
    {
      "tweet": "Encounter Blog: If global warming doesn't work, how about a volcano from hell?: Al Gore has been seen muttering di... http://bit.ly/dAohzC"
    },
    {
      "tweet": "Climate change in U.S.: Trees in Colorado dying. Not enough water in Calif. Hurricane Katrina as act of man.    #catholicsmg10"
    },
    {
      "tweet": "Senator Graham (R) said couldn't get behind \"half assed\"climate change bill. Most Americans behind climate change action.  #catholicsmg10"
    },
    {
      "tweet": "Center on budget and policy priorities concerned about effect of climate change on low income pop. Just like Catholics!  #catholicsmg10"
    },
    {
      "tweet": "Guest Article #33: Chemicals management and climate change ...: Chemicals are an integral part of the daily life w... http://bit.ly/a31dl0"
    },
    {
      "tweet": "Attention knuckle-draggers:  The unusual snowfall in D.C. is BECAUSE of climate change, not in spite of it.  #morons"
    },
    {
      "tweet": "Way to my heart..mac cheeze..shrimp..and some good ol global warming lol"
    },
    {
      "tweet": "@MNNative  I don't know anymore, Global warming?...oops Climate Change!"
    },
    {
      "tweet": "Tough sledding for the global warming alarmists  The Star-Ledger global warming :) http://bit.ly/8ZSiAd"
    },
    {
      "tweet": "Another snowstorm heads for Washington--White House creating global warming office http://tinyurl.com/yj6w57j #tcot #green #politics #gop"
    },
    {
      "tweet": "Population Control and Climate Change (Part 3) http://bit.ly/cEnjXS #News"
    },
    {
      "tweet": "RT @cln007: Another snow day, 6 inches and still snowing, must be global warming"
    },
    {
      "tweet": "Population Control and Climate Change (Part 1) http://bit.ly/cf39ly #News"
    },
    {
      "tweet": "@dcagle I am unfollowing you because of that idiotic \"global warming\" cartoon. It's trite AND off-the-mark."
    },
    {
      "tweet": "Climate change spending in new Obama budget. (Reuters) http://tinyurl.com/ycw6dvq #Climatechange #Obamabudget"
    },
    {
      "tweet": "Yea snow @algore what happened to global warming lol"
    },
    {
      "tweet": "Darn global warming! You're doin' it wrong! Where is my extended summer vacation?!"
    },
    {
      "tweet": "RT @TeaPartyNJ: Global Warming - Wash gets record snow fall, another 20 in tomorrow.  God is clearly on the side of the cons // brilliant;)"
    },
    {
      "tweet": ":) global warming facts http://bit.ly/dccyht Facts About Crude Oil"
    },
    {
      "tweet": "Hey Al Gore- Could you sprinkle some Global Warming fairy dust on my car tonight? We're supposed to get 10-14 inches of snow by the morning."
    },
    {
      "tweet": "New Climate Agency!?  So spend more $ for something no one is in control of or can change.  Brilliant...dang it's cold outside."
    },
    {
      "tweet": "DC rally April 25 http://bit.ly/cwUzaA to set the stage for Senate unveiling of new #climate change bill http://nyti.ms/csrxPR"
    },
    {
      "tweet": "As Sea Level Rises So Does The Level Of Climate Change Denial http://shar.es/aLckR via @sharethis"
    },
    {
      "tweet": "Apparently the Obama Administration is proposing a Climate Service Agency to study climate change.  Another excellent use of taxpayer $."
    },
    {
      "tweet": "NOAA: Blizzard Rearranges Climate Change Announcement http://bit.ly/buv3mi #tcot #ocra"
    },
    {
      "tweet": "Global warming degrading Arctic faster than first thought http://u.nu/4gg25"
    },
    {
      "tweet": "This winter will likely do more to put a dagger in the heart of the global warming cause than all the right-wing Republicans put together."
    },
    {
      "tweet": "The group of people who would be most displeased with this winter are the \"global warming\" activists."
    },
    {
      "tweet": "RT @bakeanddestroy: Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up via @DougBenson"
    },
    {
      "tweet": "Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up via @DougBenson"
    },
    {
      "tweet": "RT @DougBenson: Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up"
    },
    {
      "tweet": "New Federal Climate Change Agency forming. http://abcnews.go.com/Technology/wireStory?id=9777038 #climatechange"
    },
    {
      "tweet": ":) http://bit.ly/auUPBL There is No Man Made Climate Crisis (Global Warming is a Hoax) global warming"
    },
    {
      "tweet": "India forms new climate change body http://bit.ly/dzWsBx  #tcot #ocra"
    },
    {
      "tweet": "New errors in IPCC climate change report http://bit.ly/ajJXBi #tcot #ocra"
    },
    {
      "tweet": "RT @iconicearth: Federal #Climate Change Agency Being Formed:  http://ow.ly/15aMD #p2 #eco #green"
    },
    {
      "tweet": "http://bit.ly/dmOGrA national ocean service New Federal Climate Change Agency Forming :O"
    },
    {
      "tweet": "fishery managers New Federal Climate Change Agency Forming  ."
    },
    {
      "tweet": "knife party presents 'Coalition of the Willing' - an animated film about an online war against global warming - http://bit.ly/cym79l"
    },
    {
      "tweet": "RT @MFFL8209: LOL RT @AlGoresBrain: My left foot is slightly smaller than my right.This is due to Global Warming. Take off your shoes. Look."
    },
    {
      "tweet": "Obama to form Fed. Climate Change Agency, http://tpm.ly/dbqhvr #p2"
    },
    {
      "tweet": "@Gemstars LOL i was just being silly 4 the sake of wknd on that global warming :d yeah u r RT;got ur point :P hope day treating u sweetly :)"
    },
    {
      "tweet": "RT @Earth_News: Guardian: Bolivia climate change talks to give poor a voice http://bit.ly/9WRxZk"
    },
    {
      "tweet": "Ways To Prevent Global Warming | Renewable Energy: http://bit.ly/cEFXtp via @addthis"
    },
    {
      "tweet": "YouTube  Thomas Sowell: Global Warming Manufactured by Intellectuals? :) http://bit.ly/9mJLOt causes of global warming"
    },
    {
      "tweet": "YouTube - Thomas Sowell: Global Warming Manufactured by Intellectuals? peter m robinson :O"
    },
    {
      "tweet": "The Great Global Warming Collapse http://bit.ly/drrEIN #tcot #greenpolice (H/T @gfulgoni)"
    },
    {
      "tweet": "Whoa! As the science scandals keep coming, the air has gone out of the climate-change movement  http://bit.ly/9zHTH5"
    },
    {
      "tweet": "RT @greenforyou Global Warming Makes Trees Grow Faster #green http://bit.ly/aTcHok"
    },
    {
      "tweet": "RT @Greenpeace Shrinking #water resources a major #climate change impact. Reuters #news: http://j.mp/bMktM6 #ecomonday"
    },
    {
      "tweet": ";P ways to stop global warming IPCC devil deserves its due http://bit.ly/aWcovy"
    },
    {
      "tweet": "Worse: what if we *should* be experiencing a crushing cold winter due to the solar min and we are *not* because of climate change?"
    },
    {
      "tweet": "What would a year without summer, due only to an intense solar minimum (i.e. 1816), imply for climate change efforts? Ppl won't get this."
    },
    {
      "tweet": "Economic and Social Consequences of Global Warming http://bit.ly/d0k9N6 association of british insurers ;O"
    },
    {
      "tweet": "ways to stop global warming ;P Are ALL of these ways to stop global warming? http://bit.ly/agw1in"
    },
    {
      "tweet": "The Audi green police will play right into all the crazy fears of the right wing global warming deniers."
    },
    {
      "tweet": "The great global warming collapse http://2ehp.sl.pt #warmers #algore"
    },
    {
      "tweet": "http://twitpic.com/11zs79 - Terra view of the near record show storm over Washington DC.  \"Global warming\"??  Ha Ha!!!"
    },
    {
      "tweet": "Cambio clim•_atico y poblaci•_Ñn.\" http://1x.org/?l=w684 #tcot #icot Global Warming skepticism finally made it to Latin America. #climatechange"
    },
    {
      "tweet": "Ocean Acidification: A Hidden Risk of Global Warming http://bit.ly/drr5Xm"
    },
    {
      "tweet": "global warming swindle IPCCs vice-chairman thinks its glaciers gaffe has increased its credibilty    http://bit.ly/aWa9SH"
    },
    {
      "tweet": "Yeah totally; so when snow melts; they can show evidence ;) no? @Gemstars: Will Global Warming Mean More Snow? _ http://bit.ly/ao6fql"
    },
    {
      "tweet": "Climate Compass | Blog of the Pew Center on Global Climate Change http://bit.ly/dpJ02T"
    },
    {
      "tweet": "RT @irun131: damn global warming...5 to 9 inches by tomorrow"
    },
    {
      "tweet": "Hmm, it's February, 30\" of snow in DC and the sun is shining on the grass in Chicago, global warming or karma?"
    },
    {
      "tweet": "Al Gore preached his climate change, he wanted us all 2 CARE, but after all was said & done, the evidence wasn't THERE #libpoems #tcot #sgp"
    },
    {
      "tweet": "Al Gore preached his climate change, he wanted us all 2 CARE, but after all was said & done, the evidence wasn't THERE #libpoems #tcot #sgp"
    },
    {
      "tweet": ". http://bit.ly/aqwt24 global warming facts World leaders back embattled Pachauri"
    },
    {
      "tweet": "RT @Drudge_Report: RFK, Jr. 15 months ago: Global warming means no snow or cold in DC... http://drudge.tw/bUA5f0"
    },
    {
      "tweet": "rt @bobcesca_go    Imagine if Al Gore had to jot down \"global warming\" on his hand, and was reading it during a televised Q&A"
    },
    {
      "tweet": "RT @Greenpeace Despite the sceptics, #climate change must remain a priority http://j.mp/9IpUIA"
    },
    {
      "tweet": "RT @croesus2009 Met Office blocked role of leading scientist in climate change row http://oohja.com/x6zfY Doesn't want truth out there #tcot"
    },
    {
      "tweet": "I mean Global Warming was hot but this Global Warming phase is cool!"
    },
    {
      "tweet": "In DC now it's freezing cold, its really bad & STORMING, I bet those folks could really use, some of Al Gore's Global WARMING #libpoem #tcot"
    },
    {
      "tweet": "In DC now it's freezing cold, its really bad & STORMING, I bet those folks could really use, some of Al Gore's Global WARMING #libpoem #tcot"
    },
    {
      "tweet": "In DC now it's freezing cold, its really bad & STORMING, I bet those folks could really use, some of Al Gore's Global WARMING #libtard #tcot"
    },
    {
      "tweet": "Al Gore preached his climate change, he wanted us all to CARE, but after all was said & done, the evidence wasn't THERE #libpoems #tcot #sgp"
    },
    {
      "tweet": "Al Gore preached his climate change, he wanted us all to CARE, but after all was said & done, the evidence wasn't THERE #libpoems #tcot #sgp"
    },
    {
      "tweet": "The great global warming collapse  http://www.theglobeandmail.com/news/opinions/the-great-global-warming-collapse/article1458206/"
    },
    {
      "tweet": "@LadyNilstria The economy, the climate change, the olympics...what else?"
    },
    {
      "tweet": "If Global Warming Is Real Then Why Is It Cold: editorial cartoonists are not scientists, in other words http://bit.ly/azDm9O"
    },
    {
      "tweet": "The great global warming collapse http://bit.ly/dzIKfA"
    },
    {
      "tweet": "@justkarl Aww, stop picking on #Juan! He had to WALK to the studio... It's that damned Global Warming, I tell ya!"
    },
    {
      "tweet": "Great pic of weather caused by Global Warming alarmists! RT @dnoxon: RT @RoseD1st1: http://twitpic.com/11s6eq - Hell yes!"
    },
    {
      "tweet": "Phony Climate Change Agenda Used In Australia to Force Expensive Home Inspections http://bit.ly/abUOY3"
    },
    {
      "tweet": "Phony Climate Change Agenda Used In Australia to Force Expensive Home Inspections http://bit.ly/aoo65o"
    },
    {
      "tweet": "The Great Unraveling: http://bit.ly/c3pJNv Professional global warming alarmists better think about looking for new jobs #tcot"
    },
    {
      "tweet": "National preach-in on global warming happens 2/12-14. Do I hear an amen!! http://bit.ly/aiej0a"
    },
    {
      "tweet": "@KOSMOSNET You just don't get it,if its cold its climate change,if its hot its global warming,you should review Al Gore's(NWO) movie,c'mon"
    },
    {
      "tweet": "climate summit http://bit.ly/73s8Su Bob Geldof Talks Climate Change In Copenhagen :O"
    },
    {
      "tweet": "http://bit.ly/9UYFbO ;P Global Warming Wont Melt Ignorance g spot"
    },
    {
      "tweet": "Utah state rep claims climate change is a 'conspiracy' aimed at population control. http://tinyurl.com/yhga94g"
    },
    {
      "tweet": "@Readthe10th Global warming's finest hour."
    },
    {
      "tweet": "30 inches of snow in DC winter everywhere no global warming yet the myth persists"
    },
    {
      "tweet": "http://bit.ly/biclGD -Snow piles up, paralyzing nation's capital-I luv climate change,there is very mild winter in Chicago so far. WTG..."
    },
    {
      "tweet": "@GovernAmerica You're bluffing. There is overwhelming consensus among climate scientists for the basic global warming narrative."
    },
    {
      "tweet": "Global Warming,  http://bit.ly/dviVg0 via @addthis DC conference canceled,\"lack of interest\". Do they get it?  #tcot #ocra"
    },
    {
      "tweet": "acs http://bit.ly/cldU6W Enlisting a drug discovery technique in the battle against global warming"
    },
    {
      "tweet": "India forms new climate change body - Telegraph http://goo.gl/QleT The move is a significant snub to both the IPCC #tcot"
    },
    {
      "tweet": ":P Time Magazine Has a Problem with the Truth about Global Warming  al gore global warming http://bit.ly/cvqlup"
    },
    {
      "tweet": ":)  Time Magazine Has a Problem with the Truth about Global Warming ... norwegian nobel committee"
    },
    {
      "tweet": "If Global Warming Is Real Then Why Is It Cold\", a small collection of editorial cartoons for your amusement #fb http://icio.us/1loesb"
    },
    {
      "tweet": "India forms new climate change body http://bit.ly/dzWsBx #climategate #warmers"
    },
    {
      "tweet": "County disputes global warming|The Otero County Commission had an involved discussion with citizens during its .. http://oohja.com/xb62t"
    },
    {
      "tweet": "Global warming??? ;P global warming http://bit.ly/czJOXE"
    },
    {
      "tweet": "@conoverbeth I think the report is valuable in terms of visible, observable climate change impacts in the US right now (but no invlvmnt)"
    },
    {
      "tweet": "Be interesting if a liberal Congressman in Washington DC does a speech about the evils of \"global warming\" in the House chamber."
    },
    {
      "tweet": ". global warming Study Says Arctic Ice Melt to Cost Global Economy $2.4 Trillion http://bit.ly/dxIaFb"
    },
    {
      "tweet": "Study Says Arctic Ice Melt to Cost Global Economy $2.4 Trillion intergovernmental panel on climate change"
    },
    {
      "tweet": "India Forms New Climate Change Body http://bit.ly/dfUZGC"
    },
    {
      "tweet": "India Forms New Climate Change Body http://bit.ly/9uBMQr"
    },
    {
      "tweet": "Facts brushed over by global warming fanatics al gore global warming http://bit.ly/dd479w !"
    },
    {
      "tweet": "Duh: Global warming full of uncertainties, admit climate scientists http://bit.ly/akuOZf #warmers"
    },
    {
      "tweet": "RT @StephenAtHome: I think we can all agree this Prius disaster proves once and for all that global warming doesn't exist"
    },
    {
      "tweet": "Should We Worry About Climate Change? Top Climate Scientist at UAH Says No|Dr. John Christy, the distinguished .. http://oohja.com/xb62s"
    },
    {
      "tweet": "Climate change - data manipulated for 20 years! http://bit.ly/aqHJEX #News"
    },
    {
      "tweet": "Backing Down on Climate Change? http://tinyurl.com/yhzua6n #tcot #ocra"
    },
    {
      "tweet": "Police question global warming 'sceptic' scientist over 'Climategate' email leak http://tinyurl.com/yhho9en #tcot #ocra"
    },
    {
      "tweet": "RT @NRDC_AF: You can demand clean energy. You can fight climate change. Join #thisisourmoment http://bit.ly/bwDUPU"
    },
    {
      "tweet": "RT @RIBAEducation RIBA Climate Change Lecture Series - FREE event - Sheffield Hallam University 24 March... http://bit.ly/cI29lp"
    },
    {
      "tweet": "http://bit.ly/d0zbcF global warming skeptics . ARCHIVES: Penn State scientist in hot seat over e-mails"
    },
    {
      "tweet": "ARCHIVES: Penn State scientist in hot seat over e-mails http://bit.ly/d0zbcF ;O global warming skeptics"
    },
    {
      "tweet": "RT @EarthAdapt #ClimateChange : Keep a cool head on climate change: Freezing winter weather ... http://bit.ly/cdQJuF ; ) EarthAdapt.com"
    },
    {
      "tweet": "DC: *FT Work for Greenpeace to STOP GLOBAL WARMING - $12-$13/hr*: Are you looking to make a change in the world?'... http://bit.ly/czSn4A"
    },
    {
      "tweet": "RT @greenforyou Just How Entertaining Can Climate Change Really Be? #green http://bit.ly/cK5lEh"
    },
    {
      "tweet": "global warming :P Federal agency denies protections for tiny pika"
    },
    {
      "tweet": ":) epa action Bill Blocking EPA Authority to Curb Global Warming Pollution an ..."
    },
    {
      "tweet": "DHS: Fossil Fuels and Climate Change are 'National Threats' - Vladimir's blog - RedState http://goo.gl/8sQ9 Includes great charts #tcot"
    },
    {
      "tweet": "good luck What can our families do to help stop global warming? ;)"
    },
    {
      "tweet": "Global warming data saying glaciers to melt by 2035 proven false http://bit.ly/d2wxJ5 #News"
    },
    {
      "tweet": ":) http://bit.ly/b2du4M stop global warming The Global Climate: Yes, Its Still Warming"
    },
    {
      "tweet": "Just as record cold shows global warming, think of a falling DOW & rising unemployment as sign of sound economy  (via @roaring_repub) #fb"
    },
    {
      "tweet": "School Administrator--you have this new influx of students who can change the climate of your school.  Be intentional with your culture."
    },
    {
      "tweet": "If the climate changes long enough, the culture will change; i.e. Harvard University....via Glen Schultz"
    },
    {
      "tweet": "India pulling out of UN global warming panel and forming their own body, yet their leading scientist is in charge of the UN IPCC. Huh?"
    },
    {
      "tweet": "RT @Drudge_Report India to 'pull out' of UN 'global warming' panel because it 'cannot rely' on UN. http://bit.ly/9SAHJI"
    },
    {
      "tweet": "to change is not a good thing. ask the climate.\" - michael scott #theoffice"
    },
    {
      "tweet": "The global warming arguement is the bane of my existence"
    },
    {
      "tweet": "Climategate: SEC Demands U.S. Firms Disclose Global Warming Risks to Shareholders http://bit.ly/aaBuue  #tcot #ocra"
    },
    {
      "tweet": "New blog post: Proposed Climate Change Legislation in Wisconsin Would Help Economy, Brighten State's Energy Future http://bit.ly/daSjDx"
    },
    {
      "tweet": "Burning 1 gallon of gas creates 22 lbs of carbon dioxide-a major contributor to global warming. Recycle with us http://interconrecycling.com"
    },
    {
      "tweet": "Is Global Warming (and other Liberal 'Sacred Cows') a Secular \tReligion?  http://post.ly/MAZT"
    },
    {
      "tweet": "How Climate-Change Fanatics Corrupted Science -- Michael Barone -- GOPUSA - http://shar.es/aN0vU"
    },
    {
      "tweet": "Climate Change: The Ruse Unravels http://bit.ly/drK1ha #tcot #ocra"
    },
    {
      "tweet": "Reuters-#Vancouver gets climate-change bronze: #Olympics http://link.reuters.com/jab77h"
    },
    {
      "tweet": "Reality Check: British inquiry finds NO distortion of climate change data. http://nyti.ms/crsQyJ #P2 #SCIENCE #TCOT"
    },
    {
      "tweet": "The CFC Ban: Global Warming's Pilot Episode http://bit.ly/cd4GxQ #tcot #ocra"
    },
    {
      "tweet": ";O From Maple Syrup to Snow Pack, Global Warming Happening Here and  stop global warming http://bit.ly/cidu7j"
    },
    {
      "tweet": "global warming for kids . Scenes from the Climate Wars http://bit.ly/ckiWNK"
    },
    {
      "tweet": ":P Scenes from the Climate Wars http://bit.ly/ckiWNK global warming for kids"
    },
    {
      "tweet": "http://bit.ly/a14V1W :) Debunking the Deniers of Global Warming, page 1 global warming swindle"
    },
    {
      "tweet": "New Ozone Standards could contribute to warming ;O global warming for kids http://bit.ly/b3dgCw"
    },
    {
      "tweet": "There Is No Clean Coal, But Obama Is Right about an Energy and Climate Bill   global warming solutions http://bit.ly/a0x8kw"
    },
    {
      "tweet": "http://bit.ly/a0x8kw ;) global warming solutions There Is No Clean Coal, But Obama Is Right about an Energy and Climate Bill"
    },
    {
      "tweet": "Climate Change and the Amazon Rainforest: http://bit.ly/cVzrVa via @RayBeckerman @mongabay"
    },
    {
      "tweet": "Im sick of global warming commercials and ones that compare us to europe"
    },
    {
      "tweet": "Photo: brooklynmutt: It's snowing so global warming is a myth! Anti-intellectualism at its finest. http://tumblr.com/x7q6bt19k"
    },
    {
      "tweet": "Powerful art installation called Swan Song by Estonian artist Jass Kaselaan.. about climate change deniers? http://shft.com/#/Read/470/"
    },
    {
      "tweet": "@OTOOLEFAN I've had this argument with people re: global warming, v. climate change. They don't use \"facts\" or \"logics\" like we do."
    },
    {
      "tweet": "Really love this App and website. RT @MulchTMC: Confused about climate change? There's an app for that. http://bit.ly/cEFQOF"
    },
    {
      "tweet": "Snowmaggedon' in Washington spurs climate change doubters: Mark Twain had it right: Climate is what we expect; we... http://bit.ly/bpnrnK"
    },
    {
      "tweet": "Snowmaggedon' in Washington spurs climate change doubters: Mark Twain had it right: Climate is what we expect; we... http://bit.ly/bpnrnK"
    },
    {
      "tweet": "SNOW is trending. Where is AL GORE, the expert on Global Warming been lately? Want 2 hear what HE has 2 say about record breaking snow fall!"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "Moonbattery: Global Warming Crisis Strikes Cambridge, Massachusetts: Red Scare Redux | Main | Two Pictures Worth T... http://bit.ly/cR5UeA"
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "RT @SeegerCycle Senate global warming meeting on hold from record snow fall #tcot // Yes, this disproves global warming(if ur illiterate)"
    },
    {
      "tweet": "Fox News has Al Gore's book on global warming in the snow during one of their 'straight news' shows.\" http://tumblr.com/xkw6bpar9"
    },
    {
      "tweet": "Video: MS-NBC's Brewer claims heavy snowfall proves global warming http://bit.ly/cJM3Xp"
    },
    {
      "tweet": "Rt @InvasiveNotes RT @OceanChampions: No, snow does not disprove global warming: http://bit.ly/aX13RH"
    },
    {
      "tweet": "The Reference Frame: Global warming causes snowstorm in D.C.  http://bit.ly/4Bvajw"
    },
    {
      "tweet": "RT @JulesBeaujolais: RT: @StopBeck: So #tcot, if snow during the winter disproves global warming, does a hot day during summer prove it? #p2"
    },
    {
      "tweet": "RT @JulesBeaujolais: RT: @StopBeck: So #tcot, if snow during the winter disproves global warming, does a hot day during summer prove it? #p2"
    },
    {
      "tweet": "RT: @StopBeck: So #tcot, if snow during the winter disproves global warming, does a hot day during summer prove it? #p2"
    },
    {
      "tweet": "Dear #tcot climate-change deniers, hv u ever heard of the Southern Hemisphere? It had the hottest temps on record."
    },
    {
      "tweet": "Climate-Change Skeptics Have Received Fat Checks From ExxonMobil - Newspaper: ExxonMobil Corp., the world's l... http://bit.ly/9lzQCy"
    },
    {
      "tweet": "Technology Mechanism for Climate Change still Stuck in the Lab http://su.pr/313v80"
    },
    {
      "tweet": "New federal office for global warming - Washington Times: Amid the growing fight over the accuracy of climate data... http://bit.ly/bbpngP"
    },
    {
      "tweet": "Big govt fears us & seeks to control us - economically thru higher taxes, & via social \"guilt\" mandates like child obesity or global warming"
    },
    {
      "tweet": "Climate-change legislation buried under record snowfall in capital - TheHill.com: http://bit.ly/acTaix via @addthis #climategate #capntrade"
    },
    {
      "tweet": "@STXherry @slkbrooke When Democrats regained House control, DHS priority switched to global warming as primary concern - Senseless."
    },
    {
      "tweet": "Power Elite enrich themselves by pushing \"Social Agendas\" on us - child obesity, global warming (Al Gore made over $100 mil todate). #tcot"
    },
    {
      "tweet": "east coast is probably wondering: what happened to global warming when it's blizzarding? answer: http://bit.ly/cBLW6t #climate #snowmageddon"
    },
    {
      "tweet": "Conservatives Use \"Snowmageddon\" to Mock Global Warming: CBS News (blog) Conservative congressmen are using Washin... http://bit.ly/cONEai"
    },
    {
      "tweet": "Just like Evolution, Climate Change is Real http://bit.ly/d6TazQ"
    },
    {
      "tweet": "Ppl can't think 4 themselves they'll cont 2 believe global warming, even believe snow storms prove it. Idiots are so malleable. #climategate"
    },
    {
      "tweet": "Can White Roofs Battle Global Warming? [via NYTimes] http://nyti.ms/d0ctQt #climatechange #architecture"
    },
    {
      "tweet": "RT @joeleisen: RT @annamunoz: RT @MulchTMC: Confused about climate change? There's an app for that. http://bit.ly/cEFQOF"
    },
    {
      "tweet": "People who claim these blizzards disprove climate change clearly didn't see \"The Day After Tomorrow\"."
    },
    {
      "tweet": "Global Warming In One State http://bit.ly/8XlcOy"
    },
    {
      "tweet": "If Ensler & Behar represent liberal women, that's such a sad pathetic stmt. Global warming fanatics who yack about their vaginas. Pathetic!"
    },
    {
      "tweet": "RT @christackett: RT @BoingBoing: Understanding climate change: There's an ap for that http://bit.ly/aQHXLK"
    },
    {
      "tweet": "RT @jeanniemcbride UN climate change panel based claims on student dissertation! (where was the outrage?) http://is.gd/7onu9 #tcot #media"
    },
    {
      "tweet": "For everyone who thinks #Snowmageddon disproves Global Warming, this is why ur wrong: http://bit.ly/9w0D0G"
    },
    {
      "tweet": "Junk science reported as fact, How stupid do they think we are? TIME MAG:  How Global Warming Makes Blizzards Worse. http://drudge.tw/9oXiLZ"
    },
    {
      "tweet": "Expect a Global Warming Exreme Weather Relief Tax or 'Snow Stimulus'... Storm Costs Taxpayers $100 Million A Day. http://drudge.tw/ajcNnc"
    },
    {
      "tweet": "Global warming theory snowing all over Baltimore and New England."
    },
    {
      "tweet": "RT @IvankaTrump Ironic tidbit of the day...Senate global warming hearing canceled due to the blizzard. http://bit.ly/9nzHsE"
    },
    {
      "tweet": "US Climate Envoy Says China Tepid on Climate Change Agreement http://bit.ly/aL5ooC"
    },
    {
      "tweet": "Global warming could make world more 'fragrant': London, Feb 10 (ANI): A major scientific review has indicated tha... http://bit.ly/ahP2MR"
    },
    {
      "tweet": "@aiki14 Global Warming? Earthquake Magnitude 4.3 quake jolts parts of N Illinois, 50 miles west-northwest of Chicago http://j.mp/bJmlyC"
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse http://bit.ly/d9iYjy"
    },
    {
      "tweet": "Another Snowstorm: What Happened to Global Warming?: By Bryan Walsh Wednesday, Feb. 10, 2010 Alex Brandon / AP As ... http://bit.ly/bXx9aV"
    },
    {
      "tweet": "Invasive plants are beneficiaries of climate change in Thoreau's woods (source: Science daily): Invasive plants co... http://bit.ly/cBNow5"
    },
    {
      "tweet": "2 quote Ackroyd's SNL anchor: Joy Behar, u ignorant slut! You BELIEVE in global warming and u mock Palin? http://bit.ly/9h6d3c Ur an idiot!"
    },
    {
      "tweet": "The Effect Of Organic Farming In Climate Change | Organic Earth http://bit.ly/a1rqhT"
    },
    {
      "tweet": "@greenbubble is EVERYTHING demented, sad, pathetic about liberalism. They think Vagina Monologues & global warming are important topics."
    },
    {
      "tweet": "These people R certifiably insane!There's no freaking global warming & you old cranks (Jane Fonda & the rest) are (cont) http://tl.gd/83nob"
    },
    {
      "tweet": "2011 budget commitment of improving energy efficiency to help curb greenhouse gas emissions that lead to climate change http://shar.es/aLI1F"
    },
    {
      "tweet": "White House proposes a new agency to study climate change. //Too many comments to post. http://bit.ly/c50Y4q #tcot"
    },
    {
      "tweet": "RT @gopevangelist: Global warming hysteria presumes 3 things: 1 it exists, 2 it is man-made, 3 it is bad. All 3 must be true. This winter may prove all 3 false"
    },
    {
      "tweet": "Global warming hysteria presumes 3 things: 1 it exists, 2 it is man-made, 3 it is bad. All 3 must be true. This winter may prove all 3 false"
    },
    {
      "tweet": "We're expecting another deluge of global warming tonight."
    },
    {
      "tweet": "Energy and Global Warming News for February 9: Ford to unveil ... http://bit.ly/c0CJ8w"
    },
    {
      "tweet": "Global Warming In One State: Like clockwork, whenever there is any kind of change in the natural landscape here in... http://bit.ly/bk1xyA"
    },
    {
      "tweet": "Los Angeles: Palin Calls Global Warming a 'Bunch of Snake Oil Science' http://bit.ly/c7ypFi"
    },
    {
      "tweet": "To me this winter is proof that God has a sense of humor at the expense of the climate change worshipers. http://myloc.me/3Fmvx"
    },
    {
      "tweet": "@ConservativeLA like newt but can't support anyone who gives any credence to global warming.  http://myloc.me/3FmlS"
    },
    {
      "tweet": "RT @iconicearth: Sea lions abandon Galapagos Islands for warm Peruvian waters http://twurl.nl/2q03kk #climate #change http://bit.ly/dc789z"
    },
    {
      "tweet": "Brilliant: 'Vagina Monologues' Creator Tells Palin to Look at 'Earthquakes and Tsunamis' for Global Warming Proof http://bit.ly/aZ0Mbu"
    },
    {
      "tweet": "Palin: Global Warming Just \"Snake Oil\" - CBS News: Former Alaska Governor Dismisses Climate Change Research at Cal... http://bit.ly/9RGdFx"
    },
    {
      "tweet": "@Jen_Niffer Wait it out, global warming is the trend...is what I hear anyway. ;-) #agw #environitwits. #ecofascism #tcot #snOMG"
    },
    {
      "tweet": "#tcot RT RT RT @Seorse http://twitpic.com/12btoz - AP photo from VA...Global-warming scientist on a lunch break"
    },
    {
      "tweet": "Democrat Party supports Prostitution, Abortion, Pot, Homosexuality, NAMBLA Global Warming ACORN ECIU ATHEIST  #tcot @Glenn Beck Fox News"
    },
    {
      "tweet": "The radical right is so homophobic that they're blaming global warming on the AIDS quilt.\" - Dennis Miller (B4 conversion)."
    },
    {
      "tweet": "RT @JoshBearjoolow RT @JamisonDague: I love that, since it's cold, climate change is a hoax. That's like s... http://bit.ly/cFz0N4 #Lottery"
    },
    {
      "tweet": "Climate change, not \"every day is going to be warmer no matter what, change\" #justsayin #AssHats #ScienceFail #p2 #tcot"
    },
    {
      "tweet": "Conservatives hot about global warming ballot measure. Your thoughts about California's AB32? Suspend it? http://bit.ly/AB32fight #fb"
    },
    {
      "tweet": "What do climate change deniers squawking about snow in Washington say about the stubborn absence of snow at Vancouver's Olympics venues?"
    },
    {
      "tweet": "Will Climate Change Make the World Smellier? http://ow.ly/16xy0Y"
    },
    {
      "tweet": "RT @CalebHowe: I've officially heard one too many \"so much for global warming\" #snomg cracks. We need to save or create some new jokes."
    },
    {
      "tweet": "Utah Legislature: House formally questions global warming: By Bob Bernick Jr. SALT LAKE CITY ' With most Democrats... http://bit.ly/9rjlSg"
    },
    {
      "tweet": "@algore fuck you man...I was your biggest supporter...then you let it rain like noahs ark...fuck your theory on global warming.."
    },
    {
      "tweet": "@i_r_squared And she can then extend it to global warming et al and say \"Ha, hologram-illusion-lalala\"?"
    },
    {
      "tweet": "Palin Dismisses Climate Change as \"Snake Oil Science\": http://wp.me/pqpBU-cF"
    },
    {
      "tweet": "Palin likens global warming studies to 'snake oil' http://bit.ly/dlB2ZQ"
    },
    {
      "tweet": "Dan Miller: #Climategate The SEC Takes On ' Climate Change http://bit.ly/99h2EU #tcot"
    },
    {
      "tweet": "RT @marknilsstrand Irony? Headline on Drudge - Senate global warming hearing cancelled... http://bit.ly/9iHiVZ #tcot #climategate"
    },
    {
      "tweet": "RT @LAist: Speaking at a CA Event today, Palin Calls Global Warming a 'Bunch of Snake Oil Science': http://bit.ly/cpZm87"
    },
    {
      "tweet": "RT @LAist: Speaking at a CA Event today, Palin Calls Global Warming a 'Bunch of Snake Oil Science': http://bit.ly/cpZm87"
    },
    {
      "tweet": "RT @mmfa Brain Freeze: Conservative media still using winter weather to attack global warming: http://bit.ly/9nKEcc #noisemachine #climate"
    },
    {
      "tweet": "This is climate change! #4wordsonobamashand"
    },
    {
      "tweet": "Solar energy can be used to combat climate change: Experts ... http://bit.ly/a8tw2k"
    },
    {
      "tweet": "RT @VerveSol: 30min version of \"Climate Change Recalculated\" http://ow.ly/15DmF watch the full version through ForaTv/LongNowFoundation"
    },
    {
      "tweet": "LAist| Palin Calls Global Warming a 'Bunch of Snake Oil Science':   During a campaign rally for Texas Gov. Rick Pe... http://bit.ly/caP1hW"
    },
    {
      "tweet": "Must be global warming! NYC public schools will be closed tomorrow, Wednesday, due to an expected winter snowstorm. /via @311NYC"
    },
    {
      "tweet": "Palin Calls Global Warming a 'Bunch of Snake Oil Science' http://dlvr.it/1bYm"
    },
    {
      "tweet": "Poll: Most Nevadans skeptical about global warming|LAS VEGAS ? A statewide poll shows 55 percent of Nevadans .. http://oohja.com/xb48p"
    },
    {
      "tweet": "BREAKING NEWS: The global warming is falling hard and fast Los Angeles, prompting evacuations in some areas."
    },
    {
      "tweet": "BREAKING NEWS: Between 7 and 14 inches of global warming to hit the east coast."
    },
    {
      "tweet": "Palin: A \"Bunch of snake oil science\" on global warming: Former Alaska Gov. Sarah Palin, who set up a task force t... http://bit.ly/97PmXU"
    },
    {
      "tweet": "RT @RepowerAmerica: #Climate change places future of the Winter #Olympics -- from the Sierras to the Alps -- in peril http://bit.ly/b8Mqcu"
    },
    {
      "tweet": "Climate Change: Global hoax? http://bte.tc/ayxx #RTW"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming   http://is.gd/7YADB biggovernment #tcot #climategate #carbontax #capntrade regulations"
    },
    {
      "tweet": "FOXNews.com - Trees Grow Faster Because of Global Warming: Forests could be growing faster now than they were 225 ... http://bit.ly/b9Dlxy"
    },
    {
      "tweet": "global warming science NOAA Climate Service: Obamas Answer to IPCC"
    },
    {
      "tweet": "The great global warming collapse. Truth comes out! CarlWattsArtist.com http://ping.fm/xZOxH"
    },
    {
      "tweet": "Palin Calls Global Warming Research 'Snake Oil Science' - Truthdig: 2010/02/09 - During her speech at a logging co... http://bit.ly/dDqBpL"
    },
    {
      "tweet": "Poll: Most Nevadans skeptical about global warming|LAS VEGAS ? A statewide poll shows 55 percent of Nevadans .. http://oohja.com/xb44Z"
    },
    {
      "tweet": "Wtf is up with all these storms??? Stoopid global climate change..."
    },
    {
      "tweet": "Blizzard Snarls US Climate Change \"Education\" http://easyuri.com/77004"
    },
    {
      "tweet": "Solar energy can be used to combat climate change: Experts http://bit.ly/b2RJ5V"
    },
    {
      "tweet": "RT @VFClimate Geoengineering inevitable? #energy http://vf.cx/ru6//Scientists playing God in false pretense of climate change.#climategate"
    },
    {
      "tweet": "Just had a near perfect shooting of an upcoming Greenpeace video about the global warming denyers.  Great work everyone!"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "@PersonalLiberty Global Warming Expert Cleared Of Some Allegations, New Investigation Launched  http://twurl.nl/mchcuw"
    },
    {
      "tweet": "http://ow.ly/15qN9 @biggovt @bigjournalism Tuesday Open Thread: Climate Change Edition"
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "MSNBC's Ratigan Blames 'Snowpocalypse' on Global Warming http://bit.ly/biy5fZ"
    },
    {
      "tweet": "#BeforeMetsCardsEnds global warming will be a thing of the past."
    },
    {
      "tweet": "Extremist climate change deniers blame Obama for snow RT @DarrellIssa As DC braces for more snow want to know the biggest Snowbama job going"
    },
    {
      "tweet": "effects of global warming Global Warming: Melting Away! | The Doc Is In   http://bit.ly/9e5vFk"
    },
    {
      "tweet": "Global Warming: Melting Away! | The Doc Is In crop production"
    },
    {
      "tweet": "@jingstri blame global warming. oops climate change. oops, global cooling. oops. stupid planet! I mean people. I mean nature. I mean' argh!!"
    },
    {
      "tweet": "MSNBC'ó»s Ratigan Blames 'Snowpocalypse' on Global Warming: Host claims heavier precipitation the result of climat... http://bit.ly/b6qjg9"
    },
    {
      "tweet": "The Earth Institute's James Hansen warns against global warming in his new book 'Storms of My Grandchildren. http://bit.ly/9SK1fh"
    },
    {
      "tweet": "Ultimate eBook Store : Shocking Information About Global Warming http://www.ultimateebookstore.com/product.php?products_id=977"
    },
    {
      "tweet": "Obama Creates NOAA Climate Service\"to help governments & businesses adapt to climate change\"It is as if Obama lives on another planet #tcot"
    },
    {
      "tweet": "sarah palin tells california crowd that global warming is \"snake oil science\"-"
    },
    {
      "tweet": "See, it is just a rumor. RT @zoeart: @Im4tun8 yuck.  What global warming."
    },
    {
      "tweet": "Poll: Most Nevadans Skeptical of Global Warming|A statewide poll shows 55 percent of Nevadans think global .. http://oohja.com/xb3GS"
    },
    {
      "tweet": "causes of global warming http://bit.ly/cl0a5P What do you think causes global warming?"
    },
    {
      "tweet": "Global Warming Law Under Attack: The Environment Report Opponents say the law should not be implemented until Cali... http://bit.ly/b4nmTF"
    },
    {
      "tweet": "Scientists: Global warming real despite harsh winter: By JEFF MONTGOMERY •_´ The News Journal •_´ February 9, 2010 Glo... http://bit.ly/bkQWyD"
    },
    {
      "tweet": "Report: Exxon Still Orchestrating Campaign to \"Undermine Public Acceptance of Global Warming\" http://bit.ly/amEhlJ"
    },
    {
      "tweet": "Climbing Out Of The Dark: Top 10 \"Global Warming\" Myths: So the IPCC is taking some real heat, and your everyday p... http://bit.ly/d5EDqh"
    },
    {
      "tweet": "Durango Herald News, Administration proposes new agency to study and report on global warming http://bit.ly/9Uyot5"
    },
    {
      "tweet": "Washington DC takes a Snow Day!!! Global Warming? I don't think so! http://bit.ly/9w0SZn #IPCC #climate #climategate #p2 #tlot #tcot #jokes"
    },
    {
      "tweet": "Another crooked scientist in global warming scam.http://tinyurl.com/yf89oyf Where's the US media? It's only a (cont) http://tl.gd/7t756"
    },
    {
      "tweet": "how one should really and sincerely try to stop the deadly effects of global warming. instant solutions ? http://bit.ly/bKV0Kp :P earth"
    },
    {
      "tweet": "When did \"Question the man\" become don't question anything the Man says? ie global warming, Obama's policies, media's distortion of truth"
    },
    {
      "tweet": "Poll: Most Nevadans Skeptical of Global Warming|A statewide poll shows 55 percent of Nevadans think global .. http://oohja.com/xb3DQ"
    },
    {
      "tweet": "Millions out to protest global warming... http://tweetphoto.com/12771109 - I found Al Gore! http://tweetphoto.com/12771190 #tcot"
    },
    {
      "tweet": "Seabury Blair Jr.: Cute Pikas Part of the Global Warming Fight: By Seabury Blair Jr. All I can say is: the US Fish... http://bit.ly/bBFvh8"
    },
    {
      "tweet": "Does the Bible say anything about global warming or kids ginormous sense of entitlement i... global warming for kids http://bit.ly/9y62L5 !"
    },
    {
      "tweet": "Obama administration proposes new climate change agency: http://ping.fm/Rr2kS"
    },
    {
      "tweet": "RT @geognews: [Geography: Physical]: NOAA Reorganizes With Eye Toward Assessing Effects of Climate Change http://nyti.ms/9CzhJw"
    },
    {
      "tweet": "NOAA: Blizzard Rearranges Climate Change Announcement - Washington Wire - WSJ http://ow.ly/15knW"
    },
    {
      "tweet": "RT @GreenEnergyPol: New federal office would study global warming - Washington Times http://bit.ly/a9v7vE"
    },
    {
      "tweet": "New errors in IPCC climate change report - at http://bit.ly/90dsWY"
    },
    {
      "tweet": "@joshgracin now they just say it's global climate change. They really don't have enough data to prove man made global warming"
    },
    {
      "tweet": "@TXCupCake Take a look at my notes for Cass Sunstein's \"Climate Change Justice\" http://bit.ly/38vdwD"
    },
    {
      "tweet": "Obama Wants New Agency to Study Climate Change http://ow.ly/15iGo Your tax dollars at work. WRITE.VOTE.RECALL"
    },
    {
      "tweet": "Global warming of course is a worry, it is a worry for the entire world,\" Rogge said. http://bit.ly/ceUovL"
    },
    {
      "tweet": "Cold and snow in the east screw up climate change report. Now ain't that too darned bad. Maybe it's the green freeze."
    },
    {
      "tweet": "Federal Climate Change Forecasting Agency Launched http://ow.ly/16wXAt"
    },
    {
      "tweet": "OUR VIEW: The newest blow to global warming theory: The rush to impose Draconian regulations to fight global warmi... http://bit.ly/aRcdDg"
    },
    {
      "tweet": "causes of global warming Go Green Toolshed ' Blog Archive ' Global Warming Myths and Facts . http://bit.ly/9U3wJH"
    },
    {
      "tweet": "evidences of global warming Go Green Toolshed ' Blog Archive ' Global Warming Myths and Facts"
    },
    {
      "tweet": "Spring begins almost two weeks earlier due to global warming, say scientists http://bit.ly/bphiIt"
    },
    {
      "tweet": "@Lisa_Michele Yeah, it's not like Global Warming is real or anything. How does one justify something FAKE?"
    },
    {
      "tweet": "A scolding President, China's Debt Bomb, Times are hard--unless you're a govt. worker & The Shame of Global Warming: http://bit.ly/2UR4Rk"
    },
    {
      "tweet": "Environmental Economics: Is climate change skepticism good for ...: First, a blurb from the Globe and Mail (which ... http://bit.ly/cO99yS"
    },
    {
      "tweet": "Environmental Economics: Is climate change skepticism good for ...: First, a blurb from the Globe and Mail (which ... http://bit.ly/cO99yS"
    },
    {
      "tweet": "Climate Change Alters Gray Whale Migration http://ow.ly/15gB8"
    },
    {
      "tweet": "Climate Change Alters Gray Whale Migration http://ow.ly/15g0o"
    },
    {
      "tweet": "Climate Change Alters Gray Whale Migration http://ow.ly/15gB7"
    },
    {
      "tweet": "Save the Ozone Layer, Give Global Warming a Boost?: Save the Ozone Layer, Give Global Warming a Boost? http://bit.ly/chc05a"
    },
    {
      "tweet": "There are '6 Americas' when it comes to climate change (Yale): bit.ly/bzvxxX"
    },
    {
      "tweet": "RT @dougbenson: Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up"
    },
    {
      "tweet": "RT @DougBenson: Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up"
    },
    {
      "tweet": "ways to stop global warming ;) Fundamental Ways That Could Stop Global Warming http://bit.ly/9pw68f"
    },
    {
      "tweet": "RT @ablorg Climate change causes wolverine decline across Canada: http://news.bbc.co.uk/earth/hi/earth_news/newsid_8494000/8494397.stm"
    },
    {
      "tweet": "RT @JaniceChase  Brilliant Moron Inadvertently Proposes Definitive Global Warming ... http://bit.ly/NTFig"
    },
    {
      "tweet": "RT @tweetmeme New federal climate change agency forming | D.C. Now | Los Angeles Times http://bit.ly/ctD67H"
    },
    {
      "tweet": "RT @dougbenson: Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up"
    },
    {
      "tweet": "We can no longer trust IPCC pseudo-scientific result on Global Warming. Isn't the time to do serious research on Sea Level&River Hydrology?"
    },
    {
      "tweet": "New errors found in IPCC Climate Change report - http://bit.ly/cxsLH4 - #globalwarminghoax #powerelite #tcot #tlot"
    },
    {
      "tweet": "Major effects of global warming tied to water, scientists say http://sbne.ws/r/3Oj1"
    },
    {
      "tweet": "Warming Up: Alternative Energy Source and Global Warming | My ... http://bit.ly/94xE9v"
    },
    {
      "tweet": "For all you Climate Change Deniers read this: http://blog.algore.com/2010/02/miliband_fights_back.html"
    },
    {
      "tweet": "Experts Scratching Their Heads Over SEC Global Warming Guidance ...: Experts Scratching Their Heads Over SEC Globa... http://bit.ly/aR4HHD"
    },
    {
      "tweet": "Robert F. Kennedy Jr., predicted 15 months ago there wouldn't be snow in DC again due to 'global warming': http://ow.ly/15bCC #tcot"
    },
    {
      "tweet": "India hiring their own scientists to study global warming. Can no longer trust IPCC with all their fraud/corruption/lies."
    },
    {
      "tweet": "US Senate CAP & TAX *** Bill to be unveiled April 26 *** Global Warming Swindle (Video's too)|Our work is cut out .. http://oohja.com/xb3v0"
    },
    {
      "tweet": "RT @CAUSECAST: If all farms in the US went organic, we could rest easy abt climate change. 10 things to know about organic farms: http://su.pr/2mUvox"
    },
    {
      "tweet": "RT @CAUSECAST: If all farms in the US went organic, we could rest easy abt climate change. 10 things to know about organic farms: http://su.pr/2mUvox"
    },
    {
      "tweet": "Obama 2 create a new agency dealing with \"climate change\" - is he serious?  http://bit.ly/cfGm4b  #powerelitescam #globalwarminghoax"
    },
    {
      "tweet": "Whaddayall think of a federal office of Climate Change: good move or not? http://bit.ly/cIfsar"
    },
    {
      "tweet": "POWER ELITE promote social themes - U.N., global warming, bird flu.  They despise the free mkt, seek wealth thru manipulation like AL GORE."
    },
    {
      "tweet": "White House proposes a new agency to study climate change. //Too many comments to post. http://bit.ly/c50Y4q #tcot"
    },
    {
      "tweet": "THR: Administration Proposes New Agency to Study Climate Change http://ow.ly/16wSfg"
    },
    {
      "tweet": "U.S. creating climate change agency -  http://bit.ly/9oXszi"
    },
    {
      "tweet": "THR: Administration Proposes New Agency to Study Climate Change http://ow.ly/16wQGU"
    },
    {
      "tweet": "I'm kind of surprised that we don't hear more from the big re-insurance co's re: climate change. They have LOTS to lose. MunichRE, Allianz.."
    },
    {
      "tweet": "Global warming likely cause of Australia's drought: Australia's long-standing drought likely arises from global wa... http://bit.ly/aaCLxA"
    },
    {
      "tweet": "New federal climate change agency forming http://bit.ly/dewETK [D.C. Now]"
    },
    {
      "tweet": "http://bit.ly/aMFngB ;P Climategate Scientist Contemplated Suicide global warming skeptics"
    },
    {
      "tweet": "New Federal Climate Change Agency Forming: The Obama administration is proposing a new agency to study and repor... http://bit.ly/ad495S"
    },
    {
      "tweet": "More pbls w Global Warming science re: Africa.  http://www.foxnews.com/scitech/2010/02/08/british-scientist-says-panel-losing-credibility/"
    },
    {
      "tweet": "Climate Service,' New Federal Climate Change Agency, Is Forming http://dlvr.it/1WMh"
    },
    {
      "tweet": "Growing Pentagon Focus on Energy & Climate Change in recent Quadrennial Defense Review http://bit.ly/aoKbHE"
    },
    {
      "tweet": "Maaaan. All this global warming stuff just got exposed as a scandal. Hope we get some real science on the climate change that's happening."
    },
    {
      "tweet": "Global warming to hit rice production: Report | Opalesque ...: Commodities Briefing - free daily updates covering ... http://bit.ly/biAC01"
    },
    {
      "tweet": "RT @oceanplastics: Algae for controlling global warming - Current News & Events ... http://bit.ly/ax6lEp"
    },
    {
      "tweet": "US Senate CAP & TAX *** Bill to be unveiled April 26 *** Global Warming Swindle (Video's too)|Our work is cut out .. http://oohja.com/xb3rj"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC... http://ow.ly/16wJZb"
    },
    {
      "tweet": "Algae for controlling global warming - Current News & Events ... http://bit.ly/ax6lEp"
    },
    {
      "tweet": "Gawker: Scientist's Sexxxy Novel Proves 'Climate Change' Is for Sex Pervs [Books]: Rajendra Pachauri, the head of ... http://bit.ly/dtwQfq"
    },
    {
      "tweet": "Addressing Global Warming: Retrain Coal Workers for Green Jobs ... http://bit.ly/cW1KTV"
    },
    {
      "tweet": "Forests Are Growing Faster,Climate Change Appears to Be Driving Accelerated Growth (Science Daily) http://bit.ly/d1EqlN @InvasiveNotes"
    },
    {
      "tweet": "Obama's base cares about their religion of global warming and Marxism. The myth of healthcare. The myth of peace without having to be strong"
    },
    {
      "tweet": "Global warming roulette: From Monday's Globe and Mail Published on Monday, Feb. 08, 2010 12:00AM EST Last updated ... http://bit.ly/aMez4q"
    },
    {
      "tweet": "Global warming may become global cooling this century http://bit.ly/cU8D4F"
    },
    {
      "tweet": "UN Climate Change Plan to Shift Industy, wealth globally? :) environmental jobs http://bit.ly/a6Nbik"
    },
    {
      "tweet": "Global Warming: Ozone Hole Healing http://bit.ly/aXpdcl"
    },
    {
      "tweet": "My daughter says Global Warming Is NOT Cool!  http://twitgoo.com/ok5ya"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "Water at core of climate change impacts-UN experts http://bit.ly/blGAF7"
    },
    {
      "tweet": "Media Ignores Storm Over Climate Change http://bit.ly/bdASFT"
    },
    {
      "tweet": "Weathermen say no global warming: by Wayne Niedurhuth Since global warming continues to be a hot topic, an update ... http://bit.ly/aegPjv"
    },
    {
      "tweet": "(Google News) Empowering a Climate Change Movement, Part 3: Instead of Cursing the Dark ... - Huffington Post (blog... http://ow.ly/16wAnO"
    },
    {
      "tweet": "Global Warming Makes Trees Grow Faster http://bit.ly/cyV4U0"
    },
    {
      "tweet": "RT @greenforyou: Global Warming Makes Trees Grow Faster #green http://bit.ly/aTcHok"
    },
    {
      "tweet": "RT @PatrickStrother: The great global warming collapse. From science to advocacy.  http://ow.ly/14T4W"
    },
    {
      "tweet": "RT @TM_Climate: Rudd versus Abbott on climate change: what's the difference? ' Crikey http://retwt.me/1LVuR #green #climate"
    },
    {
      "tweet": "RT @Flipbooks |@UN Climate Science Panel INCORRECTLY Linked Global Warming to Rise in Natural Disasters (Telegraph) http://bit.ly/8FDCTW"
    },
    {
      "tweet": "More Exaggerated Climate Change Claims Causing Backlash as More Are Debunked - http://bit.ly/cXV3Ql"
    },
    {
      "tweet": "#global warming Calif program delayed by jobs initiative.  Don't be misled.  http://www.intlawctr.com/html/body_news_feed.html#LATJBrown"
    },
    {
      "tweet": "@thegeo He just invented the internet; he's already moved on to global warming :-)"
    },
    {
      "tweet": "The fear and farce of climate-change science: One embattled scientist admits suicidal thoughts as another pens sex... http://bit.ly/a8yhBU"
    },
    {
      "tweet": ":)  Are ALL of these ways to stop global warming? carpool"
    },
    {
      "tweet": ";)  Global Warming May Cook Sea Turtle Eggs james cook university"
    },
    {
      "tweet": "Inuit must adapt to climate change: study: James Ford has spent eight years researching the effects of climate c... http://bit.ly/bYEa9l"
    },
    {
      "tweet": "Global warming goof of the day ' Don Surber: Science Daily: 'ScienceDaily (Feb. 7, 2010) ' Glaciologists at the La... http://bit.ly/bHTo0K"
    },
    {
      "tweet": "Addressing Global Warming: Retrain Coal Workers for Green Jobs: Create carrots for coal states -- specifically, gr... http://bit.ly/c9fUuL"
    },
    {
      "tweet": "20th Century discovery of ammonia = chemical fertilizer=abundant food=population explosion=create nitrogen accumulation= global warming."
    },
    {
      "tweet": "Addressing Global Warming: Retrain Coal Workers for Green Jobs: A perfect storm of factors are massing against con... http://bit.ly/9DohKw"
    },
    {
      "tweet": "@Emperor_Bob In this book he tears the whole global warming theory apart piece by piece. The debate is NOT closed.. just some minds"
    },
    {
      "tweet": "Grrr! Flipping channels, I landed on Sundance Chnnl & some global warming hysteric \"documentary\" w/ IPCC dude yapping. Musta been a comedy."
    },
    {
      "tweet": "Public loses faith in climate change science after leaked emails scandal http://ow.ly/16wpla"
    },
    {
      "tweet": "What happened to Global Warming? http://ow.ly/14Ppn"
    },
    {
      "tweet": "@Emperor_Bob Why, btw dio you now call it climate change? CO2 causes cooling also? Wow we better all hold our breath more"
    },
    {
      "tweet": "@Emperor_Bob Global Warming is only undeniable to the far Left who are not interested in pesky facts. The science is just not there."
    },
    {
      "tweet": "C-Questor Carbon Markets and Climate Change News Letter ... http://bit.ly/9CqRQJ"
    },
    {
      "tweet": "C-Questor Carbon Markets and Climate Change News Letter ... http://bit.ly/9CqRQJ"
    },
    {
      "tweet": "RT @OrionGrassroots: Small but growing twttr list of folks heading 2 #indigenous ppl's Conference on #Climate Change http://bit.ly/ala0oY"
    },
    {
      "tweet": "How much has IPCC's reliance on 'grey literature' to advocate global warming cost business? Has policy uncertainty delayed economic growth?"
    },
    {
      "tweet": "I have never known LA to be so cold until Global Warming took over"
    },
    {
      "tweet": "Never Yet Melted ' Global Warming Eliminates Snow in Virginia: In Virginia, the weather also has changed dramatica... http://bit.ly/9nfO8k"
    },
    {
      "tweet": "China US cold war? Taiwan, Tibet, internet freedom, global warming, trade imbalances, debt #gold via mineweb http://tinyurl.com/yhrmzd7"
    },
    {
      "tweet": "Nigeria, Climate Change And A Renewable Energy Master Plan | Gov ... http://bit.ly/cuOASY"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC | Washington Examiner  http://shar.es/aNNS7 via @sharethis"
    },
    {
      "tweet": "Poll: Believers in man-made global warming rapidly dwindling: True/Slant What a great story. The Warmers are going... http://bit.ly/cGHOiP"
    },
    {
      "tweet": "Snow? Global Warming? Natural Laws & Climate Change: Sun Enters New...: LAW PUNDIT Sunday, February 07, 2010 2/07/... http://bit.ly/95tWNA"
    },
    {
      "tweet": "global warming skeptics :P http://bit.ly/aEAwKV Because 'man-made global warming' skeptics in Alaska rock and"
    },
    {
      "tweet": "Your in Orlando right? Florida freeze due to global warming! http://tweetphoto.com/10688502"
    },
    {
      "tweet": "http://ow.ly/14MqV  RFK, Jr. 15 months ago: Global warming means no snow or cold in DC |"
    },
    {
      "tweet": "Water at core of climate change impacts: experts: OSLO (Reuters) - The main impact of climate change will be on wa... http://bit.ly/dbUrHS"
    },
    {
      "tweet": "The great global warming collapse  http://bit.ly/cNkFt3 Movement dead? Proper skepticism healthy. [Who is accountable for economic damage?]"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC: Robert F. Kennedy Jr., who flies around on pri... http://bit.ly/cwNSrc"
    },
    {
      "tweet": "Glacier Responses to Climate Change are Complex, as are the Impacts: Glaciers are quite sensitive to climate cha... http://bit.ly/91dsZf"
    },
    {
      "tweet": "Marine reserves and climate change: study finds no-take reserves ... http://bit.ly/ajQNK0"
    },
    {
      "tweet": "Japanese gov't asks Toyota to investigate complaints against cars http://bit.ly/bYgNeG :O ways to stop global warming"
    },
    {
      "tweet": "Is It Over for Global Warming Hysteria? http://bit.ly/9XFJUT"
    },
    {
      "tweet": "The great global warming collapse http://bit.ly/bOwNDG"
    },
    {
      "tweet": "Climate change, pollution are suspects in rusty blackbirds' plummeting numbers http://bit.ly/93XIMC"
    },
    {
      "tweet": "CLIMATE CHANGE-BOLIVIA: In Defence of Pachamama: LA PAZ, Apr 16 (IPS) - Through their ancestral knowledge and trad... http://bit.ly/bQ0Zhj"
    },
    {
      "tweet": "Chicago Ray Report: The great global warming collapse: A 44 year old chicagoans take on todays top news stories an... http://bit.ly/bEFJ9x"
    },
    {
      "tweet": "Global warming good for trees, bad for ducks: studies http://bit.ly/cvhBck"
    },
    {
      "tweet": "India seeks clarity on equity of climate change flow: http://ping.fm/IU6OH"
    },
    {
      "tweet": "Global warming is man-made, top UN official reaffirms: LONDON, Feb 7 (APP)- The UK-based Association of Pakistan L... http://bit.ly/d0rdMY"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "snow -snow go away , global warming people are trying to stay."
    },
    {
      "tweet": "Olympic Organizers desperate for climate change... http://ow.ly/16wbS7"
    },
    {
      "tweet": "California Network to Monitor Global-Warming Emissions -- http://goo.gl/kJFO"
    },
    {
      "tweet": "As the science scandals keep coming, the air has gone out of the climate-change movement\"  http://tinyurl.com/yf34stp"
    },
    {
      "tweet": "Poll: Nevada skeptical of global warming|Nevadans are cool to the idea the planet is getting warmer and to a .. http://oohja.com/xb1Ea"
    },
    {
      "tweet": "Well researched article on Global Warming /climate change hoax. http://tinyurl.com/yf34stp"
    },
    {
      "tweet": "India is first country to probe climate change hoax. Wake up America. Al Gore and his greenies are a fraud."
    },
    {
      "tweet": "Robin McKie v Benny Peiser - Has the science of climate change been undermined by email leaks and the IPCC's glacie... http://ow.ly/16w9Kb"
    },
    {
      "tweet": "Doesn't believe in evolution, denies climate change, thinks Africa's a country, Palin for president!"
    },
    {
      "tweet": "Is global warming a plot? Mm, nah: The Kanab Republican thinks there's a big fat conspiracy -- by scientists, the ... http://bit.ly/dry4Xb"
    },
    {
      "tweet": "The great global warming collapse - The Globe and Mail http://ow.ly/14DHG"
    },
    {
      "tweet": "Dumbass global warming believer whining abt big oil funding deniers. Agw alarmists R funded by big oil & more http://tinyurl.com/yctegy8"
    },
    {
      "tweet": "Olympic Organizers desperate for climate change http://bit.ly/ddYNn6 #tcot"
    },
    {
      "tweet": "@Emperor_Bob So do I have it right? Global Warming caused by CO2 causes hothouse gases to cause freezing?? Got it!!"
    },
    {
      "tweet": "Obama: Environmental Genius? | Avoid-Global-Warming.com: avoid-global-warming.com - Stop Global Warming! Everythin... http://bit.ly/9BTud0"
    },
    {
      "tweet": "Poll: Nevada skeptical of global warming|Nevadans are cool to the idea the planet is getting warmer and to a .. http://oohja.com/xb1zV"
    },
    {
      "tweet": "Obama: Environmental Genius? | Avoid-Global-Warming.com: avoid-global-warming.com - Stop Global Warming! Everythin... http://bit.ly/9BTud0"
    },
    {
      "tweet": "This common sense observation alone discredits the global warming hoax proponents. http://bit.ly/9JoZBA"
    },
    {
      "tweet": "I thought of killing myself, says climate scandal professor http://bit.ly/ddpGQL GLOBAL WARMING IS A FRAUD 4 WORLD GOVERNMENT! #NWO"
    },
    {
      "tweet": "Education: The Global Warming Challenge | One Utah: Utah's Favorite Public Square for Loud Political Debate. One ... http://bit.ly/9u09Bs"
    },
    {
      "tweet": "Matt Ridley on climategate in Spectator: http://www.spectator.co.uk/print/politics/all/5749853/the-global-warming-guerrillas.thtml"
    },
    {
      "tweet": "Go Green Toolshed ' Blog Archive ' NASA Global Warming Alarmist ... compliment"
    },
    {
      "tweet": "#NewsVine The great global warming collapse http://bit.ly/c0Hf7d #How2GetRich"
    },
    {
      "tweet": "Q:How Do You Feel About Global Warming ?  A:Um Lmfaooooo!! How Do You Feel ? http://formspring.me/omiyankab/q/131109345"
    },
    {
      "tweet": "Legislature: global warming is a conspiracy: Examiner.com AP Photo State Representative Mike Noel-R, Kanab, believ... http://bit.ly/dvCD9W"
    },
    {
      "tweet": "Climate change?: RT @CNNInternatDesk 'Snowmageddon' slams WA -Close to 20 inches of snow piled up...cutting power to hundreds of thousands."
    },
    {
      "tweet": "Stossel Show - Global Warming & The Free Market vs. Gov Subsidy http://bit.ly/bJ4nh5 #climate #green #Libertarian #nuclear #p2 #tlot"
    },
    {
      "tweet": "Democratic Party supports Prostitution, Abortion, Pot, Homosexuality, NAMBLA  Global Warming ACORN ECIU stopbeck #tcot @Glenn Beck Fox News"
    },
    {
      "tweet": "Stossel Show - Global Warming! The high cost to the worlds poor http://bit.ly/dtUrLg #climate #climategate #libertarian #tlot #tcot #p2"
    },
    {
      "tweet": "We know what Global Warming is, but whats \\\"Global Dimming\\\"?  predecessors ."
    },
    {
      "tweet": "The great global warming collapse http://tgam.ca/Hrh (via @globeandmail) Al Gore and the rest of the \"chicken little\" crowd need punishment!"
    },
    {
      "tweet": ";P Global Warming Wont Melt Ignorance http://bit.ly/9UYFbO g spot"
    },
    {
      "tweet": "Where Did We Go Wrong on 'Green Jobs'? | The Global Warming Statistics http://bit.ly/bOs2yQ"
    },
    {
      "tweet": "Act the F*ck Now: Best Global Warming Video Ever http://post.ly/MW4A"
    },
    {
      "tweet": "Media cools on global warming: By News on the Net Saturday, February 6, 2010 LAST weekend looks likely to have bee... http://bit.ly/9d2s2H"
    },
    {
      "tweet": "Claiming Climate change is man made or it will effect our lives if we dont change our ways IS COMPLETE BULLSHIT! TREE HUGGERS HARM US MORE!"
    },
    {
      "tweet": "http://bit.ly/bgaWIH An Honest IPCC Scientist Warns His Colleagues: Dont Dismiss ClimateGate ways to stop global warming :P"
    },
    {
      "tweet": "RT @BarackBorat: Can someone call the Al Gore and ask him for make turn the Global Warming back on?"
    },
    {
      "tweet": "New scientific consensus: Hot air from global warming alarmists is melting Himalayan glaciers! Journalists are free to cite this tweet.#hhrs"
    },
    {
      "tweet": "Yeah...global warming my ass..."
    },
    {
      "tweet": "At Behest Of King Coal And Big Ag, Ike Skelton And Collin Peterson Try To Outlaw Global Warming http://bit.ly/9EvcAf"
    },
    {
      "tweet": "@LaurenConrad Oh.  Well, there goes the global warming theory LOL"
    },
    {
      "tweet": "@edenjames sign of the apocolypse: winter. Evidence against global warming: winter. Brr boo brrr"
    },
    {
      "tweet": "ENVIRONMENTAL REPUBLICAN: Global Warming Belief Melting Away: The Populus poll of 1001 adults found 25% did not th... http://bit.ly/9Vi0SM"
    },
    {
      "tweet": "Top UN environment official defends conclusions of landmark climate change report: http://ping.fm/fkOj4"
    },
    {
      "tweet": "Varanasi holds fire ritual to prevent global warming  http://bit.ly/3SlEzl"
    },
    {
      "tweet": "Family Water Alliance founder cold on global warming|The woman who started one of the most powerful grassroots .. http://oohja.com/xaZUS"
    },
    {
      "tweet": "@1HotItalian First it was global cooling, then it was global warming, now it's climate change (AKA \"weather\"). Simple! :) #tcot"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "I guess we need to stop saying \"global warming\" & replace it w/ \"climate crisis\" for Repub's sake. gw just short circuits their brain."
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "The great global warming collapse: Globe and Mail In 2007, the most comprehensive report to date on global warming... http://bit.ly/cYyYVx"
    },
    {
      "tweet": "Effort underway to suspend California's global-warming law http://bit.ly/8YfJWz"
    },
    {
      "tweet": "allAfrica.com: Africa And Global Warming: allAfrica: African news and information for a global audience. http://bit.ly/cdJjX8"
    },
    {
      "tweet": "Enlisting a drug discovery technique in the battle against global warming :) acs http://bit.ly/cldU6W"
    },
    {
      "tweet": "Cut Global Warming ' Blog Archive ' Climategate: global warming ...: Phil Jones will be vindicated by 'rock solid'... http://bit.ly/culHfn"
    },
    {
      "tweet": "Painting your roofs white could help reduce effects of global warming  phenomenon ;P"
    },
    {
      "tweet": "Family Water Alliance founder cold on global warming|The woman who started one of the most powerful grassroots .. http://oohja.com/xaZQQ"
    },
    {
      "tweet": "California's global warming law halted to focus on jobs: http://www.latimes.com/news/local/la-me-ballot-warming6-2010feb06,0,5959308.story"
    },
    {
      "tweet": "Effort underway to suspend California's global-warming law http://bit.ly/9sIIhR"
    },
    {
      "tweet": "Effort underway to suspend California's global-warming law http://bit.ly/cLRoXg"
    },
    {
      "tweet": "RT @Flipbooks The British public has become increasingly sceptical about #climate change (BBC) http://bit.ly/cWReJl #News"
    },
    {
      "tweet": "Los Angeles: Effort underway to suspend California's global-warming law http://bit.ly/dsLmiF"
    },
    {
      "tweet": "RT @lanewsnow: Effort underway to suspend California's global-warming law http://dlvr.it/1Q3x"
    },
    {
      "tweet": "Effort underway to suspend California's global-warming law http://dlvr.it/1Q3x"
    },
    {
      "tweet": "GayPatriot ' Shitload of Global Warming Set to Cripple Northeast USA: SPECIAL WEATHER STATEMENT NATIONAL WEATHER S... http://bit.ly/9D1mav"
    },
    {
      "tweet": "How our belief in climate change is draining away as number of doubters rises by 10% in three months http://bit.ly/aEZOsx"
    },
    {
      "tweet": "Movement to suspend California's global-warming law gathers steam http://bit.ly/an5naD"
    },
    {
      "tweet": "RT @ClimaTweets: [World Changing] 29 Graphs of Climate Change Science in One Place:  a one stop shop of... http://bit.ly/913ZwI"
    },
    {
      "tweet": "Movement to suspend California's global-warming law gathers steam: By MARGOT ROOSEVELT | Los Angeles Times •_´ Publi... http://bit.ly/ckRo4n"
    },
    {
      "tweet": "They predict 30\" snow in DC & Philly. Whack!! All 3 Wash airports closed thru Sunday. That damn global warming"
    },
    {
      "tweet": "@beardlace ps it annoys me when survivalist types don't believe in global warming. Don't they know it'd be a great excuse for this stuff?"
    },
    {
      "tweet": "Global warming??? . globalwarming"
    },
    {
      "tweet": "Extreme weather across the globe is due to a strong El Nino. It may be climate change related. Scientists aren't sure. http://bit.ly/98dRYO"
    },
    {
      "tweet": "RT @TelegraphNews India forms new climate change body http://bit.ly/dCOe4U"
    },
    {
      "tweet": "Los Angeles: Is the Giant Squid Invasion due to Global Warming? http://bit.ly/9TZ9j7"
    },
    {
      "tweet": "RT @lizarddawg Global Warming Dying A Horrible Death http://cli.gs/S5BjH #UN #obama #tcot #NASA"
    },
    {
      "tweet": "@wilshipley I think given the scale and implications of climate change people look for plausible deniability instead of nutting up. Sad."
    },
    {
      "tweet": "Editorial: Washington seems to be backing down from its climate-change efforts http://bit.ly/cfXDj7"
    },
    {
      "tweet": "@GayPatriot You don't believe in global climate change?  I don't really understand your point."
    },
    {
      "tweet": "The bitter clingers of the Global Warming movement http://bit.ly/bSJco1 via @AddToAny"
    },
    {
      "tweet": "All ppl w/ working brains know global warming's a huge con, but politicians still pushing capntrade Sign petition http://tinyurl.com/nuxxhg"
    },
    {
      "tweet": "#NewsVine Oceans Reveal Further Impacts Of Climate Change http://bit.ly/bkdGXa #How2GetRich"
    },
    {
      "tweet": "Biggest snowstorm ever coming to Washington.. God must not support Global Warming.. BHO Are you listening now???"
    },
    {
      "tweet": "Is climate change agenda unraveling for politicians? http://ow.ly/14qS1"
    },
    {
      "tweet": "Climate Change Fraud - Media cools on global warming: Climate-change sceptics are being vindicated by scientific s... http://bit.ly/d34d8Y"
    },
    {
      "tweet": "Those of you who think snow means there's no such as global warming, DUH: http://www.npr.org/templates/story/story.php?storyId=123380157"
    },
    {
      "tweet": "Arctic climate changing faster than expected-study: WINNIPEG, Manitoba (Reuters) - Climate change is transforming ... http://bit.ly/ag23Bo"
    },
    {
      "tweet": "fail! this article mentions climate change midway through the article. totally buried the lede. http://bit.ly/afgr51 #journalism #climate"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "Study Says Arctic Ice Melt to Cost Global Economy $2.4 Trillion :)  intergovernmental panel on climate change"
    },
    {
      "tweet": "Los Angeles: Is the Giant Squid Invasion due to Global Warming? http://bit.ly/9TZ9j7"
    },
    {
      "tweet": "Massachusetts positioned for steep global warming gas reductions http://bit.ly/b5JldK"
    },
    {
      "tweet": "It's settled: Global warming science is sloppy: According to the last IPCC report, published in 2007, some 55% of ... http://bit.ly/aYnzEJ"
    },
    {
      "tweet": "It's not the same ol' Walden Pond anymore: how climate change has altered Thoreau's hideaway. http://bit.ly/d6Rppq"
    },
    {
      "tweet": "CBS: Global Warming Science Sound, ClimateGate Just a PR Problem http://bit.ly/dmdFRT"
    },
    {
      "tweet": "If only people knew... =p RT @AhhPhotography: Next thing they're going to blame global warming on is Dihydrogen Monoxide."
    },
    {
      "tweet": "@plutoniumpage Yeah that must be why every runs away from pop. control when its mentioned in Climate Change circles"
    },
    {
      "tweet": "Makes sense! RT @StephenAtHome I think we can all agree this Prius disaster proves once and for all that global warming doesn't exist"
    },
    {
      "tweet": "Citizen Journalist Discusses Climate Change Summit http://dlvr.it/1NcP"
    },
    {
      "tweet": "Is the Giant Squid Invasion due to Global Warming? - http://fwix.com/article/3_19cd7519b2"
    },
    {
      "tweet": "Is the Giant Squid Invasion due to Global Warming? http://dlvr.it/1NZB"
    },
    {
      "tweet": "Jon Stewart can't figure out truth abt global warming? So basically he's a thoughtless fool who has a lot of writers and makes funny faces."
    },
    {
      "tweet": "RT @hulu: O'Reilly vs. Stewart on global warming, Iran and terrorism http://bit.ly/dsFPG4"
    },
    {
      "tweet": "Media cools on global warming: LAST weekend looks likely to have been a tipping point in the media debate on clima... http://bit.ly/8XT2n4"
    },
    {
      "tweet": "Backing down on climate change - Has Washington lost its appetite for global warming? | http://is.gd/7Lk8x"
    },
    {
      "tweet": "http://bit.ly/d0zbcF global warming skeptics ;O ARCHIVES: Penn State scientist in hot seat over e-mails"
    },
    {
      "tweet": "Los Angeles Jobs - *FT Work for Greenpeace to STOP GLOBAL WARMING - $12-$13/hr* http://ow.ly/16vsyu"
    },
    {
      "tweet": "Federal agency denies protections for tiny pika  :P global warming"
    },
    {
      "tweet": "Federal agency denies protections for tiny pika   global warming"
    },
    {
      "tweet": "Precarious Homes Potentially Subject To Climate Change (PHOTOS) http://dlvr.it/1Mlk"
    },
    {
      "tweet": "Climate Change Watch India: Air Pollution Control http://bit.ly/dB2A9L"
    },
    {
      "tweet": "Pachauri insists science behind global warming remains 'totally valid' http://bit.ly/d0xGUZ"
    },
    {
      "tweet": "Weekend meeting to discuss China, Greece, maybe global warming: By Greg Robb, MarketWatch WASHINGTON (MarketWatch)... http://bit.ly/9ytCTp"
    },
    {
      "tweet": ";) Do you believe in Global Warming  Al Gore - Democratic Ideas is it influencing how you will Vote in November? 10 years"
    },
    {
      "tweet": "The reason global warming isn't accepted more widely has nothing to do with global warming or any lack of evidence. http://bit.ly/b9Jo7h"
    },
    {
      "tweet": "India forms breakaway climate change body http://bit.ly/aOYpaU"
    },
    {
      "tweet": "RT @latimesgreen: Backing down on climate change: Washington appears to have lost its appetite for attacking the problem of global w... http://bit.ly/aEPgPr"
    },
    {
      "tweet": "Backing down on climate change: Washington appears to have lost its appetite for attacking the problem of global w... http://bit.ly/aEPgPr"
    },
    {
      "tweet": "Backing down on climate change: Washington appears to have lost its appetite for attacking the problem of global w... http://bit.ly/aEPgPr"
    },
    {
      "tweet": "#ThankYouObama for pushing a climate change bill that has absolutely no credible scientific backing #tcot #p2 #climategate #ocra"
    },
    {
      "tweet": ":P What can our families do to help stop global warming? good luck"
    },
    {
      "tweet": "Instapundit ' Blog Archive ' TWELVE INCHES OF GLOBAL WARMING ...: TWELVE INCHES OF GLOBAL WARMING: Sounds like a p... http://bit.ly/9QisM6"
    },
    {
      "tweet": "Too much change is not good, just ask the climate."
    },
    {
      "tweet": "RT @lizarddawg: Copenhagen Is On Dispite New Evidence That Global Warming Was Junk Science http://cli.gs/PWPWt #england #poland #UN"
    },
    {
      "tweet": "it turns out the groundhog saw its shadow the other day , 6 more weeks of winter.   wheres the global warming people ?"
    },
    {
      "tweet": "Global warming does not have political ties http://dlvr.it/1LgW"
    },
    {
      "tweet": "http://bit.ly/b2du4M :P stop global warming The Global Climate: Yes, Its Still Warming"
    },
    {
      "tweet": "India to 'pull out' of UN 'global warming' panel because it 'cannot rely' on UN...: http://bit.ly/dCOe4U via @addthis"
    },
    {
      "tweet": "The Global Climate: Yes, It's Still Warming: Treehugger by Brian Merchant, Brooklyn, New York on 02. 4.10 As many ... http://bit.ly/aXqGbt"
    },
    {
      "tweet": "6 of 25 known Great Basin pika populations were lost by 2003 primarily due to climate change. More have likely disappeared since."
    },
    {
      "tweet": "VIDEO Fuel for Climate Change Skeptics: The un's climate chief admitted scientists made mistakes in a major ... http://tinyurl.com/yldn744"
    },
    {
      "tweet": "RT @DiveSpot: News: Expert: Increasingly Acidic Oceans Reveal Further Impacts Of Climate Change; 'It Is Incontrove... http://bit.ly/9D4LMZ"
    },
    {
      "tweet": "@Heritage  Climate Change Scientific Consensus Cloudy as Ever  http://twurl.nl/jiv3qv"
    },
    {
      "tweet": "RT @DiveSpot: News: Expert: Increasingly Acidic Oceans Reveal Further Impacts Of Climate Change; 'It Is Incontrove... http://bit.ly/dBjNiU"
    },
    {
      "tweet": "Electrical magnetic interference with toyota prius- also the reason for  cell issues. All because of global warming and thinning atmosphere."
    },
    {
      "tweet": "House committee seeks to keep global warming laws out of Utah: By Richard Piatt SALT LAKE CITY -- Utah lawmakers w... http://bit.ly/dx4qDV"
    },
    {
      "tweet": "What Did You Think of The Movie The Great Global Warming Swindle? http://bit.ly/9Mx7MR global warming swindle ;)"
    },
    {
      "tweet": ":O What Did You Think of The Movie \\\"The Great Global Warming Swindle\\\"? global warming"
    },
    {
      "tweet": "@Revkin Feds rule pika listing NOT WARRANTED despite climate change threats. Have Earthjustice Atty on case ready to talk 2U if you want."
    },
    {
      "tweet": "How Climate-Change Fanatics Corrupted Science -- Michael Barone -- GOPUSA http://shar.es/aNfE3 via @sharethis"
    },
    {
      "tweet": "RT @democracy_now: Amy Goodmand and Dem Now is heading to Bolivia for the  World People's Conference on Climate Change. Tune in Next Week.  #WPCCC #Cochabamba"
    },
    {
      "tweet": ";O global warming Saving endangered species: it\\'s the economy"
    },
    {
      "tweet": "Global Warming? It's All About Land Use http://bit.ly/c8unbr How cities in the American West can fight global warming"
    },
    {
      "tweet": "Global warming helping trees grow faster: 4 Feb 2010, 2132 hrs IST, PTI WASHINGTON: Global warming is helping tree... http://bit.ly/9eYJQK"
    },
    {
      "tweet": "Correlative and mechanistic models of species distribution provide congruent forecasts under climate change (PDF, ... http://bit.ly/97Brsy"
    },
    {
      "tweet": "Drug discovery technique could help in the battle against global warming http://bit.ly/dp9R2x"
    },
    {
      "tweet": "RT @afashionfan Unexpected turn of events ... in climate change science over past 3 months puts pressure on IPCC http://bit.ly/ai4kLD #tcot"
    },
    {
      "tweet": "Global warming research grant in danger of fund freeze: By Stephen Dinan A top member of Congress wants President ... http://bit.ly/aAY4xX"
    },
    {
      "tweet": "RT @ThePhoenixSun RT @ejgertz: Florida Gov Agencies on Global Warming: Red Alert! http://bit.ly/chyz25 #climate #FL #eco"
    },
    {
      "tweet": "PM talks climate change with four European leaders: http://ping.fm/HFleM"
    },
    {
      "tweet": "Check this out - the cost of climate change: http://www.nrdcactionfund.org/thisisourmoment/?p=1281&c=349598&s=762984&l=81599"
    },
    {
      "tweet": "RT @thedailybeast: GOP pollster Frank Luntz who counseled Bush not to buy into the science on global warming is changing his view."
    },
    {
      "tweet": "Water Vapor Slowed Global Warming Over Past Decade: Over the last 10 years, global temperatures rose about 25 pe... http://bit.ly/b5dfKU"
    },
    {
      "tweet": "@Heritage  Government's Out-of-Step Agitprop on Global Warming  http://twurl.nl/zmyzmk"
    },
    {
      "tweet": "@AFPHQ Americans For Prosperity Praises Key Democrats for Joining Effort to stop EPA Global Warming Power Grab  http://twurl.nl/dbtyr4"
    },
    {
      "tweet": "Climategate melts away: Global warming expert exonerated | Midwest ...: By Yael T. Abouhalkah, Kansas City Star Ed... http://bit.ly/d9FJIM"
    },
    {
      "tweet": "The global warming movement as we have known it is dead,\"writes Walter Russell Mead of the Council on Foreign Relations in The American Int"
    },
    {
      "tweet": "http://bit.ly/9m2Qfp global warming solutions   One of the proposed solutions to global warming is to grow a large number of trees. This..."
    },
    {
      "tweet": "Drug discovery technique could help in the battle against global warming: Washington, Feb 4 (ANI): Scientists in T... http://bit.ly/d1PTS1"
    },
    {
      "tweet": "RT @dailygalaxy: NASA Extends Cassini's Fly-bys of Saturn to Focus on Seasons & Climate Change http://su.pr/1I9V1D"
    },
    {
      "tweet": "global warming for kids http://bit.ly/a8WW1I  what is global warming for kids?"
    },
    {
      "tweet": "India to have own panel on climate change: Jairam Ramesh: http://ping.fm/q9FjK"
    },
    {
      "tweet": "RT @CatholicClimate: \"The poor will experience most directly the harmful effects of climate change.\" -Catholic Bishops http://lnk.ms/4L7st"
    },
    {
      "tweet": "http://bit.ly/9dLlbh Bear Market News: Twenty Years from Now, Will You Still Lie to  global warming for kids :O"
    },
    {
      "tweet": "MMR doctor Andrew Wakefield fixed data on autism - Times Online: http://bit.ly/fFPGY Sounds just like the Global Warming HOAX"
    },
    {
      "tweet": "global warming facts What are some really scary facts about global warming? http://bit.ly/dhsE0P ."
    },
    {
      "tweet": "What are some really scary facts about global warming? :O scary facts"
    },
    {
      "tweet": "Climate Change Watch India: Violation of Pollution and Environment ... http://bit.ly/ahG2tK"
    },
    {
      "tweet": "The Atheist Experience: Global Warming Denial and God Belief: I've often wondered why the religious nuts are most ... http://bit.ly/aSs15j"
    },
    {
      "tweet": "@johnfoster Just saw that South Park last night on global warming..  http://yfrog.com/1dcqyvj"
    },
    {
      "tweet": "Lord Smith warns climate change argument has been undermined by 'climategate': Lord Smith of Finsbury, the Chair... http://bit.ly/d0fvCI"
    },
    {
      "tweet": "The Mexico Climate Change Summit To Come, MUST NOT BE A Duplicate Of That Experience Once Again."
    },
    {
      "tweet": "The green debate goes tribal | Giles Wilkes - Climate change believers and sceptics are two sides of the same coin ... http://ow.ly/16uMEq"
    },
    {
      "tweet": "Lord Smith warns climate change argument has been undermined by 'climategate' http://bit.ly/bKnzgh"
    },
    {
      "tweet": "Jerry Brown's global warming revenge?: Backers of a proposed ballot initiative to suspend California's landmark gl... http://bit.ly/a5QLF0"
    },
    {
      "tweet": "Jerry Brown's global warming revenge?: Backers of a proposed ballot initiative to suspend California's landmark gl... http://bit.ly/a5QLF0"
    },
    {
      "tweet": "Obama Battles to Keep Global Warming, Biofuels Initiatives on Track: DailyTech Amid a partisan atmosphere US Presi... http://bit.ly/ccEBKI"
    },
    {
      "tweet": "energy absorption  Innovation has climate change in hand | COSMOS magazine"
    },
    {
      "tweet": "Innovation has climate change in hand depletion of resources  !"
    },
    {
      "tweet": "UN climate head under pressure to quit (source: The Australian): THE head of the UN's climate change body is under... http://bit.ly/cxtnWi"
    },
    {
      "tweet": "Global Warming: Rajendra Pachauri Orders Asbestos For Fires http://ff.im/-fmWoc"
    },
    {
      "tweet": "Walter E. Williams : Global Warming Update - Townhall.com: John Coleman, founder of the Weather Channel, in an hou... http://bit.ly/b5zKox"
    },
    {
      "tweet": "@thenation: Murdoch's Fox News claim \"there's no global warming\" yet they still lust over their new solar installation. http://bit.ly/coOZXQ"
    },
    {
      "tweet": "You Know, if it brings us a reliable North West Passage, I'm all in favor of Global Warming ;)"
    },
    {
      "tweet": "Earth's polar ice sheets vulnerable to even moderate global warming; New Orleans, much of southern F... http://cli.gs/yEg8T"
    },
    {
      "tweet": "RT @ElectaR2010 Towhhall column Michael Barone: How Climate-Change Fanatics Corrupted Science http://bit.ly/9ykQBr #tcot"
    },
    {
      "tweet": "India asks G77 to stay united over climate change talks: http://ping.fm/hZsmh"
    },
    {
      "tweet": "@Slyty17 Obama is the new Hitler. Your campus is a disappointment. You'll graduate believing in global warming & unemployed! Get a clue!"
    },
    {
      "tweet": "GayandRight: Global warming kills livestock in Mongolia....: Aid groups have described piles of dead animals and w... http://bit.ly/ddMOY0"
    },
    {
      "tweet": "RT @GIS_Forester: Reading an interesting article: Ecologists Link Accelerated Tree Growth to Climate Change http://tr.im/MKL6 #forestry"
    },
    {
      "tweet": "The Forest Connection: As international climate change discussions continue, CI's leaders and partners explain a... http://bit.ly/axqB3C"
    },
    {
      "tweet": "The Death of Global Warming? http://bit.ly/acp2zf via @AddToAny"
    },
    {
      "tweet": "talking to @arthuRyanB about the crappy world we live in. Hahaha. I think it's just because of global warming though :|"
    },
    {
      "tweet": "Global Warming Dent's El Ni'o's Protective Shield From Atlantic Hurricanes, Increase Droughts http://cli.gs/LEnPp"
    },
    {
      "tweet": "Murdoch's Fox News claim \"there's no global warming\" yet they still lust over their new solar installation.http://bit.ly/coOZXQ"
    },
    {
      "tweet": "Ca now wants to reg. Cow farts. Can we reg. Vegan farts all in the name of global warming? An organic diet is a gassy diet."
    },
    {
      "tweet": "@joshtyler pot causes global warming? who ever said that must be high"
    },
    {
      "tweet": "RT @tommytrc Invasive Species and Climate Change   http://bit.ly/4oeoGA @InvasiveNotes"
    },
    {
      "tweet": "RT @ThinkProgress: Sarah Palin calls global warming studies 'snake oil science.' http://bit.ly/cvSN9B #p2 #du1 #dnj"
    },
    {
      "tweet": "http://bit.ly/9depEb - \"Well so much for this whole 'global warming' thing.\"  Idiots. Great article. DeMint, you're a tool."
    },
    {
      "tweet": "What was that about global warming? It's still snowing!"
    },
    {
      "tweet": "Damn supposedly global warming is intensifying this winter weather....Chicago having earthquakes somethings going on..."
    },
    {
      "tweet": "MADE UP NUMBERS, FALSE DATA, EAST COAST BURIED IN SNOW, REASON TO KEEP PUSHING GLOBAL WARMING IS ONLY TO HAVE CONTROL OF OUR MONEY"
    },
    {
      "tweet": "MSNBC Reporter Insists Record Snow Out East Is Due to Global Warming and Easter eggs come from the Easter Bunny."
    },
    {
      "tweet": "All this snow. More global warming evidence?"
    },
    {
      "tweet": "A picture of a rebellious member of the global warming religion :) http://tweetphoto.com/10986449"
    },
    {
      "tweet": "RT @BorowitzReport: FUN GAME: Next time someone says \"So much for global warming,\" push them into a snowdrift and run away."
    },
    {
      "tweet": "FUN GAME: Next time someone says \"So much for global warming,\" push them into a snowdrift and run away."
    },
    {
      "tweet": ",,Climate change, is or is not, fifty, fifty,why not, scientists agree,do they or do they not,its only fifty, fifty, why not......."
    },
    {
      "tweet": "How to Fix the IPCC: Replace it With Wikipedia?: Issuing 3000-page edicts about climate change isn't exactly the b... http://bit.ly/aIazA0"
    },
    {
      "tweet": "Pro-tip - If you think snow or cold or rain negates global warming, don't post it, you only show how little you know about the topic."
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse: http://digg.com/d31IMto?t NYC is feeling the same pain."
    },
    {
      "tweet": "So cold weather actually CONFIRMS global warming? http://bit.ly/aQQKf3"
    },
    {
      "tweet": "http://www.marchreport.com/20100210.html#2010-02-10-A006 15 Months Ago, RFK Jr., Said Global Warming Would Mean No More Snow In D.C."
    },
    {
      "tweet": "If high temperatures are proof of global warming and low temperatures are proof of global warming, then what is NOT proof of global warming?"
    },
    {
      "tweet": "Amy Goodmand and Dem Now is heading to Bolivia for the  World People's Conference on Climate Change. Tune in Next Week.  #WPCCC #Cochabamba"
    },
    {
      "tweet": "RE: *It isn't that the blizzard proves global warming is false, but it certainly is an argument against.*  Actually, i' http://disq.us/blf2a"
    },
    {
      "tweet": "We got about 14 inches of snow thus far in Panther Valley (30 min from Poconos)..much more to come yet..as for global warming ---&gt; Hum Bug !"
    },
    {
      "tweet": "Climate change is something that is not man made, and is a natural change in the globe, things change , just the way it is, has always been"
    },
    {
      "tweet": "Liked \"MSNBC's Contessa Brewer Claims Heavy Snowfall Proves Global Warming\" http://ff.im/-fJg1w"
    },
    {
      "tweet": "maybe they should switch the olympics to DC instead since it seems vancouver is putting on a one-man show of global warming\"--Olive"
    },
    {
      "tweet": "so its almost march and its snowin like this...global warming"
    },
    {
      "tweet": "How's that man-made global warming working out for ya?"
    },
    {
      "tweet": "Plus the ocean lol RT @LAC83 it would be a very long journey from Australia by skiis. And a huge climate change. But SOO worth it :-)"
    },
    {
      "tweet": "RT @sciam: Romanticism undone: Invasive species, global warming taking toll on plants at Thoreau's Walden Pond http://bit.ly/c9zR1Y"
    },
    {
      "tweet": "Romanticism undone: Invasive species, global warming taking toll on plants at Thoreau's Walden Pond http://bit.ly/c9zR1Y"
    },
    {
      "tweet": "RT @TwilightEarth 2010 East Coast Snowfall Blamed on Global Warming? http://ow.ly/162Fy"
    },
    {
      "tweet": "How to Reform the Intergovernmental Panel on Climate Change http://bit.ly/ctvuIh"
    },
    {
      "tweet": "Snowstorm: East Coast Blizzard Tied to Climate Change http://bit.ly/aMGM77"
    },
    {
      "tweet": "Top Science Journal Calls for Climate Science Reform|A steady drip of errors in the top report on global warming .. http://oohja.com/x6L4Q"
    },
    {
      "tweet": "watchen Shep Smith- no car chases today- climate change!"
    },
    {
      "tweet": "RT @humanadverb: Why does a blizzard in DC kill climate change legislation, but near-catastrophic drought in Atlanta doesn't get it passed?"
    },
    {
      "tweet": "RT @Milieunet: D.C. Snowstorm: How Global Warming Makes Blizzards Worse - Yahoo! News http://goo.gl/z8ka"
    },
    {
      "tweet": "Video: MS-NBC's Brewer claims heavy snowfall proves global warming: Give credit to MS-NBC's meteorologist, who doe... http://bit.ly/bT3uWd"
    },
    {
      "tweet": "@newsbusters That's not what I said.  I said that snowstorms don't refute global warming."
    },
    {
      "tweet": "I wish it wouldve been called \"global climate change\" from the start! RT @MotherJones Snowpocalypse: Take That Al Gore! http://bit.ly/9LOMhn"
    },
    {
      "tweet": "OH: \"If we're going to solve this global warming dilemma, i think we need to chop down more trees...\" -- @hokiebill"
    },
    {
      "tweet": "to all and especially newt gingrich: just because it's snowing doesn't mean climate change is false. http://bit.ly/9Bh8h1"
    },
    {
      "tweet": "claiming that snow disproves global warming is like #$%^ing your GF w/ a 12\" strap-on & claiming you have a big dick #GOPfail #p2"
    },
    {
      "tweet": "Dear Eve Ensler (the vagina monologues chick) believes earthquakes are symptoms of global warming. not a shock. http://bit.ly/bH1qIk"
    },
    {
      "tweet": "@GSorensen \"Scientists have been warning for decades that global warming would increase the severity of winter storms."
    },
    {
      "tweet": "Vry Inrstg RT @Atlantic_Wire: DC: \"OK already, we believe in Climate Change!\" http://bit.ly/bxOguT Snow conts. 2 pile up. What's the reason?"
    },
    {
      "tweet": "CBS News: Conservatives Use \"Snowmageddon\" to Mock Global Warming http://tinyurl.com/yks75n5"
    },
    {
      "tweet": "@bradplumer tell us What The #Snowpocalypse Tells Us About Global Warming http://bit.ly/cYwHLy  #climate"
    },
    {
      "tweet": "@Michelinah42 ...  response to global warming"
    },
    {
      "tweet": "@Michelinah42 \"To a great extent, (climate chg) is what we thk of as 'weather.' Indeed, weather patterns are predicted to change in..."
    },
    {
      "tweet": "Invasive Plants Are Beneficiaries of Climate Change in Thoreau's Woods http://tr.im/NE2G #green #eco #habitat"
    },
    {
      "tweet": "Global Warming Monitoring Needs to Find 'Missing Heat', say Scientists http://bit.ly/9y1gp4"
    },
    {
      "tweet": "@Michelinah42 Assuming that site is legit, it explains connection b/t what we call global warming & climate change...."
    },
    {
      "tweet": "Global Warming & Our Winter Storms http://www.paltalknewsnetwork.com/node/2210 #globalwarming #weather"
    },
    {
      "tweet": "I lovce hearing \"weather isnt climate\" from the same idiots that blamed Katrina on \"climate change\"."
    },
    {
      "tweet": "RT @change The Geological Society of America rejects global warming theory & member speaks out http://bit.ly/cGFw4o (via @rebeccawalker)"
    },
    {
      "tweet": "European Forests and Carbon Sequestration Services: An Economic Assessment of Climate Change Impacts - http://bit.ly/b8ifs9"
    },
    {
      "tweet": "Im up. Still snowing out there. Dear Al Gore, bite me. Oh wait, your claimign this is now caused by \"climate change\" right. Ass."
    },
    {
      "tweet": "Global Warming lol! Al Gore you need 2 step up your theory brother. This season produced the most snow I seen in life. Evrywk it is snowin"
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse: There's scarcely any powder in Vancouver, while Baltimor... http://bit.ly/aLa47B"
    },
    {
      "tweet": "@mimidancer just because it also gets colder doesn't mean it's not global warming first off.  Secondly, I approve of #hoth."
    },
    {
      "tweet": "@BCBG25  It's the denial about alternative energy. It's the pretending about \"clean coal.\" The unwillingness to listen re: climate change."
    },
    {
      "tweet": "Terry Gardner: Necessity, the Mother of Eco Invention: Whether you believe \"climate change\" is fiction or fact, d... http://huff.to/aUfoZ5"
    },
    {
      "tweet": "What The Snowpocalypse Tells Us About Global Warming http://bit.ly/ay7pCH"
    },
    {
      "tweet": "What The Snowpocalypse Tells Us About Global Warming http://bit.ly/ay7pCH"
    },
    {
      "tweet": "\"Ok,\" said the teacher, \"I meant to say that the majority of scientists agree.\"Is there man-made global warming? I... http://ff.im/-fIJ7t"
    },
    {
      "tweet": "Good question! RT @Time_Inc: TIME: Another Blizzard: Where's Global Warming? http://bit.ly/cBLW6t"
    },
    {
      "tweet": "What The Snowpocalypse Tells Us About Global Warming http://url4.eu/1Mkd6"
    },
    {
      "tweet": "What The Snowpocalypse Tells Us About Global Warming http://url4.eu/1Mkd0"
    },
    {
      "tweet": "LOL!!!RT @PoliJAM: #FoxNews' Major Garrett Gets Pummeled By Global Warming While Reporting from Outside the White House http://bit.ly/bbENrp"
    },
    {
      "tweet": "Funny how lefties still arguing global warming proven by warm weather, cold weather, severe storms, & lack of severe storms. #rsrh"
    },
    {
      "tweet": "Our leaders r morons. Dem Senator: \"DC blizzards make it more difficult to argue global warming is an imminent danger\" http://bit.ly/d0evbz"
    },
    {
      "tweet": "@Libslady Hon, it's called \"Climate Change.\" Cold gets colder, warm gets warmer, weather gets weirder. No need to dis VP Gore's book at all."
    },
    {
      "tweet": "Altho not climate change related, MAYBE the Iceland volcano will remind people of the power of Mother Nature."
    },
    {
      "tweet": "AL GORE NAILED THIS GLOBAL WARMING THING,  ANYONE FOR THREE CARD MONTY?"
    },
    {
      "tweet": "RT @abc: Flakes: Global Warming Deniers Use Massive Snowstorm as Ammo:  http://bit.ly/dvtsYU"
    },
    {
      "tweet": "RT @nicknotned: How cranky bloggers are puncturing the consensus on climate change. by Matt Ridley  http://j.mp/cIQbOE"
    },
    {
      "tweet": "Flakes: Global Warming Deniers Use Massive Snowstorm as Ammo:  http://bit.ly/dvtsYU"
    },
    {
      "tweet": "@GottaLaff re global warming: Virginia GOP is the ass here, not TIME headline writers (as you suggest!)"
    },
    {
      "tweet": "Snow doesn't mean global warming is fraud, Sean! (IrishCentral) Fox News | Hannity | Climate | Conservative | Weather http://bit.ly/bjxtzq"
    },
    {
      "tweet": "Nice article about Global Warming from @TIME but I'm still skeptical - http://www.time.com/time/health/article/0,8599,1962294,00.html"
    },
    {
      "tweet": "RT @JoeNBC: @DylanRatigan on radio talking global warming vs. big snowdrifts in NYC - must listen  http://bit.ly/joeradio"
    },
    {
      "tweet": "RT @ddimick: UN: \"Accelerated migration and climate change a 'recipe for social disaster'\" (via @alertnetclimate) http://post.ly/N9td"
    },
    {
      "tweet": "SEC To Provide Guidance on Companies Climate Change Disclosure http://bit.ly/cARxMm #solar"
    },
    {
      "tweet": "RT @OpenCongress: \"Record snow hs buried D.C. ' and buried chances of passing global warming legislation this year.\" http://bit.ly/adxgbq"
    },
    {
      "tweet": "Palin dismisses global climate change as \"'bunch of snake oil science,\" but then again she probably believes Jesus rode a dinosaur."
    },
    {
      "tweet": "Snow doesn't mean global warming's a fraud, Sean:  http://bit.ly/bjxtzq | celebrity news"
    },
    {
      "tweet": "Editorial: Senate Offers Hope for Climate Change Legislation http://bit.ly/9NPwxb #green #energy"
    },
    {
      "tweet": "Editorial: Senate Offers Hope for Climate Change Legislation http://bit.ly/9NPwxb"
    },
    {
      "tweet": "RT @PlanetGreen: RT @BoingBoing: Understanding climate change: There's an ap for that http://bit.ly/aQHXLK"
    },
    {
      "tweet": "Hey #tcot, your frozen margarita may become endangered. RT @tlw3 FOX and NASA report on Global Climate Change http://bit.ly/cg4F59 #p2"
    },
    {
      "tweet": "Snow Storm Fuels Conservatives' Global Warming Mockery|Even Some Democrats Concede Massive Snowfall in Washington .. http://oohja.com/x6KHv"
    },
    {
      "tweet": "Look, It's Snowing! So Much for \"Global Warming,\" Eh, Jim DeMint?: If you live anywhere between DC and Bo... http://bit.ly/95JuCE #politics"
    },
    {
      "tweet": "RT @thejoshuablog: RT @AmericaBlog: Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x #p2"
    },
    {
      "tweet": "Climate Change and Activists Won't Delay, But United Nations Will http://trim.li/nk/1JjY via @WiretapMagazine"
    },
    {
      "tweet": "Dear #TCOT: RT @NewsOnGreen D.C. Snowstorm: How Global Warming Makes Blizzards Worse (Time.com) http://tinyurl.com/ykzh7dd #p2"
    },
    {
      "tweet": "@DylanRatigan on radio talking global warming vs. big snowdrifts in NYC - must listen  http://bit.ly/joeradio"
    },
    {
      "tweet": "Snow Storm Fuels Conservatives' Global Warming Mockery http://bit.ly/bqh9ML"
    },
    {
      "tweet": "Where's that Global Warming???"
    },
    {
      "tweet": "Snow and ice cancel global-warming hearing: http://bit.ly/dmyEJ0 via @addthis"
    },
    {
      "tweet": "Heat wave in Paraguay.  No, Virginia, snow doesn't mean there is no climate change.  http://bit.ly/beumgi  #climate"
    },
    {
      "tweet": ".@MattDentler reminded us that Owning The Weather, which screened here, is now on iTunes! Perfect day to watch film abt global warming."
    },
    {
      "tweet": "Understanding climate change: There's an ap for that http://bit.ly/9Qj27X"
    },
    {
      "tweet": "RT @Tymlee: Climate change causes wolverine decline across Canada http://bit.ly/aacOb1"
    },
    {
      "tweet": "RT @AmericaBlog: Right-wingers already claiming that the blizzard proves climate change doesn't exist http://bit.ly/ba8u1x #p2"
    },
    {
      "tweet": "@Revkin discusson of planet-scale issues needs 2b re-thought. We had a cold winter so belief in climate change declined #cgiu #green #media"
    },
    {
      "tweet": "Causing global climate change. #moregovpattersonrumors"
    },
    {
      "tweet": "Holy cow! Near blizzard conditions here in NYC. Expecting 10 plus inches of global warming today. Looks nasty out there. #tcot"
    },
    {
      "tweet": "Ironic tidbit of the day...Senate global warming hearing canceled due to the blizzard. http://bit.ly/9nzHsE"
    },
    {
      "tweet": "RT @disturbedwater: DC snowstorm: how global warming makes blizzards worse (via @TIME) http://bit.ly/aMGM77"
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse http://bit.ly/aMGM77"
    },
    {
      "tweet": "Government Launches Climate Change Agency: If you wanted to look up the mean rise in sea levels over the last few ... http://bit.ly/cnePv5"
    },
    {
      "tweet": "4\" of global warming & counting."
    },
    {
      "tweet": "Snow doesn't disprove climate change http://mobile.salon.com/politics/war_room/2010/02/10/snow_global_warming/index.html #tcot #p2 #agw"
    },
    {
      "tweet": "Alternative to cap and trade is gaining ground on Capitol Hill|While the climate change measure remains mired in .. http://oohja.com/x6KxA"
    },
    {
      "tweet": "Has anyone seen--------------&gt; AL GORE&lt;-------------- Poster Nit Wit for Global Warming."
    },
    {
      "tweet": "It's like shooting ducks in a barrel [The Island of Doubt]|Another critical mass of climate change pseudoskeptics .. http://oohja.com/xaYnZ"
    },
    {
      "tweet": "After just 2\" overnight, snow finally coming down hard just north of NYC.  GOP: No global warming.  Except: No snow for Winter Olympics."
    },
    {
      "tweet": "RT @EricBoehlert: Why won't Drudge acknowledge the snow-less 'Global Warming Games' about to kick off in Vancouver? http://tinyurl.com/yzq4olr"
    },
    {
      "tweet": "LOL! RT @ConserValidity Time Magazine: How Global Warming makes Blizzards worse http://bit.ly/cLl6li #tcot #teaparty"
    },
    {
      "tweet": "RT @mocajavawv: A lot of global warming coming down here on NYC. #tcot"
    },
    {
      "tweet": "A lot of global warming coming down here on NYC. #tcot"
    },
    {
      "tweet": "IOC: Global Warming Could Affect Winter Olympics|The International Olympic Committee is beginning to worry about .. http://oohja.com/x6KpQ"
    },
    {
      "tweet": "Roses are red, violets are blue, global warming causes BVOCs, so take some time and save the trees http://ow.ly/15RKl"
    },
    {
      "tweet": "How Global Warming makes Blizzards worse http://bit.ly/cLl6li #Anyone with a scintilla of respect for Leftist 'Time' Magazine,you should not"
    },
    {
      "tweet": "RT @wood83: Global warming alarmists meet record snowfall, record snowfall meet global warming alarmists"
    },
    {
      "tweet": "Another Snowstorm: What Happened to Global Warming? Round 2: Blizzards hit Mid-Atlantic to New York ... Who Would Replace Governor Pat..."
    },
    {
      "tweet": "Can #cochabamba participants lead on #climate change? + Kerry, Graham, & Lieberman drag feet on climate bill http://bit.ly/cqGbTE"
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse - TIME \"Another Snowstorm: What Happened to Global Warming? \" http://bit.ly/9B1K3G"
    },
    {
      "tweet": "@upsidetrader is he wearing a \"global warming\" sign ?"
    },
    {
      "tweet": "Al Gore should be arrested for Global Warming Scam, how much did AL take in$$$$$$$$$$ forget the snow ball, hit him with a shovel"
    },
    {
      "tweet": "@acereporter it has been mild, looks like our luck ran out, global warming wins. Finally caught a real snowstorm; whole 3 inches thus far..."
    },
    {
      "tweet": "Enough with the \"Where's your global warming now with all of this snow, cold?\".  As a joke, getting old.  As serious comment, idiotic."
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse (TIME) http://bit.ly/93juyJ #news"
    },
    {
      "tweet": "RT: @IvankaTrump Ironic tidbit of the day...Senate global warming hearing canceled due to the blizzard. http://bit.ly/9nzHsE"
    },
    {
      "tweet": "With climate change, those who know most are most frightened. With nuclear power, those who know most are least frightened. -various"
    },
    {
      "tweet": "Climate Group Admits Mistakes: Officials of the Intergovernmental Panel on Climate Change, a United Nations-sponso... http://bit.ly/9zynKV"
    },
    {
      "tweet": "DailyTech - NOAA Releases Wealth of Climate Change Data to Public: Website should be welcome news to global warmin... http://bit.ly/9Mm0J2"
    },
    {
      "tweet": "RT Invasive Species and Climate Change   http://bit.ly/4oeoGA @InvasiveNotes"
    },
    {
      "tweet": "Snowmageddon and Global Warming|With the occurrence of particularly strong snow storms that have hit the east .. http://oohja.com/x6K8g"
    },
    {
      "tweet": "Waste of Time Stimulus money/Global Warming turbines frozen in Minnesota wind http://bit.ly/alsN33 #Where is AL Gore!"
    },
    {
      "tweet": "Despite ClimateGate, US creates NOAA Climate Service and Pentagon says Global Warming is Security Threat #energy  http://jm.ly/WkWx9I"
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse|There's scarcely any powder in Vancouver, while .. http://oohja.com/x6K1K"
    },
    {
      "tweet": "Plz #Digg & RT: Sean Hannity: Snow Storms Contradict Climate Change http://bit.ly/96XkOi ( #p2 #dnj #du1)"
    },
    {
      "tweet": "Free Reading !!! Ahead of my time vis a vis global warming: I am available for psychic reading... http://bit.ly/9uC2jm mypsychicsonline.inf"
    },
    {
      "tweet": "@KevinMHughes he's busy with dc getting closed down. while fleabrain-in-chief announces global warming agency w 230k workers off for snow."
    },
    {
      "tweet": "D.C. Snowstorm: How Global Warming Makes Blizzards Worse: There's scarcely any powder in Vancouver, while Baltimor... http://bit.ly/d9iYjy"
    },
    {
      "tweet": "Lords fear public is losing confidence in climate change science|Leading scientists in House of Lords have warned .. http://oohja.com/x6JTv"
    },
    {
      "tweet": "How do we solve this global warming thing? http://bit.ly/br4xLV"
    },
    {
      "tweet": "FREAKING global warming. HA!"
    },
    {
      "tweet": "Hannity: Snow Storms 'Seem To Contradict Al Gore's Hysterical Global Warming Theories' http://bit.ly/alQZCV"
    },
    {
      "tweet": "Oh no, snow! Time to overreact and make incomprehensible global warming jokes!"
    },
    {
      "tweet": "RT @ClimateDepot: Utah Legislature formally questions global warming http://bit.ly/8YK3PQ"
    },
    {
      "tweet": "Jones Shreds Capitol Hill to Fight Climate Change - Big-time events like the Winter X-Games and the Winter Olympics... http://ow.ly/16xDae"
    },
    {
      "tweet": "Maybe the second DC snowstorm in a week is the universe sending climate change naysayrers in the gov't a yes vote?"
    },
    {
      "tweet": "RT @ecohouses Climate Group Admits Mistakes: AP In citing climate change as an important issue, a UN conference in Dec. http://bit.ly/daKgRd"
    },
    {
      "tweet": "Considering Institutional Authorities and Climate Change http://bit.ly/aCOaur #energy"
    },
    {
      "tweet": "Story of the vaporization of the great gobal warming scandal #global warming http://is.gd/7TByc"
    },
    {
      "tweet": "RT @wsmco: if you're one of the 10s of thousands without power from the blizzard and you voted for this global warming dipshit, i'm glad you're f-d."
    },
    {
      "tweet": "Climate-change legislation buried under record snowfall|Record snowfall has buried Washington ? and along with .. http://oohja.com/x6IMs"
    },
    {
      "tweet": "Liked \"New Climategate Shocker: Even the CRU Thought the Climate Change Hockey Stick Was Flawed: The term \"hockey...\" http://ff.im/-fGwfE"
    },
    {
      "tweet": "http://bit.ly/10NrOO Energy and Global Warming News for February 9: Ford to unveil ... http://bit.ly/ca1NSC"
    },
    {
      "tweet": "From DailyKos: Climate Change Skeptics Discredited - New information suggests that a report criticizing data for cl... http://ow.ly/16xz87"
    },
    {
      "tweet": "ha! RT @CrabbyCon: Global Warming mockery video that includes recent photos of the Great Blizzard of 2010 http://bit.ly/942I4T #tcot"
    },
    {
      "tweet": "green and global warming belief set is perhaps the epitome of mankinds egotism - that we could be such a massive universal force"
    },
    {
      "tweet": "Climate Change Skeptics Discredited http://idek.net/12D4 from @DailyKos"
    },
    {
      "tweet": "RT @DailyKos: Climate Change Skeptics Discredited http://bit.ly/cT3L00 ( #p2 #du1)"
    },
    {
      "tweet": "about that whole climate change thing...http://bit.ly/cUg6WF"
    },
    {
      "tweet": "RT @ThinkProgress: Hannity: Snow Storms 'Seem To Contradict Al Gore's Hysterical Global Warming Theories' http://bit.ly/alQZCV #p2 #du1 #dnj"
    },
    {
      "tweet": "Professor Klaus Lauckner on climate change panel April 22 http://bit.ly/drWNSP"
    },
    {
      "tweet": "Ahead of my time vis a vis global warming|The Global warming hysteria of the past ten years appears to be cooling .. http://oohja.com/x6Ihu"
    },
    {
      "tweet": "GOP senator's family builds igloo to mock global warming http://bit.ly/9GtBqo"
    },
    {
      "tweet": "Grrrr...Global Warming My BUTT! 2nd MAJOR snowstorm within days!"
    },
    {
      "tweet": "if you're one of the 10s of thousands without power from the blizzard and you voted for this global warming dipshit, i'm glad you're f-d."
    },
    {
      "tweet": "Utah Legislature: House formally questions global warming|SALT LAKE CITY ? With most Democrats voting no, the .. http://oohja.com/x6I8e"
    },
    {
      "tweet": "Story of the collapse of the great climate scam #global warming http://bit.ly/drrEIN"
    },
    {
      "tweet": "RT @Drudge_Report: Senate global warming hearing cancelled... http://drudge.tw/dyAWzC"
    },
    {
      "tweet": "Just posted European Forests and Carbon Sequestration Services: An Economic Assessment of Climate Change Impacts http://bit.ly/awFKHw #b2p"
    },
    {
      "tweet": "Palin likens global warming studies to 'snake oil'|Former Alaska Gov. Sarah Palin called studies supporting .. http://oohja.com/x6I1E"
    },
    {
      "tweet": "Hey @algore we're gonna be shoveling a lot of your \"global warming\" tommorow"
    },
    {
      "tweet": "Peoples World: Is global warming a conspiracy concocted to destroy private property and freedom? According to a po... http://bit.ly/d3mevg"
    },
    {
      "tweet": "QUICK, AL GORE, SAY SOMETHING , OBAMA NEEDS A DISTRACTION, TELL US AGAIN THE WORLD IS GOING TO END CAUSE OF GLOBAL WARMING."
    },
    {
      "tweet": "Offbeat and aromatic read :-) RT - Climate change will make world more 'fragrant' -http://bit.ly/a1GnIX - @risovic"
    },
    {
      "tweet": "on the subject of the epic scam that is global warming obumers global warming council got snowed out LOL"
    },
    {
      "tweet": "@NiteOwl223 give Egore's climate groupies time2 come up with some hair brained excuse linking man made global warming with all the snow"
    },
    {
      "tweet": "RT @EricBoehlert: So are freak storms RT @owillis RT @tlw3 Snow is consistent w/ global warming, say scientists - Telegraph http://bit.ly/bDdtsB"
    },
    {
      "tweet": "RT @EricBoehlert: So are freak storms RT @owillis RT @tlw3 Snow is consistent w/ global warming, say scientists - Telegraph http://bit.ly/bDdtsB"
    },
    {
      "tweet": "On World Wetland Day 2-2-10: BioScience study said climate change is desiccating US prairies and critical wetlands.   http://bit.ly/9V3Ekm"
    },
    {
      "tweet": "The global warming effects on Antarctica are varied, and these effects can have a big impact on the entire world http://tinyurl.com/yj4ptnt"
    },
    {
      "tweet": "RT @MMFA: Brain Freeze: Conservative media still using winter weather to attack  global warming http://bit.ly/9F4stp ( #p2 )"
    },
    {
      "tweet": "SEC wants climate risks disclosed | Analysis & Opinion | Reuters: The SEC now sees climate change as a risk too im... http://bit.ly/bl6VEp"
    },
    {
      "tweet": "Climate Change Roundup: From Copenhagen Accord to NOAA Climate Service http://bit.ly/d2Us1B"
    },
    {
      "tweet": "U.S. Proposes New Climate Change Service http://bit.ly/cvO6pF #green #energy"
    },
    {
      "tweet": "U.S. Proposes New Climate Change Service http://bit.ly/cvO6pF"
    },
    {
      "tweet": "Denial of global warming threat to the American pika means no protection from U.S. http://bit.ly/cLB8VF"
    },
    {
      "tweet": "http://bit.ly/10NrOO Solar energy can be used to combat climate change: Experts ... http://bit.ly/9SaIdy"
    },
    {
      "tweet": "Climate Change Roundup: From Copenhagen Accord to NOAA Climate Service:  As of January 31, the Copenhagen Accord's... http://bit.ly/bedkte"
    },
    {
      "tweet": "Looking for a way to beat his own record and quadruple the deficit next year, Obama sets up new agency for global warming propaganda"
    },
    {
      "tweet": "Or how about \"going to keep snowing in DC until @JimDeMint admits global climate change is real?\" @IMGoph @DC_Updates?"
    },
    {
      "tweet": "The lighter side of global warming? RT @marialavis From @offsetters. Bobwheeling, pushing a dream. http://3.ly/pcjf"
    },
    {
      "tweet": "Global Warming Monitoring Needs to Find 'Missing Heat', say Scientists|by David Adam Experts need to beef up ways .. http://oohja.com/xaXYM"
    },
    {
      "tweet": "Krugman makes the case for cap and trade. -- Climate Change - Building a Green Economy - NYTimes.com http://nyti.ms/axtEYy"
    },
    {
      "tweet": "RT @Tymlee: Climate change causes wolverine decline across Canada http://bit.ly/aacOb1"
    },
    {
      "tweet": "MIT Sloan Feed: How Would Climate Change Influence Society in the 21st Century?: Rajendra Pachauri describes the k... http://bit.ly/a8DS5S"
    },
    {
      "tweet": "Study assesses effects of earlier springs http://tr.im/NuV9 KB: More than 25,000 reasons to stop global warming. #eco #green"
    },
    {
      "tweet": "@agwarner maybe he wanted to use it to run peabrain-in-chief's global warming office"
    },
    {
      "tweet": "Thank you James Sniffen from UNEP for a great session on Climate Change and the UN."
    },
    {
      "tweet": "Agreed! RT @Blano RT @robpas OK -- Still pushing Health Care -- Amazing $$  Not as amazing as new global warming office BS."
    },
    {
      "tweet": "Plz #Digg & RT: GOP senator's family builds igloo to mock global warming http://bit.ly/aSAKLr ( #p2 #du1 #pgn )"
    },
    {
      "tweet": "I likes it raw GOP senator's family builds igloo to mock global warming http://bit.ly/dpUbEX"
    },
    {
      "tweet": "Chavez Blames Venezuela's Inability To Meet Basic Human Needs On El Nino And Global Warming by @vincefernando http://bit.ly/dfWkxM"
    },
    {
      "tweet": "Chavez Blames Venezuela's Inability To Meet Basic Human Needs On El Nino And Global Warming by @vincefernando http://bit.ly/cyuveh"
    },
    {
      "tweet": "Loss of faith in climate change science|Surveys show increase in number of people who believe claims are .. http://oohja.com/x6Hkb"
    },
    {
      "tweet": "Communicating Climate Change: Kate Sheppard on the Politics Beat http://bit.ly/bEU1e6 #energy"
    },
    {
      "tweet": "What's a Cheap, Easy Way to Curb Climate Change? Seal the Leaks!: ThomasNet Industrial News Room (press release) U... http://bit.ly/cyHxlD"
    },
    {
      "tweet": "Queens College geologist journeys to Antarctica to study global warming\" http://tinyurl.com/ygebryj"
    },
    {
      "tweet": "@adrian_bacon You should tweet \"climate change is a massive fraud and lie\" stuff.  It's funnier, and actually truthful.  #tcot"
    },
    {
      "tweet": "What's that smell? Oh, it's #climate change http://bit.ly/azMqYJ"
    },
    {
      "tweet": "Climate Change: Global hoax? http://bte.tc/ayxx #RTW"
    },
    {
      "tweet": "Rachel Harris- @WEDO_worldwide- Gender & Climate Change & Renata Sivacolundhu- UNDPI @UNinfo - the UN & Human Rights with AU."
    },
    {
      "tweet": "it's called global warming.. but it should be called climate flux!  12 inches of snow in NYC!! over 2ft in DC! yay!.. coat the cities white!"
    },
    {
      "tweet": "NYT: U.N. #Climate Panel & Chief Face Credibility Siege http://bit.ly/info/b4D02Y All about #global warming http://bit.ly/anyaIX"
    },
    {
      "tweet": "Excellent British film about climate change, The Age of Stupid, is on TV in America Saturday, 4/17, 10pm on Discovery channel Planet Green."
    },
    {
      "tweet": "#pr By 1pm: FoxNews.com/Gene Koprowski seeks experts re: increased federal spending for global warming research: http://bit.ly/b9tL2U"
    },
    {
      "tweet": "@robpas 230k gov't workers get day off yesterday due to blizzard on same day peabrain-in-chief announces global warming agency."
    },
    {
      "tweet": "Secondary Sources: Consumer Agency, Euro Crisis, Climate Change http://bit.ly/aLeVRk"
    },
    {
      "tweet": "FYI Global Warming, er, Global Cooling -- whatever, is effecting economic indicators - the delivery of them out of Washington that is  $$"
    },
    {
      "tweet": "New federal climate change agency forming http://bit.ly/cB3YrH #environment #eco"
    },
    {
      "tweet": "Global Warming Makes Trees Grow Faster http://bit.ly/aT4B32"
    },
    {
      "tweet": "Global Warming Makes Trees Grow Faster http://bit.ly/aT4B32"
    },
    {
      "tweet": "#Green Peoples World CLIMATE CHANGE+Earth's Rights Conf.19Apr'10 http://su.pr/1HSMF8 SouthAm Response to Copenhagen #America #brooklyn #NYC"
    },
    {
      "tweet": "Will SEC's New Interpretive Guidance Open the Door to Climate Change Disclosure Suits?\" [@kevinlacroix] http://is.gd/80WFU"
    },
    {
      "tweet": "@freedom4USA Well, Thank God for Global Warming or Washington would get more snow."
    },
    {
      "tweet": "Global Warming Monitoring Needs to Find 'Missing Heat', say Scientists http://bit.ly/9y1gp4 (CommonDreams)"
    },
    {
      "tweet": "Is Climate Change Legislation Dead in 2010? http://bit.ly/dvFhcL"
    },
    {
      "tweet": "Is Climate Change Legislation Dead in 2010? http://bit.ly/dvFhcL"
    },
    {
      "tweet": "at the recent climate change summit. So meeting with the Dalai Lama,"
    },
    {
      "tweet": "30 inches of snow in Washington.  Al Gore blames it on Global Warming."
    },
    {
      "tweet": "Ballyhooed climate change chief at UN faces severe backlash head on:http://www.nytimes.com/2010/02/09/science/earth/09climate.html?th&emc=th"
    },
    {
      "tweet": "New York: Queens College geologist journeys to Antarctica to study global warming http://bit.ly/cIm1Rq"
    },
    {
      "tweet": "RT @kharul_karyu: \"The most inconvienient truth of all: climate change & indigenous ppl\" http://su.pr/1IcaSV"
    },
    {
      "tweet": "Palin: Global Warming Just \"Snake Oil\" http://bit.ly/bcvjIi"
    },
    {
      "tweet": "Palin In NorCal:Global Warming 'Snake Oil Science'|Former Alaska Gov. Sarah Palin called studies supporting .. http://oohja.com/x6GLk"
    },
    {
      "tweet": "James Sniffen from UNEP is speaking to American University students about Climate Change and the United Nations."
    },
    {
      "tweet": "How do we solve this global warming thing? http://bit.ly/br4xLV"
    },
    {
      "tweet": "Solar energy can be used to combat climate change: Experts|NOIDA (Uttar Pradesh), Feb.9 : Solar energy can be .. http://oohja.com/x6GJQ"
    },
    {
      "tweet": "RT @asymmetricinfo: Okay, Democrats:  you promised me global warming.  If I don't get it soon, I'm voting GOP in November."
    },
    {
      "tweet": "RT @mattyglesias: Wish it were possible to make the obvious global warming jokes w/o giving aid and comfort to crazy people"
    },
    {
      "tweet": "I'm bout to start random fires all over the place to speed up this global warming shit...my carbon footprint gon be bananas!!!"
    },
    {
      "tweet": "WINTER WEATHER: Scientists say storm doesn't refute global warming|Global warming may be the last thing on the .. http://oohja.com/x6GAn"
    },
    {
      "tweet": "Obamateurism of the Day: Maybe Barack Obama hasn't read the memo yet, but anthropogenic global warming has come un... http://bit.ly/cDoUf1"
    },
    {
      "tweet": "A new federal agency to study global warming?? Just stop already!"
    },
    {
      "tweet": "New federal office for global warming|Amid the growing fight over the accuracy of climate data, President Obama .. http://oohja.com/x6GiB"
    },
    {
      "tweet": "Wtf ever happend to global warming? I could use a lil bit of that right now."
    },
    {
      "tweet": "New federal office for global warming|Amid the growing fight over the accuracy of climate data, President Obama .. http://oohja.com/x6GeN"
    },
    {
      "tweet": "Palin likens global warming studies to 'snake oil': Palin said California's heavy regulatory environment makes it ... http://bit.ly/ctOFQo"
    },
    {
      "tweet": "Administration proposes new agency to study and report on global warming|WASHINGTON - The Obama administration on .. http://oohja.com/x6G2p"
    },
    {
      "tweet": "Palin Likens Global Warming Studies To 'Snake Oil' At Redding Appearance|REDDING, Calif. -- Former Alaska Gov. .. http://oohja.com/x6FNC"
    },
    {
      "tweet": "@vaerna \"climate change\" is more accurate"
    },
    {
      "tweet": "Obama spending our Tax money 4 New Federal Climate Change Agency   http://is.gd/7YeW8 #the disingenuous Leftists Hoaxster think we're stupid"
    },
    {
      "tweet": "Palin likens global warming studies to 'snake oil' http://bit.ly/bHZ8dw #environment #eco"
    },
    {
      "tweet": "New federal office for global warming ' http://americanperspective.org/New-federal-office-for-Global-Warming.html"
    },
    {
      "tweet": "Palin: Global Warming Studies 'Snake Oil'|Former Alaska Gov. Sarah Palin called studies supporting global climate .. http://oohja.com/x6Fj7"
    },
    {
      "tweet": "NOAA Tackles Climate Change: Responding to public demand for climate change information, National Oceanic and Atmo... http://bit.ly/aIRiEU"
    },
    {
      "tweet": "NOAA Tackles Climate Change - eWeek: CBS NewsNOAA Tackles Climate ChangeeWeekResponding to public demand for clima... http://bit.ly/cDk39l"
    },
    {
      "tweet": "RT @OpenSociety: OSI \"leads the way\" in addressing poverty, open society, & climate change - Thanks @Slate! http://bit.ly/cBZlku"
    },
    {
      "tweet": "US Commerce Secretary announces plans 2 create office to inform businesses/local communities about #climate change http://ow.ly/15jMk #ESG"
    },
    {
      "tweet": "Just posted Temperature and the Allocation of Time: Implications for Climate Change http://bit.ly/95CeOL #b2p"
    },
    {
      "tweet": "RT @dcarli: \"At the Frontier: A Report on Young People & Climate Change\" UNFPA  http://bit.ly/drkNXT"
    },
    {
      "tweet": "Commentary: The Case For Climate Change Must Be Remade From The Ground Upwards|Intellpuke: This commentary was .. http://oohja.com/x6EUr"
    },
    {
      "tweet": "Global warming an Olympic worry, says Rogge|VANCOUVER- Global warming is starting to worry the International .. http://oohja.com/x6EOK"
    },
    {
      "tweet": "@metfan722 global warming has been highly overrated south of NYC this year which is EXTREMELY rare."
    },
    {
      "tweet": "Federal Climate Change Forecasting Agency Launched http://bit.ly/99Ug5U"
    },
    {
      "tweet": "F Obama administration proposes new Climate Service to examine and report on global warming •_´ YOU DECIDE: Can New Agency Deliver Relia..."
    },
    {
      "tweet": "Anatomy of the collapse of the great gobal warming scandal #global warming http://is.gd/7TByc"
    },
    {
      "tweet": "Spring begins almost two weeks earlier due to global warming, say scientists|ANIMALS and plants in the UK are .. http://oohja.com/x6Eu7"
    },
    {
      "tweet": "No time to put climate science on ice|The science of climate change has been on the defensive in recent weeks, .. http://oohja.com/x6EdW"
    },
    {
      "tweet": "NOAA to provide info on global warming|The Obama administration Monday proposed a new National Oceanic and .. http://oohja.com/x6Ec3"
    },
    {
      "tweet": "Obama Creating New Climate Change Agency http://bit.ly/cBUyzB"
    },
    {
      "tweet": "RT @DougBenson Dear Stupid People Who Think These Winter Storms Means There's No Such Thing As Global Warming, You're stupid. Love, Shut up"
    },
    {
      "tweet": "Report: Exxon Still Orchestrating Campaign to \"Undermine Public Acceptance of Global Warming\" http://bit.ly/ceX6Hi via @treehugger"
    },
    {
      "tweet": "Climate change for scaredy-cat tea partyers should be framed as: more extreme weather events need passive survivability http://bit.ly/cCUrkq"
    },
    {
      "tweet": "when does it stop?  http://www.foxnews.com/politics/2010/02/08/administration-proposes-new-agency-study-climate-change/"
    },
    {
      "tweet": "Revenue-neutral': The last hope for climate change legislation? http://url4.eu/1La5B"
    },
    {
      "tweet": "Revenue-neutral': The last hope for climate change legislation? http://url4.eu/1La54"
    },
    {
      "tweet": "Revenue-neutral': The last hope for climate change legislation? http://bit.ly/9PsIMG"
    },
    {
      "tweet": "Revenue-neutral': The last hope for climate change legislation? http://bit.ly/9PsIMG"
    },
    {
      "tweet": "RT @uncajoe: uncajoe: PLZ RT @stone_circle Climate Change: \"But wait, there's more!\": When I was ... http://bit.ly/aYMbkO ( #p2 #du1 #pgn )"
    },
    {
      "tweet": ";O  Is the US doing enough to stop global warming? presumption"
    },
    {
      "tweet": "The DC storms *prove* global warming is just a liberal plot to raise taxes. Snow is not warm...duh. (proves it!)"
    },
    {
      "tweet": "There is No Man Made Climate Crisis (Global Warming is a Hoax)  environmentalists ;P"
    },
    {
      "tweet": "Obama Administration Proposes New Agency to Study Climate Change - http://shar.es/aLs3J"
    },
    {
      "tweet": "Strange how the more Obama tries to kick start Congress, the more it snows. Maybe bipartisanship IS the cure for global warming..."
    },
    {
      "tweet": "Water at core of climate change impacts http://uk.reuters.com/article/idUKTRE61615G20100207 ^AB"
    },
    {
      "tweet": "nitwit-in-chief forms gov't global warming agency, announced today but few media able to report as follows blizzard.  http://stk.ly/ccGuOc"
    },
    {
      "tweet": "The Chilling Effect | cooling heated rhetoric on global warming ...: Energy and Environment: Around the Interwebs.... http://bit.ly/c14ZE3"
    },
    {
      "tweet": "The Republicans sure are quick! They already have an ad out attacking Climate Change, citing the recent snow storms hitting the east coast"
    },
    {
      "tweet": "#Green Peoples World Climate Change+Earth's Rights Conf.19Apr'10 http://su.pr/1HSMF8 SouthAm Response to Copenhagen  #America #brooklyn #NYC"
    },
    {
      "tweet": "Get the Facts About Global Warming, So That You Can Make an ... news today"
    },
    {
      "tweet": "The people put on TV to explain climate change should know how to explain it. #justsayin"
    },
    {
      "tweet": "U.S. Fish and Wildlife Service Says Pika Not Imperiled by Climate Change: The Obama administration has determined... http://nyti.ms/90PDbb"
    },
    {
      "tweet": "U.S. Fish and Wildlife Service Says Pika Not Imperiled by Climate Change http://nyti.ms/c6fTQ6"
    },
    {
      "tweet": "RT @iconicearth: Federal Climate Change Agency Being Formed http://bit.ly/9iXjWs #GreenParty"
    },
    {
      "tweet": ":O fishery managers New Federal Climate Change Agency Forming"
    },
    {
      "tweet": "RT @EcoInteractive: Global Warming May Warrant New Approaches To Ecosystem Restoration http://bit.ly/WarmingApproaches"
    },
    {
      "tweet": "Federal Climate Change Agency Being Formed: A new federal agency charged with reporting on climate change is being... http://bit.ly/axZiKN"
    },
    {
      "tweet": "#IT #Headlines New federal climate change agency proposed http://bit.ly/dCrWsV #USAToday"
    },
    {
      "tweet": "I really think that conservatives DO get the global climate change thing. It's just that they'll never admit that they're wrong. Assholes."
    },
    {
      "tweet": "FOXNews: Administration Proposes New Agency to Study Climate Change: A new Climate Service agency will operate wit... http://bit.ly/9s7qTH"
    },
    {
      "tweet": "@DavidCornDC That's why \"Global warming\" is another one of those phrases that should be eliminated. Purposely used to mislead now."
    },
    {
      "tweet": "Administration Proposes New Agency to Study Climate Change http://fxn.ws/aSWxtn"
    },
    {
      "tweet": "RT @HuffPostGreen: hey! wow!  New Federal Climate Change Agency Announced http://bit.ly/aybO8Z"
    },
    {
      "tweet": "RT @HuffPostGreen: hey! wow!  New Federal Climate Change Agency Announced http://bit.ly/aybO8Z"
    },
    {
      "tweet": "Obama admin starting agency to report on #climate change http://bit.ly/99EZ1A Facts to consider http://bit.ly/7c64Dh #energy #CO2"
    },
    {
      "tweet": "SEC Guidance on #climate change posted to CCCL Regulation Tracker http://bit.ly/aZKkdL"
    },
    {
      "tweet": "RT @guardianeco: From @grist: Tea Party supporters far less informed about climate change than general public http://bit.ly/cMovqD"
    },
    {
      "tweet": "Kim Cranston: Climate Change Plus West Coast = Climatopia? http://bit.ly/9Y4jaI"
    },
    {
      "tweet": "hey! wow!  New Federal Climate Change Agency Announced http://bit.ly/aybO8Z"
    },
    {
      "tweet": "There might be something to this \"global warming\" jazz people are talking about @allesegretti"
    },
    {
      "tweet": "peter m robinson YouTube - Thomas Sowell: Global Warming Manufactured by Intellectuals? ;)"
    },
    {
      "tweet": "Economists & Climate Change: Consensus and Open Questions - http://bit.ly/9b9u4v"
    },
    {
      "tweet": "Obama administration forming new agency on climate change http://tinyurl.com/yehhs9j"
    },
    {
      "tweet": "Disclosing the real risks of climate change http://ff.im/-fBj8k"
    },
    {
      "tweet": "RT @BreakingNews: Obama administration forms Climate Service, a new  agency to study and report on global warming -AP"
    },
    {
      "tweet": "RT @BreakingNews: Obama administration forms Climate Service, a new agency to study and report on global warming || Waste more $$$ Obama."
    },
    {
      "tweet": "@sugarfreeNJ Call Al Gore he will come help shovel u out from global warming"
    },
    {
      "tweet": "Plz #Digg & RT: King Coal & Big Ag Try to Outlaw Global Warming Through Reps http://bit.ly/cp0BGj ( #p2 #dnj #du1)"
    },
    {
      "tweet": "#Green SouthAm Response to Copenhagen:Peoples World Conf.Climate Change+Earth's Rights 19Apr'10 http://su.pr/1HSMF8 #America #brooklyn #NYC"
    },
    {
      "tweet": "Gawker: Scientist's Sexxxy Novel Proves 'Climate Change' Is for Sex Pervs [Books]: Number of comments: 2Rajendra P... http://bit.ly/aRpoj9"
    },
    {
      "tweet": "Any chance of some global warming?"
    },
    {
      "tweet": "I favorited a YouTube video -- Funny Politics - Global Disastrification (Global Warming Spoof) http://youtu.be/tUZRjHK8rQs?a"
    },
    {
      "tweet": "I love how the scientific community claims to know all by knowing nothing. Global warming and this autism vaccine garbage is more of this"
    },
    {
      "tweet": "What would all the beneficiaries of the global warming hype do if they find out that humans have little to do with the Earth's temp? #tcot"
    },
    {
      "tweet": "Scientist's Sexxxy Novel Proves 'Climate Change' Is for Sex Pervs [Books] http://bit.ly/9AODlg"
    },
    {
      "tweet": "RT @UN: UN defends conclusions of landmark climate change report: http://is.gd/7WkIo #UN #news"
    },
    {
      "tweet": "UN defends conclusions of landmark climate change report: http://is.gd/7WkIo #UN #news"
    },
    {
      "tweet": "OSI \"leads the way\" in addressing poverty, open society, & climate change - Thanks @Slate! http://bit.ly/cBZlku"
    },
    {
      "tweet": "Protein might help fight global warming|DENTON, Texas, Feb. 8 (UPI) -- University of North Texas scientists say .. http://oohja.com/x6CYD"
    },
    {
      "tweet": "Yachtsmen's marine paradise hit by global warming|The yachtsman's wildlife ocean paradise of the Galapagos .. http://oohja.com/x6CPN"
    },
    {
      "tweet": "Arctic climate changing fast: Climate change is transforming the Arctic environment faster than expected and accel... http://bit.ly/ckRjPW"
    },
    {
      "tweet": "George Perkins: Clean Energy Jobs Act vital to reduce global warming, create jobs, cut pollution|Dear Editor: I .. http://oohja.com/x6CG5"
    },
    {
      "tweet": "UN Climate Change Plan to Shift Industy, wealth globally? ;) fox news"
    },
    {
      "tweet": "http://bit.ly/10NrOO Climate Change Media Partnership 2009 ' Green energy strategy to ... http://bit.ly/9Yl9Az"
    },
    {
      "tweet": "Economic and Social Consequences of Global Warming  health hazards ;O"
    },
    {
      "tweet": "After blizzard, Mid-Atlantic states targeted for several more inches of global warming. http://usat.me?37459708 #tcot #teaparty #gop"
    },
    {
      "tweet": "Via Kevin Drum: Climate Change and its Discontents: I haven't been following in detail the various recent d... http://bit.ly/90qfGw ( #p2 )"
    },
    {
      "tweet": "#news Climate - Feb 8: - U.S. Defense Review Serious About Climate Change- Climate Science Under Fire- Burning the bios http://url4.eu/1L6em"
    },
    {
      "tweet": "Climate Change is Forcing Arctic Changes Faster than Expected: To be more specific, it causing changes in the Arct... http://bit.ly/99EpGQ"
    },
    {
      "tweet": "Bad Science Bad Politics http://bit.ly/ackZ8J The Death o Global Warming"
    },
    {
      "tweet": "RT @uncajoe: uncajoe: PLZ RT @stone_circle What the Media Has Done To The Global Warming Debate: ... http://bit.ly/bmlApf ( #p2 #du1 #pgn )"
    },
    {
      "tweet": "Looks like Audi is co-signing this Global Warming conspiracy... http://myloc.me/3BsUP"
    },
    {
      "tweet": "Audi's \"green police\" spot just scared the more paranoid, global-warming-isn't-real people of America."
    },
    {
      "tweet": "Addressing Global Warming: Retrain Coal Workers for Green Jobs http://bit.ly/bLcqDu"
    },
    {
      "tweet": "Brits start to doubt global warming: http://bit.ly/cEMysp via @addthis"
    },
    {
      "tweet": "David Gershon: Empowering a Climate Change Movement -- Part 3: Instead of Cursing the Dark Light a Candle http://bit.ly/duIycM"
    },
    {
      "tweet": "RT @yidwithlid: The IPCC's Latest Climate Change Blunder...To Boldly Go Where No Stupidity Has Gone Before. http://tinyurl.com/yhsp6tv #climategate  #nobama"
    },
    {
      "tweet": "RT @Lib_Berated: EPA can't finish their report on Global Warming because it was there is too much snow to go to work."
    },
    {
      "tweet": "RT @DefendGlenn: \"SCAM, SCAM, SCAM!\" EU Parliament Member Rips global Warming Hysteria http://is.gd/7Mkw4 #tcot #p2 #gop #teaparty"
    },
    {
      "tweet": "Addressing Global Warming: Retrain Coal Workers for Green Jobs http://bit.ly/c9fUuL"
    },
    {
      "tweet": "Mary Ellen Harte and John Harte: Addressing Global Warming: Retrain Coal Workers for Green Jobs http://bit.ly/chotVm"
    },
    {
      "tweet": "Mary Ellen Harte and John Harte: Addressing Global Warming: Retrain Coal Workers for Green Jobs: When Congress cre... http://bit.ly/cmw6eM"
    },
    {
      "tweet": "@jbg7474 Further, it's not 2 scientists disagreeing. The *vast* majority of scientists accepts the reality of climate change."
    },
    {
      "tweet": "Australian drought linked to climate change; more snow in E Antarctica = less rain in Oz http://bit.ly/coZ3qJ #350ppm #climate"
    },
    {
      "tweet": "Public loses faith in climate change science after leaked emails scandal - The Guardian http://bit.ly/cG3Tmp"
    },
    {
      "tweet": "Monroerising.com: Washington DC has record winter: RFK 15 Months ago predicted because of Global Warming there wil... http://bit.ly/9KgtMi"
    },
    {
      "tweet": "Public loses faith in climate change science after leaked emails scandal - The Guardian: Times OnlinePublic loses ... http://bit.ly/bpz0Rj"
    },
    {
      "tweet": "MORE SNOW- WEDNESDAY- get your global warming- get it now!"
    },
    {
      "tweet": "It May Not Be Global Warming but ... @ http://aclnk.com/ar2633313"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC | Washington Examiner: http://bit.ly/76Gtnu via @addthis"
    },
    {
      "tweet": "Hoax Fraudster RFK, Jr. 15 months ago: Global warming means no snow or cold in DC | Washington Examiner: http://bit.ly/76Gtnu"
    },
    {
      "tweet": "Olympics organisers desperate for climate change http://bit.ly/a295w8"
    },
    {
      "tweet": "Olympics organisers desperate for climate change http://bit.ly/a295w8"
    },
    {
      "tweet": "@jbg7474 The \"global warming movement\" doesn't require \"credibility\"; it's based on science. Denials are not, and lack same weight. #p2"
    },
    {
      "tweet": "Olympics organisers desperate for climate change http://url4.eu/1KvGP"
    },
    {
      "tweet": "Olympics organisers desperate for climate change http://url4.eu/1KvGL"
    },
    {
      "tweet": "Olympics organisers desperate for climate change http://bit.ly/bfn2bA"
    },
    {
      "tweet": "Olympics organisers desperate for climate change http://bit.ly/bfn2bA"
    },
    {
      "tweet": "RT @RayBeckerman: California's global-warming law Under Attack http://54i05.tk  [Age of Very Stupid]"
    },
    {
      "tweet": "California's global-warming law Under Attack http://54i05.tk"
    },
    {
      "tweet": "The great global warming collapse ' The Globe and Mail http://ff.im/-fyi0U"
    },
    {
      "tweet": "It Seems The Global Warming Hoax Is Starting To Sink In.  What Will Th"
    },
    {
      "tweet": "global warming prolly real in New York, but big scam in DC"
    },
    {
      "tweet": "Bahuguna says country will face problems due to global warming|Pune, Feb 7 : Eminent social worker Sundarlal .. http://oohja.com/x6zS5"
    },
    {
      "tweet": "I'm sick of hearing global warming crap, it's a natural thing! if we didn't exist it'd happen anyway!"
    },
    {
      "tweet": "The global warming movement as we have known it is dead,' : http://theridgewoodblog.blogspot.com/"
    },
    {
      "tweet": ":P http://bit.ly/bgxiU6 stop global warming The great global warming collapse"
    },
    {
      "tweet": "Review panel clears researchers in 'Climategate' controversy|(MCT) - Climate-change researchers accused of .. http://oohja.com/xaWMF"
    },
    {
      "tweet": "In the UK, only 1 in 4 believe climate change is happening and is caused mostly by human activity: http://bit.ly/aCXjzQ"
    },
    {
      "tweet": "Global warming phenomenon -Climate plays a far more important role in economic development:Vohra http://bit.ly/a3ZFHs"
    },
    {
      "tweet": "In Part Of Our Contribution To Reduce Global Warming, Shall We Ban The http://bit.ly/c9P8qU"
    },
    {
      "tweet": "RT @earthinstitute: State of the Planet 2010 Conference: Connecting Voices Globally to Meet the Challenges of Climate Change, Poverty... http://bit.ly/cYM4gC"
    },
    {
      "tweet": "THIS JUST OUT, OBAMA BLAMES G. BUSH FOR BLIZZARD IN WASHINGTON, SAYS THE SNOW WAS PART OF HIS FAILED POLICIES ON GLOBAL WARMING"
    },
    {
      "tweet": "RT @alancolmes: Utah State Rep: Climate Change Is Conpiracy To Control Populaton http://bit.ly/aLu2oC"
    },
    {
      "tweet": "California's global-warming law Under Attack http://54i05.tk EnvNewsNet"
    },
    {
      "tweet": "California's global-warming law Under Attack: Republican politicians and conservative activists are launching a ba... http://bit.ly/bmiGzP"
    },
    {
      "tweet": "RFK, Jr. 15 months ago: Global warming means no snow or cold in DC... http://bit.ly/bQUx9D #breaking"
    },
    {
      "tweet": "How's that Global Warming treating you? Anyone seen Al Gore? photo shows  record-breaking snow in Maryland  http://bit.ly/9HvBld"
    },
    {
      "tweet": "Global warming is man-made, top UN official reaffirms: UNITED NATIONS, Jan 7 (APP): The great weight of science st... http://bit.ly/aENnqw"
    },
    {
      "tweet": "Delusional Leftist Olympic Organisers desperate for climate change: http://bit.ly/b5oFoH #It's no surprise NBC outbid everyone for Olympics"
    },
    {
      "tweet": "RT @AmericaBlog: British Conservatives move away from climate change as election nears http://bit.ly/9UqN5F #p2"
    },
    {
      "tweet": "Horner challenges climate change data|Much of current global warming theory is based on distortions of scientific .. http://oohja.com/x6yJi"
    },
    {
      "tweet": ". al gore  BBC: Only 1-in-4 believe in man-made global warming - Daily Mail"
    },
    {
      "tweet": "Cochabama: Peoples World Conference on Climate Change and Mother Earth's Rights http://ow.ly/16w7Jz"
    },
    {
      "tweet": "Despite the sceptics, climate change must remain a priority: http://bit.ly/bGwsVu (via @EcoSteward)"
    },
    {
      "tweet": "@peterdaou Who are the 'political elites'? Editors of the Times shilling for Bush on Iraqi WMD? Members of Congress denying climate change?"
    },
    {
      "tweet": "UN climate scientist defends report: 6 (UPI) ' A United Nations scientist struck back at climate change critics Sa... http://bit.ly/9iELfk"
    },
    {
      "tweet": "@SergeGraystone How does Caprica deal with Global Warming?"
    },
    {
      "tweet": "Climate Change and Activists Won't Delay, But United Nations Will http://trim.li/nk/1JjY via @WiretapMagazine"
    },
    {
      "tweet": "RT @JosephAGallant: Global Warming Activist Freezes to Death in Antarctica http://tinyurl.com/gf3ud #tcot"
    },
    {
      "tweet": "Global warming is suspended due to the cold weather..."
    },
    {
      "tweet": "Olympic Organizers desperate for climate change... http://bit.ly/acZSeo #breaking"
    },
    {
      "tweet": "Varanasi holds fire ritual to prevent global warming|By Girish Dubey, Varanasi, Feb.6 : A large number of .. http://oohja.com/x6xrM"
    },
    {
      "tweet": "(\"Censored News\") Cochabama: Peoples World Conference on Climate Change and Mother Earth's Rights http://ow.ly/16w7Jz"
    },
    {
      "tweet": "Is global warming a plot? Mm, nah|I just love conspiracy theories. And so, apparently, does Rep. Mike Noel. The .. http://oohja.com/x6xeX"
    },
    {
      "tweet": "FOR ALL YOU LOSERS THAT INVESTED IN AL GORE'S GLOBAL WARMING SCAM, I THINK ITS TIME TO KICK HIS ASS AND GET YOUR MONEY BACK."
    },
    {
      "tweet": "From The New Album Mama Roots Global Warming http://www.youtube.com/watch?v=LA9YIpKauoI"
    },
    {
      "tweet": "Climate Change Impacts And Vulnerability In The Eastern Himalayas http://bit.ly/cDR9xJ"
    },
    {
      "tweet": "House of Peers -- By: Mark Steyn: As Jonah and I have written here previously, \"climate change\" is not only a scie... http://bit.ly/b0pzHR"
    },
    {
      "tweet": "Tell Toyota COO to Put the Brakes on Climate Change & the US Chamber http://bit.ly/aosRBN (Youth Climate Mvmt)"
    },
    {
      "tweet": "RT @Ki6AMD RT @adamcurry: LOL - If Global Warming is Real Then Why is it Cold? http://ifglobalwarmingisrealthenwhyisitcold.blogspot.com/"
    },
    {
      "tweet": "Top UN environment official defends conclusions of landmark climate change report: UN News Centre 6 February 201... http://bit.ly/9gTNcG"
    },
    {
      "tweet": "Atmospheric carbon dioxide that is causing climate change is also negatively affecting the marine environment http://bit.ly/drW0Nu ^AB"
    },
    {
      "tweet": "For those who believe global warming is in progress, please bring your warming to my front yard. I can't see out over the snow drifts. #tcot"
    },
    {
      "tweet": "@GurianPeck the GOP always finds a way to push its agenda. two crippling snowstorms in one month are in line with global CLIMATE CHANGE."
    },
    {
      "tweet": "Some Global Warming huh? You were all lied to by Al Gore... he duped you."
    },
    {
      "tweet": "I 2nd that RT @NYCAviation @BarackBorat: Can someone call the Al Gore and ask him for make turn the Global Warming back on?"
    },
    {
      "tweet": "RT @GottaLaff: Conservatives try to suspend California's global-warming law http://bit.ly/chdtXe ( #p2 #dnj #du1)"
    },
    {
      "tweet": "Utah State Rep: Climate Change Is Conpiracy To Control Populaton http://bit.ly/bR8MT6 #p2"
    },
    {
      "tweet": "BREAKING NEWS: Global warming just made Hell a little hotter"
    },
    {
      "tweet": "#FF just slightly belatedly @femmepatriot  staying warm today in the global warming? Freeeeeezin' here"
    },
    {
      "tweet": "Is climate change hiding the decline of maple syrup?: The burning of fossil fuels such as coal and oil releases ca... http://bit.ly/d5si4F"
    },
    {
      "tweet": "The great global warming collapse - http://is.gd/7PoXr - #TCOT #AGW"
    },
    {
      "tweet": "The great \"global warming\" collapse: http://bit.ly/drrEIN"
    },
    {
      "tweet": "Climate change deal marks an 'essential beginning,' Ban says ' UN News Centre\" http://tinyurl.com/yj7tzzd"
    },
    {
      "tweet": "PAPER: The great global warming collapse... http://bit.ly/dx5ri6 #breaking"
    },
    {
      "tweet": "RT @BarackBorat: Can someone call the Al Gore and ask him for make turn the Global Warming back on?"
    },
    {
      "tweet": "RT @ThinkProgress: Utah state representative claims climate change is a 'conspiracy' aimed at populat... http://bit.ly/chOhWn #p2 #du1 #dnj"
    },
    {
      "tweet": "pls RT: Tell Toyota COO to put the brakes on climate change and US CoC - Digg up this Q! http://ow.ly/14Bbn #climate #green"
    },
    {
      "tweet": "@NAOMIHITME1 I don't understand that it only snowed in parts of Brooklyn & didn't even touch the BX, global warming man!"
    },
    {
      "tweet": "Lawmaker says she was removed from panel over global warming bill concerns|A Democratic member of the Assembly .. http://oohja.com/xaVRJ"
    },
    {
      "tweet": "Climate Change Impacts And Vulnerability In The Eastern Himalayas http://bit.ly/cDR9xJ IndigPplsRsrcs"
    },
    {
      "tweet": "RT @astrosteve \"Well, Lisa, looks like I'll be shoveling four feet of global warming tomorrow!\" - Homer Simpson"
    },
    {
      "tweet": "RT @astrosteve gaaaah.. on the radio: \"Well, this blizzard proves global warming is a fraud.\" NO IT FUCKING DOESN'T."
    },
    {
      "tweet": "No snow at all here in northern NJ (near Newark) - must be a pocket of \"climate change\" :)"
    },
    {
      "tweet": "@BarackObama - dont tell me- global warming wi be a topic-ha ha!"
    },
    {
      "tweet": "Where's that global warming? Deep freeze here http://bit.ly/2wWWmQ"
    },
    {
      "tweet": "RT @newtgingrich: where is al gore to explain it snows this heavily as a sign global warming is imminent // WEATHER IS NOT CLIMATE #tcot #p2"
    },
    {
      "tweet": "According to @newtgingrich it's snowing so Al Gore must be fat or something. It's GLOBAL CLIMATE CHANGE. You might want to look that up."
    },
    {
      "tweet": "RT @toddstarnes: Dear Mr. Gore, would you mind helping to shovel the 30 inches of global warming in DC?"
    },
    {
      "tweet": "Dear Mr. Gore, would you mind helping to shovel the 30 inches of global warming in DC?"
    },
    {
      "tweet": "Lawmaker says she was removed from panel over global warming bill concerns|A Democratic member of the Assembly .. http://oohja.com/xaVNg"
    },
    {
      "tweet": "RT @TPM_dk Va. GOP Mocks Global Warming, Since, You Know, It's Snowing  http://digg.com/d31Hv3d?t"
    },
    {
      "tweet": "Rajendra Pachauri: head of UN climate change panel clocks up half a million ': Telegraph.co.uk  The embattled hea... http://bit.ly/awueLY"
    },
    {
      "tweet": "@TheCortez Global Warming causes a change in all patterns of weather. Including warmth, snow and rain"
    },
    {
      "tweet": "Great piece on the challenges of communicating climate change #energy #sustainability  http://jm.ly/VITRUR"
    },
    {
      "tweet": "Kolkata's Green Mall aims to reverse global warming|By Ajitha Menon, Kolkata, Feb. 6 : Green is in, and a mall .. http://oohja.com/x6wd5"
    },
    {
      "tweet": "Fashion: Tupperware Duds at New York Fashion Week | Avoid-Global-Warming.com: To follow all of Zuzana's Fashion Ha... http://bit.ly/9Juoag"
    },
    {
      "tweet": "Saving endangered species. Turtles due to hotels, poaching of eggs, accidental snaring in nets and global warming http://bit.ly/bPjxSF ^AB"
    },
    {
      "tweet": "The great global warming collapse|As the science scandals keep coming, the air has gone out of the climate-change .. http://oohja.com/x6w5B"
    },
    {
      "tweet": "Links 2/6/10: Climate change causes wolverine decline across Canada BBC Physicist Discovers How to Teleport Energy... http://bit.ly/bqi1Bm"
    },
    {
      "tweet": "A green birthday gift: plant 10 trees for $10, in region strategically selected to offset global warming http://br.st/01Q"
    },
    {
      "tweet": "#thankyouObama for continuing to push a climate change bill that has absolutely no credible scientific backing #tcot #p2"
    },
    {
      "tweet": "Climate Change: Dr Rajendra K. Pachauri On How Masturbation Can Save The World|A story of sex, disaster, onanism, .. http://oohja.com/x6vZh"
    },
    {
      "tweet": "RT @IzzzyGutman: Head of UN climate change panel clocks up half a million miles of air travel ' Telegraph.co.uk http://bit.ly/cs95OE"
    },
    {
      "tweet": "http://twitpic.com/11n727 - Jersey Shore Global Warming Alert #2"
    },
    {
      "tweet": "@kokomoko Global warming/climate change/unicorns are crazy things. Don't try to understand. Your betters will tell you the truth. Trust 'em."
    },
    {
      "tweet": "Yo, just a note from the great Jersey Shore, we're gettin' a good heap of Global warming at a 1/2 inch an hour. Thanks Al!"
    },
    {
      "tweet": ";P  norwegian nobel committee Time Magazine Has a Problem with the Truth about Global Warming ..."
    },
    {
      "tweet": "@Rochdalian  Maybe it's an ironic by-product of global warming. (The new Southern Snow-Belt)"
    },
    {
      "tweet": "@thatsright_95 http://twitpic.com/11n0ql - oh wow! Global warming sure is in full force!"
    },
    {
      "tweet": "http://twitpic.com/11n0ql - Global warming alert: 1:50 a.m. EST."
    },
    {
      "tweet": "@texasps Ma'am...I'm drunk bloggin' the global warming fiasco that is happening as we speak in my backyard. I LOVE SNOW! (climate change)"
    },
    {
      "tweet": "Free Reading !!! Climate Change loonies ' Standard Examiner Blogs: Still, the letters from tho... http://bit.ly/ca7Z8L mypsychicsonline.inf"
    },
    {
      "tweet": "BYU scientists refute Utah committee's global warming assertations|State lawmakers are finding themselves in an .. http://oohja.com/x6uQM"
    },
    {
      "tweet": "@infowars:dont care what they say about climate change its getting warmer fact, storms around world are getting stronger,fact!"
    },
    {
      "tweet": "@oxchris the snow should be blamed on global warming.. I mean global cooling.. I mean.. Oh you know.. It's all bull anyway!"
    },
    {
      "tweet": "Snow? IN JANUARY??? I thought with global warming I was all set, but looks like I will have to go back to the double shorts setup."
    },
    {
      "tweet": "SEC Recognizes Climate Change as Material Business Risk http://url4.eu/1KCv5"
    },
    {
      "tweet": "SEC Recognizes Climate Change as Material Business Risk http://url4.eu/1KCuu"
    },
    {
      "tweet": "SEC Recognizes Climate Change as Material Business Risk http://bit.ly/aXTBYB"
    },
    {
      "tweet": "SEC Recognizes Climate Change as Material Business Risk http://bit.ly/aXTBYB"
    },
    {
      "tweet": "RT @Lib_Berated: EPA can't finish their report on Global Warming because it was there is too much snow to go to work.//ROFLMFAO!!"
    },
    {
      "tweet": "EPA can't finish their report on Global Warming because it was there is too much snow to go to work."
    },
    {
      "tweet": "RT @wsmco: should tie a liberal global warming scum to front of every snowplow in dc. and drag morons who voted for them behind it."
    },
    {
      "tweet": "should tie a liberal global warming scum to front of every snowplow in dc. and drag morons who voted for them behind it."
    },
    {
      "tweet": "Climate Change: The Great Unraveling ..  http://americanperspective.org/climate-change-great-unraveling.html"
    },
    {
      "tweet": "Economics Must Align with Climate Change http://bit.ly/boCsqs #energy"
    },
    {
      "tweet": "Global warming is killing Canadian wolverine http://bmpost.com/8751"
    },
    {
      "tweet": "@Token12ga That's just wrong! As I told @underdad, who lives in Hawaii, weatherboarding is a climate change offense! @onetokenblack"
    },
    {
      "tweet": "Is climate change hiding the decline of maple syrup? http://bit.ly/c8lMYl"
    },
    {
      "tweet": "gop still doesn't comprehend diff btw weather & climate: rt @GottaLaff VA GOP uses blizzard to lie about climate change http://bit.ly/9KCedz"
    },
    {
      "tweet": "RT @Kennedy_School: New York Times' Andrew Revkin, AU's Matthew Nisbet, Urge Better Communication on Climate Change: http://bit.ly/csYeJ3"
    },
    {
      "tweet": "Arctic climate changing faster than expected  (Reuters): Reuters - Climate change is transforming the Arctic e... http://bit.ly/d8Sx0D"
    },
    {
      "tweet": "global warming put off until July!"
    },
    {
      "tweet": "Check out the Most popular GPS Video: Educational Video on the Environment, Global Warming & Poverty - you watch it now http://bit.ly/6SExFi"
    },
    {
      "tweet": "India Ditches UN Climate Change Group http://bit.ly/aoccoR"
    },
    {
      "tweet": "Prince Charles On Climate Change: Global Warming Skeptics Are All Liars http://bit.ly/bHljEQ"
    },
    {
      "tweet": "Conference on Food Security and Climate Change Releases ... http://bit.ly/ale43O"
    },
    {
      "tweet": "On @Slashdot : India Ditches UN Climate Change Group http://jyspq.tk"
    },
    {
      "tweet": "Prince Charles On Climate Change: Global Warming Skeptics Are All Liars http://bit.ly/dmKIml"
    },
    {
      "tweet": "The British public has become increasingly sceptical about #climate change (BBC) http://bit.ly/cWReJl via @Flipbooks #News"
    },
    {
      "tweet": "global warming http://bit.ly/dxIaFb ;P Study Says Arctic Ice Melt to Cost Global Economy $2.4 Trillion"
    },
    {
      "tweet": "RT @TelegraphNews Climate change: always room for doubt  http://bit.ly/bvCi6g"
    },
    {
      "tweet": "Important video to watch - Laurie Davids Green Guide to Stop Global Warming http://bit.ly/5xA0tB #globalwarning #green #eco #climatechange"
    },
    {
      "tweet": "Climate Change Fraud - India forms new climate change body\" http://tinyurl.com/ybdeqkk"
    },
    {
      "tweet": "RT @DefendGlenn: \"SCAM, SCAM, SCAM!\" EU Parliament Member Rips global Warming Hysteria http://is.gd/7Mkw4 #tcot #p2 #gop #teaparty"
    },
    {
      "tweet": "Global Warming-Time To Act | Video Search Engine Fooooo: NTDTV Global Chinese Dance Competition i. 07:04. Notewort... http://bit.ly/dauPuA"
    },
    {
      "tweet": "SCAM, SCAM, SCAM!\" EU Parliament Member Rips global Warming Hysteria http://is.gd/7Mkw4 #tcot #p2 #gop #teaparty"
    },
    {
      "tweet": "Deforestation can increase the global warming impacts on the earth http://tinyurl.com/yf2np2u"
    },
    {
      "tweet": "gridlock Facts brushed over by global warming fanatics  :O"
    },
    {
      "tweet": "Wolverine No Match for Climate Change:  Forget polar bears or penguins.  The charismatic megafauna suffering most ... http://bit.ly/dn0Vbg"
    },
    {
      "tweet": "If climate aid won't be additional, harder to imagine a true global carbon deal. Warming becomes one more global development problem"
    },
    {
      "tweet": "Brilliant. RT @StephenAtHome I think we can all agree this Prius disaster proves once and for all that global warming doesn't exist"
    },
    {
      "tweet": "RT @AllConcern: #enviroment: Traditional Indigenous Knowledge & Global Warming ' Stephen Leahy ... http://bit.ly/9b9Ofj"
    },
    {
      "tweet": "Global Warming Activist Freezes to Death in Antarctica http://tinyurl.com/gf3ud #tcot"
    },
    {
      "tweet": "I think we can all agree this Prius disaster proves once and for all that global warming doesn't exist /via @StephenAtHome"
    },
    {
      "tweet": "@GregWHoward Another MSM driven scientific panic. Sounds a lot like global warming."
    },
    {
      "tweet": "FRIDAY AFTERNOON IGNORANCE-OFF: Virginia GOP (snow means no global warming!) vs. Tea Party speaker (diversity is evil!) http://p-bu.mp/83l"
    },
    {
      "tweet": "Examining global warming on a Grand Valley level|The issue of global warming has been a topic of hot debate for .. http://oohja.com/x6t1E"
    },
    {
      "tweet": "http://bit.ly/10NrOO Energy and Global Warming News for February 5: How activists took ... http://bit.ly/dthmq9"
    },
    {
      "tweet": "New facility expected to clarify ecosystem responses to climate change|( DOE/Oak Ridge National Laboratory ) .. http://oohja.com/x6t0p"
    },
    {
      "tweet": "Certainty on the Science of Climate Change: 'A wait-and-see policy,' on climate change, observed Center for Americ... http://bit.ly/crQW9x"
    },
    {
      "tweet": "Virginia GOP uses snow to mock climate change and attack cap-and-trade. http://www.youtube.com/watch?v=y5A2ahIn05M"
    },
    {
      "tweet": "Positive Proof of Global Warming! [PIC]  http://tweetphoto.com/10483335"
    },
    {
      "tweet": "Positive Proof of Global Warming! [PIC]  http://tweetphoto.com/10483335"
    },
    {
      "tweet": "@hahahouser my dad does that. Everytime it snows he's like 'WHAT GLOBAL WARMING!?'"
    },
    {
      "tweet": "PHOTOS:  Precarious homes threatened by climate change: http://bit.ly/8Yir22"
    },
    {
      "tweet": "Something must be done! Moderate Increase in Global Warming Will Wipe Out Many Species http://bit.ly/7pjHIG #wildlife #green #nature #eco"
    },
    {
      "tweet": "RT @ethnosproject: Many great videos at Conversations with the Earth: Indigenous Voices \ton Climate Change: http://tinyurl.com/yjfn5nj"
    },
    {
      "tweet": "Climate Change Expert Refutes Copenhagen 'Myths' and Defends Copenhagen Accord http://bit.ly/cJNCe3"
    },
    {
      "tweet": "@AmanpourCNN China fucked with US in Climate Change, I say let them go to hell."
    },
    {
      "tweet": "Hey smartasses, GLOBAL warming, not \"insert your location which happens to be unseasonably cold for 2 seconds\" warming. Oh, meant dumbasses."
    },
    {
      "tweet": "Police question global warming 'sceptic' scientist over 'Climategate' email leak|Detectives have interviewed .. http://oohja.com/x6rRT"
    },
    {
      "tweet": "@chrisjhorn rudd seems to be on the back foot. Climate change skeptics are challenging him too."
    },
    {
      "tweet": "Laurence Tribe: climate change suits should be dismissed under political-question doctrine [Adler] http://is.gd/7KS5R"
    },
    {
      "tweet": "Climate Change and Activists Won't Delay, But United Nations Will http://bit.ly/c9OcbB (Youth Climate Mvmt)"
    },
    {
      "tweet": "Pachauri insists science behind global warming remains 'totally valid'|New Delhi, Feb 5: UN Inter-Governmental .. http://oohja.com/x6rHz"
    },
    {
      "tweet": "Pachauri insists science behind global warming remains 'totally valid'|New Delhi, Feb 5: UN Inter-Governmental .. http://oohja.com/x6rDp"
    },
    {
      "tweet": "Pachauri insists science behind global warming remains 'totally valid'|New Delhi, Feb 5: UN Inter-Governmental .. http://oohja.com/x6rBu"
    },
    {
      "tweet": "What's a Cheap, Easy Way to Curb Climate Change? Seal the Leaks!: PR Web (press release)Newark, NJ (PRWEB) Februa... http://bit.ly/cU9fiD"
    },
    {
      "tweet": "Africa And Global Warming|Lagos ? A group called The Africa Group whose spokes person is Ethiopian leader Meles .. http://oohja.com/x6qTB"
    },
    {
      "tweet": "Africa: Africa And Global Warming: A group called The Africa Group whose spokes person is Ethiopian l... http://tinyurl.com/y8fzja2 #Africa"
    },
    {
      "tweet": "India Says UN Is Central to Climate Change Talks: 5 (Bloomberg) ' India said the United Nations Framework Conventi... http://bit.ly/90tobY"
    },
    {
      "tweet": "@SexyJada770 Yeah it wil be a hell of a snow storm! What happened to global warming? LOL With luck it will by pass NYC ! :)"
    },
    {
      "tweet": "Officials back climate change science at Delhi talks - BBC News: New Zealand HeraldOfficials back climate change s... http://bit.ly/dAlwZF"
    },
    {
      "tweet": "Officials back climate change science at Delhi talks - BBC News http://bit.ly/azhGJn"
    },
    {
      "tweet": "Officials defend climate science|Officials at UN-led talks in India insist climate change science is still very .. http://oohja.com/x6qEg"
    },
    {
      "tweet": "TV ad targets Sen. Barrassos climate stand  http://bit.ly/btPM9s stop global warming"
    },
    {
      "tweet": "Global warming in the hot seat|By Keith Yost STAFF COLUMNIST In November 2009, hackers released of thousands of .. http://oohja.com/x6qsA"
    },
    {
      "tweet": "Global warming in the hot seat|By Keith Yost STAFF COLUMNIST In November 2009, hackers released of thousands of .. http://oohja.com/x6qmR"
    },
    {
      "tweet": "Climate change a scam to curb global population, Utah legislator says|-- Fact check of HJR12 points: 1. Proposed .. http://oohja.com/x6pZe"
    },
    {
      "tweet": "Guardian Daily: Climate science under siege|As the consensus on climate change comes under sustained attack .. http://oohja.com/x6pVc"
    },
    {
      "tweet": "To greens, I was worse than a child abuser ;O http://bit.ly/d2Arav global warming swindle"
    },
    {
      "tweet": "RT @tweetdrudge India to 'pull out' of UN 'global warming' panel because it 'cannot rely' on UN... http://bit.ly/dieZHR #tcot"
    },
    {
      "tweet": "News From 91.3 KUWS Walk around Lake Superior to check out global warming|A 60's something couple has decided to .. http://oohja.com/x6pFN"
    },
    {
      "tweet": "The Global Climate: Yes, Its Still Warming :) climate scientists"
    },
    {
      "tweet": "To change is not a good thing.  Ask Climate.\"  ~Michael Scott"
    },
    {
      "tweet": "Utah lawmaker Mike Noel targets global warming lawsuits|A Utah legislator who is one of the most ardent critics .. http://oohja.com/x6pbm"
    },
    {
      "tweet": "India to 'pull out' of UN 'global warming' panel because it 'cannot rely' on UN... http://bit.ly/d21xlJ #breaking"
    },
    {
      "tweet": "#news How to talk to your friends about climate change: I have found solace in the words of Dmitry Orlov and many other http://url4.eu/1JxMp"
    },
    {
      "tweet": "Video: Fuel for Climate Change Skeptics: The UN's climate chief admitted scientists made mistakes in a major study... http://bit.ly/dyFhdY"
    },
    {
      "tweet": "This is not good news :( CO2 May Cause Even More Global Warming Than Originally Thought http://bit.ly/7NdFRn #eco #green #globalwarming"
    },
    {
      "tweet": "Utah Legislature may tell EPA global warming not proven|Salt Lake (ABC 4 News) - Resolution questioning global .. http://oohja.com/x6p0S"
    },
    {
      "tweet": "Enlisting a drug discovery technique in the battle against global warming|Scientists in Texas are reporting that .. http://oohja.com/x6oUM"
    },
    {
      "tweet": "Federal agency denies endangered species protections for tiny pika|Climate change might be hurting some .. http://oohja.com/x6oUC"
    },
    {
      "tweet": "Pika Denied Protection By U.S. Fish And Wildlife Service: SALT LAKE CITY ' Climate change might be hurting some po... http://bit.ly/asuI2d"
    },
    {
      "tweet": "RT @lifesizepaprdol: Ensure the Participation of Indigenous Peoples in UN Climate Change Policies: http://is.gd/buDZb"
    },
    {
      "tweet": "Pika Denied Protection By U.S. Fish And Wildlife Service: SALT LAKE CITY ' Climate change might be hurting some po... http://bit.ly/bXtsH5"
    },
    {
      "tweet": "Climate change is leading to a decrease in Canada's wolverine population. Which joke to make? http://p-bu.mp/83d"
    },
    {
      "tweet": "Video: Fuel for Climate Change Skeptics http://bit.ly/92nL1d"
    },
    {
      "tweet": "@adrian_bacon By the way, you tweet \"pro\" climate change BS, and you don't care \"one way or the other?"
    },
    {
      "tweet": "Big Biz Study says US voters prefer Carbon Tax 2 to 1 over Cap & Trade as policy option to address climate change: http://bit.ly/acOuxi"
    },
    {
      "tweet": "Video: Climate Change Is a Clear and Present Danger: Christopher Field, Ph.D., is the director of the Department o... http://bit.ly/c0gD4x"
    },
    {
      "tweet": "Wolverine No Match for Climate Change http://bit.ly/aEPlsm"
    },
    {
      "tweet": "mixed metaphors from @planetizen: Global Warming? It's All About Land Use http://bit.ly/c8unbr via @drgrist"
    },
    {
      "tweet": "50 Tips to reduce Global Warming | Global Warming: 50 Tips to reduce Global Warming Actually we do not require rad... http://bit.ly/dareYR"
    },
    {
      "tweet": "House committee seeks to keep global warming laws out of Utah|Utah lawmakers want to send a strong message to the .. http://oohja.com/x6nRC"
    },
    {
      "tweet": "Wondering if I am going to get stuck in DC due to the expected 2 feet of snow. Where are you, global warming?? #fb"
    },
    {
      "tweet": "http://www.scientificamerican.com/article.cfm?id=green-roof-climate-change-mitigation Sci Amer: Data Supports Green Roof Use"
    },
    {
      "tweet": "House committee seeks to keep global warming laws out of Utah|Utah lawmakers want to send a strong message to the .. http://oohja.com/x6nKH"
    },
    {
      "tweet": "RT @thejoshuablog: RT @MMFA: Ignoring previous  claims by experts, RedState attacks DHS for citing climate change as national ... http://bit.ly/aXIWtV ( #p2 )"
    },
    {
      "tweet": "Tennis Great Star Billie Jean King encourages everyone to take mass transit, a great way to help fight climate change http://bit.ly/4HQkIJ"
    },
    {
      "tweet": "RT @zanieladie: East Coast is going to get pounded with snow again. Stupid global warming!"
    },
    {
      "tweet": "East Coast is going to get pounded with snow again. Stupid global warming!"
    },
    {
      "tweet": "RT @vcnaa: RT @ru2cool2care: New vid on Climate Change & Indigenous Peoples!! http://is.gd/7HOam by @dakotarene @redman0380 Robby Romero"
    },
    {
      "tweet": "RT @MMFA: Ignoring previous  claims by experts, RedState attacks DHS for citing climate change as national ... http://bit.ly/aXIWtV ( #p2 )"
    },
    {
      "tweet": "Solar Radiation Management: Dr. Strangelove?s Fix for Global Warming|Ever hear of Solar Radiation Management? No, .. http://oohja.com/x6mVY"
    },
    {
      "tweet": "@yintercept Under Obama, probably not...unless it's used to tie up global warming deniers."
    },
    {
      "tweet": "It's interestig to see Twitter chatter moving away from climate change and toward employment/economy among green folks."
    },
    {
      "tweet": "@adrian_bacon PS: now unions can promote climate change all the way up2 election day--how did SCOTUS hurt climate change?"
    },
    {
      "tweet": "124 Toyota Prius' have had break failures leading to a $2 billion recall. Tried to slow global warming but couldn't stop, what a shame."
    },
    {
      "tweet": "Africa: Continent Gets U.S.$29.72 Billion to Combat Climate Change http://bit.ly/9eW0iZ"
    },
    {
      "tweet": "#Africa2day Africa: Continent Gets U.S.$29.72 Billion to Combat Climate Change: Developed countries have set... http://tinyurl.com/ygynf5c"
    },
    {
      "tweet": "Africa: Continent Gets U.S.$29.72 Billion to Combat Climate Change: Developed countries have set asid... http://tinyurl.com/ygynf5c #Africa"
    },
    {
      "tweet": "I do love seeing ice chunks in the East River. It's like our little Earth is just fighting global warming tooth and nail."
    },
    {
      "tweet": "Florida Agencies Issue Global Warming Red Alerts http://bit.ly/cwrgor"
    },
    {
      "tweet": "Penn State To Investigate Scientist Over Global Warming Controversy|Penn State University will investigate a .. http://oohja.com/x6myY"
    },
    {
      "tweet": "Predicting future climate change through sediments http://bit.ly/b27X1s #science #research"
    },
    {
      "tweet": "Predicting future climate change through sediments http://bit.ly/b27X1s #environment #eco"
    },
    {
      "tweet": "Predicting future climate change through sediments http://bit.ly/b27X1s #energy #green"
    },
    {
      "tweet": "We take climate change seriously & as a business, we hold ourselves responsible for our impact. Learn how:  http://ow.ly/13Oho"
    },
    {
      "tweet": "How Climate-Change Fanatics Corrupted Science -- Michael Barone -- GOPUSA - http://shar.es/aNasC"
    },
    {
      "tweet": "Lawmakers spar over $43M for EPA's climate change programs|Sen. ?- More -? .. http://oohja.com/x6mgY"
    },
    {
      "tweet": "US Supreme Court Undermines Climate Change Legislation http://bit.ly/9gsphA #solar"
    },
    {
      "tweet": "RT @DIGGatomicpoet: Please Digg: Forests are growing faster driven by climate change http://bit.ly/c4NCxG"
    },
    {
      "tweet": "Climate Change seems to drive accelerated growth in trees says Smithsonian Environmental Research Center; a good thing? http://bit.ly/cCoBvM"
    },
    {
      "tweet": "@adrian_bacon OMG, free speech!  Maybe if there was more of it, you would know climate change is a complete lie."
    },
    {
      "tweet": "Canada's Wolverine Population Declines As Result Of Climate Change http://bit.ly/cmzQdj"
    },
    {
      "tweet": "Canada's Wolverine Population Declines As Result Of Climate Change: The wolverine, a predator renowned for its str... http://bit.ly/aLvmF3"
    },
    {
      "tweet": "Fight against drugs and climate change top priority in EU-Peru agenda http://idek.net/10gj via @LivingInPeru"
    },
    {
      "tweet": "Climate change causes wolverine decline across Canada http://bit.ly/bsVEVW"
    },
    {
      "tweet": "@dluxkoshertours re: where is the global warming? If anyone would have found it,  it would be you.  where havent you looked yet?"
    },
    {
      "tweet": "RT @blogdiva: RT @NavyNews: Global warming on Navy radar. \"New\" normal for the Arctic is to be not completely frozen. New normal? http://bit.ly/9uFZaj"
    },
    {
      "tweet": "RT @NavyNews: Global warming on Navy radar. \"New\" normal for the Arctic is to be not completely frozen. New normal? http://bit.ly/9uFZaj"
    },
    {
      "tweet": "is freezing outside.  Where in the world is Global Warming?"
    },
    {
      "tweet": "Debunking the Deniers of Global Warming, page 1   http://bit.ly/a14V1W global warming swindle"
    },
    {
      "tweet": "The green debate goes tribalGiles Wilkes|Climate change believers and sceptics are two sides of the same coin ? .. http://oohja.com/x6lzO"
    },
    {
      "tweet": "U.N. Climate Chief Defends Panel's Global Warming Findings|Yvo de Boer acknowledged that some mistakes were made .. http://oohja.com/x6lto"
    },
    {
      "tweet": "Global Warming Petition Project:  http://bit.ly/9nrzkm"
    },
    {
      "tweet": "CLIMATE CHANGE:   European Firms See Windfall in Renewable Energy: BERLIN, Feb 3 (IPS) - European governments fail... http://bit.ly/bnGFSn"
    },
    {
      "tweet": "Global warming research grant in danger of fund freeze|A top member of Congress wants President Obama to freeze .. http://oohja.com/x6lbe"
    },
    {
      "tweet": "The Changing Climate of Climate Change: To all intents and purposes, there are no realistic prospects of a treaty ... http://bit.ly/c8eccf"
    },
    {
      "tweet": "RT @ericbolling Global Warming Update...cont....Major Winter Storm-&gt; http://www.accuweather.com/regional-news-story.asp?region=eastusnews"
    },
    {
      "tweet": "Global Warming Update...cont....Major Winter Storm-&gt; http://www.accuweather.com/regional-news-story.asp?region=eastusnews"
    },
    {
      "tweet": "Global warming update: Maj storm will impact much of the US  \".DC, Bal, Phi, NY.These cities received 2 to 4 times their norm snowfall.\" ..."
    },
    {
      "tweet": "Global warming update: Major winter storm will impact much of the U.S. **note \"...D.C., Balt, Phil, NYC...These... http://bit.ly/b4LO7d"
    },
    {
      "tweet": "Lord Smith warns climate change argument has been undermined by 'climategate'|The fight to tackle climate change .. http://oohja.com/x6kU8"
    },
    {
      "tweet": ";P http://bit.ly/dAuSjA global warming solutions Innovation has climate change in hand"
    },
    {
      "tweet": "How to Shape a Global Approach to Climate Change: More Davos, Less Denmark: Only one month after the Copenhagen co... http://bit.ly/aUl3C2"
    },
    {
      "tweet": "RT @NSF: \"Missing\" Heat May Affect Future Climate Change: Current observational tools cannot account for roughly half.. http://bit.ly/bGlz82"
    },
    {
      "tweet": "How to Shape a Global Approach to Climate Change: More Davos, Less Denmark: Only one month after the Copenhagen co... http://bit.ly/bD6LOA"
    },
    {
      "tweet": "How to Shape a Global Approach to Climate Change: More Davos, Less Denmark http://bit.ly/aZdAoI"
    },
    {
      "tweet": "Abbott's climate change policy: live chat with environment reporter Adam Morton: Logically, power generators are o... http://bit.ly/9qVMiR"
    },
    {
      "tweet": "Global Warming: Rajendra Pachauri Orders Asbestos For Fires|GlacierGate, AmazonGate, ClimateGate and now Rajendra .. http://oohja.com/x6knj"
    },
    {
      "tweet": "Obama Battles to Keep Global Warming, Biofuels Initiatives on Track|Amid doubts about climate change legislation, .. http://oohja.com/x6kgG"
    },
    {
      "tweet": "RT @mongabay: Climate Change and the Amazon Rainforest: http://bit.ly/cVzrVa"
    },
    {
      "tweet": "Go Green Toolshed ' Blog Archive ' Global Warming Is Crap! http://bit.ly/cWXiUt"
    },
    {
      "tweet": "Watching 'Joseph D'Aleo Full Interview on Global Warming Hoax' at Vodpod http://bit.ly/cW6QJ8"
    },
    {
      "tweet": ".@cracked This article doesn't actually get really scary until you read all the \"global warming is a myth!\" comments. http://bit.ly/9HufIZ"
    },
    {
      "tweet": "RT @EcoPreservation: Climate change causes wolverine decline across Canada http://bit.ly/WolverineDecline"
    },
    {
      "tweet": "RT @sejorg: RT @ecopolitologist: IPCC Chief Speaks to Indian Univ re Climate Change Skeptics, Glaciergate & Treaties http://bit.ly/bwkGDU"
    },
    {
      "tweet": "NYTimes: California Sets Up Statewide Network to Monitor Global-Warming Gases http://s.nyt.com/u/eDY"
    },
    {
      "tweet": "Global warming good for trees|WASHINGTON - GLOBAL warming is good news for trees, which are thriving in higher .. http://oohja.com/x6iZ9"
    },
    {
      "tweet": "Will the Separation of Powers Kill Climate Change Action in the U.S.?: I promised a post on the State of the Union... http://bit.ly/bN61FV"
    },
    {
      "tweet": "Will the Separation of Powers Kill Climate Change Action in the U.S.?: I promised a post on the State of the Union... http://bit.ly/a3BuXT"
    },
    {
      "tweet": "Liked \"Global warming coming to Jerusalem?\" http://ff.im/-fm4nj"
    },
    {
      "tweet": "Will the Separation of Powers Kill Climate Change Action in the U.S.? http://bit.ly/cpTU1K"
    },
    {
      "tweet": "Any\" = legitimate efforts by scientists to mislead and missrepresent their global warming findings. I haven't heard any implications yet."
    },
    {
      "tweet": "UN climate boss defends record: Rajendra Pachauri, the embattled chairman of the UN climate change panel, lashed o... http://bit.ly/9svquJ"
    },
    {
      "tweet": "@vballr4life7 too whiche lie or distortion of the truth are you referring? The congressional perks or global warming?"
    },
    {
      "tweet": "GLOBAL WARMING IS A FAIRY TALE! http://tinyurl.com/krwusz Dick Chaney didn't drive an SUV 200,000 years ago, maybe?"
    },
    {
      "tweet": "IPCC Chief Pachauri Speaks to Indian Univ About Climate Change Skeptics, Glaciergate & Treaties http://bit.ly/bwkGDU via @ecopolitologist"
    },
    {
      "tweet": "Latinos, African Americans Willing to Pay More to Slow Climate Change http://bit.ly/9nKfi0"
    },
    {
      "tweet": "GLOBAL WARMING IS A FAIRY TALE! http://tinyurl.com/krwusz"
    },
    {
      "tweet": "Equity climate change: THE near-•_£40billion jolt to Britain's top quoted companies earlier this week - amid worries... http://bit.ly/9ScPe0"
    },
    {
      "tweet": "Put end to the stupid global warming crap, ask perverts to explain the time between ice ages? George and Dick driving SUV's i suppose!"
    },
    {
      "tweet": "#insurance #insure New climate change report rates political and regulatory environments as top concerns http://bit.ly/c0YmiC"
    },
    {
      "tweet": "@algore you are such a cocksucker. global warming is fake you should be put in prison. stop trying to push your lies on America."
    },
    {
      "tweet": "Sen. Lindsey Graham: 'I care equally about immigration and climate change': I'll sit down with my c.. http://bit.ly/bCFage"
    },
    {
      "tweet": "Who's worried about sea levels rising from Global Warming? Al Gore buys $8.8 million ocean-view villa... http://su.pr/2de5Ru"
    },
    {
      "tweet": "Climate change increases heat waves, floods: EPA: WASHINGTON (Reuters) - Deaths from heat waves, property da... http://tinyurl.com/2wry7p2"
    },
    {
      "tweet": "Spain offers '45 million to the UN climate change Adaptation Fund | Oxfam In.. http://retwt.me/1N0VJ (via @Global_Updaid)"
    },
    {
      "tweet": "RT @peterrothberg Earth to Congress: The current climate change legislation threatens to do more harm than good. http://is.gd/buqqC"
    },
    {
      "tweet": "Spain offers '45 million to the UN climate change Adaptation Fund | Humanitar.. http://retwt.me/1N0NY (via @HumanityNews)"
    },
    {
      "tweet": "Resilience to climate change in western Kenya | Humanitarian News http://retwt.me/1N0Md (via @AidNews)"
    },
    {
      "tweet": "EU, China agree closer links on climate change | Humanitarian News http://retwt.me/1N0De (via @NewsOnGreen)"
    },
    {
      "tweet": "Have you stolen our global warming? RT @Janetski it's so damn hot for Holland: 78'F!!!"
    },
    {
      "tweet": "Making Climate Change an Issue in the UK Elections | Humanitarian News http://retwt.me/1N0yA (via @NewsOnGreen)"
    },
    {
      "tweet": "The Cochabamba Protocol: People's Agreement on Climate Change and the Rights o.. http://retwt.me/1N0sa (via @NewsOnGreen)"
    },
    {
      "tweet": "Veterans organization says climate change a security threat | SCNow http://retwt.me/1N0pM (via @politext)"
    },
    {
      "tweet": "Plan now for climate change, says researcher &gt; FOODweek Online &gt; Main Features Page http://retwt.me/1N0l7 (via @FOODweek)"
    },
    {
      "tweet": "Advisory Group on Energy and Climate Change Launches Report http://bit.ly/c8h5CR #UN"
    },
    {
      "tweet": "Robin Hood goes digital to fight climate change and poverty - Techvibes Blog http://retwt.me/1N0dz (via @techvibes)"
    },
    {
      "tweet": "Earth to Congress: The current climate change legislation threatens to do more harm than good. http://is.gd/buqqC #p2 #climatechange"
    },
    {
      "tweet": "Irony Deficient: WaPo 'On Faith' Frets About Climate Change | NewsBusters.org http://retwt.me/1N0cE (via @BestBlogPosts)"
    },
    {
      "tweet": "Heather Taylor-Miesle: CLIMATE CHANGE CANNOT WAIT | Humanitarian News http://retwt.me/1N0bK (via @NewsOnGreen)"
    },
    {
      "tweet": "These guys just make me sick @CO2HOG  Reid set to move on climate change bill -- before immigration... http://bit.ly/aoBxJI #tcot"
    },
    {
      "tweet": "Combating climate change: lessons from the world's indigenous peoples | Quix.. http://retwt.me/1N08t (via @quixotecenter)"
    },
    {
      "tweet": "RT @Doc_0: Charlie Crist, 2010: my independent candidacy is a result of mental illness caused by global warming."
    },
    {
      "tweet": "New EPA Report: 24 Climate Change Indicators in the United States (via @epagov tha.. http://retwt.me/1N07z (via @ddimick)"
    },
    {
      "tweet": "EPA says climate change is causing storms, heat waves http://bit.ly/c0HVjk"
    },
    {
      "tweet": "Climate Change Indicators in the United States http://retwt.me/1N01Z (via @OceanLeadership)"
    },
    {
      "tweet": "Climate Change Science: Data Collection on Global Warming | Sustainablog http://retwt.me/1MZZ3 (via @sustainablog)"
    },
    {
      "tweet": "Some cool mind maps about global warming http://bit.ly/cNrt7V #climate"
    },
    {
      "tweet": "Amsterdam- Business leaders convene to address global climate change | Humani.. http://retwt.me/1MZXI (via @HumanityNews)"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change: The E.P.A. releases a glossy report to help Americans make sense of clima... http://bit.ly/aQlc9o"
    },
    {
      "tweet": "Lorraine Whitmarsh and Irene Lorenzoni on behaviour, perception and communication of climate change: http://xrl.us/bhjkvq"
    },
    {
      "tweet": "Is climate change South Asia's deadliest threat? http://bit.ly/95Ug42 - what do you think?  #climate #asia"
    },
    {
      "tweet": "Kerry to move ahead on climate change bill: WASHINGTON ' Three days after climate change legislation lost its top ... http://bit.ly/d8YdFJ"
    },
    {
      "tweet": "Plaid Cymru - London Parties Ignoring Climate Change http://bit.ly/cRMya3 #news #breaking #tv #business #media #politics"
    },
    {
      "tweet": "USA: Weekly Climate Change Policy Update - April 26, 2010  http://tinyurl.com/393qyyl"
    },
    {
      "tweet": "Examining climate change and national security: http://bit.ly/drVgvF"
    },
    {
      "tweet": "Semi-Believable Evidence that Climate Change Causes Earthquakes and Volcanoes - -.. http://retwt.me/1MZye (via @GOODfeed)"
    },
    {
      "tweet": "RT @2BlueStarMom, Global Warming & Profiteering in the Obama Administration http://digg.com/u1Uam8, #tcot, #right, #rightblogs, #teaparty"
    },
    {
      "tweet": "Bolivia People's Conference on Climate Change: Another world is possible | Oxfam Int.. http://retwt.me/1MZqt (via @Oxfam)"
    },
    {
      "tweet": "Climate Change Laws Pose Challenges, Opportunities for Agriculture | UANews.org http://retwt.me/1MZmE (via @UofA)"
    },
    {
      "tweet": "Climate change bill shouldn't fall victim to immigration reform http://retwt.me/1MZll (via @BUEnetwork)"
    },
    {
      "tweet": "#insurance #insure RIMS: Winning Risk Managers' Minds on Climate Change http://bit.ly/a3SX7X"
    },
    {
      "tweet": "RT @vermontaigne How about #vageruption? http://www.redstate.com/vladimir/2010/04/27/huffpo-global-warming-causes-volcanoes/"
    },
    {
      "tweet": "Lisa P Jackson, EPA, S Most Ignorant BLACK WOMAN besides Michelle Obama, seen in long time! Global Warming HAs Been DEBUNKED STUPID 'HO!"
    },
    {
      "tweet": "@khokanson it's global warming"
    },
    {
      "tweet": "What Climate Change Means for the Wine Industry | Wired Science | Wired.com http://retwt.me/1MZ7U (via @scienceRSS)"
    },
    {
      "tweet": "Why immigration reform is getting more traction than climate change in the.. http://retwt.me/1MZ1Y (via @NobleFreshEnerg)"
    },
    {
      "tweet": "Green Party: Climate Change - Only Greens Have Answers http://bit.ly/bn7kyW #news #tv #business #media #politics"
    },
    {
      "tweet": "Why climate change will make your allegeries worse, http://su.pr/16aLt5"
    },
    {
      "tweet": "Impacts of climate change and how native people are responding ' Coast Salish Gather.. http://retwt.me/1MYW7 (via @NWIFC)"
    },
    {
      "tweet": "RT @BizRoundtable BRT's Climate RESOLVE, SEE Change initiatives help biz develop tangible sustainability solutions http://bit.ly/9elZqB"
    },
    {
      "tweet": "RT @BizRoundtable BRT's Climate RESOLVE, SEE Change initiatives help biz develop tangible sustainability solutions http://bit.ly/9elZqB"
    },
    {
      "tweet": "PEOPLES AGREEMENT ' World People's Conference on Climate Change and the Rig.. http://retwt.me/1MYQY (via @disturbedwater)"
    },
    {
      "tweet": "Crossroads's Blog | Interview: Fighting Climate Change With PB&J: http://bit.ly/dw8IaF via @addthis"
    },
    {
      "tweet": "BBC News - Election 2010: Parties do battle over climate change http://retwt.me/1MYPb (via @bbcpolitics)"
    },
    {
      "tweet": "It's Climate Change Day today! ' Ask the Climate Question http://retwt.me/1MYNE (via @GreenAllianceUK)"
    },
    {
      "tweet": "Kent News - Arctic adventurers get set to study climate change http://retwt.me/1MYL6 (via @ExplorersClub)"
    },
    {
      "tweet": "Graham backs out of climate-change coalition http://bit.ly/a73y8J #TCOT"
    },
    {
      "tweet": "More Global Warming Profiteering by Obama Energy Official: http://bit.ly/doR1ye via @addthis"
    },
    {
      "tweet": "Bolivia 'people's conference' calls for system change, not climate change | Grist http://retwt.me/1MYm1 (via @GroenWerkt)"
    },
    {
      "tweet": "Graham's exit from talks puts climate change bill in limbo http://bit.ly/c7I58s"
    },
    {
      "tweet": "Tories 'could put climate change agreement at risk' - UK Politics, UK - The I.. http://retwt.me/1MYfv (via @IndyPolitics)"
    },
    {
      "tweet": "Obama Politics: Pushing Immigration Reform, Sidelining Climate Change http://bit.ly/9G3QXX"
    },
    {
      "tweet": "In new blow to climate change Russia's top weatherman: winter now drawing to a close in Siberia may turn out to be the coldest on record"
    },
    {
      "tweet": "Political Climate Change ' The Speakers Lobby http://retwt.me/1MYd8 (via @foxheadlines)"
    },
    {
      "tweet": "Letters: Day for the climate change question | Humanitarian News http://retwt.me/1MY8S (via @HumanityNews)"
    },
    {
      "tweet": "Tories 'could put climate change agreement at risk' | Humanitarian News http://retwt.me/1MY87 (via @NewsOnGreen)"
    },
    {
      "tweet": "Letters: Day for the climate change question | Environment | The Guardian http://retwt.me/1MY7L (via @moraqeb)"
    },
    {
      "tweet": "Drilling and Climate Change http://goo.gl/fb/12i3C #energy"
    },
    {
      "tweet": "Deep ocean current off Antarctica found - Climate Change- msnbc.com http://retwt.me/1MY7t (via @stevesilberman)"
    },
    {
      "tweet": "The White House wants churches to advance its climate change agenda. - KOSMOSNET.. http://retwt.me/1MY6g (via @KOSMOSNET)"
    },
    {
      "tweet": "Obama's climate change agenda in turmoil | Raw Story http://retwt.me/1MY2U (via @greychampion)"
    },
    {
      "tweet": "Last chance for climate change legislation? | Humanitarian News http://retwt.me/1MY0z (via @HumanityNews)"
    },
    {
      "tweet": "You and Us and Me - Developing nations: Climate change treaty in 2010 (AP) http://retwt.me/1MXZW (via @NewsOnGreen)"
    },
    {
      "tweet": "BBC lectures us incessantly on climate change. So why did their bosses make 68,0.. http://retwt.me/1MXRQ (via @KOSMOSNET)"
    },
    {
      "tweet": "An oceanic 'fast-lane' for climate change : Nature News http://retwt.me/1MXRP (via @SmartLife4U)"
    },
    {
      "tweet": "Developing nations: Climate change treaty in 2010 (AP) | Humanitarian News http://retwt.me/1MXPf (via @NewsOnGreen)"
    },
    {
      "tweet": "Climate Change Fraud - Cap-and-Trade Treason http://retwt.me/1MXLV (via @ccfeditor)"
    },
    {
      "tweet": "Passing Any Legislation At All Will Kill the Climate Change Bill ' Ned Resnikoff http://retwt.me/1MXKu (via @resnikoff)"
    },
    {
      "tweet": "The winds of climate-change http://goo.gl/fb/r0QcD #energy"
    },
    {
      "tweet": "Lieberman: \"Allegations Of Partisan Politics\" Derailed Climate Change Bill - Hartfor.. http://retwt.me/1MXH6 (via @N_E_I)"
    },
    {
      "tweet": "Decision Time ' UK Election & Climate Change ' It's Getting Hot In Here http://retwt.me/1MXEH (via @IGHIH)"
    },
    {
      "tweet": "Last chance for climate change legislation? (The Christian Science Monitor) |.. http://retwt.me/1MXw3 (via @HumanityNews)"
    },
    {
      "tweet": "FUCK CLIMATE CHANGE REULATORS! THERE IS NO SCIENCE TO VALIDATE THE RULES OR REGULATIONS! GET FUCKED & ENJOY!"
    },
    {
      "tweet": "LINDSAY GRAHAMNEEDS THE DICK PULLED OuT OF HIS ASS RE CLIMATE CHANGE REGULATION! DUMBASS SC SENATOR NEEDS A HORSE FUCKING!"
    },
    {
      "tweet": "CLIMATE CHANGE REGULATION IS A STUPID THOUGHT & WASTE OF TIME! BEEN DISPROVED BY ONES WHO INITIATED HYPOTHOSYS! IDIOTS!"
    },
    {
      "tweet": "FUCK LINDSAY GRAHAM, RINO, 4 PULLING OuT OF CLIMATE CHANGE REGULATION! DICKHEAD KNEW IT WAS DEAD! Any excuse to abandon support!"
    },
    {
      "tweet": "Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was put on... http://bit.ly/aU3aYJ"
    },
    {
      "tweet": "Climate Change REgulation is ABSOLUTE POLITAICAL SUICIDE! REPORTS, SCIENCE & DATA ALL CONCUR THAT CLIMATE CHANGE IS IMAGINARY!"
    },
    {
      "tweet": "Fuck Lindsay Graham & John Kerry on the Climate Change Law! Have they not been Reading the Astute Reaffirmations that it is BUNK SCIENCE?!"
    },
    {
      "tweet": "South Africa hosts talks on climate change - news aggregated by newzfor.me - .. http://retwt.me/1MXrU (via @contentcross)"
    },
    {
      "tweet": "Too many sceptics in BBC's climate change reporting' says 'independent' 'exp.. http://retwt.me/1MXrg (via @ClimateDepot)"
    },
    {
      "tweet": "The Church of Climate Change -- By: Yuval Levin | Humanitarian News http://retwt.me/1MXr8 (via @HumanityNews)"
    },
    {
      "tweet": "Every night the BBC lectures us on climate change. So why did their bosses mak.. http://retwt.me/1MXpK (via @newspapers_)"
    },
    {
      "tweet": "Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was put on... http://bit.ly/8ZRaLt"
    },
    {
      "tweet": "Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was put on... http://bit.ly/aRp44k"
    },
    {
      "tweet": "Last and best shot' at climate change bill hangs by a thread - The Hill's E2.. http://retwt.me/1MXlS (via @GreenBucksCo)"
    },
    {
      "tweet": "Climate bill placed on hold over Senate dispute (AP): AP - Long-awaited climate change legislation was put on... http://bit.ly/9ZzowZ"
    },
    {
      "tweet": "Key Senator on Climate Change Rips Reid for Shifting Fo... - http://fwix.com/a/13_0dcda84635"
    },
    {
      "tweet": "Last and best shot' at climate change bill hangs by a thread - The Hill's E2.. http://retwt.me/1MXk6 (via @iswanTheHill)"
    },
    {
      "tweet": "The current climate change legislation threatens to do more harm than good. http://bit.ly/cQOM4B"
    },
    {
      "tweet": "Democratic leader moves immigration bill ahead of climate change as a Senate .. http://retwt.me/1MXk5 (via @washexaminer)"
    },
    {
      "tweet": "Climate bill placed on hold over Senate dispute: Sen. John Kerry says he's placing his long-awaited climate-change... http://bit.ly/diECx2"
    },
    {
      "tweet": "Reid Says He's Committed to Passing Climate Change and Immigration Reform Th.. http://retwt.me/1MXjl (via @jslconsulting)"
    },
    {
      "tweet": "Kerry On Climate Change Hiccup -- 'We're Pressing Forward' | TPM LiveWire http://retwt.me/1MXid (via @cbellantoni)"
    },
    {
      "tweet": "Graham Threatens to Pull Energy Bill Sponsorship: Senator Lindsey Graham, a central architect of a climate change ... http://bit.ly/apKGSC"
    },
    {
      "tweet": "Last chance for climate change legislation? / The Christian Science Monitor - CSMo.. http://retwt.me/1MXh5 (via @xalfeed)"
    },
    {
      "tweet": "Immigration Decision Endangers Climate Change Bill: Filed under: Senate, House, Democrats, Republicans, Barack Oba... http://bit.ly/bFsj7x"
    },
    {
      "tweet": "FOXNews.com - Key Senator on Climate Change Rips Reid for Shifting Focus to I.. http://retwt.me/1MXg1 (via @foxheadlines)"
    },
    {
      "tweet": "You and Us and Me - Climate Change: Whale Poop To The Rescue! http://retwt.me/1MXeC (via @NewsOnGreen)"
    },
    {
      "tweet": "You and Us and Me - Or Maybe The Dems Will Abandon Climate Change http://retwt.me/1MXcy (via @NewsOnGreen)"
    },
    {
      "tweet": "Professor Steven Cohen writes on weather vs. climate change. http://bit.ly/cUNzKL"
    },
    {
      "tweet": "Warming Wins Global Warming War #environment http://bit.ly/bR83ol"
    },
    {
      "tweet": "Climate scientist sues newspaper for 'poisoning' global warming debate #green http://bit.ly/cpFnbL"
    },
    {
      "tweet": "Biased BBC: Newswatch on Climate Change Coverage http://retwt.me/1MXbp (via @mcgeneral)"
    },
    {
      "tweet": "Growing number of British farmers not feeling climate change: survey - Topix http://retwt.me/1MX9f (via @SoilScience)"
    },
    {
      "tweet": "Climate Change Blog: California Academy of Sciences http://retwt.me/1MX7W (via @calacademy)"
    },
    {
      "tweet": "memeorandum: Climate change legislation unlikely this year, say sources (CNN) http://retwt.me/1MX7h (via @memeorandum)"
    },
    {
      "tweet": "The Good News About the Very Bad News (About Climate Change) - GOOD Blog - GOOD http://retwt.me/1MX3l (via @pmbaird)"
    },
    {
      "tweet": "You and Us and Me - On the frontline of climate change | Joseph Huff-Hannon http://retwt.me/1MX2H (via @NewsOnGreen)"
    },
    {
      "tweet": "Putting people first ' Psychology, climate change and sustainable behaviour http://retwt.me/1MWXW (via @vanderbeeken)"
    },
    {
      "tweet": "Global Warming Causes Earthquakes. Suuuuure it does. http://bit.ly/cNxTud #TCOT"
    },
    {
      "tweet": "Favorites Groups I'm in (because of the irony) Global-warming-frauds and Douchebags-nuff-said -- I love you too"
    },
    {
      "tweet": "On the frontline of climate change | Joseph Huff-Hannon | Comment is free | gua.. http://retwt.me/1MWUR (via @CifAmerica)"
    },
    {
      "tweet": "Climate Change: Resources on the affects of climate change on human health http://retwt.me/1MWSX (via @NLM_SIS)"
    },
    {
      "tweet": "Ice-covered volcanoes may answer climate change questions - latimes.com http://retwt.me/1MWLs (via @LATimesscience)"
    },
    {
      "tweet": "PHOTO OF THE DAY: A polar bear in Nunavut. It is listed as threatened & faces critical danger due to global warming. http://bit.ly/aCiaE3"
    },
    {
      "tweet": "PHOTO OF THE DAY: A polar bear in Nunavut. It is listed as threatened & faces critical danger due to global warming. http://bit.ly/aCiaE3"
    },
    {
      "tweet": "Climate Change Legislation Now Off the Agenda http://retwt.me/1MWBq (via @pwire)"
    },
    {
      "tweet": "Video: Dem Congressman: Climate Change Is a National Security Issue http://bit.ly/aBvRIB #TCOT"
    },
    {
      "tweet": "Top Line' -- NFL's Dhani Jones on Climate Change: 'Important for Me to Act' - The.. http://retwt.me/1MWyt (via @thenote)"
    },
    {
      "tweet": "The good news about the very bad news (about climate change) | Grist http://retwt.me/1MWwN (via @EnvironUpdates)"
    },
    {
      "tweet": "Beyond Climate Change: The ecological threat that's bigger than climate change http://retwt.me/1MWqV (via @pspraycar)"
    },
    {
      "tweet": "Evo Morales: Don't shut out developing nations from climate change negotia.. http://retwt.me/1MWjt (via @nathanielsmusic)"
    },
    {
      "tweet": "Impacts of Climate Change Extend to Human Health: Scientific American http://retwt.me/1MWj2 (via @penstopaper)"
    },
    {
      "tweet": "Video: Evo Morales opens climate change conference in Tiquipaya | Environment | gua.. http://retwt.me/1MWae (via @buyeco)"
    },
    {
      "tweet": "Leaders' debate: Who gave the best answer on climate change? | Environment | guard.. http://retwt.me/1MW9A (via @moraqeb)"
    },
    {
      "tweet": "Climate Change Ethics: where to start? ' OECD Insights Blog http://retwt.me/1MW9z (via @OECD)"
    },
    {
      "tweet": "Third of farmers hit by climate change - 23/04/2010 - Farmers Weekly http://retwt.me/1MW6e (via @sebastiangiraud)"
    },
    {
      "tweet": "World News Australia - Whale poo may help fight climate change http://retwt.me/1MW5r (via @SBSNews)"
    },
    {
      "tweet": "Nice. A reasonable challenge to the global warming hype:  http://bit.ly/9E8oHK  #tcot #p2 #earthday"
    },
    {
      "tweet": "@abc13weather Watching this 'Climategate' special on ABC. Do you believe global warming is nothing more than a cyclical pattern? #curious"
    },
    {
      "tweet": "BMI Special Report: Networks Hide the Decline in Credibility of Climate Change S.. http://retwt.me/1MVW1 (via @johnnyA99)"
    },
    {
      "tweet": "Scientists' use of computer models to predict climate change is under attack  - http://is.gd/bj35N"
    },
    {
      "tweet": "The global warming hoax? Houston expert talks climate alarmist pollution - CultureMap - http://tinyurl.com/3yjklo8 #houston"
    },
    {
      "tweet": "Having publicly bought the Global Warming lie some stay loyal, like Lindsay Graham. Others R paid by Al Gore or just stupid."
    },
    {
      "tweet": "Climate Change Debate: Climatologists, Meteorologists Divided on Global Warmi.. http://retwt.me/1MVQy (via @ABCWorldNews)"
    },
    {
      "tweet": "Acidic oceans worsening, experts warn - Climate Change- msnbc.com http://retwt.me/1MVNU (via @savemyearth)"
    },
    {
      "tweet": "The Tories are all about branding, not substance on climate change | The Labou.. http://retwt.me/1MVMc (via @labourpress)"
    },
    {
      "tweet": "RT @traciskene: On Earth Day, if Al Gore sees his shadow, we have six more weeks of climate change."
    },
    {
      "tweet": "NPRA: Carbon fee on fuels doesn't help flawed climate change plan: http://bit.ly/9iByKV"
    },
    {
      "tweet": "Sea-change in climate change regulation may be too good to be true: http://bit.ly/caUnvZ"
    },
    {
      "tweet": "Treating Climate Change as a Curable Disease - news aggregated by newzfor.me - fee.. http://retwt.me/1MVC3 (via @LinkWex)"
    },
    {
      "tweet": "In honor of #EarthDay, here is a brochure from 1992 about Global Warming - http://peity.imgur.com/global_warming_1992"
    },
    {
      "tweet": "Global Warming:  Next Chapter http://96wdl.tk EnvNewsNet"
    },
    {
      "tweet": "Special Report: Networks Hide the Decline in Credibility of Climate Change Scie.. http://retwt.me/1MVx0 (via @EarthAdapt)"
    },
    {
      "tweet": "@Scratch5151Morning. Too bad about the cold and snow. That's global warming for ya."
    },
    {
      "tweet": "RT @JamesColumbiaMO: Global Warming movement is a fraud. When U have 2 fudge the data 2 prove yr hypothesis, that isn't science. #tcot"
    },
    {
      "tweet": "RBS faces climate change protests | Business | guardian.co.uk http://retwt.me/1MVrk (via @guardianeco)"
    },
    {
      "tweet": "Understanding climate models - what are EMICs? http://xrl.us/bhh8uo Susanne Weber explains in this WIREs Climate Change Advanced Review"
    },
    {
      "tweet": "Climate change increasing poverty and vulnerability in Ethiopia http://retwt.me/1MVqR (via @rural_pr)"
    },
    {
      "tweet": "Paul Loeb: 'Soul Of A Citizen': Jesus And Climate Change -- The Journey Of Evangelical Leader... http://huff.to/a75WNH via: @HuffingtonPost"
    },
    {
      "tweet": "Buying carbon offsets may ease eco-guilt but not global warming http://tinyurl.com/y68s8pj #bobsyouruncle"
    },
    {
      "tweet": "RT @iamReGGo: #EarthDay has been going on since the 70's yet Global Warming is continuing to depreciate the Earth..we Gotta Do Better!"
    },
    {
      "tweet": "Volcano climate change. 21 Apr 2010. Rural Online. (Australian Broadcasting.. http://retwt.me/1MV7c (via @ABCEnvironment)"
    },
    {
      "tweet": "Global Warming:  Next Chapter: For those in the American Northeast last winter was rugged and fairly cold.  Yet wh... http://bit.ly/dpKCgh"
    },
    {
      "tweet": "I am Ban Ki Moon and I just worried about climate change. #idol #stupidness"
    },
    {
      "tweet": "Put an end to the stupid global warming crap, ask perverts to explain the time between ice ages? George and Dick driving SUV's i suppose!"
    },
    {
      "tweet": "GLOBAL WARMING IS A FAIRY TALE! http://tinyurl.com/krwusz #bobsyouruncle"
    },
    {
      "tweet": "LIVE from the front line of climate change - Luis Rojas tells us how climate change is impacting his community http://oneclimate.net/bolivia"
    },
    {
      "tweet": "Cochabamba, the Water Wars and Climate Change http://retwt.me/1MUU4 (via @democracy_now)"
    },
    {
      "tweet": "Video: Larry Brilliant on the volcano and climate change - Boing Boing http://retwt.me/1MUTe (via @tokyomango)"
    },
    {
      "tweet": "Fear Of Flying: Climate Change And Air Travel | Planetizen http://retwt.me/1MUOa (via @thegoodhuman)"
    },
    {
      "tweet": "Can Federal Courts help tackle Global Warming? http://bit.ly/bvu0pv [via @Slate] #eco"
    },
    {
      "tweet": "The Most Important Event in the Struggle Against Climate Change\" - Nigerian.. http://retwt.me/1MUKa (via @democracy_now)"
    },
    {
      "tweet": "Evo Morales Opens Climate Change Conference in Tiquipaya http://retwt.me/1MUHR (via @democracy_now)"
    },
    {
      "tweet": "Why is climate change more popular online than in the traditional press? http://bit.ly/aoyMa7 #climate #agw"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters) http://nxy.in/hioja"
    },
    {
      "tweet": "Confirmed! Global warming  http://bit.ly/bYBYqe via @AddToAny"
    },
    {
      "tweet": "NASA's Gift to Earth: A Climate Change Supercomputer: Just in time for Earth Day, a new NASA data-... http://bit.ly/dbrh6B (Via @inhabitat)"
    },
    {
      "tweet": "NASA Earth Exchange Program Uses Supercomputer to Improve Climate Change Re.. http://retwt.me/1MUGd (via @stevebchambers)"
    },
    {
      "tweet": "Focus Article: Municipal level climate change policy  in China and the US - Peter Koehn explains all http://xrl.us/bhhtiw"
    },
    {
      "tweet": "CNSNews.com - Only One-Third of Americans Believe Climate Change is Caused by .. http://retwt.me/1MUAG (via @Westwatcher)"
    },
    {
      "tweet": "Interactive: Climate change experts reveal their hopes and fears | Environment | guar.. http://bit.ly/9fizcx (via @nusuk)"
    },
    {
      "tweet": "Hard hitting documentry on climate change effects in Bolivia: http://bit.ly/dredC4"
    },
    {
      "tweet": "USA: Climate Change Policy Update - April 19, 2010  http://tinyurl.com/y4vdg8m"
    },
    {
      "tweet": "Global Warming: What Are The Chances? http://bit.ly/bcRSFx #TCOT"
    },
    {
      "tweet": "GLOBAL WARMING IS A FAIRY TALE! http://tinyurl.com/krwusz"
    },
    {
      "tweet": "RT @dailygalaxy Ash from Iceland's Volcano Sweeping Across Europe: Are Volcanoes Being Triggered by Global Warming http://bit.ly/d0hgNX #p2"
    },
    {
      "tweet": "Attractive Nuisance: Should Judges Help Tackle Climate Change? | Wired Scienc.. http://retwt.me/1MUjh (via @wiredsci_rss)"
    },
    {
      "tweet": "Inconvenient Youth is the new one-stop-shop for teens fighting climate change | M.. http://retwt.me/1MUgl (via @MNNDaily)"
    },
    {
      "tweet": "Tune in to the Live Webcast on Global Climate Change Issues | Humanitarian News http://retwt.me/1MU96 (via @HumanityNews)"
    },
    {
      "tweet": "Actress Q'orianka Kilcher on Climate Change Activism: Public Figures and Celebr.. http://retwt.me/1MU1N (via @brinefeeds)"
    },
    {
      "tweet": "Ask the ministers: take part online in the climate change and energy election deba.. http://retwt.me/1MTXi (via @moraqeb)"
    },
    {
      "tweet": "News Flash - Global Warming Solved - Icelandic volcanic eruption spews ash to lower earth's temperature"
    },
    {
      "tweet": "Lib Dems 'get' climate change (but do the sums add up?) | Left Foot Forward http://retwt.me/1MTNQ (via @leftfootfwd)"
    },
    {
      "tweet": "Global Warming: Climate Scientists Investigate Lost Heat http://bit.ly/a43WPr [via @TIME] #news"
    },
    {
      "tweet": "Don't ask TV weathercasters about global warming - http://fwix.com/a/13_d0fa886aaf"
    },
    {
      "tweet": "Indigenous People take over mining firm in the wake of Climate Change conference :.. http://retwt.me/1MTDH (via @prekazi)"
    },
    {
      "tweet": "Ten Most Wanted\" Plants Inspected for Clues to Climate Change http://retwt.me/1MTBp (via @RangerRickMag)"
    },
    {
      "tweet": "Alpha Phi Alpha Takes on Climate Change and Energy Efficiency | Black Politi.. http://retwt.me/1MTAS (via @blackpolitics)"
    },
    {
      "tweet": "A Necessary Reflection on the Climate Change Meeting in Bolivia | Media Co-op http://retwt.me/1MTAk (via @dawn_)"
    },
    {
      "tweet": "Beavers Sign up to Fight Effects of Climate Change | Global Warming | DISCOVER.. http://retwt.me/1MTzA (via @DiscoverMag)"
    },
    {
      "tweet": "STATE DEPT DECLARES: Global warming unequivocal & primarily human-induced'... Vs. \"Poll: 4 out of 5 Americans don't trust Washington"
    },
    {
      "tweet": "http://www.prisonplanet.com/knee-jerk-no-fly-ban-discredits-global-warming-alarmists.html Knee-Jerk No Fly Ban Discredits"
    },
    {
      "tweet": "Serious question: Will environmentalists still blame humans for climate change after this volcano? http://bit.ly/bsNUQW"
    },
    {
      "tweet": "Capitalism and Climate Change http://bit.ly/aRzOsJ"
    },
    {
      "tweet": "@MikeG1 'climate change' would increase CO2. Coffee trees love CO2. So no worries, global warming won't kill coffee."
    },
    {
      "tweet": "Tweetdeck is frozen... there is no global warming. #p2"
    },
    {
      "tweet": "@cspanwj Read the military report on climate change if you don't believe in it."
    },
    {
      "tweet": "RT @LATimesgreen Foes of California's global warming law pour money into a campaign to delay it http://goo.gl/fb/Mn3Q8"
    },
    {
      "tweet": "Ask the ministers: climate change and energy election debate | Politics | guar.. http://retwt.me/1MTdA (via @guardianeco)"
    },
    {
      "tweet": "Ask Pablo: What Impact Will The Volcano In Iceland Have On Climate Change? : T.. http://retwt.me/1MTbh (via @moneyflower)"
    },
    {
      "tweet": "World People's Conference On Climate Change http://retwt.me/1MTa6 (via @climatecamp)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "World People's Conference on Climate Change & The Rights of Mother Earth Photographs - .. http://retwt.me/1MSYN (via @kk)"
    },
    {
      "tweet": "Can capitalism fix climate change? | Links International Journal of Sociali.. http://retwt.me/1MSXJ (via @LinksSocialism)"
    },
    {
      "tweet": "The Great Beyond: Can climate change make the bed rock? http://retwt.me/1MSUP (via @flyingsaucerJ)"
    },
    {
      "tweet": "You and Us and Me - UNFCCC Kyoto Protocol and Climate Change http://retwt.me/1MSRh (via @NewsOnGreen)"
    },
    {
      "tweet": "Paul Rogat Loeb: 'Soul Of A Citizen' EXCERPT: 'From Drunken Party Girl To Climate Change Activist' - http://bit.ly/9yYIM2 #p2"
    },
    {
      "tweet": "Video: common distortions by climate change deniers ' exposed | frogblog http://retwt.me/1MSPR (via @NZGreens)"
    },
    {
      "tweet": "Bolivia climate change talks to give poor a voice | Humanitarian News http://retwt.me/1MSLG (via @HumanityNews)"
    },
    {
      "tweet": "Warming could wake up volcanoes: A thaw of ice caps in coming decades caused by climate change may trigger more vo... http://bit.ly/agMwia"
    },
    {
      "tweet": "Bolivia climate change talks to give poor a voice | Environment | The Guardian http://retwt.me/1MSL1 (via @Earth_News)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Bring Indigenous Voices into the Conversation About Climate Change http://retwt.me/1MSxg (via @TonyMackGD)"
    },
    {
      "tweet": "You and Us and Me - Architects to design 'green communities' vs climate change http://bit.ly/dcD6fN (via @NewsOnGreen)"
    },
    {
      "tweet": "Climate change, green energy talks on tap at Earth Day events http://bit.ly/apjuo0"
    },
    {
      "tweet": "Nuclear energy: no solution to climate change By Mark Diesendorf http://retwt.me/1MSue (via @Seano6t1hf)"
    },
    {
      "tweet": "Missing' heat may affect future climate change | Humanitarian News http://retwt.me/1MSsH (via @NewsOnGreen)"
    },
    {
      "tweet": "A #Green SouthAmerican Perspective http://su.pr/34aUAe on Climate Change #Cochabamba #Latism @DancingSparrow @KetyE @LanceRios #LatAm"
    },
    {
      "tweet": "Prospects for coordinated global action on climate change ' BraveNewClimate http://retwt.me/1MSqx (via @BraveNewClimate)"
    },
    {
      "tweet": "Global warming: Salving our conscience at the expense of the poor: Here in the US, we began using coal in industri... http://bit.ly/bhd05C"
    },
    {
      "tweet": "Feel free to doubt climate change: just don't deny it | Humanitarian News http://retwt.me/1MSlS (via @NewsOnGreen)"
    },
    {
      "tweet": "Global warming: Salving our conscience at the expense of the poor: Here in the US, we began using coal in industri... http://bit.ly/95dKC7"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "You and Us and Me - Feel free to doubt climate change: just don't deny it http://retwt.me/1MSkB (via @NewsOnGreen)"
    },
    {
      "tweet": "Critics of President Obama and his Climate Change bill......another earthquake just strikes Papua New Guinea.....TRUST Obama"
    },
    {
      "tweet": "Missing Heat Build-up May Affect Future Climate Change | Humanitarian News http://retwt.me/1MSip (via @NewsOnGreen)"
    },
    {
      "tweet": "Feel free to doubt climate change: just don't deny it | Environment | The Obser.. http://retwt.me/1MSik (via @EcoSteward)"
    },
    {
      "tweet": "Is this the end of migration? - Climate Change, Environment - The Independent http://retwt.me/1MShX (via @terriferic)"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? http://goo.gl/fb/6I5xc #cleantech"
    },
    {
      "tweet": "Spanish Companies Waking Up to the Call of Climate Change ' CSR International http://retwt.me/1MSfU (via @CSRint)"
    },
    {
      "tweet": "Volcanoes Cause Climate Change ' Watts Up With That? http://retwt.me/1MScB (via @wattsupwiththat)"
    },
    {
      "tweet": "Climate change issue to dominate talks at Saarc Summit | Asian Tribune http://retwt.me/1MSaW (via @Asian_Tribune)"
    },
    {
      "tweet": "The 'evil twin' of climate change | Al Jazeera Blogs http://retwt.me/1MSav (via @AJEnglish)"
    },
    {
      "tweet": "Cochabamba Summit Offers New Approach to Combating Climate Change ' SpeakEasy http://retwt.me/1MS7k (via @TMCMemberFeed)"
    },
    {
      "tweet": "Girl On The Right ' Blog Archive ' Climate Change: Making it up as they go along http://retwt.me/1MS6X (via @RightGirl)"
    },
    {
      "tweet": "Weekly Mulch: Cochabamba Summit to Combat Climate Change Innovatively | Blog N.. http://retwt.me/1MS5u (via @BlogNewsWeb)"
    },
    {
      "tweet": "From Drunken Party Girl to Climate Change Activist | The LA Progressive http://retwt.me/1MS17 (via @DickandSharon)"
    },
    {
      "tweet": "@Allochthonous I tend to think that climate change is a RESULT of these processes."
    },
    {
      "tweet": "@Allochthonous What bugs me is the media suggests that climate change is driving these processes and many assume anthropogenic causes."
    },
    {
      "tweet": "@KetyE @BeingLatino Can't wait 4 ur Tweets http://su.pr/34aUAe World People's Conf.on Climate Change+MotherEarth Rights #Cochabamba #Green"
    },
    {
      "tweet": "State of the Birds* Report Shows Climate Change Impacts to Wetland, G... | Hu.. http://retwt.me/1MRPg (via @NewsOnGreen)"
    },
    {
      "tweet": "New Zeal: \"Climate Change\" Scamsters to go Global http://retwt.me/1MRP2 (via @Erudite_Enigma)"
    },
    {
      "tweet": "Politics of Climate Change http://retwt.me/1MROg (via @agungabb)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Climate change and the rights of Mother Earth | Indian Country Today | Archive http://retwt.me/1MRJv (via @indiancountry)"
    },
    {
      "tweet": "Markey presses coal CEOs on climate change denialism, future of the industry i.. http://retwt.me/1MRC7 (via @NewsOnGreen)"
    },
    {
      "tweet": "New strategy for Senate's climate bill leaves out global warming: Global warming policy is no longer driving compr... http://bit.ly/bY2slm"
    },
    {
      "tweet": "From tobacco to climate change, 'merchants of doubt' undermined the science .. http://retwt.me/1MRxy (via @ThePhoenixSun)"
    },
    {
      "tweet": "Weekly Mulch: Cochabamba summit to combat climate change innovatively | rabble.ca http://retwt.me/1MRuy (via @rabbleca)"
    },
    {
      "tweet": "Cochabamba and Climate Change: Another Summit, Another Try http://retwt.me/1MRqO (via @Care2)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "CLIMATE CHANGE-BOLIVIA: In Defence of Pachamama - IPS ipsnews.net http://retwt.me/1MRoS (via @ipsnews)"
    },
    {
      "tweet": "Reuters AlertNet - Climate change migration could complicate polio eradica.. http://retwt.me/1MRon (via @alertnetclimate)"
    },
    {
      "tweet": "Coalition of the Tired of Waiting: Fighting Climate Change at Ground Level | .. http://retwt.me/1MRgp (via @GreenIsTweet)"
    },
    {
      "tweet": "A Central Unsolved Mystery of Climate Change: Where is Earth's 'Missing' Heat? http://retwt.me/1MRgo (via @new_headline)"
    },
    {
      "tweet": "Obama says China can't 'wait' on climate change http://bit.ly/bODZIi"
    },
    {
      "tweet": "Tea Party supporters far less informed about climate change than general pu.. http://retwt.me/1MRaY (via @EnvironUpdates)"
    },
    {
      "tweet": "18th-century climate change: The summer of acid rain | The Economist http://retwt.me/1MR7P (via @EuropaSurvey)"
    },
    {
      "tweet": "HEAD OF MARKETING AND CAMPAIGNS - new national campaign on climate change j.. http://retwt.me/1MR7z (via @GJobsmarketing)"
    },
    {
      "tweet": "Climate Change: Mystery of the \"missing heat\" in earth's energy balance (via @NSF .. http://retwt.me/1MR4e (via @ddimick)"
    },
    {
      "tweet": "RT @MichaelLemonick: Why climate change will be good for makers of anti-allergy meds: http://tinyurl.com/y2zhsve"
    },
    {
      "tweet": "Google climate change chief wants price on carbon | Humanitarian News http://retwt.me/1MR42 (via @HumanityNews)"
    },
    {
      "tweet": "Google climate change chief wants price on carbon | Environment | guardian.co.uk http://retwt.me/1MQZF (via @climatenews)"
    },
    {
      "tweet": "All 30 Major League Baseball Teams Throw Curve to Climate Change Deniers http://bit.ly/cejlto"
    },
    {
      "tweet": "@guardianeco ALL 3 PARTIES HAVE NOT PLACED ENOUGH EMPHASIS ON THIS ASPECT OF CLIMATE CHANGE IN THEIR RELEVANT MANIFESTOS."
    },
    {
      "tweet": "Report: Allergy Season to Get Worse with Climate Change (Time.com) | Humanita.. http://retwt.me/1MQTs (via @HumanityNews)"
    },
    {
      "tweet": "Missing' heat may affect future climate change http://retwt.me/1MQTn (via @stephanbecker)"
    },
    {
      "tweet": "Tea Party Supporters Far Less Informed About Climate Change than the General Pu.. http://retwt.me/1MQQ0 (via @enviroknow)"
    },
    {
      "tweet": "Steven Pearlstein - Congress worked out health care. Is climate change next? http://retwt.me/1MQOE (via @TimSchmitz)"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Climate Change Worldviews http://bit.ly/crNvZ3"
    },
    {
      "tweet": "Senators prepare compromise climate change bill http://goo.gl/fb/gdk2b #cleantech"
    },
    {
      "tweet": "Volcano could mean cooling, acid rain - Climate Change- msnbc.com http://retwt.me/1MQJk (via @_bradpitt)"
    },
    {
      "tweet": "RT @TheClimateDesk: Journalism teamwork experiment: On Mon 4/19,  news orgs join forces to explore climate change. @TheClimateDesk"
    },
    {
      "tweet": "IPCC Chief Dr Pachauri Speaks About Climate Change Skeptics, 'Glaciergate' a.. http://retwt.me/1MQHh (via @ecopolitology)"
    },
    {
      "tweet": "Missing' heat may affect future climate change http://retwt.me/1MQGw (via @physorg_space)"
    },
    {
      "tweet": "Allergies really bad this season? You should blame Global Warming - http://bit.ly/c7z75N [via @TIME]"
    },
    {
      "tweet": "Report: Allergy Season to Get Worse with Climate Change. NWF found global warming will likely increase pollen count. http://bit.ly/cuz46U"
    },
    {
      "tweet": "#prediction Time to investigate the socialist, Democrat  political manipulation of global warming data. FInes and jail time to follow"
    },
    {
      "tweet": "Vertical Growing spaces. | Climate Change Adaptation Strategy http://retwt.me/1MQv9 (via @MayorOfLondon)"
    },
    {
      "tweet": "Allergies worse? Climate change could be culprit, study finds - Green House - US.. http://retwt.me/1MQrr (via @wendykoch)"
    },
    {
      "tweet": "Houston Chronicle: 'The heat goes on: After a blitz by climate change skep.. http://retwt.me/1MQpP (via @climateprogress)"
    },
    {
      "tweet": "Can a Book on Geoengineering Change the Climate Conversation? http://bit.ly/duPO2X"
    },
    {
      "tweet": "Align your business strategy with climate change laws: Get #Carbon ready with Ernst & Young's help: http://ow.ly/1yPlb #energy @EYnews"
    },
    {
      "tweet": "The heat goes on: After a blitz by climate change skeptics, hard science vi.. http://retwt.me/1MQnu (via @MichaelStryder)"
    },
    {
      "tweet": "All 30 Major League Baseball Teams Throw Curve to Climate Change Deniers : C.. http://retwt.me/1MQlk (via @cleantechnica)"
    },
    {
      "tweet": "Climate change is not a terrorist matter | Henry Porter | Comment is free .. http://retwt.me/1MQk9 (via @guardianscience)"
    },
    {
      "tweet": "Obama: China Must Act Soon on Climate Change - CBS News http://retwt.me/1MQj8 (via @moraqeb)"
    },
    {
      "tweet": "RT @WTFSexFacts: Scientists say global warming will cause the world's oceans to rise 5 feet. This can mean only one thing - Justin Bieber is going to drown."
    },
    {
      "tweet": "Obama says in TV interview that `we can't allow China to wait' on tackling climate change. [AP #news]"
    },
    {
      "tweet": "Exposing Global Warming Crapola http://www.climatedepot.com"
    },
    {
      "tweet": "No matter if you believe in global warming or not, we can all do our part to live better and save money/resources:  http://eca.sh/UBkN"
    },
    {
      "tweet": "Farmers at the frontline of climate change http://xrl.us/bhg8dv"
    },
    {
      "tweet": "We the people will now speak! on Climate Change and Rights of our Mother Earth http://retwt.me/1MQ6b (via @WWF_Climate)"
    },
    {
      "tweet": "Climate Change Report | No Deliberate Malpractice | University of East Anglia's C.. http://bit.ly/bzF8Ee (via @IndyaNews)"
    },
    {
      "tweet": "RT @WTFSexFacts: Scientists say global warming will cause the world's oceans to rise 5 feet. This can mean only one thing - Justin Bieber is going to drown."
    },
    {
      "tweet": "Worldchanging: Bright Green: Stabilizing Climate Change and Keeping Oil in t.. http://retwt.me/1MQ3B (via @Worldchanging)"
    },
    {
      "tweet": "Energy News: Energy headlines: Police quiz climate change sceptics ' FT BP to press on with Canada o... http://bit.ly/d7EwrD #energy #GARP"
    },
    {
      "tweet": "Energy headlines: Police quiz climate change sceptics ' FT BP to press on with Canada oil sands plan ' FT UK inq... http://bit.ly/d7EwrD"
    },
    {
      "tweet": "Snowmen picketing in lethbridge at Rick Cassons office over climate change. | Twee.. http://retwt.me/1MQ25 (via @watsond)"
    },
    {
      "tweet": "RT @WTFSexFacts: Scientists say global warming will cause the world's oceans to rise 5 feet. This can mean only one thing - Justin Bieber is going to drown."
    },
    {
      "tweet": "@LilBitSassy Can you say global warming!..hmpft lol!"
    },
    {
      "tweet": "Greenway Communique: Climate Change in Skiing Adverts http://retwt.me/1MPXA (via @nathanschock)"
    },
    {
      "tweet": "Global Warming: Next Chapter http://bit.ly/aV0LDf #globalwarming"
    },
    {
      "tweet": "RT @TheClimateDesk: Climate change hive mind? Starting Mon 4/19, news orgs team up to explore the impacts of our warming planet"
    },
    {
      "tweet": "USA: ASTM Releases E2718-10: Standard Guide for Financial Disclosures Attributed to Climate Change http://tinyurl.com/y3dlwjm"
    },
    {
      "tweet": "Energy News: Vattenfall's CEO on clean energy, and not being a 'lone wolf' on climate change: Lars Jo... http://bit.ly/bPKwzC #energy #GARP"
    },
    {
      "tweet": "Vattenfall's CEO on clean energy, and not being a 'lone wolf' on climate change: Lars Josefsson, who this week ste... http://bit.ly/bPKwzC"
    },
    {
      "tweet": "Climate change legislation being worked in the \"back rooms\" right now?  Been too quiet"
    },
    {
      "tweet": "(Vacancy) Climate Change Professionals | Humanitarian News http://retwt.me/1MPtL (via @HumanityNews)"
    },
    {
      "tweet": "Lighthouse keepers' logbooks shed light on climate change - The Scotsman http://retwt.me/1MPsH (via @scotsmannews)"
    },
    {
      "tweet": "Feeling the Heat Down Under When it Comes to Climate Change | Humanitarian News http://retwt.me/1MPht (via @NewsOnGreen)"
    },
    {
      "tweet": "Photojournalism at World People's Conference on Climate Change and the Rights of Mother.. http://retwt.me/1MPhq (via @kk)"
    },
    {
      "tweet": "Nice. RT @cubachi Update with video: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO"
    },
    {
      "tweet": "RT @MelissaTweets: RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO #awesome"
    },
    {
      "tweet": "RT @MelissaTweets: RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO #awesome"
    },
    {
      "tweet": "RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO #awesome"
    },
    {
      "tweet": "Some Republicans Say Open to US Climate Change Bill: Some prominent Republican senators expressed openness Tuesday... http://bit.ly/ax5G14"
    },
    {
      "tweet": "http://www.telegraph.co.uk/earth/environment/climatechange/7578966/UN-process-in-danger-unless-world-agrees-on-climate-change.html"
    },
    {
      "tweet": "http://dprogram.net/2010/04/12/leaked-u-s-document-calls-for-%e2%80%9cglobal-regime%e2%80%9d-to-tackle-climate-change/ Leaked U.S. Document"
    },
    {
      "tweet": "http://www.infowars.com/leaked-u-s-document-calls-for-global-regime-to-tackle-climate-change/ U.S. Document Calls For 'Global Regime'"
    },
    {
      "tweet": "Using case studies to research the impact of climate change on vulnerable communities-overview of the hows whats & whys http://xrl.us/bhguwc"
    },
    {
      "tweet": "Tory candidates won't sign up to climate change or new politics | Left Foot Fo.. http://retwt.me/1MOIE (via @leftfootfwd)"
    },
    {
      "tweet": "Climate change scientists turn to Inuits for research http://bit.ly/cT03Mg (via @gemswinc)"
    },
    {
      "tweet": "Hibernating bear woken early by global warming?|15 April, 2010 - Nature conservation division (NCD) and forestry .. http://oohja.com/xaSJe"
    },
    {
      "tweet": "To Advance Study of Effective Management of Climate Change, MS&LGroup Partners ... http://bit.ly/a92EIB"
    },
    {
      "tweet": "Don Blankenship Calls Efforts On Mine Safety Regulation 'As Silly As Global Warming' http://huff.to/8ZIAcu via: @HuffingtonPost"
    },
    {
      "tweet": "Local Climate Change conference, Blue Mountains, Australia, 29 August- 1st September 2010,http://xrl.us/bhgrtv"
    },
    {
      "tweet": "Hibernating bear woken early by global warming?|15 April, 2010 - Nature conservation division (NCD) and forestry .. http://oohja.com/xaSFS"
    },
    {
      "tweet": "Counting down to the World People's Conf on #Climate Change @CMPCC @wpccc 19-22 April watch live http://www.oneclimate.net/bolivia #wpccc"
    },
    {
      "tweet": "Infectious Bite | Malaria: Climate and behavioral change http://retwt.me/1MNWR (via @AnaRevenant)"
    },
    {
      "tweet": "What's with all these serial earthquakes? 1st global warming, now global quaking"
    },
    {
      "tweet": "Australia: The Climate Change Waiting Game: What you Should be Doing Now http://tinyurl.com/ybqbsv3"
    },
    {
      "tweet": "Greenpeace claims big oil behind climate change skeptics | Humanitarian News http://retwt.me/1MNH9 (via @NewsOnGreen)"
    },
    {
      "tweet": "Paul Loeb: 'Soul Of A Citizen' EXCERPT: 'From Drunken Party Girl To Climate Change Activist': When we try to enga... http://huff.to/aTzV1G"
    },
    {
      "tweet": "Climate change talks yield small chance of global treaty | Humanitarian News http://retwt.me/1MNzI (via @HumanityNews)"
    },
    {
      "tweet": "barbadian nominated to chair climate change convention ' Green Antilles http://retwt.me/1MNzs (via @theantillean)"
    },
    {
      "tweet": "Weather Channel Founder Wants To Sue Al Gore For Global Warming Fraud http://www.youtube.com/watch?v=3h-MnAbH8WE"
    },
    {
      "tweet": "UN process in danger unless world agrees on climate change - Telegraph http://retwt.me/1MNl1 (via @BUFFALONYUSNEWS)"
    },
    {
      "tweet": "Senators prepare compromise climate change bill http://bit.ly/ceWe0N"
    },
    {
      "tweet": "Copenhagen brought change of climate in Sino-India ties: Ramesh | Humanitaria.. http://retwt.me/1MNcL (via @HumanityNews)"
    },
    {
      "tweet": "Senators prepare compromise climate change bill http://bit.ly/9g9oZk"
    },
    {
      "tweet": "Don't Kill Bill ' Save the Climate Change Accountability Act! ' It's Getting Hot In .. http://retwt.me/1MNcb (via @IGHIH)"
    },
    {
      "tweet": "You and Us and Me - Climate change: Rich nations threaten poorer ones with fun.. http://retwt.me/1MN6G (via @NewsOnGreen)"
    },
    {
      "tweet": "Climate change: Rich nations threaten poorer ones with fund cut for not signi.. http://retwt.me/1MN5l (via @HumanityNews)"
    },
    {
      "tweet": "BeAheroToday.info Ice Age theories warming up ' Signs of the Times News ' The Global ...: Ice Age theories warming... http://bit.ly/9pdwws"
    },
    {
      "tweet": "The word in Washington is that Sen. Graham will support the climate change and energy bill http://tinyurl.com/22tz5y7 #cleanenergy #venture"
    },
    {
      "tweet": "Let's make a deal with Graham on climate change, he's up for it!  http://tinyurl.com/2caxaff"
    },
    {
      "tweet": "Pulitzer Prize author brings global warming to light in Chelsea|Dr. Henry Pollack, professor emeritus at the .. http://oohja.com/xaRTl"
    },
    {
      "tweet": "Climate Change Legislation Is Just A Deal Away: First, the good news,' Senator Lindsey Graham (R-S.C.) is not comp... http://bit.ly/9GNJfT"
    },
    {
      "tweet": "New blog post: Tell your Senators to Stop the Delay on Climate Change Legislation! http://bit.ly/dgwTF0"
    },
    {
      "tweet": "I'm glad we're expanding off-shore oil drilling to solve long-term energy security & climate change problems. Look at the dividends in LA!"
    },
    {
      "tweet": "Now Olbermann can blame his mental condition on global warming http://www.cnsnews.com/news/article/64827 #tcot #hhrs"
    },
    {
      "tweet": "@charliemax Please name a time in Earth's history when there wasn't climate change?  The climate always has and always will change"
    },
    {
      "tweet": "Pulitzer Prize author brings global warming to light in Chelsea|Dr. Henry Pollack, professor emeritus at the .. http://oohja.com/xaRO3"
    },
    {
      "tweet": "@genjunky  No, not sad.  I think it's very smart! Just so you know, the global warming is freezing me today!"
    },
    {
      "tweet": "By end of century, climate change will cause Chicago to feel like Texas\" according to ecologist (rigggghhhht!) http://tinyurl.com/2a2ws8e"
    },
    {
      "tweet": "Just read intro of Colin Hunt's \"Carbon Sinks and Climate Change\"--promises to be a nice primer on economics & politics of forest"
    },
    {
      "tweet": "SAARC summit begins, climate change is top agenda http://bit.ly/dms3Kv #News"
    },
    {
      "tweet": "RT @nytimesscience: E.P.A. Makes Its Case on Climate Change http://bit.ly/bqRlWe #p2"
    },
    {
      "tweet": "New blog post: ELPC Joins 30 Organizations In Asking Senate to Address Climate Change This Year http://bit.ly/afxCC2"
    },
    {
      "tweet": "Senator Lindsey Graham could return to the fold and back climate change http://tinyurl.com/25orbfc #energy #cleanenergy #cleantech"
    },
    {
      "tweet": "New blog post: EPA Issues Report on U.S.  Climate Change Indicators  http://bit.ly/boC75J"
    },
    {
      "tweet": "What most Americans say about global warming legislation:  I ain't paying http://chicagonow.com/V36 #environment #energy #tcot #gop #twill"
    },
    {
      "tweet": "OK? - Whale Poop Could Help Fight Climate Change http://tinyurl.com/36e47q4 #tcot #teaparty #sgp"
    },
    {
      "tweet": "Sen. Lieberman: White House can help save climate change bill - http://www.msnbc.msn.com/id/36785396/ns/politics-capitol_hill/"
    },
    {
      "tweet": "Still only 44 degrees in Chicago. This global warming is just too much! Have to cut grass .. hate to work outside when it's cold."
    },
    {
      "tweet": "RT @greenietrain: West Mediterranean countries unite on climate change: AFP - The countries of the western Mediterranean Monday call... http://bit.ly/92yT0U"
    },
    {
      "tweet": "Why did Harry Reid anger Graham, putting Senate version of climate change bill on life support? http://tinyurl.com/3yl9ljm"
    },
    {
      "tweet": "Climate change rally outnumbers tea partiers 10 to one! http://climateprogress.org/2010/04/25/global-warming-means-local-storming/"
    },
    {
      "tweet": "King Ding Ling, Here we go again. The Global Warming Petition Project i... (YouTube http://youtu.be/ppk7lgUD3-Q?a)"
    },
    {
      "tweet": "Lousy Lindsey Graham just wants attention. He shouldn't be working on this climate change bill to begin w/. AND WHO NAMES A GUY LINDSEY?!"
    },
    {
      "tweet": ".@danielspengies I believe in common sense climate change legistlation, I want free education for all, I want immigration reform to give"
    },
    {
      "tweet": "Checking out \"Global Warming to Blame for Icelandic Volcanic Eruption\" on Freedom Pub: http://ning.it/bmsrQp #climategate #green #tcot #agw"
    },
    {
      "tweet": "On the frontline of climate change http://om.ly/ifej RT @Axleuk @tashamiel"
    },
    {
      "tweet": "@NASA Climate Change\" is now on #Facebook. Become a fan & keep up w/ the #climate science buzz http://bit.ly/dzKcEq RT @Flipbooks"
    },
    {
      "tweet": "TP action figure pls! RT @GregGutfeld: Tugboat Phil is our 1 hope against global warming. He is the sensible yin to the Algore yang. #redeye"
    },
    {
      "tweet": "Ice-covered volcanoes may answer climate change questions - latimes.com http://shar.es/mucwb #volcanoes #climatechange"
    },
    {
      "tweet": "Water Resources Management and Climate Change: Soon, system to ...: All major dams in the state on the Krishna and... http://bit.ly/bnsrqO"
    },
    {
      "tweet": "From tobacco to climate change, 'merchants of doubt' undermined the science.\" Review of Naomi Oreskes. http://is.gd/bGm6m [1/2]"
    },
    {
      "tweet": "48% in Gallup Poll say global warming exaggerated. http://earthlingangst.blogspot.com #globalwarming"
    },
    {
      "tweet": "RT @NREMag: Article on #climate change as civil rights issue http://tinyurl.com/zbepwx; #Air has piece on how CAA stds impede environmental justice"
    },
    {
      "tweet": "48% in Gallup Poll say global warming is exaggerated. http://earthlingangst.blogspot.com #global warming #Gallup"
    },
    {
      "tweet": "Checking out \"Global Warming to Blame for Icelandic Volcanic Eruption\" on Freedom Pub: http://ning.it/9DEGrP #iceland #tcot #tlot #climate"
    },
    {
      "tweet": "62% support #environmental movement, but 48% told Gallup global warming is exaggerated. http://earthlingangst.blogspot.com #globalwarming"
    },
    {
      "tweet": "BeAheroToday.info Energy and Global Warming News for April 23: GE to debut gearless ...: Energy storage devices ca... http://bit.ly/bPwjMC"
    },
    {
      "tweet": "62% support #environmental movement, but 48% tell Gallup global warming is exaggerated. http://earthlingangst.blogspot.com #globalwarming"
    },
    {
      "tweet": "Top British statistician assaults global warming data: http://bit.ly/9b7G4s via @addthis"
    },
    {
      "tweet": "Senators prepare compromise climate change bill http://bit.ly/ceWe0N"
    },
    {
      "tweet": "RT @kalimakhus @SocialistViews Perhaps denial of \"Climate change\" == denial that Capitalism is not sustainable http://socwrk.org/8696"
    },
    {
      "tweet": "Time to Make Your Voices Heard on Climate Change http://bit.ly/cRKyFB #tcot #tlot"
    },
    {
      "tweet": "International environmental justice court needed, say participants at People's World Conference on Climate Change. http://bit.ly/d1dn9F"
    },
    {
      "tweet": "i know you have your beliefs on global warming...but looting and polluting are just NOT the way"
    },
    {
      "tweet": "seriously though...when did the conservative view become \"i'm going to destroy the environment because global warming isn't real"
    },
    {
      "tweet": "Special Report: Networks Hide the Decline in Credibility of Climate Change Science http://bit.ly/a7omiE"
    },
    {
      "tweet": "Special Report: Networks Hide the Decline in Credibility of Climate Change Science http://bit.ly/d3HbLx"
    },
    {
      "tweet": "Why should trust scientists with global warming if they didnt know Pluto wasnt a fucking planet!"
    },
    {
      "tweet": "global warming advocates are facing a crisis of credibility"
    },
    {
      "tweet": "USW a leader among unions on issue of climate change, 1 of 1st unions to endorse climate change bill. http://tinyurl.com/35c65bm Ugh."
    },
    {
      "tweet": "Top 10 Surprising Results of Global Warming  http://bit.ly/9pil1G #EarthDay *__ *__"
    },
    {
      "tweet": "RT @newsbusters New Special Report! Networks Hide the Decline in Credibility of Climate Change Science http://ow.ly/1BIKZ (Please RT!)"
    },
    {
      "tweet": "@vikramchandra Nuclear Winter will ensue.  So much 4 Global Warming.  Ppl can NOT control the planet, only influence it."
    },
    {
      "tweet": "RT @New_federalists: Global warming graph attacked by study http://tinyurl.com/y6679sm #hhrs #tcot #tlot #teaparty"
    },
    {
      "tweet": "A Green Tip even Climate Change Deniers will Love. http://su.pr/31sHlk"
    },
    {
      "tweet": "Heartland analyst: State Dept. global warming report is 'laughable' http://bit.ly/cNyQo5 #tcot #tlot"
    },
    {
      "tweet": "my pc's a hand crank! .@mrdannyglover i support the world ppls conf climate change in bolivia. watch live now til apr 22 @ http://cmpcc.org"
    },
    {
      "tweet": "Dennis Miller Show- hour 2. with Roy Spencer, author of The Great Global Warming Blunder http://is.gd/bC5Vs"
    },
    {
      "tweet": "Climate change is heating up in Washington. Clean Air Cool Planet just published a handy guide to the issue: http://cot.ag/9Gp6LF"
    },
    {
      "tweet": "bolivia climate change summit in Second Life on Flickr - Photo ...: see www.betterverse.org/2010/04/peoples-climat... http://bit.ly/bbfLZ4"
    },
    {
      "tweet": "NEWS: Global warming science math says Icleand volcano has released enough co2 to destroy earth 7,000 times"
    },
    {
      "tweet": "I'll believe in Global Warming/Climate Change when we have a control planet. Yet I still have all CFL lights, No Car and Recycle #wellduh"
    },
    {
      "tweet": "Look forward to #140conf tomorrow at @92YTribeca. Maybe I'll finally meet @acarvin & chat NPR (and climate change--it's #EarthMonth!)"
    },
    {
      "tweet": "Our climate is changing just as we are changing, do you believe in climate change?"
    },
    {
      "tweet": "RT @AmazonWatch: People's Conference on Climate Change & Rights of Mother Earth opening now' Watch LIVE: http://bit.ly/dsYZUV"
    },
    {
      "tweet": "Climate Scientists Cleared, But Not U.N.: Scientists in climate scandal made no attempt to change global warming r... http://bit.ly/9Tml0g"
    },
    {
      "tweet": "Check out Climate Desk, an interesting new collaboration dedicated to reporting on climate change:  http://bit.ly/dAsx5m"
    },
    {
      "tweet": "RT @GreenHour: BudBurst volunteers needed: to look for \"ten most wanted\" plants to assess clues to climate change: http://bit.ly/bdlpVW"
    },
    {
      "tweet": "RT @VRWCTexan: STATE DEPT DECLARES: Global warming unequivocal & primarily human-induced' Vs. \"Poll:4 of 5 Americans don't trust Washington"
    },
    {
      "tweet": "RT @Uncucumbered: U know wht wld B fun? If the Sierra Club announced guns caused global warming. Talk abt yr ensuing Govertainment."
    },
    {
      "tweet": "Does this mean they're sure? . .STATE DEPT. DECLARES: 'Global warming unequivocal and primarily human-induced'... http://drudge.tw/cYgyix"
    },
    {
      "tweet": "Betting on Climate Change: Corporations Stand to Make or Lose Billions http://bit.ly/cwUiA1"
    },
    {
      "tweet": "New Global Warming Alarmism from LA Times: 'The World is Running Short on Air Pollution' http://tinyurl.com/y5xjzc8 #tcot #ocra"
    },
    {
      "tweet": "Betting on Change -- corporations factor in \"climate exposure\" http://jlne.ws/ahGI9q"
    },
    {
      "tweet": "RT @thereisawayjose: #Bolivia climate change talks to give poor a voice |The Guardian http://ow.ly/1AhoI #indigenous #cochabamba #cmpcc #p2"
    },
    {
      "tweet": "Knee-Jerk No Fly Ban Discredits Global Warming Alarmists http://bit.ly/bhG1Vg"
    },
    {
      "tweet": "Knee-Jerk No Fly Ban Discredits Global Warming Alarmists http://bit.ly/9qKKFy"
    },
    {
      "tweet": "What global warming? #3wordslibshate"
    },
    {
      "tweet": "Kerry climate change law could be the first step to getting a comprehensive, clean energy policy! http://tinyurl.com/y2ay9cs"
    },
    {
      "tweet": "States Sue EPA Over a Misquote: The Fight Over Climate Change Gets More Ridiculous http://bit.ly/cqqV2N"
    },
    {
      "tweet": "@KagroX Plate tectonics is one of those scientific \"theories\" like global warming and evolution which will destroy families and raise taxes"
    },
    {
      "tweet": "#Climate change, in #Britain at least, is not exclusively a concern of leftist voters.' #may6 #green #news #guardian #election"
    },
    {
      "tweet": "Interesting RT @WarrenWhitlock: Did all this ice come from global warming? http://su.pr/2TZBGv"
    },
    {
      "tweet": "@markos According to global warming science calculations, the Iceland volcano has released enough CO2 to kill the earth 298 times over."
    },
    {
      "tweet": "according to global warming science calculations, the Iceland volcano has released enough CO2 to kill the earth 298 times over."
    },
    {
      "tweet": "RT @sarahconner: Ridiculous: giving climate change denier nature show? Keep Sarah Palin off #Discovery http://bit.ly/bmUK4w via @CREDOmobile"
    },
    {
      "tweet": "@ShanPoe LOL, I was watching a \"global warming horror movie\" when my phone wanted to change it to hippie."
    },
    {
      "tweet": "Gregory Unruh: Oven Dial or Light Switch: Carbon Lock-in and Abrupt Climate Change: Well over a decade ago, I bec... http://huff.to/auGUFY"
    },
    {
      "tweet": "Just finished watching \"The Thaw\" and if you get past the global warming propaganda in thebegin&end it still sucks. I give it2 broken thumbs"
    },
    {
      "tweet": "Watching the liberal global warming horror movie \"The Thaw\"(2009). Yippie..."
    },
    {
      "tweet": "De Long on climate change. Don't count on #COP15 to resolve anything. More government spending is needed! http://ow.ly/1zuze #climatechange"
    },
    {
      "tweet": "Brad DeLong's Prescription for Battling Climate Change: Economics blogger Bradford J. DeLong has posted a plea for... http://bit.ly/cZDEw7"
    },
    {
      "tweet": "Just newsweek.com for backup for its ridiculous assertion that Chicago \"disappears\" due to global warming floods. Website too awful to use."
    },
    {
      "tweet": "The Earth is moving. Dynamic forces R shaping the planet.(BTW, Volcanic Activity can cause Global Winter. Take that Global Warming)"
    },
    {
      "tweet": "Gregory Unruh: Oven Dial or Light Switch: Carbon Lock-in and Abrupt Climate Change: Well over a decade ago, I bec... http://huff.to/ahlZmR"
    },
    {
      "tweet": "Congress worked out health care. Is climate change next? http://bit.ly/dcbnEy"
    },
    {
      "tweet": "Al Gore refuses to do interview on global warming hoax"
    },
    {
      "tweet": "A good book on climate change for your summer reading list http://bit.ly/9T8VO5 #tcot #tlot"
    },
    {
      "tweet": "Malawi-UN-Climate UN, Malawi sign climate change management project deal: APA-Lilongwe (Malawi) Malawi, UN Develop... http://bit.ly/cQlGPR"
    },
    {
      "tweet": "Iceland has chosen a curious way to fight global warming."
    },
    {
      "tweet": "Second panel also finds no evidence of data distortion by UK Climate Change scientists: http://bit.ly/aSC12J"
    },
    {
      "tweet": "Maria Rodale: Back to the Nursery...It's Planting Time!: It's only early April, but global warming has given me a... http://huff.to/cxpLnj"
    },
    {
      "tweet": "Senators prepare compromise climate change bill http://tinyurl.com/ybstl6n"
    },
    {
      "tweet": "RT @sigsforyou: RT @hrhsar: Glacier triggers tsunami this will cause worse than global warming the East coast will be http://tl.gd/s8rd6"
    },
    {
      "tweet": "RT @redostoneage: @hrhsar Accumulating Evidence of the Corrupted US Temp Record #global warming #climate changehttp://bit.ly/b98uZC Volcano"
    },
    {
      "tweet": "Glacier triggers tsunami this will cause worse than global warming the East coast will be underwater and England all this in one day? oy!"
    },
    {
      "tweet": "RickWarren: My ecology is based on theology.Global Warming is unclear but God's Word isnt! Caring for creation is COMMANDED stewardship"
    },
    {
      "tweet": "BeAheroToday.info Do obese people really cause global warming? | Otago Daily Times ...: A recent article in The Su... http://bit.ly/9sMPR7"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 1"
    },
    {
      "tweet": "My new hero! RT @Cubachi Gov. Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 2"
    },
    {
      "tweet": "Don Blankenship: Safety Regulators As Silly As Global Warming: http://ow.ly/1y1ff What is as silly as Don having ppl's lives in his hands?"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 3"
    },
    {
      "tweet": "RT @RaincoastImages Scientists,politicians,15k indigenous ppl,grassroots groups fr 100+ countries 2 talk climate change http://bit.ly/9Z8ffk"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 4"
    },
    {
      "tweet": "Disclosing the Business Impacts of Climate Change Case: Studies from Industry Leaders and Analyses of Trends and .. http://oohja.com/xaIuw"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 5"
    },
    {
      "tweet": "via @NEWSJUNKIEPOST ~ Climate Of Hate: The Politics Of Climate Change Denial http://bit.ly/cr2zM0 #digg #du1 #dnj #p2"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 6"
    },
    {
      "tweet": "Government safety regulators are \"as silly as global warming,\" according to mine owner Blankenship. http://is.gd/bq4ed #tpp #p2 #tcot"
    },
    {
      "tweet": "Freakonomics Blog: A ClimateGate Victim, and the State of the Global-Warming Problem http://bit.ly/bL1FIp"
    },
    {
      "tweet": "756 Bad Things Attributed To Global Warming #tlot #agw http://icio.us/wbd4qk"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 7"
    },
    {
      "tweet": "Conference of Muslim Action on Climate Change' in Jakarta pushes forward for climate leadership http://bit.ly/dr0zwF #EcoMonday"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 8"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 9"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 10"
    },
    {
      "tweet": "Reading Paul Krugman's enlightening article on the economics of mitigating global climate change: http://tinyurl.com/yao9cdz"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 11"
    },
    {
      "tweet": "RT @brookedunne: Intl Conference of Scientists to Challenge Global-warming http://bit.ly/azMH9d"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 12"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 13"
    },
    {
      "tweet": "Tell Rupert Murdoch to Get His Facts Straight on Climate Change: http://is.gd/biUHB #FoxNews #GlobalWarming #SaveTerra 14"
    },
    {
      "tweet": "Fall of the Republic  http://youtu.be/VebOTc-7shU #tlot #p2 #tcot #nwo #itsoverwhen global governance global warming"
    },
    {
      "tweet": "New RLS blog #TCOT Has Al Gore given up on global warming? http://bit.ly/aSLuUJ"
    },
    {
      "tweet": "Is Global Warming The Greatest Lie Ever Sold :Healthy Home Smart: Author: Aydan Corkern Title: Is Global Warming T... http://bit.ly/cfLxlv"
    },
    {
      "tweet": "RT @YahooNews: Effort to remake America's energy future and fight global warming could be harmed, or spurred, by Gulf #oilspill: http://bit.ly/dl4zuD"
    },
    {
      "tweet": "Global warming? Great!: \"The threat from climate change is serious, it is urgent, and it is growing,\" President Ob... http://bit.ly/a3FWD0"
    },
    {
      "tweet": "#Obama cites #terrorism, #climate change etc. as the shape of the brave, new world that creates tensions in body #politic."
    },
    {
      "tweet": "On Earth Day Redding architect James Theimer had some harsh words for skeptics of human-caused global warming. http://bit.ly/bbAI7e"
    },
    {
      "tweet": "Marc Beauchamp: Not all global warming skeptics are 'stupid': On Earth Day Redding architect James Theimer had som... http://bit.ly/adqEhs"
    },
    {
      "tweet": "Global warming conference set Sunday http://bit.ly/bPZayj"
    },
    {
      "tweet": "Global warming conference set Sunday: Pittsburgh Post Gazette Robert Bullard, known as the \"Father of Environmenta... http://bit.ly/bNAdEh"
    },
    {
      "tweet": "Climate change mechanism set up http://bit.ly/cmuOdt"
    },
    {
      "tweet": "Virginia to Investigate Global Warming Scientist Mann: FOXNews A legal battle is heating up faster than the planet... http://bit.ly/d5gmU3"
    },
    {
      "tweet": "If humans are causing global warming, then why are the ice caps on ...: The ice caps are indeed melting on mars, d... http://bit.ly/d3OTgU"
    },
    {
      "tweet": "I hope this Global Warming/Climate Change stuff continues...I'm really enjoying the COLD Spring weather here in North Los Angeles."
    },
    {
      "tweet": "Childs: Johns Hopkins started pgm on health and sustainability. Environ change, climate ch, biodiversity loss all impact public health"
    },
    {
      "tweet": "Democrat Party supports (Prostitution,Abortion, Pot, Homosexuality, NAMBLA, Global Warming ACORN ECIU ) #tcot #p2 @Glenn Beck Fox News #dnc"
    },
    {
      "tweet": "State of Virginia to Investigate Global Warming Scientist Mann: FOXNews First word emerged that the inspector gene... http://bit.ly/dqR71n"
    },
    {
      "tweet": "What causes Global Warming? | Global Warming Cause: Im 13 and ive got to research on what causes global warming. I... http://bit.ly/dk0FoZ"
    },
    {
      "tweet": "A new Pew Center report delivers concrete recommendations for structuring a federal response to #climate change http://bit.ly/a5qZyH"
    },
    {
      "tweet": "Global warming crowd fears warming earth melting Big Rock Candy Mountain, raising sea's glucose. Skeptics say Mountain stickiness cyclical."
    },
    {
      "tweet": "Giles Slade: McCarthyism and Climate Change http://huff.to/cA7iy2"
    },
    {
      "tweet": "Considering the oil spill devastation in the Gulf, energy legislation under debate, and climate change wrecking... http://bit.ly/auATE6"
    },
    {
      "tweet": "Global warming: Environmental effects: by Mark Somerfield Global warming is thought to be caused by excess CO2 in ... http://bit.ly/cNdjVb"
    },
    {
      "tweet": "Watched British debates on CSPAN. Frightening. Every candidate is a leftist, including those on the \"right.\" I.e., global warming is TRUTH."
    },
    {
      "tweet": "Geologists Study Historic Patterns of Climate Change: University of Cincinnati geologist Tom Lowell is part of a t... http://bit.ly/cqO8E5"
    },
    {
      "tweet": "Is global warming a real problem or a hoax?: by Mark Hopkins Global warming is a real problem but so is proving be... http://bit.ly/9Hy51b"
    },
    {
      "tweet": "Giles Slade: McCarthyism and Climate Change: Is it strange that Sarah Palin, who once thought Africa was a countr... http://huff.to/di5DUA"
    },
    {
      "tweet": "Senators prepare compromise climate change bill: WASHINGTON (Reuters) - Six months after introducing a sweeping cl... http://bit.ly/cE1uDi"
    },
    {
      "tweet": "Global warming: a market proposal even libertarians would love: Christian Science Monitor Libertarians may debate ... http://bit.ly/brZ7Zz"
    },
    {
      "tweet": "How does co2 cause global warming? | Global Warming Cause: How does co2 cause global warming? why specifically is ... http://bit.ly/9L5JlS"
    },
    {
      "tweet": "US Government's New Climate Change Claim: Global Warming Causes ...: Before I begin, I promise you that the story ... http://bit.ly/8YKBgC"
    },
    {
      "tweet": "Conference at Tom Ridge Environmental Center focuses on climate change: By DANA MASSING More than 80 representativ... http://bit.ly/a4KEQI"
    },
    {
      "tweet": "Conference at Tom Ridge Environmental Center focuses on climate change: By DANA MASSING More than 80 representativ... http://bit.ly/a4KEQI"
    },
    {
      "tweet": "The folks who promised offshore drilling was safe are the same folks who say don't sweat global warming."
    },
    {
      "tweet": "Climate Change Debate Climatologists Weather Meteorologists ...: Many Television Weather Forecasters Doubt Global ... http://bit.ly/cmITvA"
    },
    {
      "tweet": "Government scientists suggest inter-agency \"fuzzy hubs\" to deal with mass extinctions brought on by climate change http://bit.ly/cRPlK4"
    },
    {
      "tweet": "Vattenfall's CEO on clean energy, and not being a 'lone wolf' on climate change http://bit.ly/bPKwzC"
    },
    {
      "tweet": "Al Gore, Tipper Gore snap up Montecito-area villa - latimes.com http://shar.es/m5TlP- Global warming money in action."
    },
    {
      "tweet": "Ian Angus: Dissecting those 'Overpopulation' Numbers (part one): Is global warming caused by too many people? This... http://bit.ly/biizpM"
    },
    {
      "tweet": "Soil Remineralization and Climate Change http://bit.ly/6pSx53 #Climate-change #Soil"
    },
    {
      "tweet": "Scoop: 'Sunset Looms For Global Warming Industry' http://bit.ly/9uJ6g6"
    },
    {
      "tweet": "Global warming dirt-carbon peril models are wrong, say boffins: By Lewis Page •_´ Get more from this author The worl... http://bit.ly/9CeBLV"
    },
    {
      "tweet": "China Going Green For Security Reasons | The Global Warming Statistics http://bit.ly/bjsZif"
    },
    {
      "tweet": "Global warming? Uh, make that another ice age instead: It's hard to imagine the wheels falling off the global warm... http://bit.ly/dyPnLK"
    },
    {
      "tweet": "I'z confused nao! RT @DCBrent: Newest cause of global warming: Er, clean air.... http://is.gd/bMiAI"
    },
    {
      "tweet": "Hide the Decline' Global Warming Video Creator Says Mann Backlash Effort to 'Cleanup' ClimateGate Indiscretion http://bit.ly/bu77cs"
    },
    {
      "tweet": "World-Renowned Experts & Heroes of the Environmental Movement Coming to Pittsburgh... [Global Warming Conference] http://bizwire.pr/wJS30"
    },
    {
      "tweet": "1 more day to vote for the Webby Awards! Please vote for NASA's Climate Change site: http://bit.ly/a0yCo9. We're up for Best Science Site."
    },
    {
      "tweet": "@BECKSTERinc ,We r going state to state to make sure no teachers shove the global warming hoax down any young impressionable kids throats!!"
    },
    {
      "tweet": "Climate Confusion How Global Warming Hysteria Leads to Bad science ...: Brand: Average Rating 102 reviews The curr... http://bit.ly/8YZbe0"
    },
    {
      "tweet": "RT @TreeHugger Global warming for dummies: EPA releases new Climate Change Indicators report http://bit.ly/bivncV"
    },
    {
      "tweet": "Climategate' scientists criticised for not using best statistical tools|Climate change scientists at the centre .. http://oohja.com/xaOpO"
    },
    {
      "tweet": "Global Warming 101: Free talk in Morristown on Thursday: Morristown Green ' NJ.com By George! Mark Zondlo/ Princet... http://bit.ly/aSnRlw"
    },
    {
      "tweet": "Soil Remineralization and Climate Change http://bit.ly/6pSx53 #Climate-change #Soil"
    },
    {
      "tweet": "Environmental Monitoring - National Instruments: With the increased focus on the effects of climate change on the ... http://bit.ly/9Y8rSQ"
    },
    {
      "tweet": "Environmental Monitoring - National Instruments: With the increased focus on the effects of climate change on the ... http://bit.ly/9Y8rSQ"
    },
    {
      "tweet": "Fidel Castro warns of aftermath of climate change http://bit.ly/cYB3LY"
    },
    {
      "tweet": "Column: Consider natural causes of climate change: The United Nations Intergovernmental Panel on Climate Change wa... http://bit.ly/c4SDsS"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change http://ow.ly/1Eh7k"
    },
    {
      "tweet": "Climategate: science unit gets 'clean bill of health'|An independent review into the science on climate change .. http://oohja.com/xaOfD"
    },
    {
      "tweet": "Poll: Questions Raised On Global Warming: by NewsDesk - iWireNews •_» Americans and Britons are more skeptical about... http://bit.ly/bb50sm"
    },
    {
      "tweet": "E.P.A. Makes Its Case on Climate Change http://bit.ly/a9EYlR"
    },
    {
      "tweet": "EPA Lists 24 Climate Change Indicators to Inform Future Policy http://bit.ly/94QoZB"
    },
    {
      "tweet": "What are the issues of global warming and possible climate changes ...: What are the issues of global warming and ... http://bit.ly/b0KVEw"
    },
    {
      "tweet": "The American public remains quite uninformed regarding the shabby 'science' behind the man-made global warming scare. http://bit.ly/bIUip0"
    },
    {
      "tweet": "Why CO2 projections on Global Warming are false: While projections and predictions on CO2 concentrations in the at... http://bit.ly/9wBfxP"
    },
    {
      "tweet": "Climategate: science unit gets 'clean bill of health'|An independent review into the science on climate change .. http://oohja.com/xaOdl"
    },
    {
      "tweet": "Whale Poop Fights Global Warming!: Need more proof that Global Warming is the problem ... http://fxn.ws/bRce1g #tcot"
    },
    {
      "tweet": "Semi-Believable Evidence that Climate Change Causes Earthquakes and Volcanoes - espritsdefolie: I have heard... http://tumblr.com/xkw960ihe"
    },
    {
      "tweet": "The Global Warming Money Scam... http://bit.ly/9sED2n"
    },
    {
      "tweet": "No evidence of malpractice' from scientists accused of fabricating global warming results, inquiry finds|A .. http://oohja.com/xaOco"
    },
    {
      "tweet": "RT @bighollywood: GLOBAL WARMING: Is James Cameron a Genocidal Maniac?: Either James Cameron is a genocidal maniac or'a black-hearte... http://bit.ly/ay0veg"
    },
    {
      "tweet": "GLOBAL WARMING: Is James Cameron a Genocidal Maniac?: Either James Cameron is a genocidal maniac or'a black-hearte... http://bit.ly/ay0veg"
    },
    {
      "tweet": "YES. -  RT @GOOD: Q: Should we focus our energy on climate change before immigration? (via @ztf) #GOODasks"
    },
    {
      "tweet": "RT @GOOD: Semi-believable evidence that climate change causes earthquakes and volcanoes http://su.pr/1wefHM"
    },
    {
      "tweet": "Semi-believable evidence that climate change causes earthquakes and volcanoes http://su.pr/1wefHM"
    },
    {
      "tweet": "No Cap and Trade is the parent group of Minnesotans for Global warming. http://bit.ly/9L5Uni"
    },
    {
      "tweet": "Semi-Believable Evidence that Climate Change Causes Earthquakes and Volcanoes http://ow.ly/17bQIt"
    },
    {
      "tweet": "Microbes aren't accelerating global warming as expected: London, April 17 (ANI): Soil microbes are producing less ... http://bit.ly/97Kn95"
    },
    {
      "tweet": "Matthews Urges James Cameron To Trash 'Dangerous' Global Warming Deniers in Right Wing Media http://bit.ly/9PPzin"
    },
    {
      "tweet": "HuffPo: 'Global Warming Causes Volcanoes': Huffington Post blogger DK Matai's bio claims him to be 'an engineer tu... http://bit.ly/dq2Iui"
    },
    {
      "tweet": "Matthews Urges James Cameron To Trash 'Dangerous' Global Warming Deniers in 'Right Wing Media' http://bit.ly/daeEIi"
    },
    {
      "tweet": "When a politician or pundit says 'look it's snowing so there can't be global warming. http://bit.ly/cGOcqU"
    },
    {
      "tweet": "Matthews Urges James Cameron To Trash 'Dangerous' Global Warming Deniers in ...: By Geoffrey Dickens (Bio | Archiv... http://bit.ly/czYa5A"
    },
    {
      "tweet": "U.S. senators prepare compromise climate change bill|Source: Reuters * Senator Kerry aims to introduce .. http://oohja.com/xaAIR"
    },
    {
      "tweet": "GREEN Scientists to search for climate change clues by studying aftermath of volcano plane ban."
    },
    {
      "tweet": "More Global Warming Profiteering by Obama Energy Official: http://bit.ly/doR1ye #tcot #globalwarming"
    },
    {
      "tweet": "Kerry Graham Lieberman Climate Bill - KGL Global Warming Energy Bill - thedailygreen.com\" http://j.mp/adUkuK"
    },
    {
      "tweet": "Princeton University scholar to lecture on clouds, global warming at ...: The Star-Ledger ' NJ.com By Star-Ledger ... http://bit.ly/92hxyZ"
    },
    {
      "tweet": "Well this is awful news. Could be it for climate change legislation for the near future. We all need to swamp Sens.... http://bit.ly/cEVLMR"
    },
    {
      "tweet": "Well this is awful news.  Could be it for climate change legislation for the near future.  Nevada residents:... http://bit.ly/cqITyY"
    },
    {
      "tweet": "On today's \"To The Point\": Arizona's immigration law threatens to upend tripartisan climate-change legislation. http://bit.ly/dg3eR2"
    },
    {
      "tweet": "Want to go carbon neutral? Entergy and the Pew Center on Global Climate Change partner to Double Your Difference http://bit.ly/cJSWkY"
    },
    {
      "tweet": "US green energy is lagging behind: By Cynthia Via '10 Last year's UN Climate Change Conference in Copenhagen allow... http://bit.ly/dAmPR6"
    },
    {
      "tweet": "Breitbart.tv  ' Gingrich Defends Global Warming Commercial with Pelosi: http://bit.ly/c6plky"
    },
    {
      "tweet": "California Teamsters oppose effort to delay global warming measure: The group is the first major union to official... http://bit.ly/ac1div"
    },
    {
      "tweet": "Anchor Rising: The Environmental Mandate: Rhode Island may take another step toward addressing climate change issu... http://bit.ly/clE5Br"
    },
    {
      "tweet": "Anchor Rising: The Environmental Mandate: Rhode Island may take another step toward addressing climate change issu... http://bit.ly/clE5Br"
    },
    {
      "tweet": "Ex-Gore associate and current Obama energy official Cathy Zoi is exploiting global warming for her own mega-gain. http://bit.ly/anivj5"
    },
    {
      "tweet": "Ian McEwan Battles Climate Change in Solar - http://fwix.com/a/2_edef75ddb4"
    },
    {
      "tweet": "I wish there was less global warming in Iceland and more in my pants."
    },
    {
      "tweet": "Soaring mercury; Blame it on global warming|Agartala, Apr 14 : Environmentalists have attributed the .. http://oohja.com/xaN2I"
    },
    {
      "tweet": "Letter of the day: Will warm spring freeze out the global-warming skeptics?: April in Minneapolis? Believe it, but... http://bit.ly/ayrROd"
    },
    {
      "tweet": "Getting hot over global warming: I would like to meet Sarah Palin to find out why she frightens liberals so badly.... http://bit.ly/aC0lP9"
    },
    {
      "tweet": "Checking out \"Global Warming to Blame for Icelandic Volcanic Eruption\" on Freedom Pub: http://ning.it/bmsrQp #climategate #green #tcot #agw"
    },
    {
      "tweet": "Recycling and Climate Change http://bit.ly/bM1Txt"
    },
    {
      "tweet": "Recycling and Climate Change http://bit.ly/bM1Txt"
    },
    {
      "tweet": "DK Matai: Are Global Warming, Volcanoes and Earthquakes Linked ...: DK Matai: Are Global Warming, Volcanoes and Ea... http://bit.ly/djOvCI"
    },
    {
      "tweet": "Ice-covered volcanoes may answer climate change questions http://bit.ly/cMjF8j"
    },
    {
      "tweet": "Global Warming Solutions Act, the nation's toughest law to control greenhouse gas emissions. http://bit.ly/bWYhmm"
    },
    {
      "tweet": "Climate Conversation Group ' The Great Global Warming Blunder: 'Believe it or not, [a] potential natural explanati... http://bit.ly/9FYq3n"
    },
    {
      "tweet": "RT @sarahbellumd: TP action figure pls! RT @GregGutfeld: Tugboat Phil is our 1 hope against global warming. #redeye"
    },
    {
      "tweet": "Los Angeles: California Teamsters oppose effort to delay global warming measure http://bit.ly/dke8X8"
    },
    {
      "tweet": "All this thawing that global warming is causing is gonna uncover buried Lovecraftian shit that will induce madness in all who gaze upon it."
    },
    {
      "tweet": "Can federal courts help tackle global warming? - By Doug Kendall ...: If Congress and the president fail to tackle... http://bit.ly/aBBMCO"
    },
    {
      "tweet": "THR: Key Senator on Climate Change Rips Reid for Shifting Focus to Immigration http://ow.ly/17aeB4"
    },
    {
      "tweet": "Is Sen. Graham's flipflop on climate change & immigration a sign he's terrified of being outed as a closeted selfh8ing homo by teapartiers?"
    },
    {
      "tweet": "RT @GOOD: The good news about the very bad news (about climate change) http://su.pr/1fG7eV"
    },
    {
      "tweet": "The good news about the very bad news (about climate change) http://su.pr/1fG7eV"
    },
    {
      "tweet": "RT @latimes: Ice-covered volcanoes may answer climate change questions http://lat.ms/9uVJRK"
    },
    {
      "tweet": "Ice-covered volcanoes may answer climate change questions (I thought it was all about SUVs) http://ow.ly/1CzFa"
    },
    {
      "tweet": "RT @G_Lauricella: Is Climate Change Genocide? http://bit.ly/asmJGu"
    },
    {
      "tweet": "The Good News About the Very Bad News (About Climate Change) http://ow.ly/17a4YA"
    },
    {
      "tweet": "Global Warming Causes Earthquakes.' Suuuuure it does.: As [the glaciers] flow off the land, we are warned, seas r... http://bit.ly/c7OhVu"
    },
    {
      "tweet": "via @huffingtonpost: News Corp Aims To Go Carbon Neutral While Fox News Promotes Climate Change As... http://huff.to/dvvVs8"
    },
    {
      "tweet": "Global warming skeptics fear cost of remedies: By Barry Gaetz, Times ColonistApril 23, 2010 9:00 PM The Climategat... http://bit.ly/cbEitQ"
    },
    {
      "tweet": "Caf•__ Scientifique presents global warming talk, film: The April Caf•__ Scientifique presentation will be on the topi... http://bit.ly/ci4HSV"
    },
    {
      "tweet": "Warming Wins Global Warming War - Kiddo, Florida was nice, but you didn't miss too much. Think: NewYork's waiting r... http://ow.ly/179Xkb"
    },
    {
      "tweet": "Warming Wins Global Warming War - Kiddo, Florida was nice, but you didn't miss too much. Think: NewYork's waiting r... http://ow.ly/179Xkd"
    },
    {
      "tweet": "Warming Wins Global Warming War - Kiddo, Florida was nice, but you didn't miss too much. Think: NewYork's waiting r... http://ow.ly/179Xke"
    },
    {
      "tweet": "Warming Wins Global Warming War - Kiddo, Florida was nice, but you didn't miss too much. Think: NewYork's waiting r... http://ow.ly/179Xka"
    },
    {
      "tweet": "Warming Wins Global Warming War - Kiddo, Florida was nice, but you didn't miss too much. Think: NewYork's waiting r... http://ow.ly/179Xk9"
    },
    {
      "tweet": "Los Angeles: Ice-covered volcanoes may answer climate change questions http://losangeles.cityandpress.com/node/1240393"
    },
    {
      "tweet": "15-year old speaks about global warming at Palace Theater: Alec Loorz has given more than 30 presentations on clim... http://bit.ly/c0b1Y5"
    },
    {
      "tweet": "RT @latimes: Ice-covered volcanoes may answer climate change questions http://lat.ms/9uVJRK"
    },
    {
      "tweet": "Ice-covered volcanoes may answer climate change questions http://lat.ms/9uVJRK"
    },
    {
      "tweet": "RT @Jettlin ABC, CBS and NBC ignore ClimateGate scandal and still advance left-wing global warming agenda. http://tinyurl.com/25w56lp"
    },
    {
      "tweet": "Twenty Years of Advocacy, Not Journalism, on Global Warming: By RICH NOYES For more than two decades, the so-calle... http://bit.ly/dkG9aY"
    },
    {
      "tweet": "didn't realize arkansas let climate change denying fair taxers run in dem primary. #ardebate"
    },
    {
      "tweet": "Weight Watchers(R) Meets Global Warming? Low Carbon Food Calculator from Bon Appetit Management Company: http://www.Ea - http://bit.ly/Dmk6w"
    },
    {
      "tweet": "RT @yidwithlid: British Lawyer Wants to Throw Global Warming Doubters in Jail! For Eco-Cide?!?!  http://is.gd/brNEx #tlot #tcot #nobama #taxandtrade #fox"
    },
    {
      "tweet": "Combating climate change: lessons from the world's indigenous peoples http://lat.ms/cMlc6F"
    },
    {
      "tweet": "Checking out \"Global Warming to Blame for Icelandic Volcanic Eruption\" on Freedom Pub: http://ning.it/9DEGrP #iceland #tcot #tlot #climate"
    },
    {
      "tweet": "Ice-covered volcanoes may answer climate change questions: Eruptions from mountains such as Iceland's Eyjafjallajo... http://lat.ms/dy3IFL"
    },
    {
      "tweet": "Cooling Attitudes on the Environment and Global Warming ' The ...: AEI recently released a study on public attitud... http://bit.ly/9hgmb5"
    },
    {
      "tweet": "Bolivia climate summit ends with important declaration: The World People's Conference of Climate Change and the Ri... http://bit.ly/9NIXaQ"
    },
    {
      "tweet": "ABC Offers Serious Look at Global Warming Skeptics, But Downplays ClimateGate http://bit.ly/diZh5r"
    },
    {
      "tweet": "Global warming ballot initiative: Teamsters and cities weigh in: The California Teamsters, one of the state's most... http://bit.ly/amSvwC"
    },
    {
      "tweet": "Global warming ballot initiative: Teamsters and cities weigh in: The California Teamsters, one of the state's most... http://bit.ly/aMYbOS"
    },
    {
      "tweet": "UN Seeks to Avoid New Failure on Climate Change: By Redaction AHORA / redaccion@ahora.cu / Tuesday, 13 April 2010 ... http://bit.ly/9R9QtH"
    },
    {
      "tweet": "Global warming ballot initiative: Teamsters and cities weigh in: The California Teamsters, one of the state's most... http://bit.ly/aMYbOS"
    },
    {
      "tweet": "News Corp aims to go carbon neutral by the end of the year, while Fox News claims climate change is a hoax http://huff.to/9OraM4"
    },
    {
      "tweet": "News Corp Aims To Go Carbon Neutral While Fox News Promotes Climate Change As... http://huff.to/dvvVs8"
    },
    {
      "tweet": "#FF @Revkin for all he does to report on #climate change, the #environment, #solar and #renewable #energy. #eco #cleantech #green"
    },
    {
      "tweet": "Theologian: 'Climate Change Is the Totalitarian's Dream Come True' @CNSNews_com http://ow.ly/1CiFw"
    },
    {
      "tweet": "We've got to use another phrase instead of climate change. Those words are damaged goods. I like environmentally respectful behavior."
    },
    {
      "tweet": "Just posted The Supply Side Effects of Climate Change on Tourism http://bit.ly/b5cajw #b2p"
    },
    {
      "tweet": "The Obama-Schwarzenegger Jig (Updating Climate Change Economics) http://bit.ly/cjeUUY"
    },
    {
      "tweet": "FARK.com: (5223187) Unforseen consequence of global warming number ...: Satirical views on interesting, bizarre an... http://bit.ly/btjzqh"
    },
    {
      "tweet": "Climate of Change' ' More Hope, Less Blame  http://bit.ly/4Bvajw"
    },
    {
      "tweet": "ANU Climate Change Institute ' Lecture: Solar Energy http://bit.ly/ay4gS7"
    },
    {
      "tweet": "Some Republicans Say Open to US Climate Change Bill http://is.gd/brDLF Alexander, Graham, Brown #tcot #teaparty #gop"
    },
    {
      "tweet": "Climate of Change, a new documentary...: \"One of those never-before-seen films is famed British documentarian Bria... http://bit.ly/c0vbqr"
    },
    {
      "tweet": "Global warming? Some folks just don't buy it: By Hillary Gavan Some were going to plant some flowers or trees, whi... http://bit.ly/9lHkeM"
    },
    {
      "tweet": "Jim Manzi Is A \"Global Warming Zealot\"?!: Yes, Jim Manzi, one of the most effective, data-driven critics of cap an... http://bit.ly/d9Q9vk"
    },
    {
      "tweet": "The global warming hoax? Houston expert talks climate alarmist pollution http://bit.ly/ciGQNH"
    },
    {
      "tweet": "Free \"Best of Bonnaroo\" download album for climate change at www.musicforaction.org. (via @HeadCountOrg and @NRDC_AF)"
    },
    {
      "tweet": "Energy Update: Voters Take Global Warming A Bit Less Seriously http://conservativeactionalerts.com/blog_post/show/343 http://bit.ly/9i8WAf"
    },
    {
      "tweet": "RT @MarkLevinShow: marklevinshow: I had to Smack Down a Global Warming Zealot on Earth Day http://bit.ly/dgMT5T htt... http://ow.ly/1790mP"
    },
    {
      "tweet": "Amazing Video: New images of the sun help scientists understand climate change. Watch here: http://bit.ly/ckxHA1"
    },
    {
      "tweet": "Bolivia global warming summit: a lifeline for 'Mother Earth ...: Bolivia seeks to combat global warming after worl... http://bit.ly/aYkzJU"
    },
    {
      "tweet": "Bode Miller, Julia Mancuso and others call on Senate to pass climate change legislation http://bit.ly/9MwIY5"
    },
    {
      "tweet": "RT @TakePart Celebrate Earth Day with a5-minute action:Takea climate change quiz from @clintontweet,have$2donated Haiti http://bit.ly/ddoAWS"
    },
    {
      "tweet": "Change the system not the climate! #earthday from organic consumers assoc"
    },
    {
      "tweet": "Well, the truth is, Brian, we can't solve global warming because I fucking changed light bulbs in my house.' -Barack Obama"
    },
    {
      "tweet": "Celebrate Earth Day with a 5-minute action: Take a climate change quiz from @clintontweet, have $2 donated Haiti http://bit.ly/ddoAWS"
    },
    {
      "tweet": "Thoughts on Global Warming | Global Warming: What is Global Warming?Global Warming refers to a rise in the average... http://bit.ly/d2LxRG"
    },
    {
      "tweet": "Twenty Years of Advocacy, Not Journalism, on Global Warming: For more than two decades, the so-called mainstream m... http://bit.ly/9lbTKX"
    },
    {
      "tweet": "RT @boliviaun: The Guardian: \"Hollywood stars join politicians at Bolivia's 'cool' global warming summit\" http://is.gd/brtPY #cochabamba"
    },
    {
      "tweet": "Gawker: Maybe NASA Isn't Completely Worthless [Global Warming]: NASA's... http://bit.ly/cFCnj3"
    },
    {
      "tweet": "Tom Naughton ' Homework Help On Global Warming: With Earth Day coming up tomorrow, millions of American schoolchil... http://bit.ly/9CziZD"
    },
    {
      "tweet": "Comedians joked, \"we don't know if global warming is man-made, but we know global warming data is man-made. http://bit.ly/aPcVKw"
    },
    {
      "tweet": "RT @Marsh626: Excellent article from a fellow former liberal on global warming cultism: http://bit.ly/aUTpjR #tcot"
    },
    {
      "tweet": "Join Carol Browner, Assist to Pres for Energy & Climate Change, Earth Day Live Chat  tomorrow at 12:00PM EDT http://bit.ly/9e6RNr #p2"
    },
    {
      "tweet": "2010 BIO Intl. Convention to Highlight Climate Change, Global Hunger & Public Perception of Agricultural Biotech http://bizwire.pr/wSzll"
    },
    {
      "tweet": "@nryan Nope, it was global warming."
    },
    {
      "tweet": "Evo Morales Opens Climate Change Conference in Tiquipaya - http://awarela.org/?p=10335"
    },
    {
      "tweet": "Recommended: The Encyclopedia of Weather and Climate Change: A Complete Visual Guide: The Encyclopedia of Weather ... http://bit.ly/cijT6A"
    },
    {
      "tweet": "#California's River Delta Needs Back Up Before Disaster Hits (Video) :  http://bit.ly/brZK8J #Climate change"
    },
    {
      "tweet": "RT @GOODfeed: Inconvenient Youth Is the New One-stop Shop for Teens Fighting Climate Change http://ow.ly/178eWD"
    },
    {
      "tweet": "Inconvenient Youth Is the New One-stop Shop for Teens Fighting Climate Change http://ow.ly/178eWD"
    },
    {
      "tweet": "Global warming: Examiner exclusive interview with Richard Tol: IPCC was 'captured': Richard Tol writes of the IPCC... http://bit.ly/culDi6"
    },
    {
      "tweet": "How to fabricate climate change evidence\" - http://bit.ly/cdttyk (via @arkiebrian)"
    },
    {
      "tweet": "Lakes that warm up due to climate change give off large amounts of CO2, says Dutch PhD researcher Sarian Kosten http://bit.ly/d6BvkT ^AB"
    },
    {
      "tweet": "Valero Gas wants to kill AB 32, CA's global warming law. Join @CredoAction & @CourageCampaign to stop them: http://BoycottValero.com Pls RT"
    },
    {
      "tweet": "Global warming may trigger more volcanoes: I never thought global warming or climate change could ever trigger vol... http://bit.ly/cDufe8"
    },
    {
      "tweet": "The global warming/climate change folks should switch their message to fighting pollution. http://bit.ly/bYTSEM"
    },
    {
      "tweet": "Prostitutes who care about climate change? Find out how far they're willing to go to prove a point http://bit.ly/bMhe8c"
    },
    {
      "tweet": "#brazzil DataFolha shows 90% of Brazilians think global warming is real. 5% don't. About 50% in US don't believe man is responsible."
    },
    {
      "tweet": "effects of global warming ' How To Make Major Oil Companies Reduce ...: How To Make Major Oil Companies Reduce The... http://bit.ly/aXTo8v"
    },
    {
      "tweet": "Global warming and how a natural disaster would affect their lives were two other issues for children. http://bit.ly/97EwlZ"
    },
    {
      "tweet": "2010 Leadership Summit to Highlight Role of Biotechnology Innovation in Reducing Climate Change Emissions http://bizwire.pr/70qE2 #BIO"
    },
    {
      "tweet": "Attractive Nuisance Can federal courts help tackle global warming? http://bit.ly/daFAJq"
    },
    {
      "tweet": "Inconvenient youth tackle climate change: http://bit.ly/bNCkWv"
    },
    {
      "tweet": "Does global warming cause volcanoes to erupt?: Iceland's Eyjafjallajokull has everyone discussing what causes volc... http://bit.ly/9JHuXW"
    },
    {
      "tweet": "Watch Pocahontas Star Interviewed at Climate Change Conference in Bolivia http://bit.ly/bkaByk via @addthis #cochabamba @cmpcc"
    },
    {
      "tweet": "Global warming? Well, not exactly. As if we could tell anyway: OCRegister (blog) What a hoot when global warming a... http://bit.ly/9PKvc3"
    },
    {
      "tweet": "Addressing Climate Change: Winning the War on Sustainability http://ow.ly/1ANGq"
    },
    {
      "tweet": "My good economist view of Global warming is confusing my class b/c no one thinks profit when talking about Global warming"
    },
    {
      "tweet": "Global Warming, Ethanol, DDT and Environmentalism's Dark Side: By Carrie Lukas Environmentalists claim the moral h... http://bit.ly/bcmrYl"
    },
    {
      "tweet": "SOUTH ASIA: Water Shortage Calls for Second Look at Indus Treaty: ISLAMABAD, Apr 13 (IPS) - Climate change and the... http://bit.ly/d4fyYI"
    },
    {
      "tweet": "Iceland volcano caused by global warming? http://planetgreen.discovery.com/videos/planet-100-climate-induced-volcanoes-4-19.html"
    },
    {
      "tweet": "Climate change losers as bad betters or dumb buyers? : http://wp.me/px5Au-zS"
    },
    {
      "tweet": "Climate Change and the Desert USGS workshop in Las Vegas today http://bit.ly/diUTzH"
    },
    {
      "tweet": "http://theclimatedesk.org/ launches, backed by Wired, Atlantic, Mother Jones, Slate, CIR, NPR, to report climate change impacts, responses"
    },
    {
      "tweet": "http://theclimatedesk.org/ launches, backed by Wired, Atlantic, Mother Jones, Slate, CIR, NPR, to report climate change impacts, responses"
    },
    {
      "tweet": "@Qorianka Many thanks to you Sister,for your partcipation in the World Peoples Summit for Climate Change. #Indigenous #EarthRights #Global"
    },
    {
      "tweet": "Climate change: http://tinyurl.com/rockclimbpolarbear -- he's a cutie; evolution is already starting..slowly. #polarbears"
    },
    {
      "tweet": "New Global Warming Alarmism from LA Times: 'The World is Running Short on Air ...: We have now reached the apex of... http://bit.ly/chaIBp"
    },
    {
      "tweet": "ROTHBARD & RUCKER: Global warming's weak links - Washington Times: Delegates from around the world gathered in Bon... http://bit.ly/dbAVvy"
    },
    {
      "tweet": "One thing is climate change and other different is global warming caused by CO2 increase in the atmosphere. http://bit.ly/aXgVNi"
    },
    {
      "tweet": "Big Ups to the ppls at the World People's Conference On Climate Change in Bolivia  #EarthWeek #EarthDay"
    },
    {
      "tweet": "I liked a YouTube video -- Feel-Good Fantasies of Fighting Global Warming http://youtu.be/l4f57whozrY?a"
    },
    {
      "tweet": "Skeptic's Corner: Voters Take Global Warming A Bit Less Seriously: FROM-Rasmussen Report Monday, April 19, 2010. V... http://bit.ly/bqm77F"
    },
    {
      "tweet": "BRKG NEWS: UN Climate Change panel gets F from scientists, announces it will rehabilitate itself by suing Iceland over volcanic eruption."
    },
    {
      "tweet": "No, the Record-Setting April Heatwave April Doesn't Prove Global Warming. But . . .  http://viigo.im/3dpg"
    },
    {
      "tweet": "A global warming myth turned to ashes: From Reuters: 'OSLO ' A thaw of ice caps in coming decades caused by climat... http://bit.ly/bpZmMb"
    },
    {
      "tweet": "New Global Warming Alarmism from LA Times: 'The World is Running Short on Air Pollution' http://bit.ly/bnCM5P"
    },
    {
      "tweet": "#Environment #Climate change The Political and Economic Effects of Earthquakes : TreeHugger http://bit.ly/9hCcZH"
    },
    {
      "tweet": "@DarylT well, you can see how it would contribute to global warming."
    },
    {
      "tweet": "TIMES THEY ARE A CHANGIN': Bill McKibben has been talking about global warming since before it was cool. http://bit.ly/9cUJqk"
    },
    {
      "tweet": "How Have Hominids Adapted to Past Climate Change? http://bit.ly/bp2bw4"
    },
    {
      "tweet": "Great site for breaking news on climate change, the environment and other aspects of Earth's natural history: http://bit.ly/4owu72"
    },
    {
      "tweet": "RT @Ceeb2: #nowplaying  Al Gore sending up smoke signals via Volcano re Global Warming #tcot Fox News Glenn Beck #algore PBS NBC MSNBC CNN Jimmy Carter"
    },
    {
      "tweet": "#nowplaying  Al Gore sending up smoke signals via Volcano re Global Warming #tcot Fox News Glenn Beck #algore PBS NBC MSNBC CNN Jimmy Carter"
    },
    {
      "tweet": "Knee-Jerk No Fly Ban Discredits Global Warming Alarmists: Prison Planet.com With European governments coming under... http://bit.ly/b06uz9"
    },
    {
      "tweet": "Bolivian UN Ambassador Pablo Solon on the World Peoples' Summit on Climate Change and Rights of Mother Earth. - http://awarela.org/?p=10239"
    },
    {
      "tweet": "Earth's missing heat a concern - and could eventually reappear as another sign of climate change  http://shar.es/mv7Rj"
    },
    {
      "tweet": "Comedians joked, 'We don't know if global warming is man-made, but we know global warming data is man-made. http://bit.ly/bVQAmO"
    },
    {
      "tweet": "Bolivia Climate Summit, April 19-22: US Slaps Bolivia and Ecuador slicing millions of dollars in climate change fu... http://bit.ly/d2uz1o"
    },
    {
      "tweet": "Bolivia To Hold Alternative 'People's Conference' On Climate Change: LA PAZ (AFP) -- The alternative \"people's co... http://huff.to/dmIKLp"
    },
    {
      "tweet": "McEwan takes on global warming|\\Solar\\ (Nan A. Talese/Doubleday, 287 pages, $26.95), by Ian McEwan. .. http://oohja.com/xaAqA"
    },
    {
      "tweet": "Climate Change Fraud - Global warming: Balancing quotes: There are some who are saying that because the Oxburgh in... http://bit.ly/bfHwbw"
    },
    {
      "tweet": "New post: Illuminating the Science: Art and Climate Change http://bit.ly/bRZTHT"
    },
    {
      "tweet": "Democrat Party supports Prostitution, Abortion, Pot, Homosexuality, NAMBLA and Global Warming ACORN ECIU #tcot @Glenn Beck Fox News #Dncc"
    },
    {
      "tweet": "Climate change, green energy talks on tap at Earth Day events http://bit.ly/dgX7bn"
    },
    {
      "tweet": "Climate change, green energy talks on tap at Earth Day events: The Farmington Community Library is embracing the t... http://bit.ly/cl5DmK"
    },
    {
      "tweet": "Nuclear power: no solution to climate change http://bit.ly/aMwkR8"
    },
    {
      "tweet": "Poll: Most Nevadans Skeptical of Global Warming: Reporter: AP LAS VEGAS (AP) - A statewide poll shows 55 percent o... http://bit.ly/a8sPfH"
    },
    {
      "tweet": "RT @organicnewyork Climate change making seasonal allergies worse. Blame the solar system, hey where'd Al GORED go?"
    },
    {
      "tweet": "RT @davidbenning: UN Reaching for Any Excuse to Tackle Climate Change http://cli.gs/Sbm19"
    },
    {
      "tweet": "I wonder how much Iceland Volcano will contribute to Global Warming?  How much CO2 did it emit?  In relation to humans? #farce #lies #jokes"
    },
    {
      "tweet": "Top Scientists Rush To Defend Discredited Theory Of 'Runaway' Global Warming: Martin Rees, president of The Royal ... http://bit.ly/dnaBIz"
    },
    {
      "tweet": "@reneehendricks I'll probly rant abt the climate change gurus getting most of their facts wrong. Have U hrd abt the Iceland volcano?"
    },
    {
      "tweet": "When will Al Gore come out and blame the Eyjafjallaj•__kull eruption on global warming? #tcot"
    },
    {
      "tweet": "Global warming game shows importance of public pressure: THERE ARE detractors who disbelieve our world is experien... http://bit.ly/aqKTwX"
    },
    {
      "tweet": "Like gravity, the signs of global warming are reliable and unchanging. http://bit.ly/aV1SJp"
    },
    {
      "tweet": "sometimes so hard to predict which of the outcomes in climate change ( #green revolution vs. #apocalypsenow) would be more \"exciting\" to me."
    },
    {
      "tweet": "29 Graphs of Climate Change Science in One Place | Alternative ... http://bit.ly/defx2I"
    },
    {
      "tweet": "Finally read Krugman's \"Climate Change - Building a Green Economy\" - NYTimes.com http://nyti.ms/cYbFoI - definitely worthwhile."
    },
    {
      "tweet": "I'm Allergic to Global Warming. Literally.: Treehugger by Brian Merchant, Brooklyn, New York on 04.16.10 If anyone... http://bit.ly/bXMO1F"
    },
    {
      "tweet": "Google climate change chief wants price on carbon http://ow.ly/1zndt"
    },
    {
      "tweet": "Weekly Mulch: Cochacamba Summit to Combat Climate Change Innovatively: By Sarah Laskow, Media Consortium blogger... http://bit.ly/c3IcNg"
    },
    {
      "tweet": "The Global Warming debate is discouraging when considering human intelligence. GW nutcases remain unpersuaded by logic or evidence."
    },
    {
      "tweet": "Cal) probably represent the views of global warming skeptics. http://bit.ly/9Swo7u"
    },
    {
      "tweet": "Congress worked out health care. Is climate change next? http://bit.ly/difrSa"
    },
    {
      "tweet": "Top Climate Scientist Under Fire for 'Exaggerating' Global Warming http://bit.ly/9Pq0gQ"
    },
    {
      "tweet": "Missing' heat may affect future climate change (source: Science daily): Current observational tools cannot accoun... http://bit.ly/dpPh4n"
    },
    {
      "tweet": "How do we solve this global warming thing?: By Nathanael Johnson Everyone is watching California to see how we han... http://bit.ly/beGB1T"
    },
    {
      "tweet": "Global Warming Is Missing, Will Return Soon: Scientists cannot account for roughly half of the heat that is believ... http://bit.ly/aCeBNw"
    },
    {
      "tweet": "2000 Year Climate Change Evidence Inconclusive on Global Warming: Global warming is often marketed as an Armageddo... http://bit.ly/dmHshb"
    },
    {
      "tweet": "Oven Dial or Light Switch: Carbon Lock-in and Abrupt Climate Change http://ow.ly/1ySPh"
    },
    {
      "tweet": "Global warming monitoring needs to find 'missing heat', say scientists: Experts need to beef up ways to measure th... http://bit.ly/djMocO"
    },
    {
      "tweet": "Have a good idea to reduce carbon and climate change? Let us know and  win a $1,000 grant to make it happen.  http://tinyurl.com/y353oay"
    },
    {
      "tweet": "Study on climate change law cites 5 local refineries for negative health effects http://bit.ly/9yVwHz"
    },
    {
      "tweet": "Obama pushes developing countries on global warming...New pressure on pope: SYDNEY (AP) ' President Barack Obama s... http://bit.ly/aFP0pm"
    },
    {
      "tweet": "Weather Channel Promotes 'Global Warming Hoax' Conspiracy Theory http://bit.ly/aVdHpT"
    },
    {
      "tweet": "Support for carbon tax plan|Key supporters of the government's climate change policies are backing a Greens plan .. http://oohja.com/xaJxm"
    },
    {
      "tweet": "Global Economy - Global warming graph attacked by study http://ow.ly/1yFiC"
    },
    {
      "tweet": "@Dr_Rose Cali has been getting strange weather this year?\\\\ Its called law of averages catching up to the bullshit of global warming scares"
    },
    {
      "tweet": "Explorer to discuss global warming: Renowned polar explorer and adventurer Will Steger will present a free program... http://bit.ly/b4xymI"
    },
    {
      "tweet": "another night of creepy climate change nightmares! ridiculous"
    },
    {
      "tweet": "Fuck off, asshole! RT: @redostoneage: @JulesBeaujolais Accumulating Evidence of the Corrupted US Temp Record #global warming #climate cha"
    },
    {
      "tweet": "NWF series on extreme weather due to Global Warming led by NWF scientist Dr Amanda Staudt. http://bit.ly/9iwHsQ"
    },
    {
      "tweet": "Thankfully, at least Rio Tinto's Preston Chiaro had some positive statements on global warming and clean energy. http://bit.ly/div7Xq"
    },
    {
      "tweet": "A global warming governor after our own hearts, rather than our wallets: New Jersey Gov. Chris Christie has wised ... http://bit.ly/9Sb3gX"
    },
    {
      "tweet": "Just posted Public's willingness to pay for preventing climate change http://bit.ly/cV1ZFi #b2p"
    },
    {
      "tweet": "McEwan takes on global warming|\\Solar\\ (Nan A. Talese/Doubleday, 287 pages, $26.95), by Ian McEwan. .. http://oohja.com/xaAnQ"
    },
    {
      "tweet": "@Heritage  UN Reaching for Any Excuse to Tackle Climate Change  http://tinyurl.com/y23bt5s"
    },
    {
      "tweet": "No evidence of malpractice' from scientists accused of fabricating global warming results, inquiry finds http://bit.ly/dejQ9q"
    },
    {
      "tweet": "Global warming' really just about control: In December 2009, 141 scientists sent a letter to the United Nations S... http://bit.ly/aaJ4Q6"
    },
    {
      "tweet": "Do obese people really cause global warming? | Otago Daily Times ...: \"Every age and society, it seems, creates it... http://bit.ly/am5ZqX"
    },
    {
      "tweet": "Is climate change turning coastal countries into water worlds?: http://video.pbs.org/video/1305543836/"
    },
    {
      "tweet": "Daniel C. Esty: Climate Change Plan B - The Huffington Post\" - http://huff.to/bC5rrj  #greentech"
    },
    {
      "tweet": "Woot RT @GayPatriot  RT @Cubachi: Governor Christie will cut all $65 million from NJ's global warming fund http://is.gd/brylO #awesome"
    },
    {
      "tweet": "United Kingdom) Health Psychology Professor Wendy Stainton Do obese people really cause global warming? http://bit.ly/csuvFM"
    },
    {
      "tweet": "Newt Still Defends Global Warming Commercial with Pelosi: 'We Need a Green ...: Gingrich contends he was seeking c... http://bit.ly/b7TEtD"
    },
    {
      "tweet": "CH-180c - Calendar - Global Warming and Liberalism not about having a calendar about making a statement! http://bit.ly/bfoaod"
    },
    {
      "tweet": "Don Blankenship: Mine Safety Regulators \"As Silly as Global Warming\" (Video): Treehugger by Brian Merchant, Brookl... http://bit.ly/cfFIhx"
    },
    {
      "tweet": "C3: \"Global Warming\" Is Truly Not Global: Gulf of California Peer ...: Read here. This peer-reviewed Gulf of Calif... http://bit.ly/dkL6rr"
    },
    {
      "tweet": "RT @patrickc: \"The very idea that they care more about safety than we do is as silly as global warming.\" - Massey Energy (29 dead miners)"
    },
    {
      "tweet": "Al Gore ambushed about GLOBAL WARMING - BRILLIANT (VIDEO) - Jesse Woodrow Show 04-13-2010: http://bit.ly/ddLPf9"
    },
    {
      "tweet": "TV weathercasters divided on global warming: By Suzanne Bohan Weather forecaster Spencer Christian sits with meteo... http://bit.ly/aOxWc8"
    },
    {
      "tweet": "One headline read, \"Now it's CowGate: expert report says claims of livestock causing global warming are false. http://bit.ly/azvLxS"
    },
    {
      "tweet": "That's why he removed the data that disagreed with his global warming theory. http://bit.ly/9n5cbQ"
    },
    {
      "tweet": "RT @LarryBriscoe RT @JosephAGallant Global Warming Activist Freezes to Death in Antarctica http://tinyurl.com/gf3ud #tcot"
    },
    {
      "tweet": "Senators prepare compromise climate change bill (Reuters) | Yahoo! Green\" http://j.mp/aU1Kqz  #greentech"
    },
    {
      "tweet": "Climate Change Fraud - Global warming: It has to be catastrophe: We have a surplus of people pretending to know th... http://bit.ly/94dpTq"
    },
    {
      "tweet": "Delhi filmmaker Rohit Gandhi's documentary on climate change wins ... http://bit.ly/aFg9HR"
    },
    {
      "tweet": "RT @earthvitalsigns: Ice ice baby! Get the lowdown on ice & climate change with the next in our series of Just 5 Questions... http://bit.ly/c6YR9V"
    },
    {
      "tweet": "Ice ice baby! Get the lowdown on ice & climate change with the next in our series of Just 5 Questions... http://bit.ly/c6YR9V"
    },
    {
      "tweet": "Bats, birds, and lizards can fight climate change http://dld.bz/Vwv"
    },
    {
      "tweet": "Natural Resource Econ: Krugman on Climate Change http://bit.ly/b4IyRj"
    },
    {
      "tweet": "Natural Resource Econ: Krugman on Climate Change http://bit.ly/b4IyRj"
    },
    {
      "tweet": "OXFAM GB: Senior Press Officer - Climate Change: •_£33,700 - •_£41,710 pa: OXFAM GB For more Charities jobs  and jobs... http://bit.ly/bx6C5j"
    },
    {
      "tweet": "THE best climate change economics primer. - jasencomstock: I love Paul Krugman, and I have to say he makes an... http://tumblr.com/xkw8jdz7y"
    },
    {
      "tweet": "New post: LONG HORIZONS: An exploration of Art and Climate Change http://bit.ly/ak6JKV"
    },
    {
      "tweet": "Valero Gas wants to kill AB 32, CA's global warming law. Join @CredoAction & @CourageCampaign to stop them: http://BoycottValero.com Pls RT"
    },
    {
      "tweet": "Senate Global Warming Bill on Track: Six months after introducing a sweeping climate change bill that flopped in t... http://bit.ly/anDm5n"
    },
    {
      "tweet": "RT @JerryMander: Daily Kos: ecojustice: systems change, not climate change & NOT violence! http://bit.ly/bBxEKB | \"Right now, our elected"
    },
    {
      "tweet": "Is Global Warming A Hoax? - Find Answers to this Question: If you think global warming is a hoax, why would anyone... http://bit.ly/abbfvn"
    },
    {
      "tweet": "Bonn to Cancun'Negotiators Agree to Continue Efforts on International Global ...: The first global warming negotia... http://bit.ly/9Jreep"
    },
    {
      "tweet": "Thirty million years ago there were palm trees in Alaska. These vanished over time due to a process called  \"climate change."
    },
    {
      "tweet": "RT @brookedunne: Intl Conference of Scientists to Challenge Global-warming http://bit.ly/azMH9d"
    },
    {
      "tweet": "Second Study Refutes Link Between Meat & Global Warming: Opposing Views The UK's Daily Telegraph declares today th... http://bit.ly/d5a3FT"
    },
    {
      "tweet": "Global Warming Fanatics Clash With Environmentalists | RedState: Further proving my consistent point that global w... http://bit.ly/dg07rw"
    },
    {
      "tweet": "What are some major sources of water pollution? | Global Warming http://bit.ly/cjGmk4"
    },
    {
      "tweet": "RT @johnnyA99 'Ecocide 2 be used to prosecute 'climate deniers'...on 'global warming' http://bit.ly/aKVHKZ #liberalFascism #News #tcot 3p2"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change - Birds, bats and lizards may play an important role in Earth's cl... http://ow.ly/172hQh"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change - Birds, bats and lizards may play an important role in Earth's cl... http://ow.ly/172hQg"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change - Birds, bats and lizards may play an important role in Earth's cl... http://ow.ly/172hQl"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change - Birds, bats and lizards may play an important role in Earth's cl... http://ow.ly/172hQk"
    },
    {
      "tweet": "Bats, Birds and Lizards Can Fight Climate Change - Birds, bats and lizards may play an important role in Earth's cl... http://ow.ly/172hQi"
    },
    {
      "tweet": "Global warming: The fossil fuel dilemma: America uses about 20 million barrels per oil each day to serve the needs... http://bit.ly/aEoudt"
    },
    {
      "tweet": "RT @EPSclimate: Climate change row over the mystery of the shrinking sheep http://bit.ly/d4IL0Q #climate"
    },
    {
      "tweet": "It's 83•_Á and climbing in NYC. August weather for the first day of May! Unbelievable! Chalk it up to global warming?"
    },
    {
      "tweet": "@bloodless_coup \"The phrase 'global warming' should be abandoned in favor of 'climate change', Luntz says,\" http://bit.ly/7bIY0c #p2 #tcot"
    },
    {
      "tweet": "Virginia to Investigate Global Warming Scientist Mann:  http://bit.ly/aDlavg"
    },
    {
      "tweet": "Global warming you tube parody you will enjoy #IPCC #ocra http://bit.ly/bBGWhC"
    },
    {
      "tweet": "One-Eyed Golfer: Don't dare tell me about global warming: Twenty-five of the forty-nine golfers making the cut thi... http://bit.ly/akeAxp"
    },
    {
      "tweet": "man made global warming a hair brained theory 4 the scientifically challenged the IPPC has nothing to back up claims #tcot #p2 #climategate"
    }
  ]

 /**
 * Returns a closured Freets object that can execute Freet operations
 * Wherever you import this class, you will be accessing the same data.
 */
function Freets() {
    let _data = [];
    let _counter = 0;

    const that = Object.create(Freets.prototype);

    /**
     * Add a Freet
     * @param {string} content - Freet content
     * @param {string} author - Freet user
     * @return {Freet} - returns a created Freet
     */
    that.addFreet = (content, author = null, og_author = null) => {
        const id = _counter.toString();
        const time = Date.now();
        og_author = og_author === null ? author : og_author;
        const freet = { id, content, author, og_author, time, 'upvotes': [], 'refreets': []};
        _counter++;
        _data.push(freet);
        return freet;
    };

    for(let i = 0 ; i < preFreets.length ; i ++){
        that.addFreet(preFreets[i].tweet)
    }

    /**
     * Find a Freet by its unqiue ID
     * @param {int} id - ID of the Freet to find
     * @return {Freet | undefined} - Freet object found or undefined
     */
    that.findFreetByID = id => {
        return _data.filter(freet => freet.id === id)[0];
    };

    /**
     * Find all the Freets that are associated with users that the current user is following
     * @param {string} following - set of users that current user is following
     * @return {Freet[] | []} - A list of Freet objects found or empty list
     */
    that.findFreetsByFollowing = (following) => {
        return _data.filter(freet => following.has(freet.author) && following.has(freet.og_author));
    };

    /**
     * Find all the Freets that are associated with an author username.
     * @param {string} author - Author of Freets to find
     * @return {Freet[] | undefined} - A list of Freet objects found or undefined
     */
    that.findFreetsByAuthor = author => {
        return _data.filter(freet => freet.og_author === author);
    };

    /**
     * Find all the Freets that are upvoted by an author username.
     * @param {string} author - Author of Freets to find
     * @return {Freet[] | undefined} - A list of Freet objects found or undefined
     */
    that.findFreetsUpvotedByAuthor = author => {
      return _data.filter(freet => freet.upvotes.includes(author));
  };

    /**
     * Return an array of all Freets
     * @return {Freet[]}
     */
    that.findAllFreets = () => {
        return [..._data];
    };

    /**
     * Updates a Freet's content given an ID.
     * @param {string} ID - ID of Freet to update
     * @param {string} content - new content to update
     * @return {Freet | undefined} - updated Freet object
     */
    that.updateFreet = (id, content) => {
        const freet = that.findFreetByID(id);
        freet.content = content;
        return freet;
    };

    /**
     * Deletes a Freet given an ID
     * @param {string} id - ID of Freet to delete
     * @return {Freet | undefined} - deleted Freet object
     */
    that.deleteFreet = id => {
        const freet = that.findFreetByID(id);
        _data = _data.filter(freet => freet.id !== id);
        _data.forEach(freet => {
            freet.refreets = freet.refreets.filter(refreet => refreet.id !== id);
        })
        return freet;
    };

    /**
     * username upvotes a Freet given an ID. a user can only upvote a given Freet once.
     * @param {string} id - ID of Freet to upvote
     * @param {string} username - user that upvotes the Freet
     * @return {Freet} - (possibly) updated Freet
     */
    that.upvoteFreet = (id, username) => {
        const freet = that.findFreetByID(id);
        if (freet.upvotes.indexOf(username) == -1) {
            freet.upvotes.push(username);
        }
        return freet;
    }

    /**
     * User undoes their upvote for a freet. Ignores if user never upvoted in the first place.
     * @param {string} id - ID of Freet to undo upvote
     * @param {string} username - user that is undoing their upvote for the Freet
     * @return {Freet} - (possibly) updated Freet
     */
    that.undoFreetUpvote = (id, username) => {
        const freet = that.findFreetByID(id);
        freet.upvotes = freet.upvotes.filter(u => u != username);
        return freet;
    }

    /**
     * User refreets Freet with given ID
     * Only allowed if user has is neither the author nor original author of the freet and has not refreeted the Freet
     * @param {string} id - ID of Freet to refreet
     * @param {string} username - user refreeting the Freet
     * @return {Freet | undefined} - refreet
     */
    that.refreetFreet = (id, username) => {
        const currFreet = that.findFreetByID(id);
        if (currFreet.author == username || currFreet.og_author === username) {
            return undefined;
        }
        if (currFreet.refreets.filter(freet => freet.author === username).length > 0) {
            return undefined;
        }
        const newFreet = that.addFreet(currFreet.content, username, currFreet.og_author);
        currFreet.refreets.push(newFreet);
        return newFreet; 
    }

    /**
     * Updates a Freet's author given an ID
     * @param {string} id - ID of Freet to update
     * @param {string} newName - new author name to assign ownership of the Freet
     * @return {Freet} - updated Freet object
     */
    that._updateFreetAuthor = (id, newName) => {
        const freet = that.findFreetByID(id);
        freet.author = newName;
        freet.og_author = newName;
        return freet;
    };

    /**
     * Updates a Freet that a user has upvoted
     * @param {string} id - Freet to be updated
     * @param {string} oldName - previous username
     * @param {string} newName - new username
     */
    that._updateFreetUpvotes = (id, oldName, newName) => {
        const freet = that.findFreetByID(id);
        const idx = freet.upvotes.indexOf(oldName);
        if (idx != -1) {
            freet.upvotes[idx] = newName;
        }
    }

    Object.freeze(that);
    return that;
}

module.exports = Freets();

