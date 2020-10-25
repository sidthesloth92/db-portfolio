import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import MdContent from '../../components/md-content/MdContent';
import PageBody from '../../components/page-body/PageBody';
import Page from '../../components/page/Page';

const nugget = {
  type_of: 'article',
  id: 41329,
  title: 'Understanding HTML Form Encoding: URL Encoded and Multipart Forms',
  description:
    'The other day I was trying to write a REST endpoint in Go, which uploads the contents of a form submi...',
  published: true,
  published_at: '2018-08-11T14:14:03.969Z',
  slug: 'understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa',
  path:
    '/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa',
  url:
    'https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa',
  comments_count: 16,
  public_reactions_count: 151,
  page_views_count: 172336,
  published_timestamp: '2018-08-11T14:14:03Z',
  body_markdown:
    '---\ntitle: Understanding HTML Form Encoding: URL Encoded and Multipart Forms\npublished: true\ndescription: \ntags: html, web, forms, webdev\n---\n<!--post-start-->\nThe other day I was trying to write a REST endpoint in [Go](https://golang.org/), which uploads the contents of a form submitted in a browser to another REST endpoint, in other words,\n\n`Form in Browser ----> My GO Rest API ----> Another REST API`\n\nWhile doing that I ended up learning some fundamentals of how HTML forms work. So thought it might be a good thing to share what I learned and hence the nugget.. :)\n\n\nThe encoding type of a form is determined by the attribute `enctype`. It can have three values,\n\n* `application/x-www-form-urlencoded` - Represents a URL encoded form. This is the default value if `enctype` attribute is not set to anything.\n\n* `multipart/form-data` - Represents a Multipart form. This type of form is used when the user wants to upload files\n\n* `text/plain` - A new form type introduced in HTML5, that as the name suggests, simply sends the data without any encoding\n\nNow, let us look at each form type with an example to understand them better.\n\n# URL Encoded Form\n\nAs the name suggests, the data that is submitted using this type of form is URL endcoded. Take the following form,\n\n``` html\n<form action="/urlencoded?firstname=sid&lastname=sloth" method="POST" enctype="application/x-www-form-urlencoded">\n    <input type="text" name="username" value="sidthesloth"/>\n    <input type="text" name="password" value="slothsecret"/>\n    <input type="submit" value="Submit" />\n</form>\n```\n\nHere, you can see that the form is submitted to the server using a POST request, this means that it has a body. But how is the body formatted? It is URL encoded. Basically, a long string of `(name, value)` pairs are created. Each `(name, value)` pair is separated from one another by a `& (ampersand)` sign, and for each `(name, value)` pair, the `name` is separated from the `value` by an `= (equals)` sign, like say,\n\n`key1=value1&key2=value2`\n\nFor the above form, it would be,\n`username=sidthesloth&password=slothsecret`\n\nAlso, notice that we have some query parameters passed in the action URL, `/urlencoded?firstname=sid&lastname=sloth`.\n\nDon\'t the URL encoded body and the query parameters passed in the action URL look awfully similar? It\'s because they are similar. They share the same format discussed above.\n\nTry creating an HTML file with the above code and see how it\'s submitted in the dev tools. Here is a snap,\n\n![URL Encoded Snapshot](https://thepracticaldev.s3.amazonaws.com/i/coe8u0vt3iryp70e1rdv.png)\n\nThe things to notice here are the `Content-Type` header which says `application/x-www-form-urlencoded`, the query string and the form fields are transferred to the server in the format as discussed above. \n\n> **Note:** Don\'t get confused by the term Form Data in the screen shot. It\'s just how Google Chrome represents form fields.  \n\nAll is fine, but there is a little more to the encoding process. Let\'s introduce some spaces in the submitted values, take the below form which is the same as the previous one but has the `firstname` value changed from `sid` to  `sid slayer` and `username` value changed from `sidthesloth` to `sid the sloth`.\n\n```html\n<form action="/urlencoded?firstname=sid slayer&lastname=sloth" method="POST" enctype="application/x-www-form-urlencoded">\n    <input type="text" name="username" value="sid the sloth"/>\n    <input type="text" name="password" value="slothsecret"/>\n    <input type="submit" value="Submit" />\n</form>\n```\n\nNow try to submit the form and see how the form fields are transferred in the dev tools. Here is a dev tools snap in Chrome.\n\n![URL Encoded snapshot with space](https://thepracticaldev.s3.amazonaws.com/i/kzk72y3ui5r7iwz4g1r6.png)\n\nClearly, you can see that the spaces are replaced by either \'%20\' or \'+\'. This is done for both the query parameters and the form body.\n\nRead [this](https://stackoverflow.com/questions/2678551/when-to-encode-space-to-plus-or-20) to understand when + and %20 can be used. This encompasses the URL encoding process.\n\n\n#Multipart Forms\nMultipart forms are generally used in contexts where the user needs files to be uploaded to the server. However, we\'ll just focus on simple text field based forms, as is it enough to understand how they work.\n\nTo convert the above form into a multipart form all you have to do is to change the `enctype` attribute of the form tag from `application/x-www-form-urlencoded` to `multipart/form-data`.\n\n```html\n<form action="/multipart?firstname=sid slayer&lastname=sloth" method="POST" enctype="multipart/form-data">\n    <input type="text" name="username" value="sid the sloth"/>\n    <input type="text" name="password" value="slothsecret"/>\n    <input type="submit" value="Submit" />\n</form>\n```\n\nLet\'s go ahead and submit it and see how it appears in the dev tools.\n\n![URL Encoded snapshot with space](https://thepracticaldev.s3.amazonaws.com/i/8bqopft22lv9fhlqr4k2.png)\n\nThere are the two things to notice here, the `Content-Type` header and the payload of the form request. Let\'s go through them one by one.\n\n## Content-Type Header\n\nThe value of the `Content-Type` header is obviously `multipart/form-data`. But it also has another value, `boundary`. The value for this in the example above is generated by the browser, but the user can very well define it as well, say for example, `boundary=sidtheslothboundary`. We\'ll get to see how it\'s useful in the next section.\n\n## Request Body\n\nThe request payload contains the form fields themselves. Each `(name, value)` pair is converted into a MIME message part of the following format, \n\n`--<<boundary_value>>`\n`Content-Disposition: form-data; name="<<field_name>>"`\n\n`<<field_value>>`\n\nThe above format is repeated for each `(name, value)` pair. \n\nFinally, the entire payload is terminated by the `boundary` value suffixed with a `--`. So the entire request looks like,\n\n`--<<boundary_value>>`\n`Content-Disposition: form-data; name="<<field_name>>"`\n\n`<<field_value>>`\n`--<<boundary_value>>`\n`Content-Disposition: form-data; name="<<field_name>>"`\n\n`<<field_value>>`\n`--<<boundary_value>>--`\n\nNow, we see how the boundary value is used. \n\nIn the case of an `application/x-www-form-urlencoded` form, the `&` ampersand kind of acts as a delimiter between each `(name, value)` pair, enabling the server to understand when and where a parameter value starts and ends. \n\n`username=sidthelsloth&password=slothsecret`\n\nIn the case of a `multipart/form-data` form, the boundary value serves this purpose. Say if the boundary value was `XXX`, the request payload would look like,\n\n`--XXX`\n`Content-Disposition: form-data; name="username"`\n\n`sidthesloth`\n`--XXX`\n`Content-Disposition: form-data; name="password"`\n\n`slothsecret`\n`--XXX--`\n\nThe hyphens themselves are not part of the boundary value but rather needed as part of the request format. The `Content-Type` header for the above request would be,\n\n`Content-Type: multipart/form-data; boundary=XXX`\n\nThis allows the browser to understand, when and where each field starts and ends.\n\n# Text/plain Forms\n\nThese forms are pretty much the same as the URL encoded forms, except that the form fields are not URL encoded when sent to the server. These are not used widely in general, but they have been introduced as a part of the HTML 5 specification.\n\nAvoid using them as they meant for human understanding and not for machines.\n\nAs quoted from the [spec](https://www.w3.org/TR/html5/sec-forms.html#text-plain-encoding-algorithm),\n\n> Payloads using the text/plain format are intended to be human readable. They are not reliably interpretable by computer, as the format is ambiguous (for example, there is no way to distinguish a literal newline in a value from the newline at \nthe end of the value).\n\nHope, I was clear in explaining what I learnt..See you in the next one guys..Peace.. :)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
  positive_reactions_count: 151,
  cover_image: null,
  tag_list: ['html', 'web', 'forms', 'webdev'],
  canonical_url:
    'https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa',
  user: {
    name: 'Dinesh Balaji',
    username: 'sidthesloth92',
    twitter_username: 'sidthesloth92',
    github_username: 'sidthesloth92',
    website_url: 'https://dbwriteups.wordpress.com',
    profile_image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--xFt4c4Wf--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/88059/f2f72c20-95b2-43f0-a22f-3d5360134708.png',
    profile_image_90:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--HFkaZHAC--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/88059/f2f72c20-95b2-43f0-a22f-3d5360134708.png'
  }
};

