function doPost(e) {
  return ContentService.createTextOutput(JSON.parse(e.postData.contents).challenge);
}
