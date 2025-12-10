
import { Profile, Education, Experience, Publication, Award } from './types';

export const PROFILE: Profile = {
  nameEn: "Una Huei-Ying Chen",
  nameCh: "陳慧穎",
  title: "國立成功大學國際經營管理研究所",
  location: "Tainan",
  email: "unachen9913@gmail.com",
  bio: "I am a Ph.D. candidate at the Institute of International Management at National Cheng Kung University (NCKU). My academic work focuses on organizational behavior, with particular interest in how rational and emotional factors jointly shape creativity and entrepreneurial activity within organizations. I am committed to advancing rigorous research that deepens our understanding of how individuals and teams navigate the evolving dynamics of modern workplaces.",
  // Please replace with your actual profile URLs
  googleScholar: "https://scholar.google.com/", 
  researchGate: "https://www.researchgate.net/"
};

export const RESEARCH_INTERESTS: string[] = [
  "Organizational Behavior",
  "Creativity",
  "Innovation",
  "Entrepreneurship",
  "Psychological Capital"
];

export const EDUCATION: Education[] = [
  {
    degree: "Institute of International Management",
    school: "National Cheng Kung University (NCKU)",
    year: "Present",
    description: "Ph.D. Candidate / Researcher"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Research Assistant (研究助理)",
    company: "National Cheng Kung University / Institute of International Management",
    period: "2020.09 - Present",
    description: "Project: 國科會-創客基地與創業家精神：創新共有資源觀點 (Project Host: Prof. Yu-Yu Chang)"
  },
  {
    role: "Project Staff (專案工作人員)",
    company: "National Cheng Kung University / Institute of International Management",
    period: "2019.09 - 2020.08",
    description: "Project: 國科會-創客基地與創業家精神：創新共有資源觀點(1/5) (Project Host: Prof. Yu-Yu Chang)"
  }
];

