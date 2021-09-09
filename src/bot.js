
 
  window.watsonAssistantChatOptions = {
      integrationID: "3ce80af6-e24b-41fd-9963-589fb6805f39", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "632f0635-143c-4808-ac64-c4301e197b51", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js"
    document.head.appendChild(t);
  });
