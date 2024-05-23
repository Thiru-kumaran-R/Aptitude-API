# APTITUDE API 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/thirukumaran05/Aptitude-API?tab=MIT-1-ov-file)

Aptitude API is a free API that generates aptitude questions based on your choice for each call. Each topic in this Aptitude API has more than 100 questions. Topics that are currently available in this API are :

* Mixture and Alligation
* Profit and Loss
* Pipes and Cisterns
* Age
* Permutation and Combination
* Speed Time Distance
* Simple Interest
* Calendars

    
## End Points

#### Get all aptitude questions

```bash
 https://aptitude-api.vercel.app/Random
```

#### Get questions only on Mixture and Alligation topic

```bash
  https://aptitude-api.vercel.app/MixtureAndAlligation
```


#### Get questions only on Age topic

```bash
  https://aptitude-api.vercel.app/Age
```

#### Get questions only on Permutation and Combination topic

```bash
  https://aptitude-api.vercel.app/PermutationAndCombination
```


#### Get questions only on Profit and Loss topic

```bash
  https://aptitude-api.vercel.app/ProfitAndLoss
```

#### Get questions only on Pipes and Cisterns topic

```bash
  https://aptitude-api.vercel.app/PipesAndCistern
```
#### Get questions only on Speed Time Distance topic

```bash
  https://aptitude-api.vercel.app/SpeedTimeDistance
```
#### Get questions only on Calendars topic

```bash
  https://aptitude-api.vercel.app/Calendar
```
#### Get questions only on Simple Interest topic

```bash
  https://aptitude-api.vercel.app/SimpleInterest
```

## Documentation

For more reference follow this [Documentation](https://aptitude-api.vercel.app/)


## Examples

### GET

```javascript
fetch('https://aptitude-api.vercel.app/Age')
  .then(response => {
    console.log(response.json());
  });
```

### POST

```javascript
fetch('https://aptitude-api.vercel.app/Age', {
  method : 'POST',
  body : JSON.stringify({
      question: "The sum of ages of A and B is 45 years. If the ratio of their ages is 5:3, what is B's age?",
      answer: "18 years",
      options: ["15 years", "18 years", "20 years", "25 years"],
      explanation: "Let the ages of A and B be 5x and 3x, respectively. Given that 5x + 3x = 45. Solving this equation gives x = 5. Hence, B's age = 3 * 5 = 15 years."
    }),
  headers : {
    'Content-Type' : 'application/json ; charset=UTF-8'
  }
})
  .then(response => {
    console.log(response.json());
  })
```

### PATCH

```javascript
fetch('https://aptitude-api.vercel.app/Age', {
  method : 'PATCH',
  body : JSON.stringify({
      questionToBeUpdated : "The sum of ages of B and A is 45 years. If the ratio of their ages is 5:3, what is B's age?",
      question: "The sum of ages of A and B is 45 years. If the ratio of their ages is 5:3, what is B's age?",
      answer: "18 years",
      options: ["15 years", "18 years", "20 years", "25 years"],
      explanation: "Let the ages of A and B be 5x and 3x, respectively. Given that 5x + 3x = 45. Solving this equation gives x = 5. Hence, B's age = 3 * 5 = 15 years."
    }),
  headers : {
    'Content-Type' : 'application/json ; charset=UTF-8'
  }
})
  .then(response => {
    console.log(response.json());
  })
```

### DELETE

```javascript
fetch('https://aptitude-api.vercel.app/Age', {
  method : 'DELETE',
  body : JSON.stringify({
      question: "The sum of ages of A and B is 45 years. If the ratio of their ages is 5:3, what is B's age?"
    });
})
  .then(response => {
    console.log(response.json());
  })
```


## Contributing

Contributions are always welcome!

You can contribute aptitude questions by submitting a post request to that route on a certain topic.The following format should be used for each question.

```javascript
 {
    question: "If Alice is 5 years older than Bob, and the sum of their ages is 35, how old is Alice?",
    answer: "20",
    options: ["20", "25", "30", "35"],
    explanation: "Let Bob's age be x. Then Alice's age is x + 5. Given that x + (x + 5) = 35. Solving this equation, we find x = 15, so Alice is x + 5 = 20 years old."
  }
```
Make sure to verify the clarity of the explanation and the query.

## Screenshots
![App Screenshot](https://github.com/thirukumaran05/Aptitude-API/blob/main/images/demo.png)
