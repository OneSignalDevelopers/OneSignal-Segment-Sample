# Event-based Notifications with OneSignal & Segment

Event-based push notifications are a great way to stay connected with your customers. In this post, I’ll show you how easy it is to integrate OneSignal and Segment to send events for things like new user registration, abandoned cart email, and checkout completion. I’ll focus on new user registration since it's such a common use case. By the end of this post, you will understand how you can leverage Segment + OneSignal to deliver event-based notifications in your own apps. 

## Prerequisites
* OneSignal account
* Segment account

Note that this project makes use of OneSignal's Mailgun integration to send an email to the end-user once they complete onboarding.

## Building this project

1. Create a file named `env.local` for environment variables
    * `SEGMENT_WRITE_KEY`
    * `NEXT_PUBLIC_ONESIGNAL_APP_ID`
    * `NEXT_PUBLIC_ONESIGNAL_API_KEY`
2. Run `yarn` to install dependencies
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
