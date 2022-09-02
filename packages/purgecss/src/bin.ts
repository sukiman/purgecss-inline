import { PurgeCSS } from './index';
import {
    UserDefinedOptions,
} from "./types";

/**
 * @public
 */
const purge = async (css: string, html: string, options: UserDefinedOptions) => {
    const t = new PurgeCSS();
    return await t.purge({
        css: [{
            raw: css
        }],
        content: [{
            raw: html,
            extension: html
        }],
        safelist: options.safelist,
        rejected: options.rejected,
        rejectedCss: options.rejectedCss
    });
}

export { purge };