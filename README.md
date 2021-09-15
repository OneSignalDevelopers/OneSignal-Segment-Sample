# Event-based Notifications with OneSignal & Segment

Event-based push notifications are a great way to stay connected with your customers. In this post, I’ll show you how easy it is to integrate OneSignal and Segment to send events for things like new user registration, abandoned cart email, and checkout completion. I’ll focus on new user registration since it's such a common use case. By the end of this post, you will understand how you can leverage Segment + OneSignal to deliver event-based notifications in your own apps. 

## Prerequisites
* OneSignal account
* Segment account

## Building this project

1. Create a file named `env.local` for environment variables
    * `SEGMENT_WRITE_KEY`
    * `NEXT_PUBLIC_ONESIGNAL_APP_ID`
    * `NEXT_PUBLIC_ONESIGNAL_API_KEY`
2. Run `yarn` to install dependencies
3. Start the app `yarn dev`
