import React from "react";

const Featured = () => {
  // Define your image URLs here
  const cardDetails = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nt781G8NHcv0~EQsmHAeYYKzzeqi3JYhuBez6BcnWLI305bnKJcaqrjPZA2dYkIKS8Lg9WlErWDFSDHpaKIvtsqyZInR196ljr9Hf~Klnzp21gs-1wyzb6MW2KRmfFvYFRfrcd9WswxmvE812Xwz0NXNXFlWwu5dpUf1mh7FDUtb8RiqGKrwsetf9j700NgwJ-pw5CPM9X8Ue5pBjyGH8MVlpnP45zq7REZ1X3rVh7Niw5B2KZ0LrHjbPf3RCYu2u5vAHwUJW5xjxvnOH1kjd2t~axl-I0fezM3QNLbqjMJnOp-dCUm4FbjsOvcvrMfkGDWEdcAVo5fQAdv-uiLxFw__",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      // Any other details you might need for the card
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a9~HDB~0FbxWLXB8t9iTrQhThDAg0EcS7m36AeFE3ncvTBO4erNz29pqmMrU3SDiGod5akbeNyjS~wZUiJyMElEw8fBpbrjvTCr1~L9g~1mbZiITX2FGmrASS-IjTxqtkqOoFvD21JYUZ-LszJbxjtrPfICZ6lcEOhjpsQ5wNww0xcygullzOa56VRGUDfRdnGm0f3wixhDqSIP-P8xIpsWeQeD2SalZMFlLT9T-UMWzp5kdvqeNZd~l~camD-bATwf27S3AgYyq~OxqGAXHj2csyBMQ3qkIyepPPP5ANlM03m4HBZ5BE6BPQJmq26ig32pl6~ioW8dQgEyCgXoPhA__",
      // ... rest of the details, similar to the first card
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxzZEGeQXOCmiVnzipQsxVktTaaAb-2zfanST80lWDyy3ym7WOf214jwygLfzI661GI1UK1KZ8n7LKmbuxyQPksiJMt8tZhngXfnSybKLPoHcJ2lunQDz~sC70fUDLiQh08PqAQZi9KTxLs4IVuQP0oRtFEpinvmb4P2tO5K-QlxYWiiySxCutemtk0sECU9Qrx6-qoVOaNHfD8s6DSCpiv9vQ4XO5TGWqQGIV554Yi8LAEwHgDw9wgQ5-ghgEqyfJdOB45aGCjoUxyw10iYkoIbBU0oaiUgy9ADVyAIOHUea67A7-QGmizkdbgtsqg5i7KDQQv5IgsQxXg6GuoeyA__",
      // ... rest of the details, similar to the first card
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      comments: "10 comments",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <section className="text-sm uppercase mb-2">Practice Advice</section>
        <h3 className="section-title text-3xl font-bold mb-4">
          Featured Posts
        </h3>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="row flex flex-wrap -mx-2">
        {cardDetails.map((card, idx) => (
          <div
            key={idx}
            className="content-card flex flex-col w-full md:w-1/3 px-2 mb-4"
          >
            <img
              src={card.imageUrl}
              alt="Card visual"
              className="card-image mb-4 w-full h-auto"
            />
            <div className="tags flex space-x-2 mb-2">
              <a
                href="http://google.com"
                className="text-xs text-blue-500 hover:text-blue-700"
              >
                Google
              </a>
              <span className="text-xs text-gray-500">Trending</span>
              <span className="text-xs text-red-500">New</span>
            </div>
            <h4 className="card-title text-xl font-bold mb-2">{card.title}</h4>
            <p className="card-text mb-4">{card.description}</p>
            <div className="card-footer flex justify-between items-center text-xs mb-2">
              <span>{card.date}</span>
              <span>{card.comments}</span>
            </div>
            <h6 className="learn-more text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
              Learn More &gt;
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
