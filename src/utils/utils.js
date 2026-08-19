export function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


export function OtpHTML(
    otp,
    {
        companyName = "Your Company",
        logoUrl = "",
        supportEmail = "",
        expiryMinutes = 10,
        brandColor = "#4F46E5",
        year = new Date().getFullYear(),
    } = {}
) {
    /**
     * Escape dynamic values before inserting them into HTML.
     */
    const escapeHTML = (value) =>
        String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    const safeOtp = escapeHTML(otp);
    const safeCompanyName = escapeHTML(companyName);
    const safeSupportEmail = escapeHTML(supportEmail);
    const safeBrandColor = escapeHTML(brandColor);

    const logo = logoUrl
        ? `
            <img
                src="${escapeHTML(logoUrl)}"
                width="48"
                height="48"
                alt="${safeCompanyName}"
                style="
                    display:block;
                    width:48px;
                    height:48px;
                    border:0;
                    border-radius:12px;
                    margin:0 auto;
                "
            />
        `
        : `
            <div
                style="
                    width:48px;
                    height:48px;
                    margin:0 auto;
                    border-radius:12px;
                    background-color:rgba(255,255,255,0.14);
                    color:#ffffff;
                    font-family:Arial,Helvetica,sans-serif;
                    font-size:22px;
                    font-weight:700;
                    line-height:48px;
                    text-align:center;
                "
            >
                ✓
            </div>
        `;

    const supportSection = supportEmail
        ? `
            <tr>
                <td
                    align="center"
                    style="
                        padding:8px 24px 0 24px;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:12px;
                        line-height:18px;
                        color:#98A2B3;
                    "
                >
                    Need help?
                    <a
                        href="mailto:${safeSupportEmail}"
                        style="
                            color:${safeBrandColor};
                            text-decoration:none;
                            font-weight:600;
                        "
                    >
                        Contact support
                    </a>
                </td>
            </tr>
        `
        : "";

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge"
    >

    <meta
        name="x-apple-disable-message-reformatting"
    >

    <meta
        name="format-detection"
        content="telephone=no,date=no,address=no,email=no,url=no"
    >

    <title>Verification code</title>

    <style>
        html,
        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
        }

        body {
            background-color: #F4F6F8;
            color: #101828;
            font-family:
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Helvetica,
                Arial,
                sans-serif;
            -webkit-font-smoothing: antialiased;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto;
        }

        img {
            border: 0;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        a {
            text-decoration: none;
        }

        .email-wrapper {
            width: 100%;
            background-color: #F4F6F8;
        }

        .email-card {
            width: 100%;
            max-width: 560px;
            background-color: #FFFFFF;
            border-radius: 16px;
        }

        .otp-code {
            font-family:
                "SFMono-Regular",
                Consolas,
                "Liberation Mono",
                Menlo,
                monospace;

            font-size: 34px;
            line-height: 42px;
            font-weight: 700;
            letter-spacing: 8px;
            color: ${safeBrandColor};
            white-space: nowrap;
        }

        .hide-mobile {
            display: block;
        }

        @media screen and (max-width: 600px) {
            .outer-padding {
                padding-left: 12px !important;
                padding-right: 12px !important;
            }

            .email-card {
                border-radius: 12px !important;
            }

            .content-padding {
                padding: 32px 22px !important;
            }

            .header-padding {
                padding: 30px 22px !important;
            }

            .otp-code {
                font-size: 28px !important;
                line-height: 36px !important;
                letter-spacing: 6px !important;
            }
        }
    </style>
</head>

<body>

    <!-- Preheader -->
    <div
        style="
            display:none;
            max-height:0;
            overflow:hidden;
            opacity:0;
            color:transparent;
            mso-hide:all;
            font-size:1px;
            line-height:1px;
        "
    >
        Your ${safeCompanyName} verification code is ready.
    </div>

    <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        class="email-wrapper"
    >
        <tr>
            <td
                align="center"
                class="outer-padding"
                style="padding:40px 20px;"
            >

                <!-- Main Card -->
                <table
                    role="presentation"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    class="email-card"
                    style="
                        max-width:560px;
                        background-color:#FFFFFF;
                        border-radius:16px;
                        overflow:hidden;
                    "
                >

                    <!-- Header -->
                    <tr>
                        <td
                            align="center"
                            class="header-padding"
                            style="
                                padding:34px 30px;
                                background-color:${safeBrandColor};
                                background-image:
                                    linear-gradient(
                                        135deg,
                                        ${safeBrandColor} 0%,
                                        #6D28D9 100%
                                    );
                            "
                        >

                            ${logo}

                            <div
                                style="
                                    height:14px;
                                    line-height:14px;
                                    font-size:14px;
                                "
                            >
                                &nbsp;
                            </div>

                            <div
                                style="
                                    font-family:Arial,Helvetica,sans-serif;
                                    font-size:22px;
                                    line-height:30px;
                                    font-weight:700;
                                    color:#FFFFFF;
                                "
                            >
                                Verify your account
                            </div>

                            <div
                                style="
                                    margin-top:7px;
                                    font-family:Arial,Helvetica,sans-serif;
                                    font-size:14px;
                                    line-height:21px;
                                    color:rgba(255,255,255,0.82);
                                "
                            >
                                A one-time verification code was requested
                            </div>

                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td
                            class="content-padding"
                            style="
                                padding:40px 38px 34px 38px;
                            "
                        >

                            <table
                                role="presentation"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                            >

                                <!-- Greeting -->
                                <tr>
                                    <td
                                        align="center"
                                        style="
                                            font-family:Arial,Helvetica,sans-serif;
                                            font-size:22px;
                                            line-height:30px;
                                            font-weight:700;
                                            color:#101828;
                                        "
                                    >
                                        Your verification code
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        align="center"
                                        style="
                                            padding-top:10px;
                                            font-family:Arial,Helvetica,sans-serif;
                                            font-size:14px;
                                            line-height:22px;
                                            color:#667085;
                                        "
                                    >
                                        Use the code below to complete your
                                        verification. For your security,
                                        do not share this code with anyone.
                                    </td>
                                </tr>

                                <!-- Spacer -->
                                <tr>
                                    <td
                                        style="
                                            height:26px;
                                            line-height:26px;
                                            font-size:26px;
                                        "
                                    >
                                        &nbsp;
                                    </td>
                                </tr>

                                <!-- OTP Box -->
                                <tr>
                                    <td align="center">

                                        <table
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            width="100%"
                                            style="
                                                background-color:#F8F7FF;
                                                border:1px solid #E5E1FF;
                                                border-radius:12px;
                                            "
                                        >
                                            <tr>
                                                <td
                                                    align="center"
                                                    style="
                                                        padding:24px 16px 20px 16px;
                                                    "
                                                >

                                                    <div
                                                        class="otp-code"
                                                    >
                                                        ${safeOtp}
                                                    </div>

                                                    <div
                                                        style="
                                                            padding-top:10px;
                                                            font-family:Arial,Helvetica,sans-serif;
                                                            font-size:12px;
                                                            line-height:18px;
                                                            color:#667085;
                                                        "
                                                    >
                                                        Expires in
                                                        ${escapeHTML(expiryMinutes)}
                                                        minutes
                                                    </div>

                                                </td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>

                                <!-- Security Notice -->
                                <tr>
                                    <td
                                        style="
                                            padding-top:28px;
                                        "
                                    >

                                        <table
                                            role="presentation"
                                            width="100%"
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            style="
                                                background-color:#FFFAEB;
                                                border:1px solid #FEDF89;
                                                border-radius:10px;
                                            "
                                        >
                                            <tr>
                                                <td
                                                    style="
                                                        padding:15px 16px;
                                                    "
                                                >

                                                    <div
                                                        style="
                                                            font-family:Arial,Helvetica,sans-serif;
                                                            font-size:13px;
                                                            line-height:19px;
                                                            font-weight:700;
                                                            color:#92400E;
                                                        "
                                                    >
                                                        Security reminder
                                                    </div>

                                                    <div
                                                        style="
                                                            padding-top:4px;
                                                            font-family:Arial,Helvetica,sans-serif;
                                                            font-size:12px;
                                                            line-height:18px;
                                                            color:#92400E;
                                                        "
                                                    >
                                                        ${safeCompanyName}
                                                        will never ask you
                                                        for this verification
                                                        code by phone, email,
                                                        or chat.
                                                    </div>

                                                </td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>

                                <!-- Didn't request -->
                                <tr>
                                    <td
                                        align="center"
                                        style="
                                            padding-top:26px;
                                            font-family:Arial,Helvetica,sans-serif;
                                            font-size:12px;
                                            line-height:19px;
                                            color:#98A2B3;
                                        "
                                    >
                                        If you didn't request this code,
                                        you can safely ignore this email.
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td
                            style="
                                border-top:1px solid #EAECF0;
                                background-color:#FCFCFD;
                                padding:22px 24px 24px 24px;
                            "
                        >

                            <table
                                role="presentation"
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                            >

                                <tr>
                                    <td
                                        align="center"
                                        style="
                                            font-family:Arial,Helvetica,sans-serif;
                                            font-size:12px;
                                            line-height:18px;
                                            color:#98A2B3;
                                        "
                                    >
                                        © ${escapeHTML(year)}
                                        ${safeCompanyName}.
                                        All rights reserved.
                                    </td>
                                </tr>

                                ${supportSection}

                            </table>

                        </td>
                    </tr>

                </table>

                <!-- Small footer text outside card -->
                <table
                    role="presentation"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="max-width:560px;"
                >
                    <tr>
                        <td
                            align="center"
                            style="
                                padding:18px 20px 0 20px;
                                font-family:Arial,Helvetica,sans-serif;
                                font-size:11px;
                                line-height:17px;
                                color:#98A2B3;
                            "
                        >
                            This is an automated security email.
                            Please do not reply directly to this message.
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>
`;
}
