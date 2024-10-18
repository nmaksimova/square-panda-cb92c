import React from "react";
import ReactHtmlParser from "html-react-parser";
import Link from "./link";
import _ from "lodash";

export default function htmlToReact(html) {
  if (!html) {
    return null;
  }
  return ReactHtmlParser(html, {
    transform: (node, index) => {
      if (node.type === "a") {
        const { href, children, ...restProps } = node.props ?? {};
        // use Link only if there are no custom attributes like style, class, and what's not that might break react
        if (_.isEmpty(restProps)) {
          return (
            <Link key={index} to={href} {...restProps}>
              {children}
            </Link>
          );
        }
      }
      return node;
    },
  });
}
