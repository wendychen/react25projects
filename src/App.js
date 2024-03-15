import './App.css';

import Accordion from "./components/accordion";
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TicTacToe from "./components/tic-tact-toe";
import ModalTest from "./components/custom-modal-popup/modal-test";
import SearchAutocomplete from "./components/search-autocomplete-with-api";

import ImageSlider from './components/image-slider';
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from './components/load-more-data';

import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';

import ScrollIndicator from './components/scroll-indicator';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom/scroll-to-section';

import TabTest from "./components/custom-tabs/tab-test";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import GithubProfileFinder from "./components/github-profile-finder";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";

function App() {
  return (
    <>
      <RandomColor />

      {/* Accordion Component */}
      <Accordion />

      {/* Star rating component */}
      <StarRating noOfStars = {10}/>

      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'4'} />
      <LoadMoreData />
      <TreeView menus={menus} />

      {/* QR code generator */}
      <QRCodeGenerator />

      {/* light and dark theme swtich */}
      <LightDarkMode />
      
      {/* Scroll indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      
      {/* Custom tabs component */}
      <TabTest />

      {/* useFetch - Custom Hook Test*/}
      <UseFetchHookTest/>

      {/* Use Onclick Outside Hook Test */}
      <UseOnclickOutsideTest/>

      {/* Use Window Resize Hook Test */}
      <UseWindowResizeTest/>

      {/* Tic tac toe */}
      <TicTacToe/>

      {/* Github profile finder */}
      <GithubProfileFinder/>

      {/* Feature Flag IMplementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      {/* Custom Modal Component */}
      <ModalTest />

      {/* Search Autocomplete */}
      <SearchAutocomplete />

      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndBottom />

    </>
  );
}

export default App;
