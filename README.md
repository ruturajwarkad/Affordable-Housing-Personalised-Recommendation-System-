# 🏠 Affordable Housing Personalised Recommendation System

A smart recommendation system that suggests housing options based on user preferences like BHK, gym, swimming pool, location, and RERA status. It uses a trained neural network and custom logic to sort the most suitable homes for the user.

🔗 **Live Demo**: [housing-website-six.vercel.app](https://housing-website-six.vercel.app/)


## 🧠 Technologies Used

* Python (pandas, numpy, scikit-learn)
* Machine Learning (MLPRegressor)
* HTML, CSS, JavaScript (for web integration)
* Dataset: `Final_Demand_Prediction_With_Amenities.csv`


## 📁 Repository Structure

```
Affordable-Housing-Recommendation/
├── CEP.ipynb                             # Main ML & recommendation code
├── Final_Demand_Prediction_With_Amenities.csv  # Dataset
├── auth-styles.css                      # Web page styling
├── new.html                             # Frontend template
├── script.js                            # JS logic for UI
├── style.css                            # Main stylesheet
```


## 🔍 Features

* Filters by BHK, gym, swimming pool, and RERA preference.
* Location-aware recommendations using label encoding.
* Demand score computed based on amenities, rent, and price.
* Star ratings (0 to 5) assigned to each recommended property.
* Rent estimation logic based on BHK and features.
* Displays top 15 most relevant housing options.


## 🛠️ How it Works

1. **Data Preprocessing**

   * Cleans columns and encodes categorical data (e.g., Yes/No → 1/0).
   * Prepares features and target (`Demand Score`) for training.

2. **Model Training**

   * Neural network (`MLPRegressor`) predicts demand score.
   * Trained on 80% of the dataset.

3. **User Input**

   * Asks for:

     * Preferred BHK
     * City
     * RERA only? (Yes/No)
     * Gym/Swimming Pool preference

4. **Recommendation Engine**

   * Filters listings based on user preferences.
   * If no match, it gradually relaxes constraints.
   * Calculates estimated rent and adjusted demand score.
   * Assigns star ratings and displays top 15 results.


## 🧪 Example Output

```
🏡 Society Name: Green Valley Heights
📍 Location: Pune
🛏 BHK: 2 BHK
💰 Price: ₹ 45,00,000
📐 Carpet Area: 700 sq ft
🚰 Water Availability: Yes
⚡ Power Backup: Yes
🏫 Near School: Yes
🏋 Gym Available: No
🏊 Swimming Pool Available: No
✅ RERA Registered: Yes
🌟 Star Rating: 4.5 ⭐ out of 5
🏠 Estimated Rent: ₹ 18,000 per month
------------------------------------------------
```


## 🌐 Website Integration

The frontend (HTML/CSS/JS) can be extended to collect inputs and display results on a webpage like:

* `new.html`: Input form
* `script.js`: Can be updated to call the Python backend (e.g., via Flask)
* `style.css`, `auth-styles.css`: Page styling


## 🚀 How to Run Locally

1. Clone the repo and place it in your local environment.
2. Make sure Python and required libraries are installed:

   ```bash
   pip install pandas numpy scikit-learn
   ```
3. Run `CEP.ipynb` in Jupyter Notebook or convert it to a `.py` script.
4. Follow the command-line prompts.


## 📌 Future Improvements

* Convert backend to Flask or FastAPI for web deployment.
* Add more amenities and dynamic rent factors.
* Show location maps or integrate with housing APIs.


## 👤 Author

**Ruturaj Warkad**
B.Tech Computer Engineering
College Project for CEP 

