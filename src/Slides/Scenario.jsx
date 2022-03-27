import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
// import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
import UlBlock from '../Components/UlBlock';
import YellowText from '../Components/YellowText';
import Python from '../Components/Highlight/Python';

const beforePay = `
def pay(self, payment_type, security_code):
        if payment_type == "debit":
            print("Processing debit payment type")
            print(f"Verifying security code: {security_code}")
            self.status = "paid"

        elif payment_type == "credit":
            print("Processing credit payment type")
            print(f"Verifying security code: {security_code}")
            self.status = "paid"

        else:
            raise Exception(f"Unknown payment type: {payment_type}")
`;

const afterPay = `
class PaymentProcessor:
  def pay_debit(self, security_code):
    print("Processing debit payment type")
    print(f"Verifying security code: {security_code}")
    self.status = "paid"

  def pay_credit(self, security_code):
    print("Processing credit payment type")
    print(f"Verifying security code: {security_code}")
    self.status = "paid"
`;

const payment = `
processor = PaymentProcessor()
processor.pay_debit(order, "0372846")
`;

const Scenario = () => (
  <>
    <Slide>
      <Slide>
        <h3>Scenario 1</h3>
        <UlBlock style={{ marginBottom: '3rem' }}>
          <li>Add new ssh to your ssh config! (not the real one)</li>
        </UlBlock>

        <ul
          style={{
            border: '1px solid #fff',
            padding: '3rem',
            listStyle: 'none',
          }}
        >
          <li>Host 127.0.0.1</li>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li>HostName 127.0.0.1</li>
          </ul>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li> User someone_more_knowledgeable </li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h3>Scenario 2</h3>
        <UlBlock>
          <li>
            Your friend writes some bad function names, and you need to change
            them immediately.
            <ul>
              <li>
                Rename <YellowText>first_step</YellowText> to{' '}
                <YellowText>read_name</YellowText>
              </li>
              <li>
                Rename <YellowText>second_step</YellowText> to{' '}
                <YellowText>read_age</YellowText>
              </li>
              <li>
                Rename <YellowText>final_step</YellowText> to{' '}
                <YellowText>evaluate_age</YellowText>
              </li>
            </ul>
          </li>
        </UlBlock>
      </Slide>
      <Slide>
        <h3>Scenario 3</h3>
        <UlBlock>
          <li>
            Your friend writes a bad class that does too many things, and you
            need to reduce the coupling immediately.
          </li>
        </UlBlock>
      </Slide>
      <Slide>
        <Python code={beforePay} />
      </Slide>
      <Slide>
        <Python code={afterPay} />
      </Slide>
      <Slide>
        <Python code={payment} />
      </Slide>
    </Slide>
  </>
);

export default Scenario;
