# LaunchDarkly Testing

**Built using Client-side NodeJS SDK**<br>
Assume Node.js is already installed. Otherwise install [Node.js](https://nodejs.org). 

## Feature Flag Setup
1. In LD, create some flags. In my account, I created 4 flags:
   - test-flag-1: Anonymous targeting. Value: 12345
   - test-flag-2: Targeted. Serves 'false' to 'sed@idontexist.org.com' user
   - test-flag-3: Targeting off. Two values: Variation1 {def}/Variation2.
   - pricing-tier-3:  {left over from a tutorial}
For all Flags, select *SDKs for using Client-side ID* in **Settings** so they are served to Node client.
## Build instructions

1. Install the LaunchDarkly Client-Side NodeJS SDK by running `npm init` into a directory.

2. Run `npm install launchdarkly-node-client-sdk@2.0.2 --save`

3. Edit `index.js` and the client-side ID in LD SDK's initialize():

```js
  const ldClient = LaunchDarkly.initialize("<CLIENT-ID></CLIENT-ID>", user);
```

6. Add flags in LD's interface, which target users. Here are the details of users in code:
```js
//   key: "example-user-key",
//   email: "sed@idontexist.org.com",
// };

var user = {
  key: "examplef-user-key",
  email: "sed2@idontexist.org.com",
};
```
Adapt to suit your targets. Uncomment the user not being used.

5. Run the app using:
```
  node index.js 
```
Profit! 

### Sample Output
The output from *node index.js* as the **sed2@idontexist.org.com** user shows:
  ```
  info: [LaunchDarkly] LaunchDarkly client initialized
*** SDK successfully initialized!

*** Output all flags for user
*** pricing-tier-3: false
*** test-flag-1: 12345
*** test-flag-2: true
*** test-flag-3: 324
*** 
*** Now take action on  'true' flags for this user
*** Feature flag test-flag-2: is true for this user
*** STUB: Expose related functionality to user!
```

## Features
* 2 users; defined by email
* Flags targeted to user
* AllFlagsResults() used 
* Take action on 'true' flags

## Time spent
* 1hr: Documentation & tutorial review
* 1hr: Building, testing, experimentation
* 15mins: Documentation, packaging

Flags in action on [Glitch](https://glitch.com/edit/#!/launchdarkly-silicon-hygienic)

#### Thank you!