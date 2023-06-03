<?php
namespace app\controllers;
use yii\httpclient\Client;

use Yii;
use yii\rest\Controller;

class WeatherController extends Controller
{
    public function actionIndex($city)
    {
        // Create the HTTP client
        $client = new Client();

        // Make the GET request to the OpenWeatherMap API
        $response = $client->createRequest()
            ->setMethod('GET')
            ->setUrl('https://api.openweathermap.org/data/2.5/weather')
            ->setData([
                'q' => $city,
                'units' => 'imperial',
                'appid' => '5dec3bf1331603785408757d9e2aa59f',
            ])
            ->send();

        // Check if the request was successful
        if ($response->isOk) {
            // Parse the response JSON
            $weatherData = $response->data;
            Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            return $weatherData;
        } else {
            // Handle the case when the request fails
            $errorMessage = $response->statusCode . ' - ' . $response->statusText;
            return $errorMessage;
        }
    }

}