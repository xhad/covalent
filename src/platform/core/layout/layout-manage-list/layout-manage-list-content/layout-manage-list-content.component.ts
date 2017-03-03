import { Component, ChangeDetectionStrategy, Optional, Inject, forwardRef, ChangeDetectorRef } from '@angular/core';

import { TdLayoutManageListComponent } from '@covalent/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'td-layout-manage-list-content',
  styleUrls: ['./layout-manage-list-content.component.scss' ],
  templateUrl: './layout-manage-list-content.component.html',
})
export class TdLayoutManageListContentComponent {
 
    /**
     * Getter that returns true if the parent manage list sidenav is opened.
     */
    get opened(): boolean {
      return this._layout._sideNav.opened;
    }

    constructor(@Optional() @Inject(forwardRef(() => TdLayoutManageListComponent))
              private _layout: TdLayoutManageListComponent,
              private _changeDetectorRef: ChangeDetectorRef) {
      if (!this._layout) {
        throw new Error('td-layout-manage-list-content needs to have a td-layout-manage-list as parent');
      }
    }

    /**
     * Subscribe to the onOpenStart/onCloseStart to call for an extra change detection.
     */
    ngAfterViewInit(): void {
      this._layout._sideNav.onOpenStart.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
      this._layout._sideNav.onCloseStart.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }

    /**
     * Method that openes the parent manage list sidenav
     */
    open(): void {
      this._layout.open();
    }

}
