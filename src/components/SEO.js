import React from 'react';
import {Helmet} from 'react-helmet';

export default function SEO(props) {
    const seo = props.page && props.page.seo;
    if (!seo) {
        return null;
    }
    return (
        <Head>
            {seo.title && <title>{ seo.title }</title>}
            {seo.description && <meta name="description" content={ seo.description } />}
            {seo.robots && <meta name="robots" content={ seo.robots.join(',') } />}
            {seo.extra && seo.extra.map((meta, index) => {
                const keyName = meta.keyName || 'name';
                const value = (meta.relativeUrl ? props.site.domain : '') + meta.value;
                return <meta key={index} {...{[keyName]: meta.name}} content={value} />
            })}
        </Head>
    );
}
