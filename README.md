# Event-based Notifications with OneSignal & Segment

Event-based push notifications are a great way to stay connected with your customers. In this post, I’ll show you how easy it is to integrate OneSignal and Segment to send events for things like new user registration, abandoned cart email, and checkout completion. I’ll focus on new user registration since it's such a common use case. By the end of this post, you will understand how you can leverage Segment + OneSignal to deliver event-based notifications in your own apps. 

## Prerequisites

If you would like to run this sample, you will need 

* A OneSignal account ([create one](#))
* A Segment account ([create one](#))
* A Mailgun account ([create one](#)))

### OneSignal Setup

Navigate to your OneSignal dashboard and click the **New App/Website** button.

![Screen Shot 2021-09-22 at 10 22 00 AM](https://user-images.githubusercontent.com/1715082/134387756-77e72f3d-4d3d-4f56-b6c7-70ae6b674085.png)

On the **New App / Website** page, provide a name for your app and select the _Web_ platform. You can optionally assign your new app to an existing organization. Click the button labeled **Next: Configure Your Platform**.

![Screen Shot 2021-09-22 at 10 24 39 AM](https://user-images.githubusercontent.com/1715082/134387974-31b79f89-9d0f-4efa-8742-1e83e25649b5.png)

On the **Web Configuration** page, select the Custom Code integration
Provide a name for the site and the URL the app is hosted on. If you are developing your app locally, set the URL to localhost and specify the port your app listens to. Note that you will be presented the option to treat traffic from your dev environment as HTTPS.
Click the **Save** button to complete the app setup process.

![Screen Shot 2021-09-22 at 10 31 03 AM](https://user-images.githubusercontent.com/1715082/134388072-8adbc42f-0373-4ff9-9592-fdbaf7406838.png)

### Segment Setup

From the **Home** page of your Segment app, navigate to the **Sources** page.
Click the **Add Source** button.

![Screen Shot 2021-09-22 at 10 37 34 AM](https://user-images.githubusercontent.com/1715082/134388339-172bdaea-10a0-496e-841d-c142a79bf643.png)

Search for node in the **Sources catalog** and select _Node.js_ from the search results.

![Screen Shot 2021-09-22 at 10 38 52 AM](https://user-images.githubusercontent.com/1715082/134388393-3afa8f18-1923-4130-a193-463bea2b96bb.png)

Click the **Add Source** button from the modal window upon which you will be taken to the **Source setup** page. 

![Screen Shot 2021-09-22 at 10 40 25 AM](https://user-images.githubusercontent.com/1715082/134388638-9df84c2f-8047-47e8-9bdf-4e87e87154f0.png)

Provide a name for your source then click the **Add Source** button to complete the source setup and be taken to the overview of your newly created source.

![Screen Shot 2021-09-22 at 10 41 25 AM](https://user-images.githubusercontent.com/1715082/134389017-589f74c1-2ac2-4225-9292-268905e9a2f6.png)



## Building this project

1. Create a file named `env.local` and add environment variables:
    * `SEGMENT_WRITE_KEY`
    * `NEXT_PUBLIC_ONESIGNAL_APP_ID`
    * `NEXT_PUBLIC_ONESIGNAL_API_KEY`
2. Install dependencies by running `yarn`
3. Start the app `yarn dev`

## How it works

The purpose of this sample application is to demonstrate how one can implement event-driven notifications with OneSignal. It works by splitting user onboarding into two primary steps.

1. Signup
2. Onboarding

### Signup

This stage is the end-users first touch point with the app. Upon entering an email address, a request is sent to the backing API.
1. Create a new user account
2. Send a `signup` event via Segment's `track` function

If successful, the new user ID is returned to the client and `setExternalUserId` is called with the new ID. This results in Segment receiving a new event that it then forwards to OneSignal.

### Onboard

This stage is demonstrates a typical user onboarding _after_ the user account has been created. You can think of this step as an in-between step that ensures your application has all the information it needs to move forward and for the end-user to get acquianted with the application. In this example, I collect an email before making a request to the backing API.
* Update the user account with onboarding details (not implemented)
* Send an `onboarded` event via Segment's `track` function

### Welcome

This step marks the completion of new user registration. It's at this point where the notification email is be sent.
