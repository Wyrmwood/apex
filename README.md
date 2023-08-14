# apex
scripts for Apex

## Digital Daily Checklist
The Checklist.js is the Apps Script for each areas Digital Daily Checklist template. The only change that may be needed is to update the emails (lead + kisti). 

This was based off of excellent work by a former employee, updated by John F. to remove the static sheetnames and instead just dynamically grabs them. This way you can add or remove a sheet without having to edit the Apps Script. 

## Usage
Each spreadsheet that has a checklist needs to have the contents of Checklist.js copied to it's Apps Script. This only needs to be done once per spreadsheet. Each checklist needs a submit button. 
Right click the submit button to select it, then click the elipsis (3 dots) to the top right and select Assign Script. In text field, type sendChecklistDynamic. 
