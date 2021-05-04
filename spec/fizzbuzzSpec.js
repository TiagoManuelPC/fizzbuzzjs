describe('FizzBuzz', function() {

  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 5 and 3', function() {
      expect(fizzbuzz.isDivisibleByFiveAndThree(15)).toBe(true);
    });
  });

  describe('knows when a number is not divisible by ', function() {
    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
    it ('divisible by 5 and 3', function() {
      expect(fizzbuzz.isDivisibleByFiveAndThree(4)).toBe(false);
    });
  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
  
  });

});