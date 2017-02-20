import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-message',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
})
export class MessagingComponent {

  /**
   * messageTitle: string
   *
   * The title set in toolbar.
   */
  @Input() messageTitle: string;

  /**
   * messageSubtitle?: string
   *
   * Optional second line subhead set in toolbar.
   */
  @Input() messageSubtitle: string;

  /**
   * icon: string
   *
   * The icon name to be displayed before the title.
   * Defaults to info_outline icon
   */
  @Input() icon: string = 'info_outline';

  /**
   * iconColor?: string
   *
   * The optioinal icon color to be displayed before the title.
   */
  @Input() iconColor: string;

  /**
   * color?: string
   *
   * The optional toolbar color.
   */
  @Input() color: string = 'none';

  /**
   * message?: string
   *
   * The optional string content of the message body.
   */
  @Input() message: string;

  /**
   * actionPrimary?: string
   *
   * The optional route for primary action button.
   */
  @Input() actionPrimary: string;

  /**
   * actionPrimaryText?: string
   *
   * The optional text for primary action button.
   */
  @Input() actionPrimaryText: string;

  /**
   * actionPrimaryColor?: string
   *
   * The optional background color for primary action button.
   */
  @Input() actionPrimaryColor: string;

}