/**
 * Placeholder animation variant for the header section.
 */
const headerVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: 'beforeChildren'
    }
  }
};

/**
 * Animation variants for the header children.
 */
export const headerChildrenVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the line after header.
 */
const hrVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the page content.
 */
const postContentVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(2%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Represents a page for a single instance of a nugget.
 */
const NuggetPage: React.FC = () => {
  useEffect(() => {
    nugget.body_markdown = nugget.body_markdown.substring(
      nugget.body_markdown.indexOf(nugget.description.substring(0, 10))
    );
  }, []);

  return (
    <Page>
      <motion.div
        className="text-center mb-8 lg:mb-16 overflow-hidden"
        variants={headerVariants}>
        <motion.h1
          className="font-black text-primary leading-tight"
          variants={headerChildrenVariants}>
          {nugget.title}
        </motion.h1>
        <motion.div
          className="font-bold text-lg lg:text-xl text-secondary"
          variants={headerChildrenVariants}>
          <span>
            {new Date(nugget.published_timestamp).toLocaleDateString()}
          </span>
          <span className="px-2">•</span>
          <span>15 mins</span>
        </motion.div>
        <motion.div
          className="text-secondary-text text-md lg:text-lg font-bold"
          variants={headerChildrenVariants}>
          {nugget.tag_list.map((tag) => {
            return (
              <Link key={tag} href={`/posts/${tag}`}>
                <a className="px-2">#{tag}</a>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>

      <PageBody>
        <motion.div
          className="bg-dark-light sm: mb-8"
          style={{ height: '1px' }}
          variants={hrVariants}
        />
        <motion.div variants={postContentVariants}>
          <MdContent>{nugget.body_markdown}</MdContent>
        </motion.div>
      </PageBody>
    </Page>
  );
};

export default withPageTransition(NuggetPage);
