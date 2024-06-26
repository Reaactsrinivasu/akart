const privacyData1 = [
  "A-Kart.in Privacy Notice",
  {
    id: 1,
    title: "What Personal Information About Customers Does A-Kart Collect?",
    data: [
      {
        id: 1,
        subdata:
          "We collect your personal information in order to provide and continually improve our products and services.",
      },
      {
        id: 2,
        subdata: "Here are the types of personal information we collect:",
      },
      {
        id: 3,
        subdata:
          "Information You Give Us: We receive and store any information you provide in relation to A-Kart Services. Click here to see examples of what we collect. You can choose not to provide certain information, but then you might not be able to take advantage of many of our A-kart Services.",
      },
      {
        id: 4,
        subdata:
          "Automatic Information: We automatically collect and store certain types of information about your use of A-Kart Services, including information about your interaction with content and services available through Amazon Services. Like many websites, we use cookies and other unique identifiers, and we obtain certain types of information when your web browser or device accesses A-Kart Services and other content served by or on behalf of A-Kart on other websites.",
      },
      {
        id: 5,
        subdata: "Click here to see examples of what we collect.",
      },
      {
        id: 6,
        subdata:
          "Information from Other Sources: We might receive information about you from other sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily. Click here to see additional examples of the information we receive",
      },
    ],
  },
];
const privacyData2 = [
  {
    id: 1,
    title: "For What Purposes Does A-Kart Use Your Personal Information?",
    data: [
      {
        id: 1,
        subdata:
          "We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers. These purposes include.",
      },
      {
        id: 2,
        subdata:
          "Purchase and delivery of products and services. We use your personal information to take and fulfill orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.",
      },
      {
        id: 3,
        subdata:
          "Provide, troubleshoot, and improve A-Kart Services. We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Amazon Services.",
      },
      {
        id: 4,
        subdata:
          "Recommendations and personalization. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Amazon Services.",
      },
      {
        id: 5,
        subdata:
          "Provide voice, image and camera services. When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services. For more information about Alexa voice services,<a href='https://example.com'style={{textDecoration:'none'}}>click here</a>.",
      },
      {
        id: 6,
        subdata:
          "Comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification and other purposes.",
      },
      {
        id: 7,
        subdata:
          "Communicate with you. We use your personal information to communicate with you in relation to Amazon Services via different channels (e.g., by phone, e-mail, chat).",
      },
      {
        id: 8,
        subdata:
          "Advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads. To learn more, please read our Interest-Based Ads notice.",
      },
      {
        id: 9,
        subdata:
          "Fraud Prevention and Credit Risks. We use personal information to prevent and detect fraud and abuse in order to protect the security of our customers, Amazon, and others. We may also use scoring methods to assess and manage credit risks.",
      },
    ],
  },
];

<Grid container sx={{ justifyContent: "center", marginTop: "30px" }}>
  <Grid item xs={12} sm={11} md={10} lg={8}>
    <Grid
      sx={{
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #DFD3D3",
        backgroundColor: "#F5F3F1",
      }}
    >
      <Typography
        sx={{ fontSize: "19px", fontFamily: "Lato", fontWeight: 700 }}
      >
        {privacyData1[0]}
      </Typography>
      <CloseIcon sx={{ marginLeft: "auto" }} />
    </Grid>
    <Grid sx={{ backgroundColor: "#FFFFFF", padding: "20px" }}>
      {privacyData1?.map((item, index) => (
        <Box>
          <Grid>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Lato",
                fontWeight: 700,
              }}
            >
              {item.title}
            </Typography>
          </Grid>
          {item?.data?.map((subitem, index) => (
            <Grid sx={{ marginTop: "10px" }} key={index}>
              <Typography sx={{ fontFamily: "Lato", fontSize: "13px" }}>
                {subitem.subdata}
              </Typography>
            </Grid>
          ))}
        </Box>
      ))}
      {privacyData2.map((item) => (
        <Box>
          <Grid sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Lato",
                fontWeight: 700,
              }}
            >
              {/* For What Purposes Does A-Kart Use Your Personal
                        Information? */}
              {item.title}
            </Typography>
          </Grid>

          <Grid sx={{ marginTop: "10px" }}>
            {item?.data?.map((subitem, index) => (
              <ul key={index}>
                <li style={{ fontSize: "13px", fontFamily: "Lato" }}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: subitem.subdata,
                    }}
                  />
                </li>
              </ul>
            ))}
          </Grid>
        </Box>
      ))}
    </Grid>
  </Grid>
</Grid>;
