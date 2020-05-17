
const chatMessagesContainer = $("#chat-messages");
const chatInput = $("#chat-input");
const chatButton = $("#chat-button");
const chatForm = $("#chat-form");

const chatFn = (e) => {
   chatMessagesContainer.append("<p>" + "User123 : " + chatInput.val() + "(sent at " + moment().format("HH:mm") + ")</p>");
   chatInput.val("");
   chatInput.focus();
  e.preventDefault();
};

chatForm.submit(chatFn);
