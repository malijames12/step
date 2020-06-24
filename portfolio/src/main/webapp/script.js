// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomPhrase() {
  const phrases =
      ["I say my favorite color is Blue, but in practice it's Black.",
      'I know 3 other STEP interns personally.',
       'Hablo un poco español.',
       '100% of the time I can correctly guess the answer to a binary question 50% of the time.',
       'If it sounds obscure, I read it on Reddit.',
       'Vague?',
       '... partner?',
       'The cake is a lie.',
       "Whatever you do, don't visit this page. https://www.youtube.com/watch?v=dQw4w9WgXcQ"];

  // Pick a random greeting.
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];

  // Add it to the page.
  const phraseContainer = document.getElementById('phrase-container');
  phraseContainer.innerText = phrase;
}
