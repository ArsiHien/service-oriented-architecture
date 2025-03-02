/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 681.0, "series": [{"data": [[0.0, 17.0], [0.1, 17.0], [0.2, 21.0], [0.3, 21.0], [0.4, 22.0], [0.5, 22.0], [0.6, 22.0], [0.7, 22.0], [0.8, 22.0], [0.9, 22.0], [1.0, 22.0], [1.1, 23.0], [1.2, 23.0], [1.3, 23.0], [1.4, 23.0], [1.5, 23.0], [1.6, 24.0], [1.7, 24.0], [1.8, 25.0], [1.9, 26.0], [2.0, 27.0], [2.1, 27.0], [2.2, 27.0], [2.3, 27.0], [2.4, 28.0], [2.5, 28.0], [2.6, 28.0], [2.7, 28.0], [2.8, 28.0], [2.9, 28.0], [3.0, 29.0], [3.1, 29.0], [3.2, 29.0], [3.3, 29.0], [3.4, 29.0], [3.5, 29.0], [3.6, 29.0], [3.7, 30.0], [3.8, 31.0], [3.9, 31.0], [4.0, 31.0], [4.1, 31.0], [4.2, 31.0], [4.3, 31.0], [4.4, 32.0], [4.5, 32.0], [4.6, 32.0], [4.7, 32.0], [4.8, 32.0], [4.9, 32.0], [5.0, 32.0], [5.1, 32.0], [5.2, 32.0], [5.3, 32.0], [5.4, 32.0], [5.5, 33.0], [5.6, 33.0], [5.7, 33.0], [5.8, 33.0], [5.9, 33.0], [6.0, 33.0], [6.1, 33.0], [6.2, 33.0], [6.3, 33.0], [6.4, 33.0], [6.5, 34.0], [6.6, 34.0], [6.7, 34.0], [6.8, 34.0], [6.9, 34.0], [7.0, 34.0], [7.1, 34.0], [7.2, 34.0], [7.3, 34.0], [7.4, 34.0], [7.5, 34.0], [7.6, 34.0], [7.7, 34.0], [7.8, 35.0], [7.9, 35.0], [8.0, 35.0], [8.1, 35.0], [8.2, 35.0], [8.3, 35.0], [8.4, 35.0], [8.5, 35.0], [8.6, 35.0], [8.7, 35.0], [8.8, 35.0], [8.9, 35.0], [9.0, 35.0], [9.1, 35.0], [9.2, 35.0], [9.3, 35.0], [9.4, 35.0], [9.5, 36.0], [9.6, 36.0], [9.7, 36.0], [9.8, 36.0], [9.9, 36.0], [10.0, 36.0], [10.1, 36.0], [10.2, 36.0], [10.3, 36.0], [10.4, 36.0], [10.5, 37.0], [10.6, 37.0], [10.7, 37.0], [10.8, 37.0], [10.9, 37.0], [11.0, 37.0], [11.1, 37.0], [11.2, 37.0], [11.3, 38.0], [11.4, 38.0], [11.5, 38.0], [11.6, 38.0], [11.7, 38.0], [11.8, 38.0], [11.9, 38.0], [12.0, 38.0], [12.1, 38.0], [12.2, 38.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 39.0], [13.1, 39.0], [13.2, 39.0], [13.3, 39.0], [13.4, 39.0], [13.5, 39.0], [13.6, 39.0], [13.7, 39.0], [13.8, 40.0], [13.9, 40.0], [14.0, 40.0], [14.1, 40.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 40.0], [14.6, 40.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 42.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 43.0], [17.1, 43.0], [17.2, 43.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 45.0], [19.4, 45.0], [19.5, 46.0], [19.6, 46.0], [19.7, 46.0], [19.8, 47.0], [19.9, 48.0], [20.0, 48.0], [20.1, 48.0], [20.2, 48.0], [20.3, 48.0], [20.4, 49.0], [20.5, 50.0], [20.6, 50.0], [20.7, 50.0], [20.8, 50.0], [20.9, 51.0], [21.0, 51.0], [21.1, 51.0], [21.2, 51.0], [21.3, 52.0], [21.4, 52.0], [21.5, 52.0], [21.6, 52.0], [21.7, 52.0], [21.8, 52.0], [21.9, 53.0], [22.0, 53.0], [22.1, 53.0], [22.2, 54.0], [22.3, 54.0], [22.4, 54.0], [22.5, 54.0], [22.6, 54.0], [22.7, 54.0], [22.8, 54.0], [22.9, 54.0], [23.0, 54.0], [23.1, 54.0], [23.2, 54.0], [23.3, 54.0], [23.4, 55.0], [23.5, 55.0], [23.6, 56.0], [23.7, 57.0], [23.8, 57.0], [23.9, 57.0], [24.0, 57.0], [24.1, 57.0], [24.2, 58.0], [24.3, 58.0], [24.4, 58.0], [24.5, 58.0], [24.6, 58.0], [24.7, 58.0], [24.8, 58.0], [24.9, 58.0], [25.0, 59.0], [25.1, 59.0], [25.2, 59.0], [25.3, 59.0], [25.4, 59.0], [25.5, 59.0], [25.6, 59.0], [25.7, 59.0], [25.8, 59.0], [25.9, 59.0], [26.0, 59.0], [26.1, 59.0], [26.2, 59.0], [26.3, 60.0], [26.4, 60.0], [26.5, 61.0], [26.6, 61.0], [26.7, 61.0], [26.8, 62.0], [26.9, 62.0], [27.0, 63.0], [27.1, 63.0], [27.2, 63.0], [27.3, 63.0], [27.4, 63.0], [27.5, 63.0], [27.6, 64.0], [27.7, 64.0], [27.8, 64.0], [27.9, 64.0], [28.0, 65.0], [28.1, 65.0], [28.2, 65.0], [28.3, 65.0], [28.4, 66.0], [28.5, 66.0], [28.6, 66.0], [28.7, 66.0], [28.8, 67.0], [28.9, 67.0], [29.0, 67.0], [29.1, 67.0], [29.2, 67.0], [29.3, 67.0], [29.4, 67.0], [29.5, 67.0], [29.6, 67.0], [29.7, 67.0], [29.8, 67.0], [29.9, 67.0], [30.0, 67.0], [30.1, 68.0], [30.2, 68.0], [30.3, 68.0], [30.4, 68.0], [30.5, 69.0], [30.6, 69.0], [30.7, 69.0], [30.8, 69.0], [30.9, 69.0], [31.0, 69.0], [31.1, 69.0], [31.2, 70.0], [31.3, 70.0], [31.4, 70.0], [31.5, 71.0], [31.6, 71.0], [31.7, 71.0], [31.8, 71.0], [31.9, 71.0], [32.0, 71.0], [32.1, 71.0], [32.2, 71.0], [32.3, 71.0], [32.4, 71.0], [32.5, 72.0], [32.6, 72.0], [32.7, 72.0], [32.8, 72.0], [32.9, 72.0], [33.0, 73.0], [33.1, 73.0], [33.2, 73.0], [33.3, 73.0], [33.4, 73.0], [33.5, 74.0], [33.6, 74.0], [33.7, 74.0], [33.8, 74.0], [33.9, 74.0], [34.0, 74.0], [34.1, 74.0], [34.2, 74.0], [34.3, 74.0], [34.4, 74.0], [34.5, 75.0], [34.6, 75.0], [34.7, 75.0], [34.8, 75.0], [34.9, 75.0], [35.0, 75.0], [35.1, 75.0], [35.2, 75.0], [35.3, 75.0], [35.4, 75.0], [35.5, 75.0], [35.6, 75.0], [35.7, 75.0], [35.8, 75.0], [35.9, 75.0], [36.0, 76.0], [36.1, 76.0], [36.2, 76.0], [36.3, 76.0], [36.4, 76.0], [36.5, 76.0], [36.6, 76.0], [36.7, 76.0], [36.8, 76.0], [36.9, 76.0], [37.0, 76.0], [37.1, 76.0], [37.2, 76.0], [37.3, 76.0], [37.4, 76.0], [37.5, 76.0], [37.6, 76.0], [37.7, 76.0], [37.8, 76.0], [37.9, 77.0], [38.0, 77.0], [38.1, 77.0], [38.2, 77.0], [38.3, 77.0], [38.4, 77.0], [38.5, 77.0], [38.6, 77.0], [38.7, 77.0], [38.8, 78.0], [38.9, 78.0], [39.0, 78.0], [39.1, 78.0], [39.2, 78.0], [39.3, 78.0], [39.4, 79.0], [39.5, 79.0], [39.6, 79.0], [39.7, 79.0], [39.8, 79.0], [39.9, 79.0], [40.0, 79.0], [40.1, 79.0], [40.2, 80.0], [40.3, 80.0], [40.4, 81.0], [40.5, 81.0], [40.6, 81.0], [40.7, 81.0], [40.8, 82.0], [40.9, 82.0], [41.0, 82.0], [41.1, 82.0], [41.2, 82.0], [41.3, 82.0], [41.4, 82.0], [41.5, 83.0], [41.6, 83.0], [41.7, 83.0], [41.8, 83.0], [41.9, 83.0], [42.0, 83.0], [42.1, 83.0], [42.2, 84.0], [42.3, 84.0], [42.4, 84.0], [42.5, 84.0], [42.6, 84.0], [42.7, 84.0], [42.8, 84.0], [42.9, 84.0], [43.0, 84.0], [43.1, 84.0], [43.2, 84.0], [43.3, 84.0], [43.4, 84.0], [43.5, 85.0], [43.6, 85.0], [43.7, 85.0], [43.8, 85.0], [43.9, 86.0], [44.0, 86.0], [44.1, 87.0], [44.2, 87.0], [44.3, 87.0], [44.4, 87.0], [44.5, 87.0], [44.6, 87.0], [44.7, 87.0], [44.8, 88.0], [44.9, 88.0], [45.0, 88.0], [45.1, 89.0], [45.2, 89.0], [45.3, 89.0], [45.4, 90.0], [45.5, 90.0], [45.6, 90.0], [45.7, 90.0], [45.8, 90.0], [45.9, 90.0], [46.0, 90.0], [46.1, 91.0], [46.2, 91.0], [46.3, 91.0], [46.4, 91.0], [46.5, 92.0], [46.6, 93.0], [46.7, 93.0], [46.8, 93.0], [46.9, 93.0], [47.0, 93.0], [47.1, 93.0], [47.2, 94.0], [47.3, 94.0], [47.4, 95.0], [47.5, 95.0], [47.6, 96.0], [47.7, 96.0], [47.8, 96.0], [47.9, 96.0], [48.0, 96.0], [48.1, 97.0], [48.2, 97.0], [48.3, 97.0], [48.4, 97.0], [48.5, 97.0], [48.6, 97.0], [48.7, 97.0], [48.8, 97.0], [48.9, 98.0], [49.0, 98.0], [49.1, 98.0], [49.2, 98.0], [49.3, 98.0], [49.4, 98.0], [49.5, 99.0], [49.6, 99.0], [49.7, 99.0], [49.8, 99.0], [49.9, 99.0], [50.0, 100.0], [50.1, 100.0], [50.2, 101.0], [50.3, 101.0], [50.4, 101.0], [50.5, 101.0], [50.6, 102.0], [50.7, 102.0], [50.8, 102.0], [50.9, 102.0], [51.0, 102.0], [51.1, 103.0], [51.2, 103.0], [51.3, 104.0], [51.4, 104.0], [51.5, 104.0], [51.6, 105.0], [51.7, 105.0], [51.8, 105.0], [51.9, 105.0], [52.0, 105.0], [52.1, 105.0], [52.2, 105.0], [52.3, 105.0], [52.4, 105.0], [52.5, 106.0], [52.6, 106.0], [52.7, 107.0], [52.8, 107.0], [52.9, 107.0], [53.0, 108.0], [53.1, 108.0], [53.2, 108.0], [53.3, 108.0], [53.4, 108.0], [53.5, 109.0], [53.6, 109.0], [53.7, 109.0], [53.8, 109.0], [53.9, 109.0], [54.0, 109.0], [54.1, 110.0], [54.2, 110.0], [54.3, 110.0], [54.4, 110.0], [54.5, 111.0], [54.6, 111.0], [54.7, 111.0], [54.8, 111.0], [54.9, 111.0], [55.0, 111.0], [55.1, 112.0], [55.2, 112.0], [55.3, 112.0], [55.4, 113.0], [55.5, 113.0], [55.6, 114.0], [55.7, 114.0], [55.8, 114.0], [55.9, 115.0], [56.0, 117.0], [56.1, 117.0], [56.2, 118.0], [56.3, 118.0], [56.4, 118.0], [56.5, 119.0], [56.6, 119.0], [56.7, 120.0], [56.8, 120.0], [56.9, 120.0], [57.0, 121.0], [57.1, 122.0], [57.2, 122.0], [57.3, 122.0], [57.4, 122.0], [57.5, 123.0], [57.6, 123.0], [57.7, 123.0], [57.8, 124.0], [57.9, 124.0], [58.0, 124.0], [58.1, 124.0], [58.2, 124.0], [58.3, 124.0], [58.4, 124.0], [58.5, 125.0], [58.6, 125.0], [58.7, 126.0], [58.8, 126.0], [58.9, 126.0], [59.0, 127.0], [59.1, 127.0], [59.2, 127.0], [59.3, 127.0], [59.4, 127.0], [59.5, 128.0], [59.6, 130.0], [59.7, 130.0], [59.8, 130.0], [59.9, 130.0], [60.0, 131.0], [60.1, 131.0], [60.2, 132.0], [60.3, 132.0], [60.4, 133.0], [60.5, 133.0], [60.6, 133.0], [60.7, 133.0], [60.8, 133.0], [60.9, 133.0], [61.0, 134.0], [61.1, 134.0], [61.2, 134.0], [61.3, 135.0], [61.4, 135.0], [61.5, 135.0], [61.6, 135.0], [61.7, 136.0], [61.8, 136.0], [61.9, 136.0], [62.0, 137.0], [62.1, 137.0], [62.2, 137.0], [62.3, 137.0], [62.4, 138.0], [62.5, 138.0], [62.6, 138.0], [62.7, 138.0], [62.8, 138.0], [62.9, 138.0], [63.0, 140.0], [63.1, 140.0], [63.2, 144.0], [63.3, 144.0], [63.4, 144.0], [63.5, 145.0], [63.6, 145.0], [63.7, 146.0], [63.8, 146.0], [63.9, 147.0], [64.0, 147.0], [64.1, 147.0], [64.2, 149.0], [64.3, 149.0], [64.4, 150.0], [64.5, 150.0], [64.6, 150.0], [64.7, 151.0], [64.8, 151.0], [64.9, 151.0], [65.0, 151.0], [65.1, 151.0], [65.2, 152.0], [65.3, 152.0], [65.4, 152.0], [65.5, 152.0], [65.6, 152.0], [65.7, 153.0], [65.8, 153.0], [65.9, 157.0], [66.0, 157.0], [66.1, 157.0], [66.2, 157.0], [66.3, 157.0], [66.4, 158.0], [66.5, 158.0], [66.6, 158.0], [66.7, 160.0], [66.8, 160.0], [66.9, 161.0], [67.0, 161.0], [67.1, 161.0], [67.2, 161.0], [67.3, 161.0], [67.4, 161.0], [67.5, 162.0], [67.6, 163.0], [67.7, 164.0], [67.8, 167.0], [67.9, 167.0], [68.0, 168.0], [68.1, 168.0], [68.2, 168.0], [68.3, 169.0], [68.4, 170.0], [68.5, 170.0], [68.6, 171.0], [68.7, 171.0], [68.8, 171.0], [68.9, 171.0], [69.0, 172.0], [69.1, 172.0], [69.2, 173.0], [69.3, 174.0], [69.4, 175.0], [69.5, 175.0], [69.6, 176.0], [69.7, 177.0], [69.8, 177.0], [69.9, 177.0], [70.0, 178.0], [70.1, 178.0], [70.2, 180.0], [70.3, 180.0], [70.4, 182.0], [70.5, 182.0], [70.6, 182.0], [70.7, 183.0], [70.8, 183.0], [70.9, 183.0], [71.0, 183.0], [71.1, 184.0], [71.2, 185.0], [71.3, 185.0], [71.4, 186.0], [71.5, 186.0], [71.6, 186.0], [71.7, 187.0], [71.8, 187.0], [71.9, 188.0], [72.0, 188.0], [72.1, 188.0], [72.2, 188.0], [72.3, 188.0], [72.4, 188.0], [72.5, 188.0], [72.6, 188.0], [72.7, 189.0], [72.8, 189.0], [72.9, 189.0], [73.0, 191.0], [73.1, 191.0], [73.2, 192.0], [73.3, 192.0], [73.4, 194.0], [73.5, 195.0], [73.6, 196.0], [73.7, 196.0], [73.8, 196.0], [73.9, 196.0], [74.0, 197.0], [74.1, 197.0], [74.2, 197.0], [74.3, 198.0], [74.4, 198.0], [74.5, 198.0], [74.6, 198.0], [74.7, 198.0], [74.8, 199.0], [74.9, 199.0], [75.0, 199.0], [75.1, 199.0], [75.2, 199.0], [75.3, 199.0], [75.4, 200.0], [75.5, 200.0], [75.6, 200.0], [75.7, 200.0], [75.8, 200.0], [75.9, 200.0], [76.0, 200.0], [76.1, 201.0], [76.2, 202.0], [76.3, 203.0], [76.4, 203.0], [76.5, 204.0], [76.6, 204.0], [76.7, 204.0], [76.8, 205.0], [76.9, 205.0], [77.0, 207.0], [77.1, 207.0], [77.2, 208.0], [77.3, 208.0], [77.4, 209.0], [77.5, 210.0], [77.6, 211.0], [77.7, 212.0], [77.8, 212.0], [77.9, 213.0], [78.0, 213.0], [78.1, 213.0], [78.2, 213.0], [78.3, 213.0], [78.4, 214.0], [78.5, 214.0], [78.6, 214.0], [78.7, 215.0], [78.8, 215.0], [78.9, 216.0], [79.0, 216.0], [79.1, 217.0], [79.2, 217.0], [79.3, 219.0], [79.4, 220.0], [79.5, 220.0], [79.6, 221.0], [79.7, 221.0], [79.8, 222.0], [79.9, 222.0], [80.0, 222.0], [80.1, 223.0], [80.2, 223.0], [80.3, 223.0], [80.4, 224.0], [80.5, 224.0], [80.6, 224.0], [80.7, 224.0], [80.8, 224.0], [80.9, 226.0], [81.0, 226.0], [81.1, 227.0], [81.2, 227.0], [81.3, 228.0], [81.4, 228.0], [81.5, 228.0], [81.6, 228.0], [81.7, 228.0], [81.8, 229.0], [81.9, 229.0], [82.0, 229.0], [82.1, 229.0], [82.2, 229.0], [82.3, 229.0], [82.4, 230.0], [82.5, 230.0], [82.6, 230.0], [82.7, 230.0], [82.8, 231.0], [82.9, 231.0], [83.0, 232.0], [83.1, 233.0], [83.2, 233.0], [83.3, 233.0], [83.4, 234.0], [83.5, 235.0], [83.6, 235.0], [83.7, 236.0], [83.8, 236.0], [83.9, 236.0], [84.0, 236.0], [84.1, 236.0], [84.2, 236.0], [84.3, 236.0], [84.4, 237.0], [84.5, 237.0], [84.6, 237.0], [84.7, 237.0], [84.8, 237.0], [84.9, 238.0], [85.0, 238.0], [85.1, 238.0], [85.2, 239.0], [85.3, 240.0], [85.4, 240.0], [85.5, 241.0], [85.6, 241.0], [85.7, 242.0], [85.8, 242.0], [85.9, 242.0], [86.0, 242.0], [86.1, 242.0], [86.2, 242.0], [86.3, 242.0], [86.4, 243.0], [86.5, 243.0], [86.6, 243.0], [86.7, 243.0], [86.8, 244.0], [86.9, 244.0], [87.0, 246.0], [87.1, 247.0], [87.2, 248.0], [87.3, 248.0], [87.4, 251.0], [87.5, 252.0], [87.6, 253.0], [87.7, 253.0], [87.8, 254.0], [87.9, 254.0], [88.0, 255.0], [88.1, 257.0], [88.2, 257.0], [88.3, 258.0], [88.4, 259.0], [88.5, 259.0], [88.6, 259.0], [88.7, 260.0], [88.8, 260.0], [88.9, 263.0], [89.0, 265.0], [89.1, 265.0], [89.2, 266.0], [89.3, 266.0], [89.4, 268.0], [89.5, 268.0], [89.6, 268.0], [89.7, 269.0], [89.8, 271.0], [89.9, 273.0], [90.0, 273.0], [90.1, 273.0], [90.2, 275.0], [90.3, 275.0], [90.4, 277.0], [90.5, 281.0], [90.6, 282.0], [90.7, 283.0], [90.8, 284.0], [90.9, 285.0], [91.0, 285.0], [91.1, 285.0], [91.2, 287.0], [91.3, 287.0], [91.4, 289.0], [91.5, 291.0], [91.6, 292.0], [91.7, 292.0], [91.8, 293.0], [91.9, 294.0], [92.0, 296.0], [92.1, 297.0], [92.2, 297.0], [92.3, 298.0], [92.4, 298.0], [92.5, 299.0], [92.6, 299.0], [92.7, 302.0], [92.8, 304.0], [92.9, 304.0], [93.0, 305.0], [93.1, 305.0], [93.2, 306.0], [93.3, 307.0], [93.4, 307.0], [93.5, 307.0], [93.6, 308.0], [93.7, 308.0], [93.8, 308.0], [93.9, 308.0], [94.0, 308.0], [94.1, 308.0], [94.2, 309.0], [94.3, 310.0], [94.4, 311.0], [94.5, 313.0], [94.6, 315.0], [94.7, 316.0], [94.8, 316.0], [94.9, 317.0], [95.0, 317.0], [95.1, 317.0], [95.2, 318.0], [95.3, 319.0], [95.4, 319.0], [95.5, 320.0], [95.6, 320.0], [95.7, 320.0], [95.8, 321.0], [95.9, 321.0], [96.0, 322.0], [96.1, 324.0], [96.2, 324.0], [96.3, 326.0], [96.4, 331.0], [96.5, 332.0], [96.6, 333.0], [96.7, 334.0], [96.8, 334.0], [96.9, 334.0], [97.0, 334.0], [97.1, 334.0], [97.2, 335.0], [97.3, 337.0], [97.4, 337.0], [97.5, 341.0], [97.6, 341.0], [97.7, 341.0], [97.8, 342.0], [97.9, 344.0], [98.0, 355.0], [98.1, 365.0], [98.2, 368.0], [98.3, 409.0], [98.4, 434.0], [98.5, 442.0], [98.6, 462.0], [98.7, 465.0], [98.8, 491.0], [98.9, 498.0], [99.0, 506.0], [99.1, 507.0], [99.2, 507.0], [99.3, 507.0], [99.4, 508.0], [99.5, 512.0], [99.6, 515.0], [99.7, 556.0], [99.8, 585.0], [99.9, 681.0]], "isOverall": false, "label": "JavaRMI", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 499.0, "series": [{"data": [[0.0, 499.0], [300.0, 56.0], [600.0, 1.0], [100.0, 255.0], [200.0, 173.0], [400.0, 7.0], [500.0, 9.0]], "isOverall": false, "label": "JavaRMI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 990.0, "series": [{"data": [[0.0, 990.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 187.82200000000006, "minX": 1.74088464E12, "maxY": 187.82200000000006, "series": [{"data": [[1.74088464E12, 187.82200000000006]], "isOverall": false, "label": "5 concerrent Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74088464E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 24.0, "minX": 1.0, "maxY": 585.0, "series": [{"data": [[2.0, 194.0], [3.0, 268.0], [4.0, 277.0], [5.0, 111.0], [13.0, 111.25], [14.0, 120.0], [21.0, 556.0], [22.0, 120.85714285714285], [23.0, 122.0], [24.0, 121.0], [25.0, 136.0], [26.0, 132.0], [27.0, 147.0], [29.0, 127.0], [33.0, 135.0], [35.0, 147.0], [37.0, 144.0], [36.0, 145.0], [41.0, 171.0], [40.0, 177.0], [43.0, 152.0], [42.0, 188.0], [44.0, 169.0], [50.0, 224.0], [53.0, 199.0], [52.0, 261.5], [54.0, 198.0], [57.0, 197.66666666666666], [59.0, 196.0], [58.0, 207.0], [60.0, 512.0], [67.0, 58.0], [64.0, 321.75], [69.0, 507.0], [68.0, 508.0], [73.0, 175.0], [91.0, 227.0], [90.0, 498.0], [89.0, 223.00000000000003], [93.0, 259.0], [92.0, 226.0], [98.0, 218.8], [103.0, 242.0], [102.0, 185.25], [105.0, 253.0], [104.0, 491.0], [111.0, 236.0], [110.0, 231.0], [109.0, 251.0], [115.0, 29.0], [114.0, 244.0], [113.0, 32.0], [112.0, 247.0], [118.0, 220.0], [117.0, 242.0], [116.0, 221.0], [134.0, 24.0], [131.0, 96.46153846153847], [143.0, 27.0], [141.0, 99.33333333333334], [140.0, 89.11111111111111], [151.0, 43.0], [148.0, 58.6], [147.0, 62.833333333333336], [149.0, 103.0], [146.0, 37.9], [150.0, 38.42857142857142], [144.0, 38.5], [145.0, 122.83333333333333], [158.0, 42.0], [157.0, 69.25], [156.0, 46.57142857142857], [155.0, 158.33333333333334], [153.0, 41.5], [154.0, 30.0], [152.0, 115.5], [167.0, 66.67741935483873], [165.0, 166.5], [164.0, 154.33333333333334], [163.0, 54.833333333333336], [166.0, 36.0], [162.0, 124.17647058823532], [161.0, 75.0], [160.0, 86.33333333333334], [174.0, 83.92307692307692], [170.0, 96.0], [172.0, 113.28571428571428], [171.0, 72.59090909090908], [169.0, 90.44444444444444], [173.0, 71.75], [175.0, 123.57142857142857], [168.0, 65.8], [181.0, 173.0], [182.0, 196.3571428571429], [176.0, 120.22222222222224], [178.0, 79.71428571428571], [180.0, 72.83333333333333], [179.0, 124.55555555555556], [183.0, 74.0], [190.0, 153.7857142857143], [188.0, 146.42857142857144], [187.0, 242.0], [186.0, 198.0], [185.0, 261.0], [184.0, 120.33333333333333], [189.0, 182.0], [199.0, 137.8125], [198.0, 123.25], [197.0, 167.0], [196.0, 145.86666666666667], [194.0, 162.7], [193.0, 170.16666666666669], [192.0, 304.0], [195.0, 122.33333333333334], [200.0, 176.6], [201.0, 83.66666666666667], [202.0, 131.25], [206.0, 182.9090909090909], [205.0, 210.125], [204.0, 151.4], [213.0, 178.0], [214.0, 139.33333333333331], [220.0, 31.6], [219.0, 29.75], [223.0, 194.0], [222.0, 106.0], [226.0, 40.0], [230.0, 206.5], [228.0, 333.0], [227.0, 189.0], [239.0, 91.0], [236.0, 87.0], [234.0, 202.6], [233.0, 126.8], [238.0, 119.6], [237.0, 161.0], [235.0, 74.0], [243.0, 128.38888888888889], [247.0, 135.5], [240.0, 129.94736842105263], [245.0, 147.5641025641026], [244.0, 78.33333333333333], [242.0, 86.0], [246.0, 158.33333333333334], [241.0, 73.24999999999999], [248.0, 105.27272727272728], [250.0, 129.85714285714286], [249.0, 126.9375], [252.0, 124.56410256410255], [251.0, 133.53333333333333], [255.0, 198.47058823529412], [254.0, 157.0], [253.0, 251.0], [257.0, 158.0], [261.0, 228.8], [258.0, 228.0], [256.0, 150.5], [259.0, 236.0], [266.0, 213.2], [267.0, 79.0], [264.0, 233.25], [271.0, 186.0], [268.0, 187.33333333333331], [265.0, 151.0], [262.0, 249.6], [260.0, 119.0], [272.0, 145.4], [1.0, 585.0]], "isOverall": false, "label": "JavaRMI", "isController": false}, {"data": [[187.82000000000025, 134.36300000000003]], "isOverall": false, "label": "JavaRMI-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 272.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.74088464E12, "maxY": 406.95, "series": [{"data": [[1.74088464E12, 406.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74088464E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74088464E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 134.36300000000003, "minX": 1.74088464E12, "maxY": 134.36300000000003, "series": [{"data": [[1.74088464E12, 134.36300000000003]], "isOverall": false, "label": "JavaRMI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74088464E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.74088464E12, "maxY": 4.9E-324, "series": [{"data": [[1.74088464E12, 0.0]], "isOverall": false, "label": "JavaRMI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74088464E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.74088464E12, "maxY": 4.9E-324, "series": [{"data": [[1.74088464E12, 0.0]], "isOverall": false, "label": "JavaRMI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74088464E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 17.0, "minX": 1.74088464E12, "maxY": 681.0, "series": [{"data": [[1.74088464E12, 681.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74088464E12, 17.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74088464E12, 273.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74088464E12, 505.9200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74088464E12, 100.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74088464E12, 317.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74088464E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 95.0, "minX": 288.0, "maxY": 105.0, "series": [{"data": [[288.0, 95.0], [712.0, 105.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 712.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 288.0, "maxY": 4.9E-324, "series": [{"data": [[288.0, 0.0], [712.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 712.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74088464E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74088464E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74088464E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74088464E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74088464E12, 16.666666666666668]], "isOverall": false, "label": "EMPTY_RES_CODE", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74088464E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74088464E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74088464E12, 16.666666666666668]], "isOverall": false, "label": "JavaRMI-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74088464E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74088464E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74088464E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74088464E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

