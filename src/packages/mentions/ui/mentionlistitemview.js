/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module mention/ui/mentionlistitemview
 */

import { ListItemView } from '@ckeditor/ckeditor5-ui';

export default class MentionListItemView extends ListItemView {
	constructor( locale, handleFocusFirst ) {
		super(locale);
		this.handleFocusFirst = handleFocusFirst
	}

	highlight() {
		const child = this.children.first;

		child.isOn = true;
	}

	removeHighlight() {
		const child = this.children.first;

		child.isOn = false;
	}

	/**
	 * Focuses the list item.
	 */
	focus() {
		// CUSTOM CKEDITOR CODE START
		if (typeof this.handleFocusFirst === 'function') this.handleFocusFirst();
		else super.focus();
		// CUSTOM CKEDITOR CODE END
	}
}
