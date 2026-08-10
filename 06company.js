function companyEmployees(input) {
        let companies = {};
      
        for (let line of input) {
          let [company, employee] = line.split(" -> ");
          if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
          }
          companies[company].add(employee);
        }
      
        let sortedCompanies = Object.keys(companies).sort();
      
        for (let company of sortedCompanies) {
          console.log(company);
          for (let employee of companies[company]) {
            console.log(`-- ${employee}`);
          }
        }
      }
companyEmployees([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])