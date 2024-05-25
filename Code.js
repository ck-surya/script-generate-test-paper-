function addToGoogleDoc(content, idea) {
  var doc = DocumentApp.openById(createNewGoogleDoc(idea)); // Replace with your Google Doc ID
  var body = doc.getBody();
  body.appendParagraph(content);
}

function handlePrompt() {
  var jsonTemplate = {
    "Project Creation": {
      "Phases and Tasks": {
        "Phase 1: Environment Setup": {
          "Objective": "",
          "Install Dependencies": {
            "Task": "",
            "Resources": ""
          },
          "Initialize Project": {
            "Task": "",
            "Instructions": "",
            "Resources": ""
          },
          "Project Structure Overview": {
            "Task": "",
            "Activity": ""
          }
        },
        "Phase 2: Understanding Fundamentals": {
          "Objective": "",
          "Introduction to Programming": {
            "Task": "",
            "Resources": ""
          },
          "Create a Simple Component": {
            "Task": "",
            "Instructions": ""
          },
          "Render the Component": {
            "Task": "",
            "Instructions": ""
          }
        },
        "Phase 3: Managing Data": {
          "Objective": "",
          "Introduction to State Management": {
            "Task": "",
            "Resources": ""
          },
          "Add State to Components": {
            "Task": "",
            "Instructions": ""
          },
          "Passing Props": {
            "Task": "",
            "Instructions": ""
          }
        },
        "Phase 4: Handling Interactions": {
          "Objective": "",
          "Introduction to Event Handling": {
            "Task": "",
            "Resources": ""
          },
          "Add User Input Fields": {
            "Task": "",
            "Instructions": ""
          },
          "Update State with New Data": {
            "Task": "",
            "Instructions": ""
          }
        },
        "Phase 5: Styling and UI": {
          "Objective": "",
          "Introduction to Styling": {
            "Task": "",
            "Resources": ""
          },
          "Apply Basic Styling": {
            "Task": "",
            "Instructions": ""
          },
          "Enhance UI": {
            "Task": "",
            "Instructions": ""
          }
        }
      }
    }
  }


  const ideas = [
    "E-commerce Platform for Local Markets: A marketplace for small vendors in local communities.",
    "Food Delivery App for Regional Cuisines: Focused on delivering traditional and regional Indian foods.",
    "Healthcare Appointment Booking System: For clinics and hospitals in urban and rural areas.",
    "Educational Portal for Competitive Exams: Resources and test preparation for exams like UPSC, IIT-JEE, NEET.",
    "Job Portal for Skilled Laborers: Connecting skilled workers with employers.",
    "Local Events and Festivals Calendar: Highlighting cultural events and festivals in different regions.",
    "Agricultural Produce Marketplace: Connecting farmers with buyers directly.",
    "Digital Payment Solution for Rural Areas: Easy-to-use payment system for non-tech-savvy users.",
    "Public Transport Tracking App: Real-time tracking of buses and trains in cities.",
    "Tourism Guide App: Information about lesser-known tourist spots and cultural heritage sites.",
    "Real Estate Portal: For buying, selling, and renting properties in different Indian cities.",
    "Online Grocery Store: Focusing on locally sourced produce.",
    "Fitness and Wellness App: Tailored to Indian fitness regimes and wellness practices.",
    "Language Learning App: For learning Indian languages like Hindi, Tamil, Bengali, etc.",
    "Weather Forecast App: With detailed forecasts and alerts for different regions.",
    "Electricity and Water Bill Management: For easy bill payment and tracking usage.",
    "Women's Safety App: With features like emergency contacts and location tracking.",
    "Local News Aggregator: Curating news from various regional sources.",
    "Public Grievance Portal: Allowing citizens to report and track civic issues.",
    "Pet Adoption and Care Platform: Connecting pet owners with shelters and veterinary services.",
    "Plant and Gardening App: For urban gardening and farming tips.",
    "Cultural Learning Platform: Exploring Indian history, arts, and traditions.",
    "Ride-Sharing App: Focused on carpooling and bike-pooling within cities.",
    "Mobile Banking App: User-friendly interface for banking services.",
    "Volunteer and NGO Connect: Platform to connect volunteers with NGOs and social causes.",
    "Local Service Finder: For finding plumbers, electricians, carpenters, etc.",
    "Home Cooked Meal Delivery: Service connecting home cooks with consumers.",
    "Sports and Fitness Event Finder: Information on marathons, yoga classes, and other fitness events.",
    "Senior Citizen Support Platform: Services and support networks for the elderly.",
    "Student Scholarship Portal: Information and application for various scholarships.",
    "Personal Finance Management: Tools for budgeting, saving, and investing.",
    "Children’s Learning App: Educational games and activities for young children.",
    "Real-Time Pollution Monitor: Air quality index and pollution alerts.",
    "Book Exchange and Library Network: Platform for borrowing and exchanging books.",
    "Public Toilet Finder: Locating clean and accessible public restrooms.",
    "Local Artisans and Crafts Marketplace: Selling handmade crafts and artisanal products.",
    "Political Awareness Platform: Information on political parties, candidates, and elections.",
    "Skill Development and Training: Courses and training for enhancing job skills.",
    "Mental Health Support App: Resources and support networks for mental wellness.",
    "Crowdfunding Platform for Social Causes: For raising funds for community projects and social initiatives.",
    "Digital Classroom Management: Tools for teachers to manage online classes and assignments.",
    "Bus Booking System: For booking intercity and intracity bus tickets.",
    "Indian Recipes and Cooking Tips: Platform for sharing and discovering Indian recipes.",
    "Local Travel and Homestay App: Connecting travelers with local hosts and unique stays.",
    "Online Voting System: For organizing local community and organizational elections.",
    "Disaster Management App: Information and alerts for natural disasters and emergency response.",
    "Smart City Dashboard: Data and analytics for urban development and planning.",
    "Waste Management and Recycling: Solutions and information on waste disposal and recycling.",
    "Cultural Exchange Platform: For cultural exchange programs and interaction between different Indian states.",
    "Interactive Map of Historical Sites: Detailed information and virtual tours of historical and cultural sites."
  ];
  ideas.map(e => {
    var prompt = `Can you generate a scaffolded student project for learning react basics for the idea: ${e}\nFeel free to add more steps in each phase and more details if needed.`
    var idea = e.split(":")[0];
    var res = callGenerativeLanguageAPI(prompt);
    addToGoogleDoc(res,idea)
  })
}

function callGenerativeLanguageAPI(prompt) {
  var apiKey = "AIzaSyCUAYjli_4GfuEbrH8Z7KMErqybMAD2G9g";
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey;

  var payload = {
    "contents": [
      {
        "parts": [
          {
            "text": prompt
          }
        ]
      }
    ]
  };

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload)
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());

    Logger.log("Generated Google Apps Script:");
    Logger.log(typeof result)
    return result["candidates"][0]["content"]["parts"][0]["text"];
  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}


function createNewGoogleDoc(title) {
  // Create a new Google Doc
  var doc = DocumentApp.create(title); // Replace 'New Document' with your desired document title

  // Get the document ID
  var docId = doc.getId();

  // Log the URL of the newly created Google Doc
  Logger.log('New Google Doc created: ' + doc.getUrl());

  // Return the document ID (optional, but can be useful for further processing)
  return docId;
}



