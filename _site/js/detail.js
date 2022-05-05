// ul for left colum nav
const structure = document.querySelector(".sub_list");
// h1
const glossaryTitle = document.querySelector(".title h1");
// img
const glossaryImage = document.querySelector(".board_definition img");
// p
const detailedDescription = document.querySelector(".board_definition p");
// the whole right column
const content = document.querySelector(".detail");
// other definitions list
const otherList = document.querySelector(".list");
const position = document.querySelector(".position");
// for related terms
const term = document.querySelector(".all_terms");
const authorName = document.querySelector(".board_definition h2");
// footer sticky header
const footer = document.querySelector(".footer");
console.log(glossaryImage);

const glossaryTerms = [
  {
    term: "Segment",
    defnition:
      "A segment is a group of customers that share similar characteristics, e.g gender, age or location. At Engage, segments can also be based on similar actions or inactions, e.g “yet to log in in 30 days”. The process of creating this customer group is called Customer segmentation.Customer segmentation makes it possible to identify customers within these groups and send them the right message. Engage makes that even more seamless by automatically adding and removing customers from respective segments as the customer's data change.",
    image: "../assets/img/segment.png",
    otherDefnition: [
      {
        author: "Shopify",
        summary: `<div>
                Customer segmentation is the process of dividing customers into groups based on common characteristics so companies can market to each group effectively and appropriately. In business-to-business marketing, a company might segment customers according to a wide range of factors, including:<br/>
                <ul>
                <li>Industry</li>
                <li>Number of employees</li>
                <li>Products previously purchased from the company</li>
                <li>Location</li>
                </ul>
                 </div>`,
        link: "https://www.shopify.com.ng/encyclopedia/customer-segmentation",
      },
      {
        author: "myCustomer",
        summary:
          "Customer segmentation involves grouping customers into specific marketing groups, perhaps narrowing them down by gender, interests, buying habits or demographic. The process requires a thought-out strategy, understanding how to manage and group your customers and which data you will use to do this.",
        link: "https://www.mycustomer.com/hr-glossary/customer-segmentation",
      },
    ],
    link: "#Segment",
    relatedTerms: ["Lists"],
    author: "Engage",
  },
  {
    term: "Email sequence/Email series ",
    defnition: `An email sequence is also called email series. Both terms are interchangeably used with automation. Even though they share a lot of similarities with automation, they are not exactly the same. Automation is a broader term. All email series is a form of automation but not all automation is an email series. See automation (<a href="http://martomation/#work-flow" target="_blank">link to automation page</a>) for more. An email series is a sequence of prepared emails that are automatically triggered by an event and sent to a customer over a period of time. Email series are usually used to onboard new users or send a set series of campaigns to the user.`,
    image: "",
    otherDefnition: [
      {
        author: "Hubspot",
        summary:
          "An email sequence is a series of emails sent to a prospect, user, or customer sent automatically using automation software based on predetermined criteria such as a time delay or action being met. In other words, if you build your emails out beforehand and set it up with email marketing automation, you can follow up with prospects at scale... without being the one to click the 'Send' button over and over.",
        link: "https://blog.hubspot.com/sales/100k-email-templates-follow-up",
      },
      {
        author: "Web Profits",
        summary: `<div>An email sequence is a series of emails sent based on pre-set time intervals or trigger-based automations (or both).<br/>
                <ul>
                <li>A time-based email sequence involves messages that are sent at predetermined intervals (e.g. immediately after opt-in, 30 days after purchase, one year after subscribing etc.). </li>
                <li>Time-based email sequences are also referred to as ‘autoresponders’.</li>
                <li>Trigger-based email sequences are sent whenever someone takes an action on your website or within your email sequence (e.g. not logging into the software platform for a week, clicking a link in an email, clicking links in the last three emails etc.)</li>
                </ul>
                 </div>`,
        link: "https://www.webprofits.com.au/blog/ultimate-guide-email-sequences](https://www.webprofits.com.au/blog/ultimate-guide-email-sequences",
      },
      {
        author: "Mail munch",
        summary: `<div>A sequence is a bunch of emails sent one after another to prospects/customers to achieve a certain goal. And can be these goals?  Here are some of the things you can achieve with email sequences:<br/>
                <ol>
                <li>Convert free customers into paying.</li>
                <li>Increase traffic to your website, landing pages, or blog.</li>
                <li> Get more subscribers on your blog or channel.</li>
                <li> Gather people for an invite or webinar</li>
                <li>Branding. Whether you want more paying customers or visitors to your articles, an email sequence can be a solid tool</li>
                </ol>
                </div>`,
        link: "https://www.mailmunch.com/blog/automation-changes-everything-email-sequence",
      },
      {
        author: "Active Campaign",
        summary: `<div>
                An email sequence is a series of emails automatically sent to specific segments of people on your email list. An email sequence can be *trigger-based* or *time-based*.When an email sequence is *trigger-based*, emails are sent based on actions such as:<br/>
                <ul>
                <li>Browsing behavior</li>
                <li>Subscribing to your list</li>
                <li>Shopping cart abandonment</li>
                <li>Reading or downloading content</li>
                <li>Buying a product A *time-based* email sequence (sometimes called an email autoresponder) sends emails at predetermined time intervals, like…</li>
                <li>Right after opt-in - 30 days after purchase</li>
                <li>On the anniversary of subscribing You only have to set them up once.</li>
                </ul>
                <br/>
                And then they work for you. Email sequences are automated. They take people from not knowing your company to becoming full-fledged, enthusiastic customers (who just love to recommend your brand).
                </div>`,
        link: "",
      },
    ],
    link: "#Email-sequence",
    relatedTerms: ["Email series"],
    author: "Engage",
  },
  {
    term: "Workflows/Automations ",
    defnition:
      "Workflows and automations interchangeably used across many tools. They mostly refer to the same thing. Automation is a sequence of processes that can be automatically triggered to perform specific customer-related tasks. For example, you can use automation to send customers a series of onboarding emails, update their attributes based on data changes, and send them happy SMS or appointment reminders. (An automation can be used to create an email series. After all, an email series is just a sequence of processes. However, automations can do more than just send emails or other forms of messages. At Engage, you can use automation to add or remove customers from lists, update their attributes, call a webhook and do many other things).",
    image: "../assets/img/work.png",
    otherDefnition: [
      {
        author: "Kiss Flow",
        summary:
          "A Workflow is a sequence of tasks that processes a set of data. Workflows occur across every kind of business and industry. Anytime data is passed between humans and/or systems, a workflow is created. Workflows are the paths that describe how something goes from being undone to done, or raw to processed. ",
        link: "https://kissflow.com/workflow/what-is-a-workflow",
      },
      {
        author: "Slick Text",
        summary: `Workflows are automated sequences that provide personalized messaging for leads and customers based on their behavior. Workflows are the pure definition of marketing automation and can be used to create everything from ecommerce abandoned cart sequences to SMS chat bots for lead nurturing. `,
        link: "https://www.slicktext.com/text-marketing-features/automated-workflows.php",
      },
      {
        author: "Mail Chimp",
        summary: `Email automation is a way to create emails that reach the right people with the right message at the right moment—without doing the work every time, sending automated messages leveraging a marketing automation tool.`,
        link: "https://mailchimp.com/marketing-glossary/email-automation",
      },
      {
        author: "Send Grid",
        summary: `Automated email, also referred to as triggered email or behavior-driven email, is any message automatically sent from your email service provider (ESP) in direct response to an individual user’s specific actions made (or not made) on your website or web app. Automated email allows you to send real-time, one-to-one messages that strengthen customer engagement, retention, and loyalty.`,
        link: "https://sendgrid.com/resource/what-is-email-automation-and-how-to-use-it-in-your-campaign/",
      },
    ],
    link: "#work-flow",
    relatedTerms: ["Automations"],
    author: "Engage",
  },
  {
    term: "Broadcast ",
    defnition: `Broadcast and Campaign are interchangeably used to refer to one-off messages sent to a group of contacts. Campaigns are however broader than broadcasts. See <a href="http://martomation/#campaign" target="_blank">campaigns</a>. Broadcasts are direct messages you can send to your customer groups (segments or lists) through messaging channels like email, SMS or in-app messaging. With broadcasts, you can easily send the same message to multiple people at once. are interchangeably used to refer to one-off messages sent to a group of contacts. Campaigns are however broader than broadcasts. See campaigns.`,
    image: "",
    otherDefnition: [
      {
        author: "Go Squared",
        summary:
          "Broadcasts are one-off messages you can send to your contacts via email or in-app message. Perhaps you want to tell your customers about a new feature or announce a new event you’re running in a specific city, or send a group of contacts a targeted promotion, or send a request to complete a survey for specific users. Whatever your use case, Broadcasts is the best way to send one-off messages to multiple people at the same time.",
        link: "https://www.gosquared.com/support/articles/2608421-broadcast-messages",
      },
      {
        author: "AWeber",
        summary: `Broadcasts are messages that you can send to all of your subscribers, or a group of subscribers, at once. `,
        link: "https://help.aweber.com/hc/en-us/articles/204030146-What-are-Broadcast-messages-",
      },
    ],
    link: "#broadcast",
    relatedTerms: ["Campaign"],
    author: "Engage",
  },
  {
    term: "Campaigns ",
    defnition:
      "Broadcast and Campaign are interchangeably used to refer to one-off messages sent to a group of contacts. However, Campaigns don’t necessarily have to be through messaging or one-off. Campaigns can be through other channels like forms, surveys or ads.",
    image: "",
    otherDefnition: [
      {
        author: " Macmillian Dictionary",
        summary: "A series of things such as television advertisements or posters that try to persuade people to buy a product.",
        link: "https://www.macmillandictionary.com/dictionary/british/campaign_1",
      },
      {
        author: "Mailchimp",
        summary: `Any distributed content, that's created and measured in Mailchimp, including regular emails, automations, landing pages, and ads. `,
        link: "https://mailchimp.com/help/getting-started-with-campaigns/",
      },
    ],
    link: "#campaigns",
    relatedTerms: ["Broadcast"],
    author: "Engage",
  },
  {
    term: "Lists ",
    defnition:
      "A list is a group of customers. Lists make it easy to send broadcasts to multiple customers at once. Unlike with segments where customers are automatically added or removed based on data changes, you can manually add or remove customers to and from a list.",
    image: "",
    otherDefnition: [
      {
        author: " Active Campaign",
        summary: "Lists are the broadest segments you can create of your contacts. Put another way, lists are the first layer of segmentation.",
        link: "https://www.activecampaign.com/learn/guides/a-beginners-guide-to-lists",
      },
      {
        author: "Mailgen",
        summary: `It’s a collection of email addresses used by an individual or an organization to send marketing material to multiple recipients.

                In simple terms, an email list refers to the total amount of subscribers you have, which basically is a synonym to “the mailing list”, or “subscriber’s list”.`,
        link: "https://www.mailigen.com/blog/what-is-an-email-list/",
      },
    ],
    link: "#lists",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "Forms ",
    defnition:
      "Products need to be able to get data input from users to function as necessary. This data could be for feedback, survey, list subscription, payment, or something else. Forms are how this is possible. A form is a page that lets you collect data from people in a structured way. In marketing, forms are mostly used for feedback, surveys, lead generation and list subscriptions. When you create a list on Engage, an embed code for a form is also included to subscribe users to the list.",
    image: "",
    otherDefnition: [
      {
        author: " Chron",
        summary:
          "Form refers to the product or service you offer your customers. Your marketing team carries out research into customer needs to develop a specification for a product or service.",
        link: "https://smallbusiness.chron.com/four-types-business-marketing-utilities-20698.html",
      },
      {
        author: "Hubspot",
        summary: `The place your page visitors will supply information in exchange for your offer. It’s also how those visitors can convert into precious sales leads.`,
        link: "https://blog.hubspot.com/marketing/inbound-marketing-glossary-list",
      },
    ],
    link: "#form",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "People",
    defnition:
      "Marketing tools have different ways of referring to the individuals or businesses you have added to the tool for interaction. The most common terms are People, Audience, Users, Contacts and Customers. They generally refer to the same thing but the choice of the term will depend on the exact function of the marketing tool. Most email marketing tools, for example, use “Contacts”. Marketing analytics tools mostly use “Users”. ",
    image: "",
    otherDefnition: [
      {
        author: " Marketing Mix",
        summary: "One of the essential elements of the marketing mix is people. This includes everyone who is involved in the product or service whether directly or indirectly.",
        link: "https://marketingmix.co.uk/people/",
      },
      {
        author: "Tree Ring Digital",
        summary: `People are the most important element of any service or experience. Services tend to be produced and consumed at the same moment, and aspects of the customer experience are altered to meet the individual needs of the person consuming it. People have an important role in service delivery, they are relied upon to deliver and maintain transactional marketing and people play an important part in the customer relationship. `,
        link: "https://www.treeringdigital.com/audience-targeting-demystifying-world-tech/#:~:text=A%20target%20audience%20is%20the,in%20your%20product%20or%20service.&text=These%20should%20be%20the%20people,than%20just%20starting%20their%20research.",
      },
      {
        author: "Marketing Teacher",
        summary: `Audience is the demographic of people most likely to be interested in your product or service.`,
        link: "https://www.marketingteacher.com/people-marketing-mix/",
      },
      {
        author: " Get2Growth",
        summary: `‘Audience’ at a macro level is the total group of individuals or organisations who could in some way be exposed to your offering, either directly or through your marketing and communications. `,
        link: "https://get2growth.com/audience-customers-and-consumers/",
      },
      {
        author: " Heidi Cohen",
        summary: `For marketing purposes, your audience is broadly defined as anyone your business and/or brand engages with, either directly or indirectly.`,
        link: "https://heidicohen.com/marketing-audience-definition/#:~:text=For%20marketing%20purposes%2C%20your%20audience,that%20offends%20another%20key%20segment.",
      },
      {
        author: "Freebase ",
        summary: `A user is an agent, either a human agent or software agent, who uses a computer or network service. A user often has a user account and is identified by a username. Other terms for username include login name, screen name, nickname, or handle.`,
        link: "https://www.definitions.net/definition/user",
      },
      {
        author: "Computer Hope",
        summary: `A user is any individual who is not involved with supporting or developing a computer or service or another name of an account capable of logging into a computer or service. `,
        link: "https://www.computerhope.com/jargon/u/user.htm",
      },
      {
        author: "Bitrix24",
        summary: `In most CRM systems, the term contact designates an individual who has purchased your product or service or a company representative responsible for purchasing.`,
        link: "https://www.bitrix24.com/glossary/what-is-contact-definition-crm.php",
      },
      {
        author: "Investopedia",
        summary: `Customer is an individual or business that purchases another company's goods or services. Customers are important because they drive revenues; without them, businesses cannot continue to exist.`,
        link: "https://www.investopedia.com/terms/c/customer.asp",
      },
      {
        author: "Market Business News",
        summary: `Customer is a person or company that receives, consumes or buys a product or service and can choose between different goods and suppliers.`,
        link: "https://marketbusinessnews.com/financial-glossary/customer-definition-meaning/",
      },
      {
        author: "Get2Growth",
        summary: `Customers are the individuals or organisations who, in some way, actively engage with your business or brand. In the classic sense this would be a commercial engagement where there is an exchange of monetary value in relation to the delivery of your product or service. `,
        link: "https://marketbusinessnews.com/financial-glossary/customer-definition-meaning/",
      },
    ],
    link: "#people",
    relatedTerms: [" Audience", "Users", "Contacts", "Customers"],
    author: "Engage",
  },
  {
    term: "Tags/Labels",
    defnition: "Tags and labels refer to the same thing. They are used to identify or group customers or other resources.",
    image: "",
    otherDefnition: [
      {
        author: " Techopedia",
        summary:
          "A tag is a piece of information that describes the data or content that it is assigned to. Tags are non-hierarchical keywords used for Internet bookmarks, digital images, videos, files and so on. A tag doesn't carry any information or semantics itself.",
        link: "https://www.techopedia.com/definition/5240/tag-metadata",
      },
      {
        author: "Lander",
        summary: `Tags are used to collect information about visitors to a website and how they behave on the site. The info collected is then sent to the respective marketing platform for processing and reporting. Marketing Tags may not look like much when you see them but the power that they possess lies in how they work.`,
        link: "https://landerapp.com/blog/marketing-tags/#:~:text=Tags%20are%20often%20referred%20to,they%20behave%20on%20the%20site.",
      },
      {
        author: "Toppr",
        summary: `A label contains information about a product on its container, packaging, or the product itself. It also has warnings in it. Labeling is also an important part of the brand of the product and the company. It helps the product stand out in the market, and identifies it as a part of a particular brand. `,
        link: "https://www.toppr.com/guides/business-studies/marketing/labelling/#:~:text=A%20label%20contains%20information%20about,also%20has%20warnings%20in%20it.&text=Labeling%20is%20also%20an%20important,part%20of%20a%20particular%20brand",
      },
      {
        author: "Kullabs",
        summary: `A label can be anything indicating a value of contents of a price of product name or such useful information to be beneficial to the user. Thus, a label is an informative tag attached to a product or product’s package.`,
        link: "https://kullabs.com/class-12/marketing/product/meaning-typesfunctions-and-importance-of-labelling",
      },
    ],
    link: "#tags",
    relatedTerms: ["labels"],
    author: "Engage",
  },
  {
    term: "Attributes/Properties",
    defnition: `Attributes and properties are used interchangeably to mean the same thing. An attribute is a defining characteristic of an entity. Examples:<ul>
        <li>Location: Nigeria</li>
        <li>Last login: Yesterday</li>
        </ul> 
        Attributes make it easy to identify the characteristics of an entity and also group entities. At Engage, you can also use attributes to create customer segments, e.g., “Customers with age above 55”.
        
        Attributes and tags are similar in what they do but they are not the same thing. Tags are just labels – they only have values. Attributes have names that add more context to the values. Imagine we want to add a customer’s age to their profile. We can do this as an attribute like this: *age = 23*. But adding the tag “23” wouldn’t make sense because there is no context to what the number represents. This doesn’t mean tags can’t be hacked to add the context. We can for example tag the customer “age_23” instead of just 23. That works but adds a new complexity if we need to use the tag for customer segmentation. It’s easy to get all customers tagged “age_23” but what of customers older than or younger than 23?`,
    image: "",
    otherDefnition: [
      {
        author: " Wordnik",
        summary: "An attribute is an object associated with and serving to identify a character, personage, or office. ",
        link: "https://www.wordnik.com/words/attribute",
      },
      {
        author: "Customer.io",
        summary: `Attributes are properties stored, per Person, in your account. You use them for messaging, segmenting, or triggering Date Triggered Campaigns. They are named values you use in various places...`,
        link: "https://www.customer.io/docs/getting-started-people/",
      },
      {
        author: "Techopedia",
        summary: `In general, an attribute is a characteristic. In relational databases, attributes are the describing characteristics or properties that define all items pertaining to a certain category / of every individual that help describe its unique properties.  `,
        link: "https://www.techopedia.com/definition/1164/attribute-database-systems",
      },
      {
        author: "Statistics",
        summary: `In data analysis or data mining, an attribute is a characteristic or feature that is measured for each observation (record) and can vary from one observation to another. It might measured in continuous values (e.g. time spent on a web site), or in categorical values (e.g. red, yellow, green).`,
        link: "https://www.statistics.com/glossary/attribute/",
      },
      {
        author: "Stack Overflow",
        summary: `Property is a quality that exists without any attribution. Properties demonstrate themselves through physical phenomena without the need to attribute them to someone or something. `,
        link: "https://stackoverflow.com/questions/258469/what-is-the-difference-between-attribute-and-property",
      },
    ],
    link: "#attributes",
    relatedTerms: ["Properties"],
    author: "Engage",
  },
  {
    term: "Events/Actions",
    defnition:
      "An event is an action performed directly by a customer or triggered on behalf of the customer, e.g., “Clicked a button”, “Payment failed”, “Liked an item”. At Engage, these events can be used to create customer segments for personalized engagement.",
    image: "",
    otherDefnition: [
      {
        author: "Google Analytics",
        summary: "An event is a type of hit used to track user interactions with content ",
        link: "https://support.google.com/analytics/answer/6086196?hl=en",
      },
      {
        author: "Customer.io",
        summary: `Events are actions people perform in your app, on your website, etc—things like button clicks, scrolling to the bottom of a page, or purchases. `,
        link: "https://www.customer.io/docs/events/",
      },
      {
        author: "Computer Hope",
        summary: `An event is an action that occurs as a result of the user or another source, such as a mouse click.  `,
        link: "https://www.computerhope.com/jargon/e/event.htm",
      },
      {
        author: "TechTarget",
        summary: `Action: an event condition action rule (ECA rule) is the underlying model for event-driven programming, in which actions are triggered by events. `,
        link: "https://whatis.techtarget.com/search/query?q=action",
      },
    ],
    link: "#event",
    relatedTerms: ["Actions"],
    author: "Engage",
  },
  {
    term: "Personalized Messaging",
    defnition:
      "Personalized messaging is a form of customer messaging that uses the customer’s data to send the right message to customers. Because it is based on the customer’s data – preferences, actions, behaviour, attributes, lifecycle within the application, the message feels relevant to the customer. And even though a personalized message might be sent as a broadcast to many people at once, to every recipient, it feels specifically targeted at them. The way this is mostly done is to segment customers based on similar characteristics and then send a broadcast to that segment.",
    image: "",
    otherDefnition: [
      {
        author: "Leanplum",
        summary:
          "Personalized messaging delivers a specific, valuable message that is relevant to users. Traditional messaging comes in a “one size fits all” blast and does not take user behavior into consideration. For example, a push notification reminding a user of their flight time and hotel booking would be especially valuable when the user is at the airport, or on the day leading up to the trip. ",
        link: "https://www.leanplum.com/glossary/personalized-messaging/",
      },
      {
        author: "Clevertap",
        summary: `Personalization messaging uses customer data like past purchases, demographics, and browsing history to tailor digital marketing to a consumer’s unique character traits. It’s so common that consumers now expect it in emails, text messages, and in-app experiences. `,
        link: "https://clevertap.com/blog/personalization-messages/",
      },
    ],
    link: "#personalized-messaging",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "Email PreHeader Text",
    defnition:
      "Email preheader text and email preview texts are interchangeably used in marketing. However, they are not exactly the same thing. An email preheader text is a summary text at the top of your email content, added to show as a preview text in your recipient’s email inbox. By default, the email client will use the first set of texts in the email as the preview text. Sometimes, this set of texts may not make a good summary. Setting a preheader text within the content lets you customize what to show as the preview text. Most times, the preheader text is hidden within the email content.",
    image: "",
    otherDefnition: [
      {
        author: "Campaign Monitor",
        summary:
          "Email preheader is the summary text that follows a subject line when the email is viewed in an inbox. In many cases, it’s used to provide a short summary of the email, and is typically one sentence long. Email preheader text is what many mobile, desktop, and web email clients show readers to give them an idea of what’s inside the message before they actually open it. In many cases, this powerful line of text can be the difference between someone opening and not opening an email. ",
        link: "https://www.campaignmonitor.com/resources/glossary/email-preheader/",
      },
      {
        author: "Essence of email",
        summary: `In brief, a preheader is a text that comes after the subject line when an email is viewed in your inbox. It’s often used to give your email list a taste of what’s inside the body of your email.`,
        link: "https://essenceofemail.com/blog/email-subject-line-and-preheader/",
      },
    ],
    link: "#email-preheader-text",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "Transactional Emails",
    defnition:
      "Transactional emails are emails that are automatically triggered by an action from the user. Examples include password recovery emails, payment receipts, order confirmation and activity notification emails.",
    image: "",
    otherDefnition: [
      {
        author: "Postmark",
        summary:
          "Transactional email is a type of automated email between a sender and a recipient. It differs from marketing email in that transactional email is triggered by events, interactions, or preferences within a service or application rather than by a company’s marketing campaign. For this reason, transactional email is sometimes called “triggered” email.",
        link: "https://postmarkapp.com/blog/what-is-transactional-email-and-how-is-it-used#:~:text=Transactional%20email%20is%20a%20type,by%20a%20company's%20marketing%20campaign",
      },
      {
        author: "Vero",
        summary: `Transactional emails are messages that businesses need to send in order to facilitate a transaction or provide a product or service, as requested by the customer. For this reason, companies don’t need to obtain consent from the customer to send transactional emails. Businesses use transactional emails to communicate important information to customers at critical moments in the customer journey.`,
        link: "https://www.getvero.com/resources/guides/lifecycle-marketing/transactional-emails/",
      },
    ],
    link: "#transactional-email",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "NPS Email Survey",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Lumoa",
        summary:
          "NPS email surveys are one of the most preferred ways to collect customer feedback. That is because NPS usually portrays the perception of a brand as a whole, rather than transactional satisfaction (where CSAT is most widely used).” email.",
        link: "https://lumoa.me/blog/nps-email-survey",
      },
      {
        author: "Question Pro",
        summary: `Net Promoter Score (NPS) email is sent to request customers to answer a short question and rate you on the scale of 0-10. It is one of the key metrics to measure the business’s success. NPS question measures the likelihood of somebody referring your organization to their friends or colleagues. It also helps to estimate future sales and hence the growth of the company.`,
        link: "https://www.questionpro.com/blog/nps-email/#:~:text=Net Promoter Score (NPS) email,to their friends or colleagues.",
      },
    ],
    link: "#Nps-email-survey",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "SMS Automation/Sequence",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Salesmate",
        summary:
          "Just like a series of emails that are sent out to a group of contacts based on pre-set time intervals, trigger-based automation or both, you can set your text (SMS) sequence into motion. Time-based text sequences involve messages sent out at predetermined intervals.",
        link: "https://www.salesmate.io/blog/automate-follow-ups-with-text-sequences/",
      },
      {
        author: "Omnisend",
        summary: `Automated text messages are pre-written SMS messages that are automatically sent to customers based on certain criteria. Such automation criteria can involve a schedule (sent 2 hours before the start of a big sale), a timeline (sent one month after a customer’s last purchase), or a trigger (sent immediately after a customer completes a purchase).  Through automatic text messages, businesses can reach customers with more personalized messages without the additional resources involved in sending out SMS manually. In this way, text message automations enable businesses to develop better connections with their audiences in a quick, cost-effective way.`,
        link: "https://www.omnisend.com/blog/automated-text-messages/",
      },
    ],
    link: "#sms-automation",
    relatedTerms: ["Sms Sequence"],
    author: "",
  },
  {
    term: "Email Call-to-Action",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Saleshacker",
        summary:
          "A call to action in a sales email is a short, simple phrase that usually appears at the end of your message. It should ask the other person to do something that moves the deal forward. It could be to book a meeting or to subscribe to get regular updates. What’s important is that they do something to remain engaged.",
        link: "https://www.saleshacker.com/email-call-to-action-examples-sales/",
      },
      {
        author: "Reachfirst",
        summary: `A call to action in an email is the button or link a sender includes with their email that prompts recipients to take a specific action.`,
        link: "https://www.reachfirst.com/importance-of-custom-solutions-for-a-digital-marketing-agency/",
      },
      {
        author: "SendX",
        summary: `A call to action in online marketing is a button or hyperlink line of text that sends a user to a website of the brand's choice. A CTA's purpose is to compel customers to act. The CTA button is generally noticeable, appealing, and difficult to overlook. When companies employ CTAs, they are persuading consumers to do more than reading.`,
        link: "ttps://www.sendx.io/help/what-is-a-call-to-action-in-email-marketing",
      },
    ],
    link: "#email-call-to-action",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "A/B Split Test",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Vwo",
        summary:
          "A/B testing, also known as split testing, refers to a randomized experimentation process wherein two or more versions of a variable (web page, page element, etc.) are shown to different segments of website visitors at the same time to determine which version leaves the maximum impact and drive business metrics.",
        link: "https://vwo.com/ab-testing/",
      },
      {
        author: "Optimizely",
        summary: `A/B testing (also known as split testing or bucket testing) is a method of comparing two versions of a webpage or app against each other to determine which one performs better. A/B testing is essentially an experiment where two or more variants of a page are shown to users at random, and statistical analysis is used to determine which variation performs better for a given conversion goal.`,
        link: "https://www.optimizely.com/optimization-glossary/ab-testing/",
      },
    ],
    link: "#split-test",
    relatedTerms: ["Split testing"],
    author: "",
  },
  {
    term: "Alt Tags",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Big commerce",
        summary: `An alt tag, also known as "alt attribute" and "alt description," is an HTML attribute applied to image tags to provide a text alternative for search engines. Applying images to alt tags such as product photos can positively impact an ecommerce store's search engine rankings.`,
        link: "https://www.bigcommerce.com/ecommerce-answers/what-is-an-alt-tag-and-how-does-it-impact-seo/",
      },
      {
        author: "CoSchedule",
        summary: `Alt tags are metadata that offer text descriptions of web images for search engines and screen readers for the visually impaired. As a best practice, they often include text that may appear on the image, or a simple summary of the graphic.`,
        link: "https://coschedule.com/marketing-terms-definitions/alt-tag",
      },
    ],
    link: "#alt-tags",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Bounce Rate",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Backlink",
        summary: `Bounce Rate is defined as the percentage of visitors that leave a webpage without taking an action, such as clicking on a link, filling out a form, or making a purchase.`,
        link: "https://backlinko.com/hub/seo/bounce-rate",
      },
      {
        author: "hotjar",
        summary: `The definition of bounce rate is the percentage of sessions that result in a bounce
                —that is, sessions that begin and end on the same page. Each page’s bounce rate affects a website’s overall bounce rate.`,
        link: "https://www.hotjar.com/google-analytics/glossary/bounces/",
      },
      {
        author: "Cfi",
        summary: `In internet marketing/business terminology, bounce rate is associated with the analysis of traffic to a company’s webpage. The rate (always a percentage) indicates the percentage of visitors that come to the site and leave versus those who come and view multiple pages.`,
        link: "https://corporatefinanceinstitute.com/resources/knowledge/other/bounce-rate/",
      },
    ],
    link: "#bounce-rate",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Click through rate (CTR)",
    defnition:
      "In customer messaging, Clickthrough rate (CTR) is a metric that measures how recipients click on links within a message content (most times an email). It is calculated by dividing the total number of recipients that clicked on links by total number of messages successfully delivered and multiplying by 100.",
    image: "",
    otherDefnition: [
      {
        author: "Google Ads",
        summary: `A ratio showing how often people who see your ad or free product listing end up clicking it. Clickthrough rate (CTR) can be used to gauge how well your keywords and ads, and free listings, are performing. CTR is the number of clicks that your ad receives divided by the number of times your ad is shown: clicks ÷ impressions = CTR. For example, if you had 5 clicks and 100 impressions, then your CTR would be 5%.`,
        link: "https://support.google.com/google-ads/answer/2615875?hl=en#:~:text=Clickthrough%20rate%20(CTR)%20can%20be,your%20CTR%20would%20be%205%25.",
      },
      {
        author: "Wordstream",
        summary: `In Internet marketing, CTR stands for click-through rate: a metric that measures the number of clicks advertisers receive on their ads per number of impressions.`,
        link: "https://www.wordstream.com/click-through-rate",
      },
      {
        author: "Investopedia",
        summary: `In online advertising, the click-through rate (CTR) is the percentage of individuals viewing a web page who view and then click on a specific advertisement that appears on that page. Click-through rates measure how successful an ad has been in capturing users' attention. The higher the click-through rate, the more successful the ad has been in generating interest.`,
        link: "https://www.investopedia.com/terms/c/clickthroughrates.asp",
      },
    ],
    link: "#ctr",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "Click to Open Rate (CTOR)",
    defnition:
      "In customer messaging, Click to Open Rate (CTOR) is a metric that measures the ratio of unique clicks to unique opens. It is calculated by dividing the total number of recipients that clicked on links by the total number of unique opens and multiplying by 100.",
    image: "",
    otherDefnition: [
      {
        author: "Active Campaign",
        summary: `Click to Open Rate (CTOR) is the percentage of people who open and email campaign and also click on a link within that campaign. CTOR compares the number of unique clicks to the number unique opens of an email. The CTOR calculates the effectiveness of an email campaign.`,
        link: "https://www.activecampaign.com/glossary/click-to-open-rate#:~:text=Definition,effectiveness%20of%20an%20email%20campaign.",
      },
      {
        author: "Campaign Monitor",
        summary: `The click-to-open rate (CTOR) compares the number of unique clicks to unique opens. This number indicates how effective the email message, design, and content performed, and whether it created enough interest in the recipient to take action.`,
        link: "https://www.campaignmonitor.com/resources/glossary/click-to-open-rate-ctor/",
      },
      {
        author: "Sendgrid",
        summary: `The best way to think about CTOR is to imagine, of those who opened your email, what percent found the content inside valuable/relevant enough to click on? It can be calculated as (unique clicks/unique opens) x 100. For example, if your email receives 100 clicks, and 150 opens, your CTOR is 66%.`,
        link: "https://sendgrid.com/blog/click-to-open-rate-how-relevant-is-my-email/",
      },
    ],
    link: "#ctor",
    relatedTerms: [""],
    author: "Engage",
  },
  {
    term: "Complaint Rate",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Popupsmart",
        summary: `Complaint rate is the percentage of recipients who flag your emails as spam.`,
        link: "https://popupsmart.com/encyclopedia/complaint-rate#:~:text=What%20is%20a%20Complaint%20Rate,flag%20your%20emails%20as%20spam.",
      },
      {
        author: " Debounce",
        summary: `When you divide the number of spam complaints by the number of emails delivered, you have the complaint rate. This is the rate depicting how often your subscribers register their displeasure with the mailbox providers for getting your emails. Mailbox providers estimate the complaint rates by dividing the number of complaints by the number of messages sent to the subscribers’ inboxes.`,
        link: "https://www.campaignmonitor.com/resources/glossary/click-to-open-rate-ctor/",
      },
      {
        author: "Mailgun",
        summary: `Unwanted mail can now generate complaints when messages hit the junk folder at different mailbox providers. Every time your contacts mark your messages as “Junk”, it’s factored into your overall complaint rate, which considers the number of messages marked as junk, over the number of emails sent in a specific email program. Best practices tell us that this complaint rate should be less than 0.1% (one-tenth of one percent) with each ISP, so if your complaint rate is much higher than this, consider going back to your list and check for contacts with low engagement for future email sends.`,
        link: "https://www.mailgun.com/blog/diving-head-first-into-the-inbox/",
      },
    ],
    link: "#complaint-rate",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Double Opt-in",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Campaign Monitor",
        summary: `A double opt-in occurs when a user signs up for an email marketing list, and then an email is sent out to the user which includes a link to click and confirm the subscription. Only after the confirmation click is completed will the user officially be added to the email marketing list. Double opt-in can also be referred to as confirmed opt-in.`,
        link: "https://www.campaignmonitor.com/resources/glossary/double-opt-in/#:~:text=A%20double%20opt%2Din%20occurs,to%20the%20email%20marketing%20list.",
      },
      {
        author: " Mailchimp",
        summary: `The double opt-in method has a few more steps, but it's still easy to use. It's just like single opt-in, but it includes a confirmation step where the contact receives an email and has to confirm their signup. An advantage of the double opt-in process is that you'll know the email address is for a valid, monitored inbox. We recommend double opt-in for companies who aren't focused on audience growth, or who have had low open rates or abuse complaints in the past. Companies may also decide to use a double opt-in process to satisfy regulations that may apply in the particular market or country in which they operate.`,
        link: "https://mailchimp.com/help/single-opt-in-vs-double-opt-in/",
      },
      {
        author: "SendPulse",
        summary: `Double opt-in is an email subscription method. It means that users are added to your mailing list only after they confirm the subscription two times. With this method, you’ll get high-quality leads and better email deliverability. `,
        link: "https://sendpulse.ng/support/glossary/double-opt-in",
      },
    ],
    link: "#double-opt-in",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "ESP (Email Service Provider)n",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Active Campaign",
        summary: `An email service provider (ESP) allows users to send email campaigns to a list of subscribers. Email service providers are technology companies that make it easier for people to build email lists and send emails. As email marketing has become a more popular marketing channel, more email service providers have sprung up to provide differentiated services. At the most basic level, an ESP needs to do two things: store email addresses and send emails.`,
        link: "https://www.campaignmonitor.com/resources/glossary/double-opt-in/#:~:text=A%20double%20opt%2Din%20occurs,to%20the%20email%20marketing%20list.",
      },
      {
        author: "Dynamic Yield",
        summary: `An Email Service Provider, commonly referred to as an ESP, is the technology a business employs to manage and deliver email marketing communications. These solutions are generally hosted on servers and also operate the necessary hardware and/or software to deliver bulk emails.`,
        link: "https://www.dynamicyield.com/glossary/email-service-provider/#:~:text=An%20Email%20Service%20Provider%2C%20commonly,software%20to%20deliver%20bulk%20emails.",
      },
      {
        author: "Grow Hack Scale",
        summary: `An Email Service Provider or ESP is software used to run email marketing campaigns at scale. It can also refer to email clients like Gmail and Outlook. The main purpose behind using an ESP is to send mass emails to a list of subscribers in an organised way. Yet, most email service providers today offer many extra features that make the process smoother.`,
        link: "https://growhackscale.com/glossary/email-service-provider",
      },
    ],
    link: "#esp",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "List Fatigue",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Campaign Monitor",
        summary: `Email list fatigue is a possible issue if conversions from email marketing deployments decrease. While it is often due to old subscribers in your list, it can also be due to stale or repeated messaging, or the information provided is no longer relevant or of interest to the recipient.`,
        link: "https://www.campaignmonitor.com/resources/glossary/email-list-fatigue/#:~:text=Email%20list%20fatigue%20is%20a,of%20interest%20to%20the%20recipient",
      },
      {
        author: "Active Campaign",
        summary: `<div>Email list fatigue occurs when subscribers stop engaging with your email marketing campaigns. Email list fatigues occurs for three primary reasons:
                <ol>
                <li>You send email too frequently, which burns out your list</li>
                <li>Your emails are not relevant enough to the audience on your list</li>
                <li>A subscriber that was once part of your target audience has a change in their own life, and engages less frequently</li>
                </ol>
                </div>`,
        link: "https://www.activecampaign.com/glossary/email-list-fatigue",
      },
    ],
    link: "#list-fatigue",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Sender Name",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Sendinblue",
        summary: `Sender name (also: from name) is the name displayed in your contacts’ inboxes. It’s different from the sender address (also: from address or from email), which includes an @ and a domain name. `,
        link: "https://www.sendinblue.com/blog/email-sender-name/#:~:text=Sender%20name%20(also%3A%20from%20name,an%20%40%20and%20a%20domain%20name.",
      },
      {
        author: "Zoho",
        summary: `<div>What a brand name is to a product, sender name is to an email. It helps with things like recognition, familiarity, and clarity. An email sender name can be a conversation starter or a spoiler for the content inside. You might have often been forced to ponder about two things with regards to the email sender name.
                <ol>
                <li>What name should I use?</li>
                <li>Why didn’t my user name work?</li>

                </ol>
                </div>`,
        link: "https://www.zoho.com/blog/campaigns/email-sender-name.htmle",
      },
    ],
    link: "#sender-name",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Single Opt-in",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Mailchimp",
        summary: `The single opt-in method is simple. It's probably what you think of when you think of signing up to email marketing. A contact fills out your signup form, clicks submit, and their information is saved in your audience. Behind the scenes, for record keeping purposes, the form saves important information like the contact's IP address and the date and time they signed up. `,
        link: "https://mailchimp.com/help/single-opt-in-vs-double-opt-in/",
      },
      {
        author: "Sleeknote",
        summary: `A single opt-in is a one-step process and only requires a person to enter their email address one time in the signup box on a website. No confirmation is required, and they immediately become a subscriber.`,
        link: "https://sleeknote.com/blog/single-opt-in-vs-double-opt-in",
      },
      {
        author: "Litmus",
        summary: `Single opt-in (SOI) is a subscription process where a new email address is added to your mailing list without requiring the owner of that email address to confirm definitively that they knowingly and willingly opted in.tep process and only requires a person to enter their email address one time in the signup box on a website. No confirmation is required, and they immediately become a subscriber.`,
        link: "https://www.litmus.com/blog/single-opt-in-vs-double-opt-in-case-for-soi/",
      },
    ],
    link: "#single-opt-in",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Thank You Page",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Manage Inbound",
        summary: `A thank you page is the page your visitors, leads, and customers see right after filling out and submitting a form on a landing page/web page. Think of it as the last step in your conversion process.`,
        link: "https://www.manageinbound.com/blog/thank-you-page-examples#:~:text=A%20thank%20you%20page%20is,step%20in%20your%20conversion%20process.",
      },
      {
        author: "Hubspot",
        summary: `Your customers and leads see your Thank You Page immediately after completing a form or making a purchase on your web page. It acts similarly to a confirmation email — except viewers don't have to choose to open it. Think of a Thank You page as both the last step in your conversion process and the first step for customer retention. The Thank You Page presents a prime opportunity to turn a lead into a customer — or a customer into a brand advocate.`,
        link: "https://blog.hubspot.com/blog/tabid/6307/bid/6117/thank-you-come-again-best-practices-for-thank-you-pages.aspx",
      },
      {
        author: "GrowSurf",
        summary: `To explain it briefly, a thank you page is a web page on your site that visitors are redirected to after they successfully submit their information in your opt-in form. These pages hold the power to bring you countless conversion opportunities and even increase your revenue if done right.`,
        link: "https://growsurf.com/blog/thank-you-page-examples",
      },
    ],
    link: "#thank-you-page",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "Unsubscribe Rate",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "SendX",
        summary: `An unsubscribe rate shows you the percentage of users who have opted-out from your mailing list after an email campaign. This tells you the number of subscribers who have chosen not to receive your newsletter any further. Higher the unsubscribe rate, lower your email deliverability, and domain reputation leading to ISP or email service providers like Gmail and Yahoo marking you as Spam. A spike in this number helps you understand which campaigns are working and which aren’t.`,
        link: "https://www.sendx.io/help/unsubscribe-rate#:~:text=An%20unsubscribe%20rate%20is%20the,the%20number%20of%20emails%20delivered.&text=For%20example%2C%20if%203000%20emails,good%20unsubscribe%20rate%20is%200.5%25.",
      },
      {
        author: "SendPulse",
        summary: `An unsubscribe rate is a measure that indicates the percentage of users who have opted-out from the mailing list after an email campaign. The unsubscribe rate impacts email deliverability, so a large number of unsubscribers leads to negative consequences from email service providers like Gmail, Yahoo, and Outlook.`,
        link: "https://sendpulse.ng/support/glossary/unsubscribe-rate",
      },
      {
        author: "Oberlo",
        summary: `The unsubscribe rate is a metric that measures the percentage of people who opt out from an email list. An unsubscribe rate that is less than 1% is considered within industry standard. The unsubscribe rate percentage is calculated by dividing the number of people who unsubscribed by the number of emails delivered times hundred (Unsubscribed number/Emails delivered x 100 = Unsubscribed rate %).`,
        link: "https://ng.oberlo.com/ecommerce-wiki/unsubscribe",
      },
      {
        author: "Klipfolio",
        summary: `mail Unsubscribe Rate is the percentage of email addresses that unsubscribe from an email marketing campaign, out of all email addresses that successfully received an email. Email recipients can choose to opt-out of mailing lists and this action is called an unsubscribe. Regulating the frequency, content, and purpose of sending emails can reduce Email Unsubscribe Rate.`,
        link: "https://www.klipfolio.com/metrics/marketing/email-unsubscribe-rate",
      },
    ],
    link: "#unsubscribe-rate",
    relatedTerms: [""],
    author: "",
  },
  {
    term: "White List",
    defnition: "",
    image: "",
    otherDefnition: [
      {
        author: "Techopedia",
        summary: `A whitelist is a list of entities approved for authorized access or privileged membership to enter a specific area in the computing world. These entities could include electronic groups or organizations, privileged websites, or even email addresses. The whitelist may also refer to an actionable promotion or recognition of an organization, group, or individual. This term may also be known as an approved list.`,
        link: "https://www.techopedia.com/definition/1728/whitelist",
      },
      {
        author: "Hypr",
        summary: `A whitelist is a list of administrator-approved entities including IP addresses, email addresses, and applications. Items on a whitelist are granted access to the system allowing them to be installed, altered, and communicated with over the private’s network. The goal of having a whitelist is to protect a private network and its devices from outside attacks.`,
        link: "https://www.hypr.com/whitelist/",
      },
      {
        author: "TechTarget",
        summary: `A whitelist (allowlist) is a cybersecurity strategy that approves a list of email addresses, IP addresses, domain names, or applications while denying all others. IT administrators use a whitelist as a quick and easy way to help safeguard computers and networks from potentially harmful threats or inappropriate material on local networks or across the internet.`,
        link: "https://whatis.techtarget.com/definition/whitelist",
      },
    ],
    link: "#white-list",
    relatedTerms: [""],
    author: "",
  },
];

