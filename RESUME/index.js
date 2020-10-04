const TopDiv = document.createElement("div");
TopDiv.classList.add("top-div");
document.body.append(TopDiv);

const ProfileImage = document.createElement("img");
ProfileImage.src = "./resumeImage.jpg";
ProfileImage.classList.add("profile-img");
TopDiv.append(ProfileImage);

const ProfileDiv = document.createElement("div");
ProfileDiv.classList.add("profileName-div");
TopDiv.append(ProfileDiv);

const ProfileName = document.createElement("h1");
ProfileName.innerText = "Dhimanth Sediyapu";
ProfileName.classList.add("profile-name");
ProfileDiv.append(ProfileName);

const WhiteDiv = document.createElement("div");
WhiteDiv.classList.add("white-div");
TopDiv.append(WhiteDiv);

const AddressLine = document.createElement("p");
AddressLine.innerText =
  "Bannur, Puttur 574203 | 91-9480703738 | sediyapu98@gmail.com | https://github.com/DhimanthS/Zen-Tasks";
AddressLine.classList.add("address-line");
TopDiv.append(AddressLine);

const HorizontalLine = document.createElement("hr");
TopDiv.append(HorizontalLine);

// Profile Section

const LeftDiv = document.createElement("div");
LeftDiv.classList.add("left-div");
TopDiv.append(LeftDiv);

const Profile = document.createElement("h1");
Profile.innerText = "Profile";
LeftDiv.append(Profile);

const icon = document.createElement("i");
icon.classList.add("fa-user-circle");
icon.classList.add("fas");
Profile.prepend(icon);

const ProfileDescription = document.createElement("p");
ProfileDescription.innerText =
  "Innovative Optimized solution seeker. Excited to be at the deployment phase of new career as a web developer. I am ambitious adventurous, assisuous, animated, and an alliteration advocate";
LeftDiv.append(ProfileDescription);

//Skills section

const Skills = document.createElement("h1");
Skills.innerText = "Skills";
LeftDiv.append(Skills);

const FlaskIcon = document.createElement("i");
FlaskIcon.classList.add("fa-flask");
FlaskIcon.classList.add("fas");
Skills.prepend(FlaskIcon);

const TechnicalSkills = document.createElement("p");
TechnicalSkills.innerText = "Technical Skills";
TechnicalSkills.classList.add("skills");
LeftDiv.append(TechnicalSkills);

const Table1 = document.createElement("table");
LeftDiv.append(Table1);

const Table1row1 = document.createElement("tr");
Table1.append(Table1row1);

const Table1row1Col1 = document.createElement("td");
Table1row1Col1.innerText = "JavaScript";
Table1row1.append(Table1row1Col1);

const Table1row1Col2 = document.createElement("td");
Table1row1Col2.classList.add("js");
Table1row1.append(Table1row1Col2);

const JavScriptRange = document.createElement("INPUT");
JavScriptRange.setAttribute("type", "range");
JavScriptRange.setAttribute("min", "0");
JavScriptRange.setAttribute("max", "10");
JavScriptRange.setAttribute("value", "7");
JavScriptRange.setAttribute("disabled", "");
JavScriptRange.classList.add("slider");
Table1row1Col2.append(JavScriptRange);

const Table1row2 = document.createElement("tr");
Table1.append(Table1row2);

const Table1row2Col1 = document.createElement("td");
Table1row2Col1.innerText = "CSS";
Table1row2.append(Table1row2Col1);

const Table1row2Col2 = document.createElement("td");

Table1row2.append(Table1row2Col2);

const CSSrange = document.createElement("INPUT");
CSSrange.setAttribute("type", "range");
CSSrange.setAttribute("min", "0");
CSSrange.setAttribute("max", "10");
CSSrange.setAttribute("value", "7");
CSSrange.setAttribute("disabled", "");
CSSrange.classList.add("slider");
Table1row2Col2.append(CSSrange);

const Table1row3 = document.createElement("tr");
Table1.append(Table1row3);

const Table1row3Col1 = document.createElement("td");
Table1row3Col1.innerText = "HTML";
Table1row3.append(Table1row3Col1);

const Table1row3Col2 = document.createElement("td");
Table1row3.append(Table1row3Col2);

