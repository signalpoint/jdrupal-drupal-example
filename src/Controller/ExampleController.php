<?php

namespace Drupal\example\Controller;

use Drupal\Core\Controller\ControllerBase;

class ExampleController extends ControllerBase {

  public function myApp() {
    $element = array(
      '#markup' => '<div id="msg">Loading...</div>',
      '#attached' => array(
        'library' => array(
          'jdrupal/jdrupal',
          'example/app'
        )
      )
    );
    return $element;
  }

}
?>