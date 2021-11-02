package com.stripe.sample;

import java.nio.file.Paths;

import static spark.Spark.get;
import static spark.Spark.post;
import static spark.Spark.staticFiles;
import static spark.Spark.port;

import com.google.gson.Gson;
import com.google.gson.annotations.SerializedName;

import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

public class Server {
  private static Gson gson = new Gson();

  static class CreatePayment {
    @SerializedName("items")
    Object[] items;

    public Object[] getItems() {
      return items;
    }
  }

  static class CreatePaymentResponse {
    private String clientSecret;

    public CreatePaymentResponse(String clientSecret) {
      this.clientSecret = clientSecret;
    }
  }

  static int calculateOrderAmount(Object[] items) {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // users from directly manipulating the amount on the client
    return 1400;
  }

  public static void main(String[] args) {
    port(4242);
    staticFiles.externalLocation(Paths.get("").toAbsolutePath().toString());

    // This is your real test secret API key.
    Stripe.apiKey = "sk_test_51GwJc3Izf1AI5IuBXGYWoMJTPSyD1JjDyue7AisZEFo7py1qt4SRA3iwEIqdyonHtWp4AzuMlajcFoATPasXorJ700GcwEabox";

    post("/create-payment-intent", (request, response) -> {
      response.type("application/json");

      CreatePayment postBody = gson.fromJson(request.body(), CreatePayment.class);
      PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
      .setCurrency("usd")
      .setAmount(new Long(calculateOrderAmount(postBody.getItems())))
      .build();
      // Create a PaymentIntent with the order amount and currency
      PaymentIntent intent = PaymentIntent.create(createParams);

      CreatePaymentResponse paymentResponse = new CreatePaymentResponse(intent.getClientSecret());
      return gson.toJson(paymentResponse);
    });
  }
}