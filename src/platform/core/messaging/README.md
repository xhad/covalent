# td-message

`td-message` element to generate a message with icon, title, and color options.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| messageTitle | string | Title set in toolbar
| messageSubtitle | string | optional second line subhead set in toolbar
| icon | string | icon name to be displayed before the title
| color | string | optional toolbar color
| message | string | string content of the message body
| actionPrimary | string | url or route for primary action button in card footer

## Usage

Example for HTML usage:

 ```html
<td-message
  messageTitle="We're not ingesting data from this source" 
  [messageSubtitle]="messageSubtitle" 
  icon="info"
  [actionPrimary]="['help']" 
  [actionPrimaryText]="actionPrimaryText" 
  iconColor="tc-blue-500"
  actionPrimaryColor="accent">
</td-message>
 ```