const HTMLrange = document.createElement("INPUT");
HTMLrange.setAttribute("type", "range");
HTMLrange.setAttribute("min", "0");
HTMLrange.setAttribute("max", "10");
HTMLrange.setAttribute("value", "8");
HTMLrange.setAttribute("disabled", "");
HTMLrange.classList.add("slider");
HTMLrange.classList.add("range8");
Table1row3Col2.append(HTMLrange);

const Table1row4 = document.createElement("tr");
Table1.append(Table1row4);

const Table1row4Col1 = document.createElement("td");
Table1row4Col1.innerText = "React";
Table1row4.append(Table1row4Col1);

const Table1row4Col2 = document.createElement("td");

Table1row4.append(Table1row4Col2);
const Reactrange = document.createElement("INPUT");
Reactrange.setAttribute("type", "range");
Reactrange.setAttribute("min", "0");
Reactrange.setAttribute("max", "10");
Reactrange.setAttribute("value", "5");
Reactrange.setAttribute("disabled", "");
Reactrange.classList.add("slider");
Reactrange.classList.add("range5");
Table1row4Col2.append(Reactrange);

const Table1row5 = document.createElement("tr");
Table1.append(Table1row5);

const Table1row5Col1 = document.createElement("td");
Table1row5Col1.innerText = "Redux";
Table1row5.append(Table1row5Col1);

const Table1row5Col2 = document.createElement("td");
Table1row5.append(Table1row5Col2);

const Reduxrange = document.createElement("INPUT");
Reduxrange.setAttribute("type", "range");
Reduxrange.setAttribute("min", "0");
Reduxrange.setAttribute("max", "10");
Reduxrange.setAttribute("value", "5");
Reduxrange.setAttribute("disabled", "");
Reduxrange.classList.add("slider");
Reduxrange.classList.add("range5");
Table1row5Col2.append(Reduxrange);

const Table1row6 = document.createElement("tr");
Table1.append(Table1row6);
const Table1row6Col1 = document.createElement("td");
Table1row6Col1.innerText = "Mongo";
Table1row6.append(Table1row6Col1);

const Table1row6Col2 = document.createElement("td");
Table1row6.append(Table1row6Col2);
const Mongorange = document.createElement("INPUT");
Mongorange.setAttribute("type", "range");
Mongorange.setAttribute("min", "0");
Mongorange.setAttribute("max", "10");
Mongorange.setAttribute("value", "5");
Mongorange.setAttribute("disabled", "");
Mongorange.classList.add("slider");
Mongorange.classList.add("range5");
Table1row6Col2.append(Mongorange);

const Table1row7 = document.createElement("tr");
Table1.append(Table1row7);

const Table1row7Col1 = document.createElement("td");
Table1row7Col1.innerText = "Deployment";
Table1row7.append(Table1row7Col1);

const Table1row7Col2 = document.createElement("td");
Table1row7.append(Table1row7Col2);

const Deployrange = document.createElement("INPUT");
Deployrange.setAttribute("type", "range");
Deployrange.setAttribute("min", "0");
Deployrange.setAttribute("max", "10");
Deployrange.setAttribute("value", "7");
Deployrange.setAttribute("disabled", "");
Deployrange.classList.add("slider");
Table1row7Col2.append(Deployrange);

const AdditionalSkills = document.createElement("p");
AdditionalSkills.innerText = "Additional Skills";
AdditionalSkills.classList.add("skills");
LeftDiv.append(AdditionalSkills);

const Table2 = document.createElement("table");
LeftDiv.append(Table2);

const Table2row1 = document.createElement("tr");
Table2.append(Table2row1);

const Table2row1Col1 = document.createElement("td");
Table2row1Col1.innerText = "Project Managment";
Table2row1.append(Table2row1Col1);

const Table2row1Col2 = document.createElement("td");
Table2row1Col2.classList.add("js");
Table2row1.append(Table2row1Col2);
const PMRange = document.createElement("INPUT");
PMRange.setAttribute("type", "range");
PMRange.setAttribute("min", "0");
PMRange.setAttribute("max", "10");
PMRange.setAttribute("value", "7");
PMRange.setAttribute("disabled", "");
PMRange.classList.add("slider");
Table2row1Col2.append(PMRange);

const Table2row2 = document.createElement("tr");
Table2.append(Table2row2);

const Table2row2Col1 = document.createElement("td");
Table2row2Col1.innerText = "Recruitment";
Table2row2.append(Table2row2Col1);

const Table2row2Col2 = document.createElement("td");
Table2row2.append(Table2row2Col2);

