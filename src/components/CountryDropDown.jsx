import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'aq', value: 'aq', text: 'Antarctica' },
  { key: 'ag', value: 'ag', text: 'Antigua and Barbuda' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'be', value: 'be', text: 'Belgium' },  
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
  { key: 'bm', value: 'bbm', text: 'Bermuda' },
  { key: 'bt', value: 'bt', text: 'Bhutan' },
  { key: 'bq', value: 'bq', text: 'Bonaire, Sint Eustatius and Saba' },
  { key: 'bw', value: 'bw', text: 'Botswana' },
  { key: 'bv', value: 'bv', text: 'Bouvet Island' },
  { key: 'br', value: 'br', text: 'Brazil' },
  { key: 'io', value: 'io', text: 'British Indian Ocean Territory'},
  { key: 'bn', value: 'bn', text: 'Brunei Darussalam' },
  { key: 'bf', value: 'bf', text: 'Burkina Faso' },
  { key: 'bi', value: 'bi', text: 'Burundi' },
  { key: 'kh', value: 'kh', text: 'Cambodia' },
  { key: 'cm', value: 'cm', text: 'Cameroon' },
  { key: 'ca', value: 'ca', text: 'Canada' },
  { key: 'cv', value: 'cv', text: 'Cape Verde' },
  { key: 'ky', value: 'ky', text: 'Cayman Islands' },
  { key: 'cf', value: 'cf', text: 'Central African Republic' },
  { key: 'td', value: 'td', text: 'Chad' },
  { key: 'cl', value: 'cl', text: 'Chile' },
  { key: 'cx', value: 'cx', text: 'Christmas Island' },
  { key: 'cc', value: 'cc', text: 'Cocos (Keeling) Islands' },
  { key: 'co', value: 'co', text: 'Colombia' },
  { key: 'km', value: 'km', text: 'Comoros' },
  { key: 'ck', value: 'ck', text: 'Cook Islands' },
  { key: 'cr', value: 'cr', text: 'Costa Rica' },
  { key: 'cw', value: 'cw', text: 'Curacao' },
  { key: 'cy', value: 'cy', text: 'Cyprus' },
  { key: 'cz', value: 'cz', text: 'Czech Republic' },
  { key: 'dk', value: 'dk', text: 'Denmark' },
  { key: 'dj', value: 'dj', text: 'Djibouti' },
  { key: 'dm', value: 'dm', text: 'Dominica' },
  { key: 'do', value: 'do', text: 'Dominican Republic' },
  { key: 'ec', value: 'ec', text: 'Ecuador' },
  { key: 'vc', value: 'vc', text: 'El Salvador' },
  { key: 'qg', value: 'qg', text: 'Equatorial Guinea' },
  { key: 'er', value: 'er', text: 'Eritrea' },
  { key: 'ee', value: 'ee', text: 'Estonia' },
  { key: 'et', value: 'et', text: 'Ethiopia' },
  { key: 'fk', value: 'fk', text: 'Falkland Islands (Malvinas)' },
  { key: 'fo', value: 'fo', text: 'Faroe Islands' },
  { key: 'fj', value: 'fj', text: 'Fiji' },
  { key: 'fi', value: 'fi', text: 'Finland' },
  { key: 'fr', value: 'fr', text: 'France' },
  { key: 'gf', value: 'gf', text: 'French Guiana' },
  { key: 'pf', value: 'pf', text: 'French Polynesia' },
  { key: 'tf', value: 'tf', text: 'French Southern Territories' },
  { key: 'ga', value: 'ga', text: 'Gabon' },
  { key: 'gm', value: 'gm', text: 'Gambia' },
  { key: 'ge', value: 'ge', text: 'Georgia' },
  { key: 'de', value: 'de', text: 'Germany' },
  { key: 'gh', value: 'gh', text: 'Ghana' },

]

const DropdownCountry = () => (
  <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownCountry