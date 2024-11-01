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

	public handleFocusFirst?: () => void;

	public highlight(): void {
		const child = this.children.first as DomWrapperView;

		child.isOn = true;
	}

	public removeHighlight(): void {
		const child = this.children.first as DomWrapperView;

		child.isOn = false;
	}
	// :: CUSTOM CODE START
    /**
	 * Focuses the list item.
	*/
	public override focus() {
		if (typeof this.handleFocusFirst === 'function') this.handleFocusFirst();
		else super.focus();
	}
    // :: CUSTOM CODE END
}
