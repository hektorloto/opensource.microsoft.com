//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export default function Releasing() {
  return (
    <>
      <div className="pb-6">
        <h3 className="h3 mb-4">Working in the open</h3>
        <p>
          Teams at Microsoft are encouraged to work in the open and are provided with{' '}
          straightforward guidance on when and how to release code to the world.
        </p>
        <p><em>This is a summary of how we approach releasing open source at Microsoft.</em></p>
        <h5 className="h5">Approval process</h5>
        <p>
          All open sourcing of Microsoft source code and content (e.g., text, images, fonts, data) must {' '}
          be registered with your business and legal team using the workflow outlined in the release documentation.
        </p>
        <p>
          In other cases, you may need to work with your management and legal teams to review the business case, success {' '}
          plan, and IP management strategy around your proposal.
        </p>
        <h5 className="h5">Location</h5>
        <p>
          All Microsoft open source code should be released on GitHub in one of Microsoft's{' '}
          GitHub orgs. The vast majority of projects will go in the official company org.
        </p>
        <p>
          Where we are participating in existing community that does not work on GitHub, your {' '}
          code should go in the natural location for that community.
        </p>
        <p>
          If you do not plan on releasing your code to the public, an InnerSource location provided by{' '}
          the One Engineering System team is a better option for private engineering work: for example,{' '}
          using Azure Repos.
        </p>
        <h5 className="h5">Licensing</h5>
        <p>
          Microsoft open source code should be released under the MIT license absent a {' '}
          compelling reason to do otherwise.
        </p>
        <h5 className="h5">Contributions</h5>
        <p>
          All contributions to a Microsoft-managed open source project must use the {' '}
          Microsoft Contributor License Agreement (CLA). The CLA must be agreed to {' '}
          by all contributors who are not Microsoft Full-time Employees (FTE) or {' '}
          interns prior to the contribution being merged into the project codebase.
        </p>
        <p>
          The CLA requirement is waived in certain smaller contribution cases.
        </p>
        <h4 className="h4">Release checklist</h4>
        <p>
          The following steps should be taken to release and maintain your open source project:
        </p>
        <ul className="ul mt-4">
          <li>
            <b>Create your repo and register your release:</b>{' '}
            The "new repo wizard" contains a form of questions regarding your release. Start there, or,{' '}
            if you created the repo directly on GitHub, you'll receive a link by e-mail to complete the wizard{' '}
            and unlock your repo.<br /><br />
            If a business and legal review is needed, the wizard will trigger that review process at the end.
          </li>
          <li>
            <b>Include the following in your repo root directory. The default template may have placed these files for you as a start:</b>
            <ul className="ul mt-4">
                <li><strong>A README.md file</strong> describing the purpose and state of the repository, with a link to the Microsoft Open Source Code of Conduct and a description of any third-party code included in the repository. A good README file is often critical to project success.</li>
                <li><strong>A LICENSE file</strong> with an OSI approved license text.</li>
                <li><strong>A CONTRIBUTING.md file</strong> with instructions on contributing to the project that must include at least the minimum required information. That minimum information includes that contributions to Microsoft projects are subject to our Contributor License Agreement. Additionally, consider providing technical guidance like build instructions, coding conventions, or a project roadmap in the CONTRIBUTING.md file.</li>
            </ul>
          </li>
          <li>
            <b>Prepare the code for release:</b>
            <ul className="ul mt-4">
              <li>
                <strong>Code license: </strong>
                Include the language-appropriate license comment at the head of each source file.
              </li>
              <li>
                <strong>Remove sensitive assets:</strong>
                <ul className="ul mt-4">
                  <li>
                    {`
                    Remove any reference in the code to internal or confidential information, 
                    including internal paths, tools, codenames, proprietary fonts, internal 
                    telemetry and email aliases.
                    `}
                  </li>
                  <li>
                    {`
                    Prepare the code and commit history for publication, including running certain 
                    internal corporate tools for this purpose.
                    `}
                  </li>
                </ul>
              </li>
              <li>
                <strong>Third-party Open Source: </strong>{' '}
                {`
                If your repository includes third-party OSS, describe its use and its 
                license in a NOTICE file. Your open source attorney team may have additional details on this process for you.
                `}
              </li>
            </ul>
          </li>
          <li>
            <b>Publish the code:</b>{' '}
            {`
            Once your registration and review process is complete, make your GitHub repository 
            public using the Settings pane on GitHub.
            `}
          </li>
          <li>
            <b>Going forward:</b>
            Ensure:
            <ul className="ul mt-4">
              <li>
                <strong>Further Microsoft Contributions: </strong>{' '}
                {`
                You must file a contribution request if either 
                the feature you are adding is outside the scope of your original release request OR
                you are adding non-open source Microsoft code that your team did not author.
                `}
              </li>
              <li>
                <strong>Staffing: </strong> {' '}
                {`
                Ensure at least one team member is committed to 
                managing community interactions merging pull requests, giving feedback, releasing new versions.
                `}
              </li>
              <li>
                <strong>Buildable & Runnable:</strong> {' '}
                {`
                Make sure that your project is easy to build and 
                has binaries available is key to attracting contributors.
                `}
              </li>
              <li>
                <strong>Foster your community: </strong> Look for ways to continue engagement with potential contributors.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
