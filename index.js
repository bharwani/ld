// Import the LaunchDarkly client
var LaunchDarkly = require("launchdarkly-node-client-sdk");

// Enable Logger in debug mode
// TODO: I didn't get this working before running out of time
const config = {
  logger: LaunchDarkly.basicLogger({
    level: "debug",
    destination: console.log,
  }),
};

// Set up user properties. 2 users so I can test Targeted flags
// var user = {
//   key: "example-user-key",
//   email: "sed@idontexist.org.com",
// };

var user = {
  key: "examplef-user-key",
  email: "sed2@idontexist.org.com",
};

// Create a single instance of the LaunchDarkly client
const ldClient = LaunchDarkly.initialize("", user);

// Function to log messages to console
function showMessage(s) {
  console.log("*** " + s);
}

ldClient
  .waitForInitialization()
  .then(function () {
    showMessage("SDK successfully initialized!" + "\n");
    //const flagValue = ldClient.variation("pricing-tier-3", false);
    let allFlagsResult = ldClient.allFlags();

    showMessage("Output all flags for user");
    for (const [key, value] of Object.entries(allFlagsResult)) {
      showMessage(`${key}: ${value}`);
    }
    showMessage("");

    // Can't do this as allFlagsResult is a Map
    //showMessage("Flags" + allFlagsResult.entries());

    //Not the documented way to use flags; was trying a 'different' approach 
    showMessage("Now take action on  'true' flags for this user");
    for (const [key, value] of Object.entries(allFlagsResult)) {
       if (value == true){
            showMessage("Feature flag " + `${key}:` + " is " + `${value}` + " for this user")
            showMessage("STUB: Expose related functionality to user!");
        }
    }
    showMessage("");

    // Here we ensure that the SDK shuts down cleanly and has a chance to deliver analytics
    // events to LaunchDarkly before the program exits. If analytics events are not delivered,
    // the user properties and flag usage statistics will not appear on your dashboard. In a
    // normal long-running application, the SDK would continue running and events would be
    // delivered automatically in the background.
    ldClient.close();
  })
  .catch(function (error) {
    showMessage("SDK failed to initialize: " + error);
    process.exit(1);
  });