const RecruitmentRange = document.createElement("INPUT");
RecruitmentRange.setAttribute("type", "range");
RecruitmentRange.setAttribute("min", "0");
RecruitmentRange.setAttribute("max", "10");
RecruitmentRange.setAttribute("value", "7");
RecruitmentRange.setAttribute("disabled", "");
RecruitmentRange.classList.add("slider");
Table2row2Col2.append(RecruitmentRange);

const Table2row3 = document.createElement("tr");
Table2.append(Table2row3);

const Table2row3Col1 = document.createElement("td");
Table2row3Col1.innerText = "Business Development";
Table2row3.append(Table2row3Col1);

const Table2row3Col2 = document.createElement("td");
Table2row3.append(Table2row3Col2);

const BDRange = document.createElement("INPUT");
BDRange.setAttribute("type", "range");
BDRange.setAttribute("min", "0");
BDRange.setAttribute("max", "10");
BDRange.setAttribute("value", "6");
BDRange.setAttribute("disabled", "");
BDRange.classList.add("slider");
BDRange.classList.add("range6");
Table2row3Col2.append(BDRange);

const Table2row4 = document.createElement("tr");
Table2.append(Table2row4);

const Table2row4Col1 = document.createElement("td");
Table2row4Col1.innerText = "Editing";
Table2row4.append(Table2row4Col1);

const Table2row4Col2 = document.createElement("td");
Table2row4.append(Table2row4Col2);

const EditRange = document.createElement("INPUT");
EditRange.setAttribute("type", "range");
EditRange.setAttribute("min", "0");
EditRange.setAttribute("max", "10");
EditRange.setAttribute("value", "6");
EditRange.setAttribute("disabled", "");
EditRange.classList.add("slider");
EditRange.classList.add("range6");
Table2row4Col2.append(EditRange);

const Table2row5 = document.createElement("tr");
Table2.append(Table2row5);

const Table2row5Col1 = document.createElement("td");
Table2row5Col1.innerText = "Fundraising";
Table2row5.append(Table2row5Col1);

const Table2row5Col2 = document.createElement("td");
Table2row5.append(Table2row5Col2);

const FundRange = document.createElement("INPUT");
FundRange.setAttribute("type", "range");
FundRange.setAttribute("min", "0");
FundRange.setAttribute("max", "10");
FundRange.setAttribute("value", "5");
FundRange.setAttribute("disabled", "");
FundRange.classList.add("slider");
FundRange.classList.add("range5");
Table2row5Col2.append(FundRange);

// Work Experience - 1  left div

const WorkEx = document.createElement("h1");
WorkEx.innerText = "Work experience";
LeftDiv.append(WorkEx);

const workIcon = document.createElement("i");
workIcon.classList.add("fa-briefcase");
workIcon.classList.add("fas");
WorkEx.prepend(workIcon);

const WorkDesgination = document.createElement("p");
WorkDesgination.innerText = "Event Manager";
WorkDesgination.classList.add("designation");
LeftDiv.append(WorkDesgination);

const Workdate = document.createElement("span");
Workdate.innerText = "03/2014-02/2017";
Workdate.classList.add("work-date");
WorkDesgination.append(Workdate);

const WorkDescription = document.createElement("p");
WorkDescription.classList.add("small-txt");
WorkDescription.innerText = "C3 Presents, Washington DC";
LeftDiv.append(WorkDescription);

const EMList = document.createElement("ul");
LeftDiv.append(EMList);

const EMItem1 = document.createElement("li");
EMItem1.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil aspernatur, possimus assumenda eum incidunt culpa facere provident nam placeat.";
EMList.append(EMItem1);

const EMItem2 = document.createElement("li");
EMItem2.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil aspernatur, possimus assumenda eum incidunt culpa facere provident nam placeat.";
EMList.append(EMItem2);

const EMItem3 = document.createElement("li");
EMItem3.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil aspernatur, possimus assumenda eum incidunt culpa facere provident nam placeat.";
EMList.append(EMItem3);

const MiddleLine = document.createElement("div");
MiddleLine.classList.add("verticle-line");
TopDiv.append(MiddleLine);

// Work Experience - 2  right div

const RightDiv = document.createElement("div");
RightDiv.classList.add("right-div");
TopDiv.append(RightDiv);

const WorkEx2 = document.createElement("h1");
WorkEx2.innerText = "Work experience";
RightDiv.append(WorkEx2);

