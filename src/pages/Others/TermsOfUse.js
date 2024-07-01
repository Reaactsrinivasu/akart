import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Paper, Button } from "@mui/material";
import html2pdf from "html2pdf.js";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { loadTermsAndConditionsInitiate } from "../../redux/actions/others/temrsAndConditionsActions";
const TermsOfUse = () => {
const contentRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTermsAndConditionsInitiate());
  }, [dispatch]);
  const termsData = useSelector(
    (state) => state?.termsandconditionsdata?.data?.data[0] || []
  );
  // console.log("termsData", termsData);


  // const generatePdf = () => {
  //   const element = document.createElement("div");
  //   element.innerHTML = termsData?.data || "";

  //   html2pdf().from(element).save("a-kart-terms-document.pdf");
  // };

//  const generatePdf = () => {
//    const element = contentRef.current;
//    if (element) {
//      // Apply padding to each page
//      const pages = element.querySelectorAll(".page");
//      pages.forEach((page) => {
//        page.style.padding = "20px"; // Adjust as needed
//        page.style.boxSizing = "border-box";
//        page.style.height = "100vh";
//        page.style.marginBottom = "50px";
//        page.style.marginTop = "50px";
//      });
//      html2pdf().from(element).save("a-kart-terms-document.pdf");
//      // Reset padding after generating PDF (optional)
//      pages.forEach((page) => {
//        page.style.padding = ""; // Reset to default
//        page.style.boxSizing = "";
//        page.style.height = "";
//        page.style.margin = "";
//        page.style.paddingBottom = "";
//      });
//    }
  //  };

 const invoiceData = {
   id: "inv_E7q0tqkxBRzdau",
   entity: "invoice",
   customer_details: {
     name: "Gaurav Kumar",
     email: "gaurav.kumar@example.com",
     contact: "9000090000",
     billing_address: {
       line1: "Ground & 1st Floor, SJR Cyber Laskar",
       line2: "Hosur Road",
       zipcode: "560068",
       city: "Bengaluru",
       state: "Karnataka",
       country: "in",
     },
     shipping_address: {
       line1: "Ground & 1st Floor, SJR Cyber Laskar",
       line2: "Hosur Road",
       zipcode: "560068",
       city: "Bengaluru",
       state: "Karnataka",
       country: "in",
     },
   },
   line_items: [
     {
       name: "Master Cloud Computing in 30 Days",
       description: "Book by Ravena Ravenclaw",
       amount: 399,
       currency: "USD",
       quantity: 1,
     },
   ],
   gross_amount: 399,
   currency_symbol: "$",
   description: "Invoice for the month of January 2020",
   created_at: 1579765167,
 };
  const generateHtmlContent = () => {
    return `
      <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }

            .invoice-box {
                max-width: 800px;
                margin: auto;
                padding: 30px;
                border: 1px solid #eee;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                font-size: 16px;
                line-height: 24px;
                color: #555;
            }

            .invoice-box table {
                width: 100%;
                line-height: inherit;
                text-align: left;
            }

            .invoice-box table td {
                padding: 5px;
                vertical-align: top;
            }

            .invoice-box table tr td:nth-child(2) {
                text-align: right;
            }

            .invoice-box table tr.top table td {
                padding-bottom: 20px;
            }

            .invoice-box table tr.top table td.title {
                font-size: 45px;
                line-height: 45px;
                color: #333;
            }

            .invoice-box table tr.information table td {
                padding-bottom: 40px;
            }

            .invoice-box table tr.heading td {
                background: #eee;
                border-bottom: 1px solid #ddd;
                font-weight: bold;
            }

            .invoice-box table tr.details td {
                padding-bottom: 20px;
            }

            .invoice-box table tr.item td {
                border-bottom: 1px solid #eee;
            }

            .invoice-box table tr.item.last td {
                border-bottom: none;
            }

            .invoice-box table tr.total td:nth-child(2) {
                border-top: 2px solid #eee;
                font-weight: bold;
            }
        </style>
    </head>

    <body>
        <div class="invoice-box">
        <div >
        <h1 style="text-align:center;">Invoice</h1>
        </div >
            <table cellpadding="0" cellspacing="0">
                <tr class="top">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td class="title">
                                    <img src="/assets/imgs/invoiceLogo.png" style="width:100%; max-width:100px;">
                                </td>
                                <td>
                                    Invoice #: inv_E7q0tqkxBRzdau<br>
                                    Created: January 23, 2020<br>
                                    Due: January 23, 2020
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="information">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td>
                                    Ground & 1st Floor, SJR Cyber Laskar<br>
                                    Hosur Road<br>
                                    Bengaluru, Karnataka, 560068, IN
                                </td>
                                <td>
                                    Gaurav Kumar<br>
                                    gaurav.kumar@example.com<br>
                                    9000090000
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="heading">
                    <td>
                        Item
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
                <tr class="item">
                    <td>
                        Master Cloud Computing in 30 Days - Book by Ravena Ravenclaw
                    </td>
                    <td>
                        $399
                    </td>
                </tr>
                <tr class="total">
                    <td></td>
                    <td>
                        Total: $399
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>
    `;
  };
  // const generatePdf = () => {
  //   const element = contentRef.current;
  //   if (element) {
  //     html2pdf()
  //       .from(element)
  //       .set({
  //         margin: 0.3, // 1 inch margin
  //         filename: "a-kart-terms-document.pdf",
  //         html2canvas: { scale: 1 },
  //         jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //         pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  //       })
  //       .save();
  //   }
  // };
  const generatePdf = () => {
    const element = document.createElement("div");
    element.innerHTML = generateHtmlContent();
    html2pdf().from(element).save("invoice.pdf");
  };
  return (
    <>
      <Layout>
        <CssBaseline />
        {/* <Box sx={{ p: 5, marginTop: "20px" }}>
          <Button onClick={generatePdf}>PDF</Button>
          <Paper
            elevation={2}
            sx={{ p: 3, backgroundColor: "#fff" }}
            variant="contained"
            component="div"
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: termsData?.data }}
          />
        </Box> */}
        <Box sx={{ p: 5, marginTop: "20px" }}>
      <Button onClick={generatePdf}>Download PDF</Button>
      <Paper elevation={2} sx={{ p: 3, backgroundColor: "#fff" }} variant="contained" component="div">
        <div ref={contentRef} dangerouslySetInnerHTML={{ __html: generateHtmlContent() }} />
      </Paper>
    </Box>
      </Layout>
    </>
  );
};

export default TermsOfUse;
