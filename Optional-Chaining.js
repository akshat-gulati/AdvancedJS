// with optionl chaining

let user = {
    profile: {
      address: {
        city: "New York"
      }
    }
  };
  
  let city = user.profile?.address?.city; // "New York"
  let zipCode = user.profile?.address?.zipCode; // undefined


//   without optional chaining
  city = user && user.profile && user.profile.address && user.profile.address.city; // "New York"