const workIcon2 = document.createElement("i");
workIcon2.classList.add("fa-briefcase");
workIcon2.classList.add("fas");
WorkEx2.prepend(workIcon2);

const WorkDesgination2 = document.createElement("p");
WorkDesgination2.innerText = "Community Relations Manager";
WorkDesgination2.classList.add("designation");
RightDiv.append(WorkDesgination2);

const Workdate2 = document.createElement("span");
Workdate2.innerText = "06/2011-01/2014";
Workdate2.classList.add("work-date");
WorkDesgination2.append(Workdate2);

const WorkDescription2 = document.createElement("p");
WorkDescription2.classList.add("small-txt");
WorkDescription2.innerText = "Sherlock Elder Housing, Los Angeles";
RightDiv.append(WorkDescription2);

const CRMList = document.createElement("ul");
RightDiv.append(CRMList);

const CRMItem1 = document.createElement("li");
CRMItem1.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil";
CRMList.append(CRMItem1);

const CRMItem2 = document.createElement("li");
CRMItem2.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil";
CRMList.append(CRMItem2);

const CRMItem3 = document.createElement("li");
CRMItem3.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil";
CRMList.append(CRMItem3);

//Education - 1

const Education = document.createElement("h1");
Education.innerText = "Education";
RightDiv.append(Education);

const EducationIcon = document.createElement("i");
EducationIcon.classList.add("fa-graduation-cap");
EducationIcon.classList.add("fas");
Education.prepend(EducationIcon);

const EducationProgram = document.createElement("p");
EducationProgram.innerText = "Enginnering Emersion Program";
EducationProgram.classList.add("designation");
RightDiv.append(EducationProgram);

const EducationDate = document.createElement("span");
EducationDate.innerText = "11/2018-06/2018";
EducationDate.classList.add("work-date");
EducationProgram.append(EducationDate);

const EducationAddress = document.createElement("p");
EducationAddress.classList.add("small-txt");
EducationAddress.innerText = "Thinkful, Chicago, IL";
RightDiv.append(EducationAddress);

const EducationList = document.createElement("ul");
RightDiv.append(EducationList);

const EducationItem1 = document.createElement("li");
EducationItem1.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione eius qui dolores, molestiae provident sit magnam delectus repellendus consectetur architecto nihil fugiat recusandae. Numquam voluptas dolore eum natus corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis";
EducationList.append(EducationItem1);

const EducationItem2 = document.createElement("li");
EducationItem2.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab omnis, cum minima quia distinctio alias soluta, totam quod nihil aspernatur, possimus assumenda eum incidunt culpa facere provident nam placeat. laudantium deleniti natus dolore reiciendis ipsum earum ullam quisquam eos consequuntur, unde consectetur doloribus doloremque";
EducationList.append(EducationItem2);

const EducationItem3 = document.createElement("li");
EducationItem3.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam laudantium deleniti natus dolore reiciendis ipsum earum ullam quisquam eos consequuntur, unde consectetur doloribus doloremque quam officia exercitationem explicabo perferendis? ratione eius qui dolores, molestiae provident sit magnam delectus repellendus consectetur architecto nihil fugiat recusandae. Numquam voluptas dolore eum natus corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt voluptas cum adipisci et! Quisquam, facere rerum debitis";
EducationList.append(EducationItem3);

const EducationItem4 = document.createElement("li");
EducationItem4.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam laudantium deleniti natus dolore reiciendis ipsum earum ullam quisquam eos consequuntur, unde consectetur doloribus doloremque quam officia exercitationem explicabo perferendis? ratione eius qui dolores, molestiae provident sit magnam delectus repellendus consectetur architecto nihil fugiat recusandae. Numquam voluptas dolore eum natus corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt voluptas cum adipisci et! Quisquam, facere rerum debitis";
EducationList.append(EducationItem4);

//Education - 2

const EducationProgram2 = document.createElement("p");
EducationProgram2.innerText = "BA, English";
EducationProgram2.classList.add("designation");
RightDiv.append(EducationProgram2);

const EducationDate2 = document.createElement("span");
EducationDate2.innerText = "09/2001-09/2005";
EducationDate2.classList.add("work-date");
EducationProgram2.append(EducationDate2);

const EducationAddress2 = document.createElement("p");
EducationAddress2.classList.add("small-txt");
EducationAddress2.innerText = "University of California, LA";
RightDiv.append(EducationAddress2);