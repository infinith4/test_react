require('dotenv').config()

const slack_data = {
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
  const { WebClient } = require('@slack/web-api');
  // Read a token from the environment variables
  const token = process.env.SLACK_TOKEN;
  console.log(token);
  // Initialize
  const web = new WebClient(token);
  const conversationId = 'C037XHRQM5Z';

  (async () => {

    // Post a message to the channel, and await the result.
    // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
    const result = await web.chat.postMessage({
      text: 'こんにちは。今日も元気に気をつけてね。',
      channel: conversationId,
    });

    // The result contains an identifier for the message, `ts`.
    console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
  })();
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
