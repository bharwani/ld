# LaunchDarkly Testing

**Built using Client-side NodeJS SDK**<br>
Assume Node.js is already installed. Otherwise install [Node.js](https://nodejs.org). 
## Build instructions

1. Install the LaunchDarkly Client-Side NodeJS SDK by running `npm init` into a directory.

2. Run `npm install launchdarkly-node-client-sdk@2.0.2 --save`

3. Edit `index.js` and the client-side ID in LD SDK's initialize():

```js
  const ldClient = LaunchDarkly.initialize("<CLIENT-ID></CLIENT-ID>", user);
```

4. Run the app using:
```
  node index.js 
```

##Features
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