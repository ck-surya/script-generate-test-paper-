function moveDocsToFolder() {
  // Array of document links
  var docLinks =[
  "https://docs.google.com/open?id=14muzCcdNDLv-ag0L_WEeAix4TsZNYOvXCMQ_7n5lZ9k",
  "https://docs.google.com/open?id=1ioKV7SuJ5WopjkcxuvZnmhHDHB3izf7PcgK42_l2CI4",
  "https://docs.google.com/open?id=13LuDgHdW06SJbFzMWcVaudb17DdKInHx65nW2krSR9Y",
  "https://docs.google.com/open?id=1XVomyBhsOSJ4L2KcU72Lq6DOUUiYChBLmM00LLYl8jE",
  "https://docs.google.com/open?id=1v9oblWupGpulEqNq8ukni6VimF2EpYbIy0K1OS6gM0A",
  "https://docs.google.com/open?id=1Lwo2iF4bJo2fKdiOT7WDkRjud07pHGk4BsSY5OR_UPM",
  "https://docs.google.com/open?id=1Ec6SinYEccEjXCWz_fKf9KVf2j2f20iXxyUEiaAPVEQ",
  "https://docs.google.com/open?id=1SoYzSD4JK5ievHu475vuxB-ruwZycdUBesaPF4vAXc4",
  "https://docs.google.com/open?id=1LI5i0KCGzrh8w4vFNC2Y53Xk1bgI9UYNMEFt6mGPY_E",
  "https://docs.google.com/open?id=16xCiMRkEvsHWg0mPaZZ2UCSKWFg4_uZ0vEGfi_8WuNI",
  "https://docs.google.com/open?id=1Wrokj3VxCeHmJWfm-QnRt0i52lZ2YjnEt9933vHnyUU",
  "https://docs.google.com/open?id=1uBmMaAYg-AIV5LmabieTqcA6qZRKwkDFO5Q-_WzAi90",
  "https://docs.google.com/open?id=1CONBjHuqwO911AKhRS6pLxXdlHlt4Wt8pBBNYX2S7bI",
  "https://docs.google.com/open?id=19e2yWAMPPWpaa59CZuQFbjTXP3chMjKJwuEVNtnDLNw",
  "https://docs.google.com/open?id=11QqvoYXMDdqTTKPiZt0yQqymM4X60f85Q9rTGjECIJA",
  "https://docs.google.com/open?id=1pqLAzUDk6k-XwTFM7lFjYQdGUC7GrPSEMB3YvS052iA",
  "https://docs.google.com/open?id=1PHEkF4FtDJJHn4AX92RVjtQ6dGsJ63X549oMYA8movM",
  "https://docs.google.com/open?id=1jk0vCnGw_1jFSZO3PUlRYggqtJc2L5Qk8G_EgZOGukU",
  "https://docs.google.com/open?id=1yT9AlTJJ6N0BHuU2cBeZwTGFjI3KjJOOmDlVagKlsgo",
  "https://docs.google.com/open?id=1KfolNw_Sklv0j7Ta3ttFl7l77L3-qkbopfCf2MwR6_c",
  "https://docs.google.com/open?id=1NNNWwM3ZhLYHUMZWHlCul7uxH3hNZnSzArep5r3YbeQ",
  "https://docs.google.com/open?id=1YP1LgexWtBJAT5Iu1rlUeK6sfDsA1rGqIjmg10CQ4GI",
  "https://docs.google.com/open?id=1cpdQRxombqdGoXoSgHdw0twD1CbhDckwfefJDxML-d0",
  "https://docs.google.com/open?id=1qdpNjevWQbBqsG4YTwxxSB4SmViiBrgbXJfyuENH714",
  "https://docs.google.com/open?id=1dKeTDuO_0gq6pTzWwpCOsKz0B6-TAxvQ-cvR2ESvTL0",
  "https://docs.google.com/open?id=1EHiD-34WHCoklCbqAdJ3y4sXhTTP0u1S0_xDOiVn2-Y",
  "https://docs.google.com/open?id=1eINdHi2JeEC_fg7uuONqp2UV4A8eAfSYLYgmmyJ1Qf4",
  "https://docs.google.com/open?id=1GDNP2WGe2NcgY1_kyVlNyCTVUtibBumSIiizYB4OE5w",
  "https://docs.google.com/open?id=1e6yX6ynpVgCQzGjG88rRO0z-AYa-UPEGpFV17G8aIEg",
  "https://docs.google.com/open?id=15fmq-yfmqdnWdhmpN1fGeeDlX_xyeu7mWM7FpkAj8mQ",
  "https://docs.google.com/open?id=1vqk-N1aGa4mm9Z53N-RcsxdR2QJS91JoJF2DgROAiNg",
  "https://docs.google.com/open?id=1In0qhODvk9z8BMExeD-3_zV9Hg43f-oGqT-xqeW-EQM",
  "https://docs.google.com/open?id=13ewZYGOmebp17g-eYax63MNFEsmiXv-Y1fBv0WFz8_k",
  "https://docs.google.com/open?id=1zNM-jkBTAKFlhVuBIJjYMaRT8LdZdTQA0XsPSvMJkBA",
  "https://docs.google.com/open?id=11sHigl-rX_pdkTsu5CE4-7Ptm8KdWIQR6m4SQbds5HA",
  "https://docs.google.com/open?id=1M4pM4Xh7njtKWj9LHLIxdxr8je",
  "https://docs.google.com/open?id=11sHigl-rX_pdkTsu5CE4-7Ptm8KdWIQR6m4SQbds5HA",
  "https://docs.google.com/open?id=1M4pM4Xh7njtKWj9LHLIxdxr8jeayz0bQTt_IpWygwCs",
  "https://docs.google.com/open?id=1e6yX6ynpVgCQzGjG88rRO0z-AYa-UPEGpFV17G8aIEg",
  "https://docs.google.com/open?id=15fmq-yfmqdnWdhmpN1fGeeDlX_xyeu7mWM7FpkAj8mQ",
  "https://docs.google.com/open?id=1vqk-N1aGa4mm9Z53N-RcsxdR2QJS91JoJF2DgROAiNg",
  "https://docs.google.com/open?id=1In0qhODvk9z8BMExeD-3_zV9Hg43f-oGqT-xqeW-EQM",
  "https://docs.google.com/open?id=13ewZYGOmebp17g-eYax63MNFEsmiXv-Y1fBv0WFz8_k",
  "https://docs.google.com/open?id=1zNM-jkBTAKFlhVuBIJjYMaRT8LdZdTQA0XsPSvMJkBA",
  "https://docs.google.com/open?id=11sHigl-rX_pdkTsu5CE4-7Ptm8KdWIQR6m4SQbds5HA",
  "https://docs.google.com/open?id=1M4pM4Xh7njtKWj9LHLIxdxr8jeayz0bQTt_IpWygwCs",
  "https://docs.google.com/open?id=1YOeDVBymIPkDjwCWLATeh9uxZqrghm0v26_2ddUSIA4",
  "https://docs.google.com/open?id=1FT6FzKVVumI8zo-mNPq0ptLcV7WRxo7tiA5Vh9r5lOc",
  "https://docs.google.com/open?id=1_yLLCcSKXPkBFuZ1zm4Riwza3UEOH0TLfHA3dqMOBeE",
  "https://docs.google.com/open?id=1b28w3yoUOYv0C21yBjVCph6Acd5mpx6-eHJK_04QeNY",
  "https://docs.google.com/open?id=1YOeDVBymIPkDjwCWLATeh9uxZqrghm0v26_2ddUSIA4",
  "https://docs.google.com/open?id=128e62CiL1UvY5KAG1QVhiczT9I0TcOeXXu20W4op-CU",
  "https://docs.google.com/open?id=14O4dA6iAvuCYx2AB8-Ud-WrW3vKdkMdbGkD9YVtSzLU",
  "https://docs.google.com/open?id=1F-iPr3iW1oX_CnqEC8Sy8PrOICjBuHaxsi4mnqlbwdY",
  "https://docs.google.com/open?id=1Ni2GHIfVWZG0160E1ukCoh7G4V1OmQXSx-BbQvJDkOY",
  "https://docs.google.com/open?id=18avrV7Ide2-wgHMKLM3fAkanZDnL3xILpHBjCkTZfck",
  "https://docs.google.com/open?id=197yID3CanRPhz-u_ThRkl9JoB7oPuG7MxWuDpeMLPrQ",
  "https://docs.google.com/open?id=1yeG-OEqoDDLurIs0qXv17ycEyEy5Gu326RsGdmwwBgc",
  "https://docs.google.com/open?id=1FT6FzKVVumI8zo-mNPq0ptLcV7WRxo7tiA5Vh9r5lOc",
  "https://docs.google.com/open?id=1_yLLCcSKXPkBFuZ1zm4Riwza3UEOH0TLfHA3dqMOBeE",
  "https://docs.google.com/open?id=1b28w3yoUOYv0C21yBjVCph6Acd5mpx6-eHJK_04QeNY",
  "https://docs.google.com/open?id=1YOeDVBymIPkDjwCWLATeh9uxZqrghm0v26_2ddUSIA4",
  "https://docs.google.com/open?id=128e62CiL1UvY5KAG1QVhiczT9I0TcOeXXu20W4op-CU",
  "https://docs.google.com/open?id=14O4dA6iAvuCYx2AB8-Ud-WrW3vKdkMdbGkD9YVtSzLU",
  "https://docs.google.com/open?id=1F-iPr3iW1oX_CnqEC8Sy8PrOICjBuHaxsi4mnqlbwdY",
  "https://docs.google.com/open?id=1Ni2GHIfVWZG0160E1ukCoh7G4V1OmQXSx-BbQvJDkOY",
  "https://docs.google.com/open?id=18avrV7Ide2-wgHMKLM3fAkanZDnL3xILpHBjCkTZfck",
  "https://docs.google.com/open?id=197yID3CanRPhz-u_ThRkl9JoB7oPuG7MxWuDpeMLPrQ",
  "https://docs.google.com/open?id=1yeG-OEqoDDLurIs0qXv17ycEyEy5Gu326RsGdmwwBgc",
  "https://docs.google.com/open?id=1FT6FzKVVumI8zo-mNPq0ptLcV7WRxo7tiA5Vh9r5lOc",
  "https://docs.google.com/open?id=1_yLLCcSKXPkBFuZ1zm4Riwza3UEOH0TLfHA3dqMOBeE",
  "https://docs.google.com/open?id=1b28w3yoUOYv0C21yBjVCph6Acd5mpx6-eHJK_04QeNY",
  "https://docs.google.com/open?id=1FT6FzKVVumI8zo-mNPq0ptLcV7WRxo7tiA5Vh9r5lOc",
  "https://docs.google.com/open?id=1_yLLCcSKXPkBFuZ1zm4Riwza3UEOH0TLfHA3dqMOBeE",
  "https://docs.google.com/open?id=1b28w3yoUOYv0C21yBjVCph6Acd5mpx6-eHJK_04QeNY",
  "https://docs.google.com/open?id=1Zbk7JTL2A2_L8sl6d6Y-CFTj3Uo-cEpg",
  "https://docs.google.com/open?id=1fMJ3VPC7GpQb5s1xBXO_GgatnPL3F5r0",
  "https://docs.google.com/open?id=1kYIgILJwBDc7V7Ou6MYV-R8Q1eKwJ4dX",
  "https://docs.google.com/open?id=1xg7mJnF1xT17rcvRXqIg_bkYyYfLhkw6",
  "https://docs.google.com/open?id=1MKTZ8F-H_VKBBxN8oDzR6zQ5nmptvDRL",
  "https://docs.google.com/open?id=1t16FIZO4ebX-SliG7LZm9cGwOF8KN4Cf",
  "https://docs.google.com/open?id=1S7KZffws56f1njxGp2gQ8l_MlHuvc_jX",
  "https://docs.google.com/open?id=1MKTZ8F-H_VKBBxN8oDzR6zQ5nmptvDRL",
  "https://docs.google.com/open?id=1t16FIZO4ebX-SliG7LZm9cGwOF8KN4Cf",
  "https://docs.google.com/open?id=1S7KZffws56f1njxGp2gQ8l_MlHuvc_jX",
  "https://docs.google.com/open?id=1OcUKWnUTXeBr03kYVem-7b0n3y3N7s5O",
  "https://docs.google.com/open?id=1J7SptJxgRCBpno9e6M2JNedHid7Lv92z",
  "https://docs.google.com/open?id=1tPp79dQPH8xJgcVQqFJP5kYKqM11M4pf",
  "https://docs.google.com/open?id=1j6-YvPY1D4UJXOMQh9ECLdChge6Q_M0E",
  "https://docs.google.com/open?id=1Yg43pEq9DcZDJfEvxGZP0oJZLZsKlU4L",
  "https://docs.google.com/open?id=1VPC3cORZCtioMcPC7I_n3G0BqCc3jGzp",
  "https://docs.google.com/open?id=1mno-4Z3xI5kC2WzqELzbyfqdtcyIKv3y",
  "https://docs.google.com/open?id=1VPC3cORZCtioMcPC7I_n3G0BqCc3jGzp",
  "https://docs.google.com/open?id=1mno-4Z3xI5kC2WzqELzbyfqdtcyIKv3y",
  "https://docs.google.com/open?id=1eEJ8Ux49R6dMZy2IyUp1fxSQl99OxLwv",
  "https://docs.google.com/open?id=1DPwMuMFDQaUziZfIGT4z9jyqAbW-2o4o",
  "https://docs.google.com/open?id=1IrgiODXvPXYAq4GTYyJ8pFn7SY2IGdN5",
  "https://docs.google.com/open?id=1eEJ8Ux49R6dMZy2IyUp1fxSQl99OxLwv",
  "https://docs.google.com/open?id=1DPwMuMFDQaUziZfIGT4z9jyqAbW-2o4o",
  "https://docs.google.com/open?id=1IrgiODXvPXYAq4GTYyJ8pFn7SY2IGdN5",
  "https://docs.google.com/open?id=1yfLhzOEEu1UNFvrvFq-DTPDdD-S",
  "https://docs.google.com/open?id=1tAfUOj5odjaGjiBqgjYQVT9lS6fvA",
  "https://docs.google.com/open?id=1T2LzU3owkTgXTXMlti5-xegm2qOgoLRZ",
  "https://docs.google.com/open?id=1PaeXmNNpWELBYY6E-rSZ1H4Jyzf2QX",
  "https://docs.google.com/open?id=1tAfUOj5odjaGjiBqgjYQVT9lS6fvA",
  "https://docs.google.com/open?id=1T2LzU3owkTgXTXMlti5-xegm2qOgoLRZ",
  "https://docs.google.com/open?id=1PaeXmNNpWELBYY6E-rSZ1H4Jyzf2QX",
  "https://docs.google.com/open?id=1UKJNYGlnskHLc4QvHJVH5UC9VqY5K",
  "https://docs.google.com/open?id=1w1M5CqIeDZP3gy2-NXgSdsIN0ZZSrl-",
  "https://docs.google.com/open?id=1yfLhzOEEu1UNFvrvFq-DTPDdD-S",
  "https://docs.google.com/open?id=1dKfem7zlhTmQ-xm79s1H5lmToJvDBslG",
  "https://docs.google.com/open?id=1UKJNYGlnskHLc4QvHJVH5UC9VqY5K",
  "https://docs.google.com/open?id=1w1M5CqIeDZP3gy2-NXgSdsIN0ZZSrl-",
]

  
  // ID of the destination folder
  var destinationFolderId = "19ReCTm7OedurJSwfU2wkWIP8wjFEr4Z0";

  // Iterate through each document link
  docLinks.forEach(function(link) {

    // Extract the document ID from the link
    var docId = extractDocIdFromLink(link);
    
    // Get the document file
    var docFile = DriveApp.getFileById(docId);
    
    // Get the destination folder
    var destinationFolder = DriveApp.getFolderById(destinationFolderId);
    
    // Move the document file to the destination folder
    destinationFolder.addFile(docFile);
    
    // Remove the document file from its current parent folder
    DriveApp.getRootFolder().removeFile(docFile);
  });
}

// Function to extract document ID from a Google Docs link
function extractDocIdFromLink(link) {
    return link.split("=")[1]
}