// working with the ul here
const removeClass = () => {
  let all = document.querySelector(".sub_list a.active");

  if (all) {
    all.classList.remove("active");
    document.querySelector("#term > section.engage_filter span:nth-child(1)").classList.remove("active");
  }
};
function removeAllChildNodes() {
  while (otherList.firstChild) {
    otherList.removeChild(otherList.firstChild);
  }
}
function removeRelatedChildNodes() {
  while (term.firstChild) {
    term.removeChild(term.firstChild);
  }
}

for (let i = 0; i < glossaryTerms.length; i++) {
  let list = document.createElement("li");
  let link = document.createElement("a");
  let title = document.createElement("span");
  let icon = document.createElement("span");
  let symbol = document.createElement("i");
  list.classList.add("sub-menu");
  link.classList.add("sub-term");
  icon.classList.add("icon_detail");
  symbol.classList.add("ri-arrow-drop-right-line");
  title.innerHTML = glossaryTerms[i].term;
  link.href = glossaryTerms[i].link;
  structure.appendChild(list);
  list.appendChild(link);
  link.appendChild(title);
  link.appendChild(icon);
  icon.appendChild(symbol);
  link.addEventListener("click", () => {
    setTimeout(() => handleClick(link, i), 1);
  });
}

function handleClick(link, i) {
  removeClass();
  removeAllChildNodes();
  removeRelatedChildNodes();
  link && link.classList.add("active");
  content.setAttribute("id", glossaryTerms[i].link);

  // error occurs here
  link && hamburger.classList.toggle("toggle");
  link && filterMobile.classList.toggle("show");
  link && filterMobile.classList.toggle("scale-in-center");
  link && engageTop.classList.toggle("hide");

  if (window.location.hash === glossaryTerms[i].link) {
    // content.setAttribute("id", glossaryTerms[i].link)
    glossaryTitle.innerHTML = glossaryTerms[i].term;
    detailedDescription.innerHTML = glossaryTerms[i].defnition;
    if (glossaryTerms[i].image !== "") {
      glossaryImage.style.display = "block";
      glossaryImage.src = glossaryTerms[i].image;
    } else {
      glossaryImage.style.display = "none";
      glossaryImage.src = "";
    }
    authorName.innerHTML = glossaryTerms[i].author;
    document.getElementById(glossaryTerms[i].link).scrollIntoView();
  }
  let newDefinition = glossaryTerms.find((e) => {
    if (e.link === window.location.hash) {
      return e;
    }
  });

  if (!newDefinition) newDefinition = glossaryTerms[0];

  newDefinition.otherDefnition.forEach((e) => {
    let subTitle = document.createElement("h4");
    let moreContent = document.createElement("div");
    let text = document.createElement("p");
    let linkTo = document.createElement("div");
    let authorLink = document.createElement("a");
    let detail = document.createTextNode("Read More");
    let detailIcon = document.createElement("i");
    authorLink.href = e.link;
    console.log(authorLink.target);
    authorLink.target = "_blank";
    authorLink.appendChild(detail);
    otherList.appendChild(subTitle);
    otherList.appendChild(moreContent);
    moreContent.appendChild(text);
    moreContent.appendChild(linkTo);
    linkTo.appendChild(authorLink);
    linkTo.appendChild(detailIcon);
    linkTo.classList.add("link-to");
    detailIcon.classList.add("ri-arrow-right-line", "read");
    subTitle.innerHTML = e.author;
    moreContent.classList.add("list_definition");
    text.innerHTML = e.summary;
  });
  // newDefinition.relatedTerms.forEach((e) => {
  //     let name = document.createElement("p")
  //     name.innerHTML = e
  //     term.appendChild(name)
  // })
}

setTimeout(() => {
  const index = window.location.hash ? glossaryTerms.findIndex((e) => e.link === window.location.hash) : 0;
  glossaryTitle.innerHTML = glossaryTerms[index].term;
  detailedDescription.innerHTML = glossaryTerms[index].defnition;
  authorName.innerHTML = glossaryTerms[index].author;
  handleClick(undefined, index);
  document.querySelectorAll(".sub_list a")[index].classList.add("active");
}, 0);
