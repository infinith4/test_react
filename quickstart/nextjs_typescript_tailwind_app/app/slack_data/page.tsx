const slack_data =     {
  "type": "message",
  "text": "Hello world!",
  "user": "",
  "ts": "1698988237.161359",
  "blocks": [
      {
          "type": "rich_text",
          "block_id": "3jAvK",
          "elements": [
              {
                  "type": "rich_text_section",
                  "elements": [
                      {
                          "type": "text",
                          "text": "Hello world!"
                      }
                  ]
              }
          ]
      }
  ],
};

export default function Profile() {
  if(slack_data.type == 'message'){
    var dateRevert = new Date(parseInt(slack_data.ts)*1000);
    return (
      <>
        <h1>{slack_data.text}</h1>
        <h1>{slack_data.user}</h1>
        <h1>{dateRevert.toString()}</h1>
      </>
    );
  }
}
