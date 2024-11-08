/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module mention/ui/mentionlistitemview
 */

import { ListItemView } from 'ckeditor5/src/ui.js';

import type { MentionFeedItem } from '../mentionconfig.js';

import type DomWrapperView from './domwrapperview.js';

export default class MentionListItemView extends ListItemView {
	public item!: MentionFeedItem;

	public marker!: string;
	handleFocusFirst: any;

	public highlight(): void {
		const child = this.children.first as DomWrapperView;

		child.isOn = true;
	}

	public removeHighlight(): void {
		const child = this.children.first as DomWrapperView;

		child.isOn = false;
	}


	// :: CUSTOM_CODE_START
    /**
	 * Focuses the list item.
	 */
	override focus() {
		if (typeof this.handleFocusFirst === 'function') this.handleFocusFirst();
		else super.focus();
	}
    // :: CUSTOM_CODE_END
}
