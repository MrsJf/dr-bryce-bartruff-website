export interface Endorsement {
  id: string;
  quote: string;
  author: string;
  title?: string;
}

export const endorsements: Endorsement[] = [
  {
    id: 'endorsement-1',
    quote: 'Duane Bartruff has an excellent Biblical understanding of how a Christian can grow in self worth and realize their potential.',
    author: 'Elmer L. Towns'
  },
  {
    id: 'endorsement-2',
    quote: 'The combination of scriptures, author\'s comments, exercises and discussion questions creates a powerful tool for personal understanding.',
    author: 'Howard G. Hendricks'
  },
  {
    id: 'endorsement-3',
    quote: 'How we steward our financial resources is a mirror into our hearts. Providing a biblical perspective on tithing, stewardship, and ultimately submission to the Lord, Dr. Bartruff shows in practical ways—and with some interesting historical insights and personal anecdotes—how we can glorify the Lord in how we use our money. This helpful booklet will make you think more deeply about the connection between your heart and your bank account.',
    author: 'Dr. Joel R. Beeke',
    title: 'Chancellor of Puritan Reformed Theological Seminary and pastor of the Heritage Reformed Congregation in Grand Rapids, Michigan'
  },
  {
    id: 'endorsement-4',
    quote: 'This clear, concise resource helps us understand our relationship with God and "our" money. How does God want us to use the resources He has entrusted to us—if not for eternal purposes? I heartily recommend this biblically-based and practical guide to a God-honoring stewardship of our earthly possessions.',
    author: 'Dawn G. Doorn',
    title: 'Vice President for Advancement, Westminster Seminary California'
  }
];