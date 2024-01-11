/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module mention/mention
 */
import { Plugin } from 'ckeditor5/src/core';
import MentionEditing, { _toMentionAttribute } from './mentionediting';
import MentionUI from './mentionui';
import '../theme/mention.css';
/**
 * The mention plugin.
 *
 * For a detailed overview, check the {@glink features/mentions Mention feature} guide.
 */
export default class Mention extends Plugin {
    toMentionAttribute(viewElement, data) {
        return _toMentionAttribute(viewElement, data);
    }
    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'Mention';
    }
    /**
     * @inheritDoc
     */
    static get requires() {
        return [MentionEditing, MentionUI];
    }
}
