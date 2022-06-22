window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://parloa.github.io/chat-api-spec/parloa-chat-v2.yml",
    dom_id: "#swagger-ui",
    deepLinking: true,
    queryConfigEnabled: false,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "BaseLayout",
  });

  //</editor-fold>
};
