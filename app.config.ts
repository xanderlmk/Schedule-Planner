module.exports = {
  expo: {
    name: "schedule-planner",
    slug: "schedule-planner",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      [
        "expo-router",
      ],
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      [
        "expo-font"
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        "origin": false
      },
      eas: {
        projectId: "b56584de-9dc5-4a2d-8a05-05498bbd6417"
      }
    },
    owner: "xanderlmk"
  }
}