export const PUBLICATIONS: Publication[] = [
  // Journal Papers
  {
    title: "Is Imagination Your Superpower? Exploring the Interactive Role of Curiosity and Imagination in Fostering Psychological Capital",
    journalOrConference: "Thinking Skills and Creativity",
    year: "2025",
    authors: "Huei-Ying Chen, Yu-Yu Chang, Chia-Pin Kao",
    status: "Accepted",
    tags: ["SSCI", "2024 journal Impact factor 4.5"],
    category: "Journal Paper"
  },
  {
    title: "The Power of Curiosity: Exploring the Relationship between Joyous Curiosity, Self-efficacy, and Entrepreneurship",
    journalOrConference: "IEEE Transactions on Engineering Management",
    year: "2025",
    authors: "Yu-Yu Chang, Kamonluck Sathornsantikun, Yeshwant Raj, Huei-Ying Chen",
    status: "Accepted",
    tags: ["SSCI", "2024 journal Impact factor 5.2", "國科會管理一學門推薦期刊"],
    category: "Journal Paper"
  },
  {
    title: "How does work curiosity affect employees' creativity and innovation: Does task complexity matter?",
    journalOrConference: "Technovation",
    year: "2025",
    authors: "Huei-Ying Chen, Yu-Yu Chang, & Yun-Ju Yang",
    status: "Accepted",
    tags: ["SSCI", "2024 journal Impact factor 10.9", "國科會管理一學門推薦期刊"],
    category: "Journal Paper"
  },
  {
    title: "Seeking Silver Lining for Leaders’ Well-being: Understanding Gender Differences in Work-Family Conflict, Leadership Style, and Prioritizing Coping Strategy",
    journalOrConference: "Asia-Pacific Journal of Business Administration",
    year: "2024",
    authors: "Yu-Yu Chang, Huei-Ying Chen*, & Undrakh Purevlochin",
    status: "Accepted",
    tags: ["*Corresponding Author", "ESCI", "2024 journal Impact factor 4.6"],
    category: "Journal Paper"
  },
  {
    title: "外在刺激、消費認知、情感評估與電子商務平台消費者衝動購物行為之研究",
    journalOrConference: "電子商務研究",
    year: "2024",
    authors: "林姵妤，陳慧穎*",
    status: "Accepted",
    tags: ["*Corresponding Author"],
    category: "Journal Paper"
  },
  {
    title: "Is There No Place Like Home? Expatriates' Locus of Control Personality, Self-efficacy, Cross-cultural Adjustment, and Organizational Support for Expatriate Career",
    journalOrConference: "International Journal of Intercultural Relations, 93, 101761",
    year: "2023",
    authors: "Yu-Yu Chang, Huei-Ying Chen*, & Minh-Di Chau",
    tags: ["*Corresponding Author", "SSCI", "2024 journal Impact factor 2.8"],
    category: "Journal Paper"
  },
  {
    title: "探討工作動機, 創意過程與創意績效: 工作特性之干擾效果",
    journalOrConference: "科技管理學刊, 24(3), 37-76",
    year: "2019",
    authors: "張佑宇, 陳慧穎, & 施慧鈺",
    category: "Journal Paper"
  },
  
  // Conference Papers
  {
    title: "The power of curiosity in entrepreneurship education: How entrepreneurial self-efficacy converts joyous exploration into entrepreneurship",
    journalOrConference: "2024 British Academy of Management Annual Conference, Nottingham Trent University",
    year: "2024",
    authors: "Chang, Y.-Y., Sathornsantikun, K., Chen, H.-Y., & Raj, Y. S.",
    tags: ["Best Full Paper Award"],
    category: "Conference Paper"
  },
  {
    title: "How does work curiosity affect employees' creativity and innovation: Does task complexity matter?",
    journalOrConference: "Academy of Management Proceedings (Vol. 2024, p. 1957)",
    year: "2024",
    authors: "Yu-Yu Chang, Huei-Ying Chen*, & Yun-Ju Yang",
    tags: ["84th Annual Meeting of AOM 2024", "本人為通訊作者及報告人"],
    category: "Conference Paper"
  },
  {
    title: "Joy is Strength: Understanding Curiosity, Entrepreneurial Self-Efficacy, and Entrepreneurship",
    journalOrConference: "Academy of Management Proceedings (Vol. 2024, p. 673)",
    year: "2024",
    authors: "Yu-Yu Chang, Kamonluck Sathornsantikun, Yeshwant Raj S, & Huei-Ying Chen",
    category: "Conference Paper"
  },
  {
    title: "Believe and be brave: Buddhist philosophy, entrepreneurial orientation and new product development creativity",
    journalOrConference: "2023 British Academy of Management Conference",
    year: "2023",
    authors: "Yu-Yu Chang, Huei-Ying Chen*, Natcha Saeyun",
    tags: ["本人為通訊作者及報告人"],
    category: "Conference Paper"
  },
  {
    title: "Should I Stay or Should I Go? Expatriates’ Locus of Control Personality, Self-efficacy, Cross-cultural Adjustment, and Organizational Career Support",
    journalOrConference: "British Academy of Management Virtual Conference in The Cloud 2022",
    year: "2022",
    authors: "Yu-Yu Chang, Huei-Ying Chen*, Minh-Di Chau",
    tags: ["本人為通訊作者及報告人"],
    category: "Conference Paper"
  },
  {
    title: "Does Curiosity Trigger Positive Psychological Capital? Investigating the Moderating Role of Imagination",
    journalOrConference: "British Academy of Management Virtual Conference in The Cloud 2021",
    year: "2021",
    authors: "Yu-Yu Chang, Huei-Ying Chen*, Chia-Pin Kao, Kuen-Yi Lin",
    tags: ["本人為通訊作者及報告人", "Best Paper Award"],
    category: "Conference Paper"
  },
  {
    title: "工作動機與創意績效：探討創意過程、時間壓力與創新工作要求之中介干擾效果",
    journalOrConference: "2018中華民國科技管理年會暨論文研討會",
    year: "2018",
    authors: "張佑宇, 陳慧穎*, & 施慧鈺",
    tags: ["本人為通訊作者及報告人", "佳作"],
    category: "Conference Paper"
  }
];

