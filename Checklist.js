function SendChecklist2() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Team Day 1 Checklist",
  body: "Hey name,\n\nHere is my Team Day 1 Checklist attached below...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Team Day 1 Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist1() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Pep Rally Checklist",
  body: "Hey name,\n\nHere is my Pep Rally Day Checklist, Lesson Schedule, and Poster Prize Chart...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Pep Rally Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist3() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Team Day 2 Checklist",
  body: "Hey name,\n\nHere is my Team Day 2 Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Team Day 2 Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist4() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Team Day 3 Checklist",
  body: "Hey name,\n\nHere is my Team Day 3 Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Team Day 3 Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist5() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Team Day 4 Checklist",
  body: "Hey name,\n\nHere is my Team Day 4 Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Team Day 4 Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist6() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Team Day 5 Checklist",
  body: "Hey name,\n\nHere is my Team Day 5 Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Team Day 5 Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist7() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Team Day 6 Checklist",
  body: "Hey name,\n\nHere is my Team Day 6 Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Team Day 6 Checklist")]
}
MailApp.sendEmail(message);{
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
}
}
function SendChecklist8() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Fun Run / Follow Up Day Checklist",
  body: "Hey name,\n\nHere is my Fun Run / Follow Up Day Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("FunRun/FollowUp Day Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist9() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com, insertemail@apexleadershipco.com",
  subject: "Quick Collect Recap",
  body: "Hey name,\n\nHere is my Quick Collect Recap sheet from the last two weeks...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Quick Collect Recap")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist10() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com",
  subject: "Extra Team Day Checklist",
  body: "Hey name,\n\nHere is my Extra Team Day Checklist and notes...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Extra Team Day Checklist")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}
function SendChecklist11() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com, insertemail@apexleadershipco.com, insertemail@apexleadershipco.com, insertemail@apexleadershipco.com",
  subject: "Final Inventory Sheet",
  body: "Hey everyone,\n\nHere is my final inventory sheet...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("Final Inventory Sheet")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
}
}
function SendChecklist12() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com, insertemail@apexleadershipco.com, insertemail@apexleadershipco.com, insertemail@apexleadershipco.com",
  subject: "My IOU's",
  body: "Hey team,\n\nHere are my IOU's...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("IOU Sheet")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("End of First Week Inventory Sheet").showSheet();
}
}

function SendChecklist13() {
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").hideSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").hideSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").hideSheet();
var message = {
  to: "insertemail@apexleadershipco.com, insertemail@apexleadershipco.com, insertemail@apexleadershipco.com, insertemail@apexleadershipco.com",
  subject: "End of First Week Inventory Sheet",
  body: "Hey everyone,\n\nHere is my end of first week inventory sheet...",
  attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName("End of First Week Inventory Sheet")]
}
MailApp.sendEmail(message);{
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lesson Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reward Schedule").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Poster Prize Chart").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IOU Sheet").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pep Rally Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 1 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 2 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 3 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 4 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 5 Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Day 6 (Day Before Event) Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Extra Team Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event/FollowUp Day Checklist").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Announcement Sheet").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("School Notes").showSheet();
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Quick Collect Recap").showSheet();
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Final Inventory Sheet").showSheet();
}
}
