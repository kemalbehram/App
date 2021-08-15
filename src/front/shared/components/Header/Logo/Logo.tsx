import React, { Component, Fragment } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import { Link, withRouter } from 'react-router-dom'
import { links, constants } from 'helpers'

import CSSModules from 'react-css-modules'
import styles from './Logo.scss'

import ThemeTooltip from '../../ui/Tooltip/ThemeTooltip'

import BubbaLogo from 'shared/images/logo/Bubba-BUBBA.svg';

const isDark = localStorage.getItem(constants.localStorage.isDark)
@withRouter
@CSSModules(styles, { allowMultiple: true })
class Logo extends Component<any, {}> {

  render() {
    const {
      intl: { locale },
    } = this.props;

    const isCustomLogoLink = window.LOGO_REDIRECT_LINK as boolean
    const customLogoLink = window.LOGO_REDIRECT_LINK

    const imgSrc = BubbaLogo

    const imgAlt = window.location.hostname

    const goToUrl = isCustomLogoLink ? customLogoLink : links.home

    return (
      <div styleName="logoWrapper">
        {isCustomLogoLink ?
          <a href={goToUrl}>
            <img src={imgSrc} alt={imgAlt} />
          </a>
          :
          <Fragment>
            <Link to={goToUrl} data-tip data-for="logo">
              <img src={imgSrc} alt={imgAlt} />
            </Link>
            <ThemeTooltip id="logo" effect="solid" place="bottom">
              <FormattedMessage id="logo29" defaultMessage="Go Home" />
            </ThemeTooltip>
          </Fragment>
        }
      </div>
    );
  }
}

export default injectIntl(Logo)