export const AWARDS: Award[] = [
  // Academic Honors
  {
    title: "中華民國斐陶斐榮譽學會之榮譽會員證書",
    year: "2024",
    description: "中華民國2024年6月1日核發",
    category: "Academic Honors"
  },
  // Paper Awards
  {
    title: "2024 英國管理學會年會最佳論文獎",
    year: "2024",
    description: "Best Full Paper award in the Entrepreneurship Track at the BAM2024 Conference. Title: The Power of Curiosity in Entrepreneurship Education: How Entrepreneurial Self-efficacy Converts Joyous Exploration into Entrepreneurship",
    category: "Paper Awards"
  },
  {
    title: "2021 英國管理學會年會最佳論文獎",
    year: "2021",
    description: "Best Paper Award in Organizational Psychology Track at 2021 British Academy of Management Conference. Title: Does Curiosity Trigger Positive Psychological Capital? Investigating the Moderating Role of Imagination. BAM 2021 at Lancaster University, 2021.9.2",
    category: "Paper Awards"
  },
  {
    title: "2019科技管理碩士論文獎",
    organization: "中華民國科技管理學會–佳作",
    year: "2019",
    category: "Paper Awards"
  },
  // International Competitions
  {
    title: "2019 全球品牌策劃大賽 – 季軍",
    organization: "Global Brand Planning Competition – 3rd Place",
    year: "2019",
    category: "International Competitions"
  },
  {
    title: "2018 全球品牌策劃大賽總決賽 -冠軍；中文辯論賽-冠軍",
    organization: "Global Brand Planning Competition Champion & Chinese Debate Champion",
    year: "2018",
    category: "International Competitions"
  },
  {
    title: "2016 全球品牌策劃大賽總決賽 – 金質獎",
    organization: "Global Brand Planning Competition – Gold Award",
    year: "2016",
    category: "International Competitions"
  },
  {
    title: "2015 全球品牌策劃大賽總決賽 – 冠軍",
    organization: "Global Brand Planning Competition – Champion",
    year: "2015",
    category: "International Competitions"
  },
  // Domestic Competitions
  {
    title: "全球品牌策劃大赛（台灣區總決賽）–優勝",
    year: "2019",
    category: "Domestic Competitions"
  },
  {
    title: "全國微型創業創新競賽–第一名",
    year: "2019",
    category: "Domestic Competitions"
  },
  {
    title: "新創盃全國大專校院創意創新創業企畫競賽–特優",
    year: "2018",
    category: "Domestic Competitions"
  },
  {
    title: "全國大專院校-創新×創業×創客構想書競賽–第一名",
    year: "2018",
    category: "Domestic Competitions"
  },
  {
    title: "全國大專院校與高中職(第五屆)三創與行銷企劃競賽–冠軍",
    year: "2018",
    category: "Domestic Competitions"
  },
  {
    title: "全球品牌策劃大赛（台灣區總決賽）–優勝",
    year: "2018",
    category: "Domestic Competitions"
  },
  {
    title: "全國大專校院創新精緻農業商展-享農食光競賽（中文解說）–佳作",
    year: "2017",
    category: "Domestic Competitions"
  },
  {
    title: "全國大專校院創新精緻農業商展-享農食光競賽（總錦標）–第二名",
    year: "2017",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（總錦標）–佳作",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（產品發表活動表演）–第三名",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（計劃書）–第一名",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "全國高中職暨大專院校國際商品解說模擬競賽–佳作",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "南臺科技大學專利研發成果加值競賽展–第三名",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "全球品牌策劃大赛（台灣區總決賽）–優勝",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "教育金像獎（在學學生組）–網路最佳人氣影片獎",
    year: "2016",
    category: "Domestic Competitions"
  },
  {
    title: "國際商展暨簡報競賽-國際擬餌暨釣具展（商品解說）–佳作",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "國際商展暨簡報競賽-國際擬餌暨釣具展（展間設計）–第三名",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "全國大專院校三創與行銷企劃競賽–第一名",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "文創之星創意加值競賽（工藝及設計類組）–最佳人氣獎",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "全球品牌策劃大赛（台灣區總決賽）–優勝",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（總錦標）–第一名",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（展場商務模擬英文問答）–第二名",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（展位商品陳列）–第三名",
    year: "2015",
    category: "Domestic Competitions"
  },
  {
    title: "九校聯合學生創業圓夢培育營–佳作",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "全國大專院校三創行銷企劃競賽–冠軍",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（總錦標）–第一名",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "第五屆全國大專院校創意會展企劃競賽（簡報組）–第一名",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "第五屆全國大專院校創意會展企劃競賽（企劃書）–第一名",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（展場商務國貿知識問答）–第一名",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "貿易模擬展覽競賽（展場商務模擬英文問答）–第二名",
    year: "2014",
    category: "Domestic Competitions"
  },
  {
    title: "校際商品模擬競賽（簡報組）–第一名",
    year: "2013",
    category: "Domestic Competitions"
  },
  // Certificates
  {
    title: "優質企業供應鏈安全專責人員證書",
    description: "訓練期間自104年10月16日至104年10月16日",
    year: "2015",
    category: "Certificates"
  },
  {
    title: "國貿業務丙級",
    description: "技術士證總編號：200-020523",
    category: "Certificates"
  },
  {
    title: "會計事務–人工記帳丙級",
    description: "技術士證總編號：149-473782",
    category: "Certificates"
  },
  {
    title: "電腦軟體應用丙級",
    description: "技術士證總編號：118-628714",
    category: "Certificates"
  }
];
